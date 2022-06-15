import { Injectable } from "@nestjs/common";
import { UserDTO } from "src/users/entities/UserDTO";
import { UserRepositoryInterface } from "../interfaces/UserRepositoryPrismaInterface";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class UserRepository implements UserRepositoryInterface {

    constructor(private readonly prisma: PrismaService) { }

    async findAll(): Promise<any[]> {
        return await this.prisma.user.findMany();
    }

    async findBy(options: { email?: string; phone?: string; admin?: boolean; }): Promise<any> {
        return await this.prisma.user.findFirst({
            where: options
        })
    }

    findById(): Promise<any> {
        throw new Error("Method not implemented.");
    }
    getOrdersById(id: number): Promise<any> {
        throw new Error("Method not implemented.");
    }

    async insert(user: UserDTO): Promise<any> {
        return this.prisma.user.create({ data: user.toSave() });
    }
    update(id: number, user: UserDTO): Promise<any> {
        throw new Error("Method not implemented.");
    }
    delete(id: number): void {
        throw new Error("Method not implemented.");
    }

}