import { Injectable } from '@nestjs/common';
import {JwtService} from '@nestjs/jwt';
import { compareSync } from 'bcrypt';
import { User } from 'src/database/entities/User.entity';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UsersService, private readonly jwtService: JwtService){}


  async login(user){
    const payload = {sub: user.userId};

    return {
      token: this.jwtService.sign(payload)
    }
  }

  async validadeUser(cpf: string, password: string){
    let user: User;
    try{
      user = await this.userService.findOneOrFail({cpf});

    }catch{
      return null
    }

    const ifPasswordValid = compareSync(password, user.password);
    if(!ifPasswordValid) return null;

    return user;
  }
}
