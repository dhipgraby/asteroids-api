import { Controller, Get, Param, Query, ValidationPipe } from '@nestjs/common';
import { AsteroidsService } from './asteroids.service';
import { allAsteroids } from 'apps/asteroids/data/asteroids.data';
import { GetByQueryType } from './dto/queries.dto';

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

  @Get('feed')
  getByDate(@Query(new ValidationPipe({ transform: true, validateCustomDecorators: true })) query: GetByQueryType) {
    const data: GetByQueryType = query;        
    return this.asteroidsService.findAll(data);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.asteroidsService.findOne({ id: Number(id) });
  }

}
