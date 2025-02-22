/* eslint-disable prettier/prettier */
import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('article')
export class ArticleController {
  @Get()
  findAll(): string {
    return 'Tampil semua article';
  }

  @Get('/:id')
  findOne(@Param() params: { id: string }): string {
    return `Tampil detail article ${params.id}`;
  }

  @Post()
  create(): string {
    return 'Tambah article';
  }

  @Put('/:id')
  update(@Param() params: { id: string }): string {
    return `Update article ${params.id}`;
  }

  @Delete('/:id')
  delete(@Param() params: { id: string }): string {
    return `Delete article ${params.id}`;
  }
}
