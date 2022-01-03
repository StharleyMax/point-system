import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsDateString, IsNumber } from "class-validator";

export class CreatePointRecordDTO {

  @IsNumber()
  @ApiProperty()
  user!: any;

  @IsDateString()
  @ApiProperty({ type: Date })
  startPoint!: Date;

  @IsDateString()
  @ApiProperty({ type: Date })
  startLunch!: Date;

  @IsDateString()
  @ApiProperty({ type: Date })
  returnLunch!: Date;

  @IsDateString()
  @ApiProperty({ type: Date })
  exitPoint!: Date;

  @IsDateString()
  @ApiProperty({ type: Date, default: new Date() })
  createdAt: Date;

  @IsDateString()
  @ApiProperty({ type: Date, default: new Date() })
  updatedAt: Date;
}


export class GetAllPointRecordDTO {

  pointRecord: CreatePointRecordDTO[];

}
