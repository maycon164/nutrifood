import { SnackRepositoryInterface } from "../../src/database/interfaces/SnackRepositoryInterface";
import { SnackDTO } from "../../src/snack/entities/SnackDTO";
import snackMock from "../../src/mock/data/snack.mock";

export class SnackRepositoryMock implements SnackRepositoryInterface {

    private data = snackMock;

    findAll(): Promise<any[]> {
        return new Promise((resolve, reject) => {
            resolve(this.data)
        })
    }

    findBy(options: { category: string; }): Promise<any[]> {
        const { category } = options;
        const snacks = this.data.filter(snack => snack.category == category);
        return new Promise((resolve, reject) => {
            resolve(snacks);
        })
    }

    findById(id: number): Promise<any> {
        const snack = {
            id: id,
            ...this.data[id - 1]
        }
        return new Promise((resolve, reject) => {
            resolve(snack);
        })

    }

    insert(snack: SnackDTO): Promise<any> {
        this.data.push(snack);

        return new Promise((resolve, reject) => {
            resolve({
                id: this.data.length - 1,
                ...this.data[this.data.length - 1]
            })
        })

    }

    update(id: number, snack: SnackDTO): Promise<any> {
        this.data[id - 1] = snack;

        return new Promise((resolve, reject) => {
            resolve(
                {
                    id: id,
                    ...this.data[id - 1]
                }

            )
        })

    }

    delete(id: number): Promise<any> {
        const snack = this.data[id - 1];
        this.data.splice(id - 1, 1,);
        return new Promise((resolve, reject) => {
            resolve(snack);
        })
    }

}