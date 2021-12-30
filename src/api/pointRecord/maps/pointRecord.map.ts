import { GetAllPointRecordDTO, CreatePointRecordDTO } from '../dto/createPointRecord.dto';
import { Point } from '../../../database/entities/Point.entity';


export class GetAllPointRecordMap {
  public static toDTO(pointRecord: Point[]): GetAllPointRecordDTO {
    return {
      pointRecord: pointRecord.map((points) => PointRecordMap.toDTO(points))
    }
  }
}

export class PointRecordMap {
  public static toDTO(pointRecord: Point): CreatePointRecordDTO {

    return {
      user: pointRecord.user,
      startPoint: pointRecord.startPoint,
      startLunch: pointRecord.startLunch,
      returnLunch: pointRecord.returnLunch,
      exitPoint: pointRecord.exitPoint,
      createdAt: pointRecord.createdAt,
      updatedAt: pointRecord.updatedAt

    }
  }
}
