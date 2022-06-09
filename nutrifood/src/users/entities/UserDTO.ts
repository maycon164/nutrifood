import { IsBoolean, IsEmail, isNumber, IsOptional, IsPhoneNumber, IsString } from "class-validator"

export class UserDTO {
    id?: number
    @IsOptional()
    @IsString()
    name?: string

    @IsOptional()
    @IsEmail()
    email?: string

    @IsOptional()
    @IsString()
    password?: string

    @IsOptional()
    @IsString()
    phone?: string

    @IsOptional()
    @IsBoolean()
    isAdmin?: boolean

    address?: string
}