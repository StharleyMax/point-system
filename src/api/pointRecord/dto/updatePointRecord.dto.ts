import { ApiProperty } from "@nestjs/swagger";

export class UpdateCreatePointRecordDTO {

  @ApiProperty()
  user: string;

  @ApiProperty({ type: Date })
  startPoint: Date;

  @ApiProperty({ type: Date })
  startLunch: Date;

  @ApiProperty({ type: Date })
  returnLunch: Date;

  @ApiProperty({ type: Date })
  exitPoint: Date;
}
