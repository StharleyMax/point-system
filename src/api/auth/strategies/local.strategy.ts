import {Injectable, UnauthorizedException} from '@nestjs/common';
import {PassportStrategy} from '@nestjs/passport';
import {Strategy} from 'passport-local';

import {AuthService} from '../auth.service'

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy){
  constructor(private readonly authService: AuthService){
    super({usernameField: 'cpf'})
  }

  async validate(cpf: string, password: string){
    const user = await this.authService.validateUser(cpf, password);

    if(!user) throw new UnauthorizedException('Failed Login. Verify CPF and password');

    return user
  }
}
