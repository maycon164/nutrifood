import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsNumber, IsOptional } from "class-validator"

export class ItemDTO {

    @IsOptional()
    id?: number

    @IsOptional()
    @ApiProperty()
    order?: number

    @IsNotEmpty()
    @IsNumber()
    @ApiProperty()
    snack: number

    @IsNotEmpty()
    @IsNumber()
    @ApiProperty()
    quantity: number

    @IsNumber()
    @IsOptional()
    @ApiProperty()
    totalValue?: number
} 