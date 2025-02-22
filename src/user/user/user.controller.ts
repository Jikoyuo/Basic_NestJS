/* eslint-disable prettier/prettier */
import { Controller, Get, Param, Post, Query, Req } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Get('/hello')
  sayHello(
    @Query('first_name') firstname: string,
    @Query('last_name') lastname: string,
  ): string {
    return `Hello ${firstname} ${lastname}`;
  }

  @Get('/:id')
  getById(@Param('id') id: string): string {
    return `GET ${id}`;
  }

  @Post()
  post(): string {
    return 'POST';
  }

  @Get('/sample')
  get(): string {
    return 'GET';
  }
}
