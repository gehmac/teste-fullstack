import { Module } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

const PrismaConnectionProvider = {
  provide: 'PrismaConnection',
  useFactory: async (): Promise<PrismaClient> => {
    const prisma = new PrismaClient();
    await prisma.$connect();
    return prisma;
  },
};

@Module({
  imports: [],
  providers: [PrismaConnectionProvider],
  exports: [],
})
export class ConfigModule {}
