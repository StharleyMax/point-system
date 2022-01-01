import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateUsersDTO {

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String })
  readonly name: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ type: String })
  readonly cpf: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ type: String })
  readonly password: string;

}
