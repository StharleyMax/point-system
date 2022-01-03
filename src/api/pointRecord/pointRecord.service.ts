import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PointRepository } from '../../database/repository/point.repository';
import { Point } from '../../database/entities/Point.entity';
import { GetAllPointRecordDTO, CreatePointRecordDTO } from './dto/createPointRecord.dto';
import { GetAllPointRecordMap, PointRecordMap } from './maps/pointRecord.map';

@Injectable()
export class PointRecordService {

  constructor(
    private readonly pointRecordRepository: PointRepository
  ) { }

  async getAll(): Promise<GetAllPointRecordDTO> {
    try {
      const pointRecordAll = await this.pointRecordRepository.find({ relations: ['user'] });
      return GetAllPointRecordMap.toDTO(pointRecordAll);
    } catch (error) {
      console.log(error);
    }
  }


  /*
  async create(createPointRecordDTO: CreatePointRecordDTO): Promise<CreatePointRecordDTO> {

    const createPoint = this.pointRecordRepository.create(createPointRecordDTO);

    await this.pointRecordRepository.save(createPoint);

    return PointRecordMap.toDTO(createPoint);
  }
  */

  async create(createPointRecordDTO: CreatePointRecordDTO): Promise<Point> {

    //let verifica = this.verificarCampos();

    return await this.pointRecordRepository.save(createPointRecordDTO);
  }




  verificarCampos() {

  }

}
