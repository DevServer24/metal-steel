import { Module } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { EmployeeController } from './employee.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [EmployeeController], 
  providers: [EmployeeService, PrismaService], // ✅ Register services
})
export class EmployeeModule {}
