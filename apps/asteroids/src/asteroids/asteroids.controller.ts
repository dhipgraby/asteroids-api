import { Controller, Get, Param } from '@nestjs/common';
import { AsteroidsService } from './asteroids.service';
import { allAsteroids } from 'apps/asteroids/data/asteroids.data';

@Controller('asteroids')
export class AsteroidsController {
  constructor(private readonly asteroidsService: AsteroidsService) { }

  @Get('update')
  updateAll() {
    return this.asteroidsService.updateDb(allAsteroids);
  }

  @Get('all')
  findAll() {
    return this.asteroidsService.findAll({});
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.asteroidsService.findOne({ id: Number(id) });
  }

}
