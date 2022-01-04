import { GetAllPointRecordsDTO, AllPointRecordDTO } from '../dto/allPointRecord.dto';
import { Point } from '../../../database/entities/Point.entity';


export class AllPointRecordMap {
  public static toDTO(pointRecord: Point[]): GetAllPointRecordsDTO {
    return {
      allPointRecord: pointRecord.map((points) => PointRecordMap.toDTO(points))
    }
  }
}

export class PointRecordMap {
  public static toDTO(pointRecord: Point): AllPointRecordDTO {

    return {
      pointRecordId: pointRecord.pointRecordId,
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
