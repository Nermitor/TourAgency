import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class SalesService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createSaleDto: Prisma.SaleCreateInput) {
    return this.prisma.sale.create({ data: createSaleDto });
  }

  async findAll() {
    return this.prisma.sale.findMany();
  }

  async findOne(id: number) {
    return this.prisma.sale.findUnique({ where: { id } });
  }

  async update(id: number, updateSaleDto: Prisma.SaleUpdateInput) {
    return this.prisma.sale.update({
      where: { id },
      data: updateSaleDto,
    });
  }

  async remove(id: number) {
    return this.prisma.sale.delete({ where: { id } });
  }
}
