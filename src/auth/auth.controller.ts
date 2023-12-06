import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local/local.guard';
import { Prisma } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { UsersService } from '../users/users.service';
import { Public } from './decorators/public.decorator';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService
  ) {}

  @Public()
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @Public()
  @Post('signup')
  async createUser(
    @Body('fullName') fullName: string,
    @Body('password') password: string,
    @Body('phoneNumber') phoneNumber: string,
    @Body('email') email: string,
    @Body('passport') passport: string,
    @Body('roleId') roleId: number
  ): Promise<Prisma.UserCreateInput> {
    const saltOrRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltOrRounds);
    return await this.usersService.create({
      fullName,
      password: hashedPassword,
      phoneNumber,
      email,
      passport,
      roleId,
    });
  }
}
