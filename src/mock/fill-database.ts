import { PrismaClient } from '@prisma/client';
import userMock from './data/user.mock';
import snackMock from './data/snack.mock';
import { orders as orderMock, items as itemsMock } from './data/order.mock'

(async () => {
    const prisma = new PrismaClient();
    //await cleanDatabase(prisma);

    await prisma.user.createMany({
        data: userMock
    })

    await prisma.snack.createMany({
        data: snackMock
    })

    await prisma.order.createMany({
        data: orderMock
    })

    await prisma.item.createMany({
        data: itemsMock
    })

    console.log("...mock database is filled!!!");
})()

async function cleanDatabase(prisma: PrismaClient) {
    const tableNames = [
        'User',
        'Store'
    ];

    try {
        for (const tableName of tableNames) {
            await prisma.$queryRaw`DELETE FROM "${tableName}";`;

            if (!['Store'].includes(tableName)) {
                await prisma.$queryRaw
                    `ALTER SEQUENCE "${tableName}_id_seq" RESTART WITH 1;`
                    ;
            }
        }
    } catch (err) {
        // eslint-disable-next-line no-console
        console.error(err);
    }
}