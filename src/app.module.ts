import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import * as Joi from '@hapi/joi';

import { PointRecordModule } from './api/pointRecord/pointRecord.module';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './api/users/users.module';
import { AuthModule } from './api/auth/auth.module';

@Module({
  imports: [ConfigModule.forRoot({
    validationSchema: Joi.object({
      REDIS_HOST: Joi.string().required(),
      REDIS_PORT: Joi.number().required(),
    }),
    isGlobal: true, envFilePath: '.env'
  }), DatabaseModule, UsersModule, AuthModule, PointRecordModule],
})
export class AppModule { }
