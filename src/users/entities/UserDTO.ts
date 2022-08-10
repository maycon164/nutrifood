import { ApiProperty } from "@nestjs/swagger"
import { IsBoolean, IsEmail, IsNumber, IsNumberString, IsOptional, isString, IsString } from "class-validator"

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

    @IsString()
    address: string

    @IsNumberString()
    num: number

    toSave() {
        return {
            name: this.name,
            email: this.email,
            password: this.password,
            phone: this.phone ? this.phone : '1111111',
            isAdmin: this.admin,
            address: this.address,
            num: Number(this.num)
        }
    }
}