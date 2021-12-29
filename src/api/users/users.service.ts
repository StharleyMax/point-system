import { BadRequestException, Injectable } from '@nestjs/common';

import { hash } from 'bcrypt';
import { User } from 'src/database/entities/User.entity';
import { UsersRepository } from 'src/database/repository/user.repository';

@Injectable()
export class UsersService {
  constructor(
    private readonly usersRepository: UsersRepository
    ){}

  //find
  async find(): Promise<User[]> {
    return this.usersRepository.find();
  }


  //create
  async create(body): Promise<User> {
    const { name, cpf, password } = body;

    const userExist = await this.usersRepository.findOne(cpf);

    if (userExist) {
      throw new BadRequestException(`User CPF ${cpf} already exists.`);
    }

    const password_hash = await hash(password, 8);

    const user = this.usersRepository.create({
      name,
      cpf,
      password: password_hash,
    });

    return this.usersRepository.save(user);
  }
}
