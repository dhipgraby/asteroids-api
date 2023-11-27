import { Controller, Get, Post, Body, UseGuards, Request } from '@nestjs/common';
import { UserService } from './users.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { JwtAuthGuard } from 'lib/common/auth/jwt-auth.guard';

@ApiBearerAuth()
@ApiTags('auth')
@Controller('auth')
export class UsersController {
  constructor(
    private readonly usersService: UserService
  ) { }

  @Post('signup')
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.signup(createUserDto);
  }

  @Post('login')
  login(@Body() loginUserDto: LoginUserDto) {
    return this.usersService.login(loginUserDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('user')
  findAll(@Request() req) {
    const user_id = req.user.id
    return this.usersService.findOne({ id: Number(user_id) });
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.usersService.findOne({ id: Number(id) });
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
  //   return this.usersService.update(+id, updateUserDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.usersService.deleteUser({ id: Number(id) });
  // }
}
