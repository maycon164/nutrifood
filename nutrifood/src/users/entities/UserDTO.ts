import { ApiProperty } from "@nestjs/swagger"
import { IsBoolean, IsEmail, IsNumber, isNumber, IsOptional, IsPhoneNumber, IsString } from "class-validator"

export class UserDTO {


    id?: number

    @IsOptional()
    @IsString()
    @ApiProperty()
    name?: string

    @IsOptional()
    @IsEmail()
    @ApiProperty()
    email?: string

    @IsOptional()
    @IsString()
    @ApiProperty()
    password?: string

    @IsOptional()
    @IsString()
    @ApiProperty()
    phone?: string

    @IsOptional()
    @IsBoolean()
    @ApiProperty()
    admin?: boolean

    @IsOptional()
    @IsNumber()
    @ApiProperty()
    address?: number

    toSave() {
        return {
            name: this.name,
            email: this.email,
            password: this.password,
            phone: this.phone,
            isAdmin: this.admin
        }
    }
}