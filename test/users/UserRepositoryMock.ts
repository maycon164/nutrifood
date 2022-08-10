import { UserRepositoryInterface } from "src/database/interfaces/UserRepositoryInterface";
import { UserDTO } from "../../src/users/entities/UserDTO";
import userMock from "../../src/mock/data/user.mock";
import { isEmail } from "class-validator";

export class userRepositoryMock implements UserRepositoryInterface {

    private data = userMock;

    findAll(): Promise<any[]> {
        return new Promise((resolve, reject) => {
            resolve(this.data);
        })
    }

    findBy(options: { email?: string; phone?: string; admin?: boolean; }): Promise<any> {
        const { email: emailToSearch } = options;

        const [user] = this.data.filter(user => {
            if (user.email == emailToSearch) {
                return true
            }
        })

        return new Promise((resolve, reject) => {
            resolve(user);
        })
    }

    findById(): Promise<any> {
        throw new Error("Method not implemented.");
    }

    getOrdersById(id: number): Promise<any> {

        return new Promise((resolve, reject) => {
            resolve(
                {
                    id: 1,
                    ...userMock[id - 1],
                    order: []
                }
            )

        });

    }

    insert(user: UserDTO): Promise<any> {
        this.data.push(user.toSave())

        return new Promise((resolve, reject) => {
            resolve(
                {
                    id: 10,
                    ...this.data[this.data.length - 1]
                }
            )

        });
    }

    update(id: number, user: UserDTO): Promise<any> {
        throw new Error("Method not implemented.");
    }

    delete(id: number): void {
        throw new Error("Method not implemented.");
    }

}