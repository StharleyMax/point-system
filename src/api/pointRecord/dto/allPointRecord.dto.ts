import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsDateString, IsNumber } from "class-validator";
import { IsNull } from "typeorm";

export class AllPointRecordDTO {

  @IsNumber()
  pointRecordId: number;

  @IsNumber()
  @ApiProperty()
  user: any;

  @IsDateString()
  @ApiProperty({ type: Date })
  startPoint: Date;

  @IsDateString()
  @ApiProperty({ type: Date })
  startLunch: Date;

  @IsDateString()
  @ApiProperty({ type: Date })
  returnLunch: Date;

  @IsDateString()
  @ApiProperty({ type: Date })
  exitPoint: Date;

  @IsDateString()
  @ApiProperty({ type: Date, example: new Date() })
  createdAt: Date;

  @IsDateString()
  @ApiProperty({ type: Date, example: new Date() })
  updatedAt: Date;

}

export class GetAllPointRecordsDTO {

  allPointRecord: AllPointRecordDTO[];

}


