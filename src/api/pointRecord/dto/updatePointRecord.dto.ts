import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsNumber } from "class-validator";

export class UpdateCreatePointRecordDTO {

  @ApiProperty()
  user: string;

  @IsDate()
  @ApiProperty({ type: Date })
  startPoint: Date;

  @IsDate()
  @ApiProperty({ type: Date })
  startLunch: Date;

  @IsDate()
  @ApiProperty({ type: Date })
  returnLunch: Date;

  @IsDate()
  @ApiProperty({ type: Date })
  exitPoint: Date;
}
