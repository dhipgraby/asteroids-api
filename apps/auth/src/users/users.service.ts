import { HttpException, } from '@nestjs/common/exceptions';
import { HttpStatus } from '@nestjs/common/enums';
import { Injectable } from '@nestjs/common';
import { User, Prisma } from '@prisma/client';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { hash, compare } from 'bcrypt'
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'lib/common/database/prisma.service';

@Injectable()
export class UserService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService
  ) { }

  async signup(userObject: CreateUserDto) {
    const { password, email, name } = userObject;

    const existingUser = await this.findAll({
      where: {
        OR: [
          {
            email: email,
          },
          {
            name: name,
          },
        ]
      },
    });

    if (existingUser.length) {
      throw new HttpException('User with the same email or name already exists', HttpStatus.FORBIDDEN);
    }

    const plainToHash = await hash(password, 10);
    userObject = { ...userObject, password: plainToHash };

    try {
      const newUser = await this.prisma.user.create({
        data: userObject,
      });

      if (newUser) {
        return {
          status: 200,
          message: "New user created"
        }
      }

    } catch (error) {
      throw new HttpException('Database error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async login(userLoginObject: LoginUserDto) {

    const { email, password } = userLoginObject

    const findUser = await this.prisma.user.findUnique({
      where: { email },
    });

    if (!findUser) throw new HttpException("USER_NOT_FOUND", HttpStatus.NOT_FOUND)

    const checkPassword = await compare(password, findUser.password)

    if (!checkPassword) throw new HttpException("PASSWORD_INVALID", HttpStatus.FORBIDDEN)

    const payload = { name: findUser.name, id: findUser.id }
    const token = this.jwtService.sign(payload)

    const data = {
      user: {
        name: findUser.name,
        email: findUser.email,
      },
      token
    }

    return data

  }

  async findOne(
    userWhereUniqueInput: Prisma.UserWhereUniqueInput,
  ) {
    const user = await this.prisma.user.findUnique({
      where: userWhereUniqueInput,
    });
    if (!user) throw new HttpException("USER NOT FOUND", HttpStatus.NOT_FOUND)
    return {
      name: user.name,
      email: user.email,
      status: 200
    }
  }

  async findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.UserWhereUniqueInput;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput;
  }): Promise<User[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.user.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async updateUser(params: {
    where: Prisma.UserWhereUniqueInput;
    data: Prisma.UserUpdateInput;
  }): Promise<User> {
    const { where, data } = params;
    return this.prisma.user.update({
      data,
      where,
    });
  }

  async deleteUser(where: Prisma.UserWhereUniqueInput): Promise<User> {
    return this.prisma.user.delete({
      where,
    });
  }

}