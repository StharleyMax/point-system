import { User } from "src/database/entities/User.entity"
import { GetAllUsersResponseDto, GetUserResponseDto } from "../dto/GetUsersResponse.dto"


export class AllUsersMap {
  public static toDTO(user: User[]): GetAllUsersResponseDto {
    return {
      users: user.map((users) => UserMap.toDTO(users))
    }
  }
}

export class UserMap {
  public static toDTO(user: User): GetUserResponseDto {

    return {
      userId: user.userId,
      name: user.name,
      cpf: user.cpf,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt
    }
  }
}
