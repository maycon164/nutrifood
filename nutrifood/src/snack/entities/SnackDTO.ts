import { IsNumberString, IsOptional, IsString } from "class-validator";

export class SnackDTO {

    @IsOptional()
    id: number

    @IsString()
    name: string

    @IsString()
    @IsOptional()
    description: string

    @IsNumberString()
    value: number

    @IsString()
    @IsOptional()
    image: string

    @IsString()
    category: string

    @IsString()
    status: string
}