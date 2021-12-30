import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { PointRecordService } from './pointRecord.service';
import { CreatePointRecordDTO, GetAllPointRecordDTO } from './dto/createPointRecord.dto';
import { UpdateCreatePointRecordDTO } from './dto/updatePointRecord.dto';

@Controller('pointRecord')
export class PointRecordController {

  constructor(private pointRecordService: PointRecordService) { }

  @Get()
  async findAll(): Promise<GetAllPointRecordDTO> {
    return this.pointRecordService.getAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return `This action returns a #${id} PointRecord`;
  }

  @Post()
  async create(@Body() createPointRecordDto: CreatePointRecordDTO): Promise<any> {
    return this.pointRecordService.create(createPointRecordDto);
  }

  @Put(':id')
  async updatePointRecord(@Param('id') id: number, @Body() updatePointRecord: UpdateCreatePointRecordDTO) {
    return `This action update a #${id} pointRecord`;
  }

  @Delete(':id')
  removePointRecord(@Param('id') id: number) {
    return `This action remove a #${id}`;
  }

}
