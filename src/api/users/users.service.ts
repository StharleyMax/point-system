import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { hash } from 'bcrypt';
import { User } from 'src/database/entities/User.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  //find
  async find(): Promise<User[]> {
    return this.userRepository.find();
  }

  //create
  async create(body): Promise<User> {
    const { name, login, password } = body;

    const userExist = await this.userRepository.findOne({ login });

    if (userExist) {
      throw new BadRequestException(`User login ${login} already exists.`);
    }

    const password_hash = await hash(password, 8);

    const user = this.userRepository.create({
      name,
      login,
      password: password_hash,
    });

    return this.userRepository.save(user);
  }
}
