import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CreateUsersDTO } from './dto/createUsers.dto';
import { GetAllUsersResponseDto, GetUserResponseDto } from './dto/GetUsersResponse.dto';
import { UsersService } from './users.service';

@Controller('api/v1/users')
@UseGuards(AuthGuard('jwt'))
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async find(): Promise<GetAllUsersResponseDto> {
    return this.usersService.find();
  }


  @Post()
  async create(@Body() createUserDto: CreateUsersDTO): Promise<GetUserResponseDto> {
    return this.usersService.create(createUserDto);
  }
}
