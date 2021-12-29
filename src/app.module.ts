import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

//import { PointRecordModule } from './api/pointRecord/pointRecord.module';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './api/users/users.module';
import { AuthModule } from './api/auth/auth.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true, envFilePath: '.env' }), DatabaseModule, UsersModule, AuthModule],
})
export class AppModule {}
