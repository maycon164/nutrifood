import { UserDTO } from "src/users/entities/UserDTO"

export interface UserRepositoryInterface {

    findAll(): Promise<any[]>
    findBy(options: { email?: string, phone?: string, admin?: boolean }): Promise<any>
    findById(): Promise<any>
    getOrdersById(id: number): Promise<any>
    insert(user: UserDTO): Promise<any>
    update(id: number, user: UserDTO): Promise<any>
    delete(id: number): void

}