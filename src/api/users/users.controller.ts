import { Body, Controller, Get, Post } from '@nestjs/common';

import { User } from 'src/database/entities/User.entity';

import { UsersService } from './users.service';

@Controller('api/v1/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async find(): Promise<User[]> {
    return this.usersService.find();
  }

  @Post()
  async create(@Body() body): Promise<User> {
    return this.usersService.create(body);
  }
}
