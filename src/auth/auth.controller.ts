import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('admin/login')
  async adminLogin(@Body() body: { username: string; password: string }) {
    return this.authService.validateAdmin(body.username, body.password);
  }

  @Post('employee/login')
  async employeeLogin(@Body() body: { idnumber: number; password: string }) {
    return this.authService.validateEmployee(body.idnumber, body.password);
  }
}
