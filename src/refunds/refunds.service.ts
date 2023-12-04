import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class RefundsService {
  constructor(private prisma: PrismaService) {}
  create(createRefundDto: Prisma.RefundCreateInput) {
    return this.prisma.refund.create({
      data: createRefundDto,
    });
  }

  findAll() {
    return this.prisma.refund.findMany();
  }

  findOne(id: number) {
    return this.prisma.refund.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: number, updateRefundDto: Prisma.RefundUpdateInput) {
    return this.prisma.refund.update({
      where: { id },
      data: updateRefundDto,
    });
  }

  remove(id: number) {
    return this.prisma.refund.delete({
      where: { id },
    });
  }
}
