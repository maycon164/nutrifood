import { Controller, Post, Get, Request, UseGuards, Body } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { AuthService } from "./auth.service";
import { JwtAuthGuard } from "./guards/jwt-auth.guard";
import { LocalAuthGuard } from "./guards/local-auth.guard";

@Controller('/auth')
@ApiTags('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @UseGuards(LocalAuthGuard)
    @Post('/login')
    async login(@Request() req) {
        console.log("essa parte so eh executado quando voce passa pelo validator do localStrategy")
        //return req.user;
        return this.authService.login(req.user);
    }

    @UseGuards(JwtAuthGuard)
    @Get('/exemplo')
    async getExemplo(@Request() req) {
        const { user } = req;
        console.log(user);
        return { message: 'parabens voce tem acesso a essa mensagem' }
    }
}

