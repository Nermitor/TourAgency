import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CountriesService } from './countries.service';
import { Prisma } from '@prisma/client';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Countries')
@Controller('countries')
export class CountriesController {
  constructor(private readonly countriesService: CountriesService) {}

  @Post()
  async create(@Body() createCountryDto: Prisma.CountryCreateInput) {
    return this.countriesService.create(createCountryDto);
  }

  @Get()
  async findAll() {
    return this.countriesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.countriesService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateCountryDto: Prisma.CountryUpdateInput) {
    return this.countriesService.update(+id, updateCountryDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.countriesService.remove(+id);
  }
}
