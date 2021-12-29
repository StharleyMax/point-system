import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { User } from './entities/User.entity';
import { Point } from './entities/Point.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      entities: [User]
    }),
  ],
})
export class DatabaseModule { }
