import { Module } from '@nestjs/common';
import { EmployeeModule } from './employee/employee.module';
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module'; // ✅ Keep only one import

@Module({
  imports: [EmployeeModule, AdminModule, AuthModule],
})
export class AppModule {}
