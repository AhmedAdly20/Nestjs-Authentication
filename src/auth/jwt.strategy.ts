import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class JWTStrategy extends PassportStrategy(Strategy) {
    constructor(private authService: AuthService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            iqnoreExpiration: false,
            secretOrKey: 'SECRET',

        });
    }

    async validate(payload: any): Promise<any> {
        return {
            id: payload.sub,
            name: payload.name,
        }
    }
}