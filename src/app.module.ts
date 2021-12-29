import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

//import { PointRecordModule } from './api/pointRecord/pointRecord.module';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './api/users/users.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), DatabaseModule, UsersModule],
})
export class AppModule {}
