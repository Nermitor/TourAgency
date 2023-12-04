import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CountriesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createCountryDto: Prisma.CountryCreateInput) {
    return this.prisma.country.create({
      data: createCountryDto,
    });
  }

  async findAll() {
    return this.prisma.country.findMany();
  }

  findOne(id: number) {
    return this.prisma.country.findUnique({
      where: { id },
    });
  }

  update(id: number, updateCountryDto: Prisma.CountryUpdateInput) {
    return this.prisma.country.update({
      where: { id },
      data: updateCountryDto,
    });
  }

  remove(id: number) {
    return this.prisma.country.delete({
      where: { id },
    });
  }
}
