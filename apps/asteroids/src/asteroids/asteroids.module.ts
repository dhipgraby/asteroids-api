import { Module } from '@nestjs/common';
import { AsteroidsService } from './asteroids.service';
import { AsteroidsController } from './asteroids.controller';
import { PrismaService } from 'lib/common/database/prisma.service';

@Module({
  controllers: [AsteroidsController],
  providers: [AsteroidsService, PrismaService],
})
export class AsteroidsModule { }
