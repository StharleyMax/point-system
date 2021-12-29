import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
<<<<<<< HEAD
import { PointRepository } from 'src/database/repository/point.repository';
=======
import { PointRepository } from 'database/repository/point.repository';
>>>>>>> cacfbc6f848935fdce6ce2044026977c1f1b70f8
import { PointRecordController } from './pointRecord.controller';
import { PointRecordService } from './pointRecord.service';


@Module({
  imports: [TypeOrmModule.forFeature([PointRepository])],
  controllers: [PointRecordController],
  providers: [PointRecordService],
  exports: [PointRecordService],
})

export class PointRecordModule { }

