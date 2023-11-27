import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { FavoriteDto } from './dto/create-favorite.dto';
import { PrismaService } from 'lib/common/database/prisma.service';

@Injectable()
export class FavoritesService {

  constructor(
    private prisma: PrismaService,
  ) { }

  async add(favoriteDto: FavoriteDto) {
    const asteroid = await this.findOne(favoriteDto.asteroid_id, favoriteDto.user_id)
    if (asteroid) {
      return {
        exist: true
      }
    }

    return await this.prisma.favorites.create({
      data: favoriteDto,
    })
  }

  async findAll() {
    return this.prisma.favorites.findMany({
      select: {
        asteroid_id: true
      }
    });
  }

  async findOne(asteroid_id: number, user_id: number): Promise<FavoriteDto> {
    return this.prisma.favorites.findFirst({
      where: { user_id: Number(user_id), asteroid_id: Number(asteroid_id), }
    });
  }

  async remove({ asteroid_id, user_id }: FavoriteDto): Promise<FavoriteDto> {

    const asteroid = await this.findOne(asteroid_id, user_id)
    if (!asteroid) throw new HttpException('User asteroid not found', HttpStatus.NOT_FOUND)

    return this.prisma.favorites.delete({ where: { id: Number(asteroid.id) } });
  }
}
