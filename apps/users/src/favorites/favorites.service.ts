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

  async findAll(user_id: number) {
    const userFavorites = await this.prisma.favorites.findMany({
      where: {
        user_id
      },
      select: {
        asteroid_id: true
      }
    });

    if (userFavorites.length > 0) {
      const favorites = await Promise.all(userFavorites.map(async (el) => {
        const asteroid = await this.prisma.asteroids.findUnique({ where: { id: el.asteroid_id } });
        asteroid["favorite"] = true
        return asteroid;
      }));

      return favorites;
    } else {
      return [];
    }
  }

  async findOne(asteroid_id: number, user_id: number): Promise<FavoriteDto> {
    return this.prisma.favorites.findFirst({
      where: { user_id: Number(user_id), asteroid_id: Number(asteroid_id), }
    });
  }

  async remove({ asteroid_id, user_id }: FavoriteDto) {

    const asteroid = await this.findOne(asteroid_id, user_id)
    if (!asteroid) throw new HttpException('User asteroid not found', HttpStatus.NOT_FOUND)

    const deleted = await this.prisma.favorites.delete({ where: { id: Number(asteroid.id) } });
    if (deleted.id) {
      return {
        deleted: true
      }
    }
  }
}
