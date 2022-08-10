import { SnackDTO } from "src/snack/entities/SnackDTO"

export interface SnackRepositoryInterface {

    findAll(): Promise<any[]>
    findBy(options: { category: string }): Promise<any[]>
    findById(id: number): Promise<any>
    insert(snack: SnackDTO): Promise<any>
    update(id: number, snack: SnackDTO): Promise<any>
    delete(id: number): Promise<any>

}