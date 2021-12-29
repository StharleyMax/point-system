import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PointRepository } from 'database/repository/point.repository';
import { PointRecordController } from './pointRecord.controller';
import { PointRecordService } from './pointRecord.service';


@Module({
  imports: [TypeOrmModule.forFeature([PointRepository])],
  controllers: [PointRecordController],
  providers: [PointRecordService],
  exports: [PointRecordService],
})

export class PointRecordModule { }

