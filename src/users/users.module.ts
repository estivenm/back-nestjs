import { Module } from '@nestjs/common';
import { UsersService } from './services/users.service';
import { UsersController } from './controller/users.controller';

@Module({
  providers: [UsersService],
  controllers: [UsersController],
})
// eslint-disable-next-line prettier/prettier
export class UsersModule { }
