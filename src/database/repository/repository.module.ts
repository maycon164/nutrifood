
import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { PrismaService } from '../prisma/prisma.service';
import { SnackRepository } from './SnackRepository';
import { UserRepository } from './UserRepository';

@Module({
    imports: [PrismaModule],
    providers: [UserRepository, SnackRepository, PrismaService],
    exports: [UserRepository]
})
export class RepositoryModule { }
