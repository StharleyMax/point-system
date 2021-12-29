export class GetUserResponseDto{
  userId: number;
  name: string;
  cpf: string;
  createdAt: Date;
  updatedAt: Date;
}

export class GetAllUsersResponseDto{
  users: GetUserResponseDto[]
}
