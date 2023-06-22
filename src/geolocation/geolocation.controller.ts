import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GeolocationService } from './geolocation.service';

@ApiTags('Geolocation')
@Controller('geolocation')
export class GeolocationController {
  constructor(private readonly geolocationService: GeolocationService) {}

  //#region Country
  @Get('/country')
  findAllCountries() {
    return this.geolocationService.findAllCountries();
  }
  @Get('/country/:term')
  findOneCountry(@Param('term') term: string) {
    return this.geolocationService.findOneCountry(term);
  }
  //#endregion

  //#region State
  @Get('/state')
  findAllStates() {
    return this.geolocationService.findAllStates();
  }
  @Get('/state:term')
  findOneState(@Param('term') term: string) {
    return this.geolocationService.findOneState(term);
  }
  //#endregion

  //#region City
  @Get('/city')
  findAllCities() {
    return this.geolocationService.findAllCities();
  }
  @Get('/city:term')
  findOneCity(@Param('term') term: string) {
    return this.geolocationService.findOneCity(term);
  }
  //#endregion
}
