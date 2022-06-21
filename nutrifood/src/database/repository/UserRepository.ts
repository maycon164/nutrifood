import { Injectable } from "@nestjs/common";
import { UserDTO } from "src/users/entities/UserDTO";
import { UserRepositoryInterface } from "../interfaces/UserRepositoryInterface";
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
        return this.prisma.user.findFirst({
            where: { id: id },
            include: {
                order: {
                    include: {
                        items: {
                            include: {
                                snack: true
                            }
                        }
                    }
                }
            }
        })
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

    async getReport() {

        const report = await this.prisma.$queryRaw`  SELECT s.name, s.value,
        SUM(i.quantity) AS quantidade,
        (SUM(i.quantity) * s.value) AS valorGerado
        FROM snack AS s,
        item AS i
        WHERE s.id = i."snackId"
        GROUP BY s.name, s.value
        ORDER BY valorGerado DESC`;

        console.log(report);
        return report;
    }

}