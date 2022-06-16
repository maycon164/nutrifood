import { ApiProperty } from "@nestjs/swagger";
import { IsNumberString, IsOptional, IsString } from "class-validator";

export class SnackDTO {

    @IsOptional()
    id: number

    @IsString()
    @ApiProperty()
    name: string

    @IsString()
    @IsOptional()
    @ApiProperty()
    description: string

    @IsNumberString()
    @ApiProperty()
    value: number

    @IsString()
    @IsOptional()
    @ApiProperty()
    image: string

    @IsString()
    @ApiProperty()
    category: string

    @IsString()
    @ApiProperty()
    status: string
}