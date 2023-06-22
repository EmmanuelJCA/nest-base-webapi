import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { User, Profile, Address } from './entities';
import { GeolocationModule } from 'src/geolocation/geolocation.module';

@Module({
  controllers: [UserController],
  providers: [UserService],
  imports: [
    TypeOrmModule.forFeature([User, Profile, Address]),
    GeolocationModule,
  ],
  exports: [UserService],
})
export class UserModule {}
