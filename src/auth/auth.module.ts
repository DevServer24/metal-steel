import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AdminService } from '../admin/admin.service';
import { EmployeeService } from '../employee/employee.service';
import { AuthController } from './auth.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET ?? 'secret',
      signOptions: { expiresIn: '1h' },
    }),
  ],
  providers: [AuthService, AdminService, EmployeeService, PrismaService],
  controllers: [AuthController],
})
export class AuthModule {}
