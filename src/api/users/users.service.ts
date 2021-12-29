import { BadRequestException, Injectable } from '@nestjs/common';

import { hash } from 'bcrypt';
import { UsersRepository } from 'src/database/repository/user.repository';
import { CreateUsersDTO } from './dto/createUsers.dto';
import { GetAllUsersResponseDto, GetUserResponseDto } from './dto/GetUsersResponse.dto';
import { AllUsersMap, UserMap } from './maps/user.map';

@Injectable()
export class UsersService {
  constructor(
    private readonly usersRepository: UsersRepository
  ) { }

  //find
  async find(): Promise<GetAllUsersResponseDto> {
    const users = await this.usersRepository.find();

    return AllUsersMap.toDTO(users);
  }


  //create
  async create(createUserDto: CreateUsersDTO): Promise<GetUserResponseDto> {
    const { name, cpf, password } = createUserDto;

    const userExist = await this.usersRepository.findOne({ cpf });
    if (userExist) {
      throw new BadRequestException(`User CPF ${cpf} already exists.`);
    }

    const password_hash = await hash(password, 8);

    const user = this.usersRepository.create({
      name,
      cpf,
      password: password_hash,
    });
    await this.usersRepository.save(user);

    return UserMap.toDTO(user);
  }
}
