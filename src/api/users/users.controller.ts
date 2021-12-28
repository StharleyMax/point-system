import { Body, Controller, Get, Post } from '@nestjs/common';

import { UserRepository } from '../../database/repository/user.repository';
import { UsersService } from './users.service';

@Controller('api/v1/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async find(): Promise<UserRepository[]> {
    return this.usersService.find();
  }
}
