import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { UserRepository } from '../../database/repository/user.repository';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserRepository)
    private readonly userRepository: Repository<UserRepository>,
  ) {}

  //find
  async find(): Promise<UserRepository[]> {
    return this.userRepository.find();
  }
}
