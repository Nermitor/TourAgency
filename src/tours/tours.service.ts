import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ToursService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createTourDto: Prisma.TourCreateInput) {
    return this.prisma.tour.create({ data: createTourDto });
  }

  async findAll() {
    return this.prisma.tour.findMany();
  }

  async findOne(id: number) {
    return this.prisma.tour.findUnique({ where: { id } });
  }

  async update(id: number, updateTourDto: Prisma.TourUpdateInput) {
    return this.prisma.tour.update({
      where: { id },
      data: updateTourDto,
    });
  }

  async remove(id: number) {
    return this.prisma.tour.delete({ where: { id } });
  }
}
