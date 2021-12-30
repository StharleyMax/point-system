export class CreatePointRecordDTO {

  user!: any;
  startPoint!: Date;
  startLunch!: Date;
  returnLunch!: Date;
  exitPoint!: Date;
  createdAt: Date;
  updatedAt: Date;
}


export class GetAllPointRecordDTO {

  pointRecord: CreatePointRecordDTO[];

}
