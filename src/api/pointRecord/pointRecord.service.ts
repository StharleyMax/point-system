import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PointRepository } from '../../database/repository/point.repository';
import { Point } from '../../database/entities/Point.entity';
import { GetAllPointRecordDTO, CreatePointRecordDTO } from './dto/createPointRecord.dto';
import { AllPointRecordDTO, GetAllPointRecordsDTO } from './dto/allPointRecord.dto';
import { GetAllPointRecordMap, PointRecordMap } from './maps/pointRecord.map';
import { AllPointRecordMap } from './maps/allPointRecord.map';

@Injectable()
export class PointRecordService {

  constructor(
    private readonly pointRecordRepository: PointRepository
  ) { }

  async getAll(): Promise<GetAllPointRecordsDTO> {
    try {
      const pointRecordAll = await this.pointRecordRepository.find({ relations: ['user'] });
      return AllPointRecordMap.toDTO(pointRecordAll);
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

  async create(createPointRecordDTO: CreatePointRecordDTO): Promise<CreatePointRecordDTO> {
    const result = await this.pointRecordRepository.save({
      user: createPointRecordDTO.user,
      startPoint: createPointRecordDTO.startPoint,
      startLunch: createPointRecordDTO.startLunch,
      returnLunch: createPointRecordDTO.returnLunch,
      exitPoint: createPointRecordDTO.exitPoint,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    return PointRecordMap.toDTO(result);

    //let verifica = this.verificarCampos();

    // return await this.pointRecordRepository.save(createPointRecordDTO);
  }




  verificarCampos() {

  }

}
