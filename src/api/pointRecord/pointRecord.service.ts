import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Point } from '../../database/entities/Point.entity';
import { GetAllPointRecordDTO } from './dto/createPointRecord.dto';
import { GetAllPointRecordMap } from './maps/pointRecord.map';

@Injectable()
export class PointRecordService {

  constructor(
    @InjectRepository(Point)
    private readonly pointRecordRepository: Repository<Point>
  ) { }

  async getAll(): Promise<GetAllPointRecordDTO> {
    const pointRecordAll = await this.pointRecordRepository.find();
    return GetAllPointRecordMap.toDTO(pointRecordAll);
  }
}
