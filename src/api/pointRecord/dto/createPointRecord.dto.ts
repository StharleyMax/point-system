import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsNumber } from "class-validator";

export class CreatePointRecordDTO {

  @IsNumber()
  @ApiProperty()
  user!: any;

  @IsDate()
  @ApiProperty({ type: Date })
  startPoint!: Date;

  @IsDate()
  @ApiProperty({ type: Date })
  startLunch!: Date;

  @IsDate()
  @ApiProperty({ type: Date })
  returnLunch!: Date;

  @IsDate()
  @ApiProperty({ type: Date })
  exitPoint!: Date;

  @IsDate()
  @ApiProperty({ type: Date })
  createdAt: Date;

  @IsDate()
  @ApiProperty({ type: Date })
  updatedAt: Date;
}


export class GetAllPointRecordDTO {

  pointRecord: CreatePointRecordDTO[];

}
