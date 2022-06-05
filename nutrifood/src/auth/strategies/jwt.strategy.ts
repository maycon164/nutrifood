import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";

// should i be using dotenv
import * as dotenv from 'dotenv'
import { Injectable } from "@nestjs/common";
dotenv.config()


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            //jwtFromRequest: exampleExtractor,
            ignoredExpiration: false,
            secretOrKey: process.env.JWT_KEY
        });
    }


    async validate(payload: any) {
        const response = { userId: payload.sub, username: payload.username, teste: "apenas um teste aqui" }
        return response;
    }

}