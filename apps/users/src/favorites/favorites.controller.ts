import { Controller, Get, Post, Body, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { FavoritesService } from './favorites.service';
import { FavoriteDto } from './dto/create-favorite.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'lib/common/auth/jwt-auth.guard';

@ApiBearerAuth()
@ApiTags('favorites')
@UseGuards(JwtAuthGuard)
@Controller('favorites')
export class FavoritesController {
  constructor(private readonly favoritesService: FavoritesService) { }

  @Post('add')
  create(@Request() req, @Body() body: { id: number }) {

    const favoriteDto: FavoriteDto = {
      asteroid_id: body.id,
      user_id: req.user.id
    }

    return this.favoritesService.add(favoriteDto);
  }

  @Get()
  findAll() {
    return this.favoritesService.findAll();
  }

  @Delete(':id')
  remove(@Request() req, @Param('id') asteroid_id: number) {
    const user_id = req.user.id
    return this.favoritesService.remove({ asteroid_id, user_id });
  }

}
