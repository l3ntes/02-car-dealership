import { Module } from '@nestjs/common';
import { CarsController } from './cars/cars.controller';
import { CarsService } from './cars/cars.service';
import { BrandsModule } from './brands/brands.module';

@Module({
  controllers: [CarsController],
  providers: [CarsService],
  imports: [BrandsModule],
})
export class AppModule {}
