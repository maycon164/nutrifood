
import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { PrismaService } from '../prisma/prisma.service';
import { UserRepository } from './UserRepository';

@Module({
    imports: [PrismaModule],
    providers: [UserRepository, PrismaService],
    exports: [UserRepository]
})
export class RepositoryModule { }
