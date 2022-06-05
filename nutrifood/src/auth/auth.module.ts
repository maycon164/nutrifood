import { AuthService } from './auth.service';
import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { UserModule } from 'src/users/user.module';
import { JwtModule } from '@nestjs/jwt';

import * as dotenv from 'dotenv';
import { AuthController } from './auth.controller';
dotenv.config();

console.log(process.env.JWT_KEY);

@Module({
    imports: [
        UserModule,
        PassportModule,
        JwtModule.register({
            secret: process.env.JWT_KEY,
            signOptions: { expiresIn: '3d' }
        })
    ],
    controllers: [AuthController],
    providers: [AuthService, LocalStrategy],
    exports: [AuthService]
})
export class AuthModule { }
