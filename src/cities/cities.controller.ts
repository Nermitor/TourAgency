import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CitiesService } from './cities.service';
import { Prisma } from '@prisma/client';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('Cities')
@Controller('cities')
export class CitiesController {
  constructor(private readonly citiesService: CitiesService) {}

  @Post()
  async create(@Body() createCityDto: Prisma.CityCreateInput) {
    return this.citiesService.create(createCityDto);
  }

  @Get()
  async findAll() {
    return this.citiesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.citiesService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateCityDto: Prisma.CityUpdateInput) {
    return this.citiesService.update(+id, updateCityDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.citiesService.remove(+id);
  }
}
