import { Controller, Post, Body } from '@nestjs/common';
import { AdminService } from './admin.service';

@Controller('admins')
export class AdminController {
  constructor(private adminService: AdminService) {}

  @Post('/create-admin')
  async createAdmin(@Body() data: { username: string; name: string; password: string }) {
    return this.adminService.createAdmin(data);
  }
}
