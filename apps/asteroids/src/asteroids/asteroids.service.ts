import { Injectable } from '@nestjs/common';
import { AsteroidDto } from './dto/create-asteroid.dto';
import { PrismaService } from 'lib/common/database/prisma.service';
import { Asteroids } from '@prisma/client';
import { getByDateQuery, getByIdQuery } from '../database/asteroids.queries';
import { GetByQueryType, SeachQueryType } from './dto/queries.dto';

@Injectable()
export class AsteroidsService {
  constructor(
    private prisma: PrismaService
  ) { }

  async updateDb(asteroids: AsteroidDto[]) {

    const result = await Promise.all(
      asteroids.map(async (asteroid: any) => {
        await this.prisma.asteroids.create({
          data: asteroid,
        })
      })
    )
    return result.length
  }

  async getBy(searchParams: GetByQueryType): Promise<Asteroids[]> {
    const query: SeachQueryType = getByDateQuery(searchParams)
    return this.prisma.asteroids.findMany(query);
  }

  async findAll(): Promise<Asteroids[]> {
    return this.prisma.asteroids.findMany();
  }

  async findOne(
    id: number
  ): Promise<Asteroids | null> {
    const query = getByIdQuery(id)
    return this.prisma.asteroids.findUnique(query);
  }

}
