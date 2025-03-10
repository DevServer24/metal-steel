import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly prisma: PrismaService,
  ) {}

  async validateAdmin(username: string, password: string) {
    const admin = await this.prisma.admin.findFirst({ where: { username } });
    if (!admin || !(await bcrypt.compare(password, admin.password))) {
      throw new UnauthorizedException('Invalid credentials');
    }
    return { token: this.jwtService.sign({ id: admin.id, role: 'ADMIN' }) };
  }

  async validateEmployee(idnumber: number, password: string) {
    const employee = await this.prisma.employee.findFirst({ where: { idnumber } });
    if (!employee || !(await bcrypt.compare(password, employee.address))) { // Assuming 'address' as password (change this)
      throw new UnauthorizedException('Invalid credentials');
    }
    return { token: this.jwtService.sign({ id: employee.id, role: 'EMPLOYEE' }) };
  }
}
