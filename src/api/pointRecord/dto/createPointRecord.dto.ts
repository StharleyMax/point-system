export class CreatePointRecordDTO {

  startPoint: Date;
  startLunch: Date;
  returnLunch: Date;
  exitPoint: Date;
  createAt: Date;
  updateAt: Date;
}


export class GetAllPointRecordDTO {

  pointRecord: CreatePointRecordDTO[];

}
