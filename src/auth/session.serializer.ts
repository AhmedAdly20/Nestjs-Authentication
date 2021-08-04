import { PassportSerializer } from "@nestjs/passport";

export class SessionSERIALIZER extends PassportSerializer {
    serializeUser(user: any, done: (err: Error, user: any) => void): any {
        done(null,user);
    }

    deserializeUser(payload: any, done: (err: Error, payload: string) => void) {
        done(null, payload);
    }
}