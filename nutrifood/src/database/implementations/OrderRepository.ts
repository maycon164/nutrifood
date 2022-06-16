import { Injectable } from "@nestjs/common";
import { OrderDTO } from "src/orders/entities/OrderDTO";
import { OrderRepositoryInterface } from "../interfaces/OrderRepository";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class OrderRepository implements OrderRepositoryInterface {

    constructor(
        private readonly prisma: PrismaService
    ) { }

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
        throw new Error("Method not implemented.");
    }

}