import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/entities/user.entity';
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

    async login(user: User) {
        const payload = { username: user.email, sub: user.id };

        const token = this.jwtService.sign(payload);
        console.log(token);

        return {
            access_token: token
        }
    }

}
