import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Employee, Role } from '@prisma/client';

@Injectable()
export class EmployeeService {
  constructor(private prisma: PrismaService) {}

  async createEmployee(data: {
    firstname: string;
    lastname: string;
    idnumber: number;
    address: string;
    sss: number;
    philhealth: number;
    departmentId: number;
    role: Role;
  }): Promise<Employee> {
    // Check if department exists
    const departmentExists = await this.prisma.department.findUnique({
      where: { id: data.departmentId },
    });

    if (!departmentExists) {
      throw new NotFoundException(`Department with ID ${data.departmentId} not found`);
    }

    // Create the employee
    return this.prisma.employee.create({
      data,
    });
  }
}
