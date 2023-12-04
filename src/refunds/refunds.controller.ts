import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RefundsService } from './refunds.service';
import { Prisma } from '@prisma/client';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('Refunds')
@Controller('refunds')
export class RefundsController {
  constructor(private readonly refundsService: RefundsService) {}

  @Post()
  create(@Body() createRefundDto: Prisma.RefundCreateInput) {
    return this.refundsService.create(createRefundDto);
  }

  @Get()
  findAll() {
    return this.refundsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.refundsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRefundDto: Prisma.RefundUpdateInput) {
    return this.refundsService.update(+id, updateRefundDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.refundsService.remove(+id);
  }
}
