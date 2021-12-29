export class GetUserResponseDto{
  userId: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

export class GetAllUsersResponseDto{
  users: GetUserResponseDto[]
}
