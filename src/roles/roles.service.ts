import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class RolesService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createRoleDto: Prisma.RoleCreateInput) {
    return this.prisma.role.create({
      data: createRoleDto,
    });
  }

  async findAll() {
    return this.prisma.role.findMany();
  }

  async findOne(id: number) {
    return this.prisma.role.findUnique({
      where: {
        id,
      },
    });
  }
}
