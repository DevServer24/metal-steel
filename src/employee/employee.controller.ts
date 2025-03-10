import { Controller, Post, Body } from '@nestjs/common';
import { EmployeeService } from './employee.service';

@Controller('employees')
export class EmployeeController {
  constructor(private employeeService: EmployeeService) {}

  @Post()
  async createEmployee(@Body() data: { firstname: string; lastname: string; idnumber: number; address: string; sss: number; philhealth: number; departmentId: number }) {
    return this.employeeService.createEmployee(data);
  }
}
