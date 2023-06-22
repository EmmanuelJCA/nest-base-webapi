import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GeolocationService } from './geolocation.service';
import { GeolocationController } from './geolocation.controller';
import { Country, City, State } from './entities';

@Module({
  controllers: [GeolocationController],
  providers: [GeolocationService],
  imports: [TypeOrmModule.forFeature([Country, City, State])],
  exports: [GeolocationService],
})
export class GeolocationModule {}
