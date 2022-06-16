import { Injectable } from "@nestjs/common";
import { SnackDTO } from "src/snack/entities/SnackDTO";
import { SnackRepositoryInterface } from "../interfaces/SnackRepository";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class SnackRepository implements SnackRepositoryInterface {

    constructor(
        private readonly prisma: PrismaService
    ) { }

    findAll(): Promise<any[]> {
        return this.prisma.snack.findMany();
    }
    findBy(options: { category: string; }): Promise<any[]> {
        return this.prisma.snack.findMany({
            where: options
        })
    }

    findById(id: number): Promise<any> {
        return this.prisma.snack.findUnique(
            {
                where: {
                    id: id
                }
            }
        );
    }

    insert(snack: SnackDTO): Promise<any> {
        return this.prisma.snack.create({
            data: snack
        })
    }
    update(id: number, snack: SnackDTO): Promise<any> {
        return this.prisma.snack.update({
            where: { id: id },
            data: snack.toUpdate()
        })
    }

    delete(id: number): Promise<any> {
        return this.prisma.snack.delete({
            where: {
                id: id
            }
        })
    }

}