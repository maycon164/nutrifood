
import { Module } from '@nestjs/common';
import { CloudinaryService } from 'src/services/images/cloudinary.service';
import { ServicesModule } from 'src/services/services.module';
import { PrismaModule } from '../prisma/prisma.module';
import { PrismaService } from '../prisma/prisma.service';
import { SnackRepository } from './SnackRepository';
import { UserRepository } from './UserRepository';

@Module({
    imports: [PrismaModule, ServicesModule],
    providers: [UserRepository, SnackRepository, PrismaService, CloudinaryService],
    exports: [UserRepository]
})
export class RepositoryModule { }
