import { Controller, Post, Body } from '@nestjs/common';
import { AdminService } from './admin.service';

@Controller('admins')
export class AdminController {
  constructor(private adminService: AdminService) {}

  @Post()
  async createAdmin(@Body() data: { username: string; name: string; password: string }) {
    return this.adminService.createAdmin(data);
  }
}
