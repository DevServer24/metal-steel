import { Controller, Post, Body, Get } from '@nestjs/common';
import { EmployeeService } from './employee.service';

@Controller('employees')
export class EmployeeController {
  constructor(private employeeService: EmployeeService) {}

  // ✅ Create Employee Endpoint
  @Post('create')
  async createEmployee(@Body() data: {
    firstname: string;
    lastname: string;
    idnumber: number;
    address: string;
    sss: number;
    philhealth: number;
    departmentId: number;
    role: 'EMPLOYEE' | 'ADMIN'; // Role validation
  }) {
    return this.employeeService.createEmployee(data);
  }

  // ✅ Get Employees Endpoint
  @Get()
  async getAllEmployees() {
    return this.employeeService.getEmployees();
  }
}
