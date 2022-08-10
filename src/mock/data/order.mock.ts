const items = [
    {
        orderId: 1,
        snackId: 1,
        quantity: 2
    },
    {
        orderId: 1,
        snackId: 2,
        quantity: 1
    },

    {
        orderId: 1,
        snackId: 3,
        quantity: 4
    },
    {
        orderId: 2,
        snackId: 2,
        quantity: 2
    },
    {
        orderId: 2,
        snackId: 4,
        quantity: 1
    },

    {
        orderId: 2,
        snackId: 5,
        quantity: 4
    },
    {
        orderId: 3,
        snackId: 1,
        quantity: 2
    },
    {
        orderId: 4,
        snackId: 1,
        quantity: 2
    },
    {
        orderId: 4,
        snackId: 2,
        quantity: 1
    },

    {
        orderId: 4,
        snackId: 3,
        quantity: 4
    }

]

const orders = [
    {
        userId: 1,
        totalValue: 100.99,
        payment: "DEBIT_CARD",
    },

    {
        userId: 1,
        totalValue: 120.99,
        payment: "PIX",
    },
    {
        userId: 3,
        totalValue: 10.99,
        payment: "CREDIT_CARD",
    },

    {
        userId: 3,
        totalValue: 100.99,
        payment: "TICKET",
    }

]

export { orders, items }