import { IsNumber, IsOptional, IsString } from "class-validator"
import { ItemDTO } from "./ItemDTO"

export class OrderDTO {

    @IsOptional()
    id: number

    @IsOptional()
    user: number

    items: [ItemDTO]

    @IsNumber()
    totalValue: number

    @IsString()
    payment: string

    toSave() {
        return {
            userId: this.user,
            totalValue: this.totalValue,
            payment: this.payment,
            //items: { createMany: this.getItemsToSave() }
        }
    }

    getItemsToSave() {
        return this.items.map(item => {
            return { snackId: item.id, orderId: this.id, quantity: item.quantity }
        })
    }
}