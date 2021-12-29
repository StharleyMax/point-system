import { IsNotEmpty, IsString } from 'class-validator';

export class CreateUsersDTO{

  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsNotEmpty()
  @IsString()
  readonly cpf: string;

  @IsNotEmpty()
  @IsString()
  readonly password: string;

}
