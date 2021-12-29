import { Module } from '@nestjs/common';
import {PassportModule} from '@nestjs/passport';
import {JwtModule} from '@nestjs/jwt';
import { UsersModule } from '../users/users.module';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { LocalStrategy } from './strategies/local.strategy';

@Module({
  imports:[
    PassportModule,
    JwtModule.register({
      privateKey: process.env.JWT_Secret_Key,
      signOptions: {expiresIn: '60s'}
    }),
    UsersModule
  ],
  providers: [AuthService, LocalStrategy],
  controllers: [AuthController]
})
export class AuthModule {}
