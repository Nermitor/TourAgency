import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
@Injectable()
export class CitiesService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createCityDto: Prisma.CityCreateInput) {
    return this.prisma.city.create({
      data: createCityDto,
    });
  }

  async findAll() {
    return this.prisma.city.findMany();
  }

  async findOne(id: number) {
    return this.prisma.city.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: number, updateCityDto: Prisma.CityUpdateInput) {
    return this.prisma.city.update({
      where: { id },
      data: updateCityDto,
    });
  }

  async remove(id: number) {
    return this.prisma.city.delete({
      where: { id },
    });
  }
}
