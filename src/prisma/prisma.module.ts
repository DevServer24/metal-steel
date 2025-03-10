import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global() // Makes the module available globally
@Module({
  providers: [PrismaService],
  exports: [PrismaService], // Allows other modules to use PrismaService
})
export class PrismaModule {}
