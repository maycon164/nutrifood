import { SnackDTO } from "src/snack/entities/SnackDTO"

export interface SnackRepositoryInterface {

    findAll(): Promise<any[]>
    findBy(options: { category: string }): Promise<any[]>
    findById(id: number): Promise<any>
    insert(snack: SnackDTO, file?: Express.Multer.File): Promise<any>
    update(id: number, snack: SnackDTO, file?: Express.Multer.File): Promise<any>
    delete(id: number): Promise<any>

}