import { ApiProperty } from "@nestjs/swagger";

export class CreatePointRecordDTO {

  @ApiProperty()
  user!: any;

  @ApiProperty({ type: Date })
  startPoint!: Date;

  @ApiProperty({ type: Date })
  startLunch!: Date;

  @ApiProperty({ type: Date })
  returnLunch!: Date;

  @ApiProperty({ type: Date })
  exitPoint!: Date;

  @ApiProperty({ type: Date })
  createdAt: Date;

  @ApiProperty({ type: Date })
  updatedAt: Date;
}


export class GetAllPointRecordDTO {

  pointRecord: CreatePointRecordDTO[];

}
