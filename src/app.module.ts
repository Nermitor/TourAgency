import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { CountriesModule } from './countries/countries.module';
import { CitiesModule } from './cities/cities.module';
import { PrismaModule } from './prisma/prisma.module';
import { DiscountsModule } from './discounts/discounts.module';
import { ToursModule } from './tours/tours.module';
import { SalesModule } from './sales/sales.module';
import { RefundsModule } from './refunds/refunds.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { JwtAuthGuard } from './auth/jwt/jwt.guard';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [
    ConfigModule.forRoot(),
    UsersModule,
    RolesModule,
    CountriesModule,
    CitiesModule,
    PrismaModule,
    DiscountsModule,
    ToursModule,
    SalesModule,
    RefundsModule,
    AuthModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}
