import { Injectable } from '@nestjs/common';

export type User = {
    id?: number;
    name?: string;
    username?: string;
    password?: string;
};

@Injectable()
export class UsersService {
    private readonly users = [
        {
            userId: 1,
            username: 'ahmed',
            password: '123456',
        },
        {
            userId: 2,
            username: 'adly',
            password: '123456',
        },
    ];

    async findOne(username: string): Promise<User | undefined> {
        return this.users.find(user => user.username === username);
    }
}
