import { OrderDTO } from "src/orders/entities/OrderDTO";

export interface OrderRepositoryInterface {

    insert(order: OrderDTO): Promise<any>
    findAll(): Promise<any>
}