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

    @IsOptional()
    imageId: string

    @IsString()
    @ApiProperty()
    category: string

    @IsString()
    @ApiProperty()
    status: string


    toUpdate() {
        return {
            name: this.name,
            category: this.category,
            status: this.status,
            value: this.value,
            image: this.image,
            imageId: this.imageId
        }
    }
}