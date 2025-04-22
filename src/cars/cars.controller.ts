import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}
  @Get() //GET ALL CARS
  getAllCars() {
    return this.carsService.findAll();
  }
  @Get(':id') //GET CAR BY ID
  getCarById(@Param('id', ParseUUIDPipe) id: string) {
    console.log({ id });
    return this.carsService.findOneById(id);
  }
  @Post() //POST ANY CAR
  createCar(@Body() createCarDto: CreateCarDto) {
    return createCarDto;
  }
  @Patch(':id') //(PATCH = UPDATE) CAR BY ID
  updateCar(
    @Param('id', ParseUUIDPipe) id: string,
    @Body()
    body: any,
  ) {
    return body;
  }
  @Delete(':id') //DELETE CAR BY ID
  deleteCar(@Param('id') id: string) {
    return {
      method: 'delete',
      id,
    };
  }
}
