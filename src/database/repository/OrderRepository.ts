import { Injectable } from "@nestjs/common";
import { OrderDTO } from "src/orders/entities/OrderDTO";
import { OrderRepositoryInterface } from "../interfaces/OrderRepositoryInterface";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class OrderRepository implements OrderRepositoryInterface {

    constructor(
        private readonly prisma: PrismaService
    ) { }

    findById(id: number): Promise<any> {
        return this.prisma.order.findUnique({
            where: { id: id },
            select: {
                id: true,
                userId: true,
                payment: true,
                totalValue: true,
                items: {
                    select: {
                        quantity: true,
                        totalValue: true,
                        snack: {
                            select: {
                                name: true,
                                image: true,
                                value: true
                            }
                        }
                    }
                },
            }

        })
    }

    async insert(order: OrderDTO): Promise<any> {

        const orderCreated = await this.prisma.order.create({
            data: order.toSave()
        })

        order.id = orderCreated.id;

        const itemsCreated = await this.prisma.item.createMany({
            data: order.getItemsToSave()
        })

        const RealOrder = this.prisma.order.findUnique({
            where: { id: order.id },
            include: {
                items: true
            }
        })

        return RealOrder;
    }

    findAll(): Promise<any> {
        return this.prisma.order.findMany({
            include: {
                user: true,
                items: {
                    include: {
                        snack: true
                    }
                }
            }
        })
    }

}