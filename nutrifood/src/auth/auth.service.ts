import { Injectable } from '@nestjs/common';
import { UserService } from 'src/users/user.service';

@Injectable()
export class AuthService {
    constructor(private readonly userService: UserService) { }

    async validateUser(username: string, password: string) {
        const user = await this.userService.findOneByEmail(username);
        if (user && user.password == password) {
            return { message: "You are now logged in", ...user };
        }
        return null;
    }

}
