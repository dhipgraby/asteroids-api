import { Module } from '@nestjs/common';
import { FavoritesService } from './favorites.service';
import { FavoritesController } from './favorites.controller';
import { PrismaService } from 'lib/common/database/prisma.service';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from 'lib/common/auth/jwt.strategy';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: process.env.JWT_KEY,
      signOptions: { expiresIn: '20h' },
    })
  ],
  controllers: [FavoritesController],
  providers: [FavoritesService, PrismaService, JwtStrategy],
})
export class FavoritesModule { }
