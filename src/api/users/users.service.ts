import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { hash } from 'bcrypt';
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

  //create
  async create(body): Promise<UserRepository> {
    const { name, cpf, password } = body;

    const userExist = await this.userRepository.findOne({ cpf });

    if (userExist) {
      throw new BadRequestException(`User CPF ${cpf} already exists.`);
    }

    const password_hash = await hash(password, 8);

    const user = this.userRepository.create({
      name,
      cpf,
      password: password_hash,
    });

    await this.userRepository.save(user);

    return user;
  }
}
