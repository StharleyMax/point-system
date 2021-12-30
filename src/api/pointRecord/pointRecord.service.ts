import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PointRepository } from '../../database/repository/point.repository';
import { GetAllPointRecordDTO, CreatePointRecordDTO } from './dto/createPointRecord.dto';
import { GetAllPointRecordMap, PointRecordMap } from './maps/pointRecord.map';

@Injectable()
export class PointRecordService {

  constructor(
    private readonly pointRecordRepository: PointRepository
  ) { }

  async getAll(): Promise<GetAllPointRecordDTO> {
    const pointRecordAll = await this.pointRecordRepository.find();
    return GetAllPointRecordMap.toDTO(pointRecordAll);
  }


  async create(createPointRecordDTO: CreatePointRecordDTO): Promise<CreatePointRecordDTO> {

    const createPoint = this.pointRecordRepository.create(createPointRecordDTO);

    await this.pointRecordRepository.save(createPoint);

    return PointRecordMap.toDTO(createPoint);

  }
}
