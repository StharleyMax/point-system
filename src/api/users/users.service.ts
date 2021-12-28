import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { UserRepository } from '../../database/repository/user.repository';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserRepository)
    private readonly userRepository: Repository<UserRepository>,
  ) { }

  //find
  async find(): Promise<UserRepository[]> {
    return this.userRepository.find();
  }
}
