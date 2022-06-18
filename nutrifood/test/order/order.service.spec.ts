import { Test } from "@nestjs/testing";
import { orders } from "../../src/mock/data/order.mock";
import { OrderRepository } from "../../src/database/repository/OrderRepository";
import { OrderService } from "../../src/orders/order.service"
import { OrderRepositoryMock } from "./OrderRepositoryMock";
import { OrderDTO } from "../../src/orders/entities/OrderDTO";

describe('Order Service', () => {

    let orderService: OrderService;
    let orderRepository: OrderRepository;

    beforeEach(async () => {
        const moduleRef = await Test.createTestingModule({
            providers: [OrderService, OrderRepository]
        })
            .overrideProvider(OrderRepository)
            .useClass(OrderRepositoryMock)
            .compile()

        orderService = moduleRef.get<OrderService>(OrderService);
        orderRepository = moduleRef.get<OrderRepository>(OrderRepository);
    })

    describe('get all orders', () => {

        it('should get all orders', async () => {
            const allOrders = orders;
            expect(await orderService.getAllOrders()).toEqual(allOrders);
        })
    })

    describe('make a order', () => {

        it('should save a order', async () => {
            const orderToSave = new OrderDTO();
            orderToSave.payment = 'CARD';
            orderToSave.totalValue = 100;
            orderToSave.user = 1;
            orderToSave.items = [{ snack: 1, quantity: 1 }];
        });

    })

    it('should sum 1+1 ', () => {
        expect(1 + 1).toBe(2)
    })

})