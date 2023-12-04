import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class RefundsService {
  constructor(private prisma: PrismaService) {}
  async create(createRefundDto: Prisma.RefundCreateInput) {
    return this.prisma.refund.create({
      data: createRefundDto,
    });
  }

  async findAll() {
    return this.prisma.refund.findMany();
  }

  async findOne(id: number) {
    return this.prisma.refund.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: number, updateRefundDto: Prisma.RefundUpdateInput) {
    return this.prisma.refund.update({
      where: { id },
      data: updateRefundDto,
    });
  }

  async remove(id: number) {
    return this.prisma.refund.delete({
      where: { id },
    });
  }
}
