import { OrderRepositoryInterface } from "../../src/database/interfaces/OrderRepositoryInterface";
import { OrderDTO } from "../../src/orders/entities/OrderDTO";
import { orders, items } from "../../src/mock/data/order.mock";

export class OrderRepositoryMock implements OrderRepositoryInterface {
    private data = orders;

    insert(order: OrderDTO): Promise<any> {
        throw new Error("Method not implemented.");
    }

    findAll(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve(this.data);
        })
    }

    findById(id: number): Promise<any> {
        throw new Error("Method not implemented.");
    }

}