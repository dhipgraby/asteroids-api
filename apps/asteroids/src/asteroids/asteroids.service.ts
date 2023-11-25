import { Injectable } from '@nestjs/common';
import { AsteroidDto } from './dto/create-asteroid.dto';
import { Prisma } from '@prisma/client'
import { PrismaService } from 'lib/common/database/prisma.service';
import { Asteroids } from '@prisma/client';
import { getByDateQuery } from '../database/asteroids.queries';
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

  async findAll(searchParams: GetByQueryType): Promise<Asteroids[]> {

    const query: SeachQueryType = getByDateQuery(searchParams)

    return this.prisma.asteroids.findMany(query);
  }

  async findOne(
    asteroidWhereUniqueInput: Prisma.AsteroidsWhereUniqueInput,
  ): Promise<Asteroids | null> {
    return this.prisma.asteroids.findUnique({
      where: asteroidWhereUniqueInput,
    });
  }

}
