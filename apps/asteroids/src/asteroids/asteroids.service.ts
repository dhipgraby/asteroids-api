import { Injectable } from '@nestjs/common';
import { AsteroidDto } from './dto/create-asteroid.dto';
import { Prisma, PrismaClient } from '@prisma/client'
import { PrismaService } from 'lib/common/database/prisma.service';
import { Asteroids } from '@prisma/client';

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

  async findAll(params: {
    where?: Prisma.AsteroidsWhereInput;
    orderBy?: Prisma.AsteroidsOrderByWithRelationInput;
  }): Promise<Asteroids[]> {
    const { where, orderBy } = params;
    return this.prisma.asteroids.findMany({
      where,
      orderBy,
    });
  }

  async findOne(
    asteroidWhereUniqueInput: Prisma.AsteroidsWhereUniqueInput,
  ): Promise<Asteroids | null> {
    return this.prisma.asteroids.findUnique({
      where: asteroidWhereUniqueInput,
    });
  }

}
