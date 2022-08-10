import { ApiProperty } from "@nestjs/swagger"
import { ArrayNotEmpty, IsNotEmpty, IsNumber, IsOptional, IsString, ValidateNested } from "class-validator"
import { ItemDTO } from "./ItemDTO"

export class OrderDTO {

    @IsOptional()
    id: number

    @IsOptional()
    user: number

    @ArrayNotEmpty()
    @ApiProperty()
    @ValidateNested()
    items: [ItemDTO]

    @IsNumber()
    @ApiProperty()
    totalValue: number

    @IsString()
    @ApiProperty()
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
            return { snackId: item.snack, orderId: this.id, quantity: item.quantity, totalValue: item.totalValue }
        })
    }
}