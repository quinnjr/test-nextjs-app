import type { User } from '@prisma/client';
import { Controller, Get } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';

@Controller('api')
export class ApiController {
    constructor(private readonly databaseService: DatabaseService) {}

    @Get('users')
    public async getUsers(): Promise<User[]> {
        const users = await this.databaseService.user.findMany();
        return users;
    }
}
