import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { FavoritesModule } from './favorites/favorites.module';

@Module({
  imports: [FavoritesModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
