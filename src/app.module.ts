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

@Module({
  imports: [
    UsersModule,
    RolesModule,
    CountriesModule,
    CitiesModule,
    PrismaModule,
    DiscountsModule,
    ToursModule,
    SalesModule,
    RefundsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
