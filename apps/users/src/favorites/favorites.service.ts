import { Injectable } from '@nestjs/common';
import { CreateFavoriteDto } from './dto/create-favorite.dto';
import { PrismaService } from 'lib/common/database/prisma.service';

@Injectable()
export class FavoritesService {

  constructor(
    private prisma: PrismaService,
  ) { }

  async add(createFavoriteDto: CreateFavoriteDto) {
    return 'This action adds a new favorite';
  }

  async findAll() {
    return `This action returns all favorites`;
  }

  async remove(id: number) {
    return `This action removes a #${id} favorite`;
  }
}
