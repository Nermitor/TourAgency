import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class DiscountsService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createDiscountDto: Prisma.DiscountCreateInput) {
    return this.prisma.discount.create({ data: createDiscountDto });
  }

  async findAll() {
    return this.prisma.discount.findMany();
  }

  async findOne(id: number) {
    return this.prisma.discount.findUnique({ where: { id } });
  }

  async update(id: number, updateDiscountDto: Prisma.DiscountUpdateInput) {
    return this.prisma.discount.update({
      where: { id },
      data: updateDiscountDto,
    });
  }

  async remove(id: number) {
    return this.prisma.discount.delete({ where: { id } });
  }
}
