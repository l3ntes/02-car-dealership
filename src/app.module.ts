import { Module } from '@nestjs/common';
import { BrandsModule } from './brands/brands.module';
import { SeedModule } from './seed/seed.module';
import { CarsModule } from './cars/cars.module';

@Module({
  controllers: [],
  providers: [],
  imports: [CarsModule, BrandsModule, SeedModule],
})
export class AppModule {}
