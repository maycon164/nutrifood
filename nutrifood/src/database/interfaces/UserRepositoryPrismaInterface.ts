import { UserDTO } from "src/users/entities/UserDTO"

export interface RepositoryInterface {

    findAll(): Promise<any[]>
    findBy(options: { email?: string, phone?: string, admin?: boolean }): Promise<any>
    findById(): Promise<any>
    insert(user: UserDTO): Promise<any>
    update(id: number, user: UserDTO): Promise<any>
    delete(id: number): void

}