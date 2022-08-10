import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserDTO } from 'src/users/entities/UserDTO';
import { UserService } from 'src/users/user.service';

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService
    ) { }

    async validateUser(username: string, password: string) {
        const user = await this.userService.findOneByEmail(username);

        if (user && user.password == password) {
            return user;
        }

        return null;
    }

    async login(user: any) {
        const payload = { username: user.email, sub: user.id, isAdmin: user.isAdmin };
        const token = this.jwtService.sign(payload);
        return {
            username: user.name,
            isAdmin: user.isAdmin,
            access_token: token
        }
    }

}
