import { Test } from "@nestjs/testing";
import userMock from "../../src/mock/data/user.mock";
import { UserRepository } from "../../src/database/repository/UserRepository";
import { UserService } from "../../src/users/user.service";
import { userRepositoryMock } from "./UserRepositoryMock";
import { UserDTO } from "../../src/users/entities/UserDTO";


describe('User Service', () => {

    let userService: UserService;
    let userRepository: UserRepository;

    beforeEach(async () => {

        const moduleRef = await Test.createTestingModule({
            providers: [UserService, UserRepository]
        })
            .overrideProvider(UserRepository)
            .useClass(userRepositoryMock)
            .compile();

        userService = moduleRef.get<UserService>(UserService);
        userRepository = moduleRef.get<UserRepository>(UserRepository);
    })

    describe('get all users', () => {
        it("should return all users", async () => {
            const users = [...userMock];
            //jest.spyOn(userRepository, 'findAll').mockResolvedValue([{ name: 'ronaldo' }]);
            expect(await userService.getAllUsers()).toBe(userMock);
        })
    })

    describe('insert user', () => {

        it("should insert a user", async () => {

            const userToInsert = new UserDTO();
            userToInsert.name = "Fulano";
            userToInsert.email = "fulano@gmail.com";
            userToInsert.password = "senha123";
            userToInsert.phone = "119436747";

            const userInserted = {
                id: expect.any(Number),
                ...userToInsert.toSave()
            }
            expect(await userService.insertUser(userToInsert)).toEqual(userInserted);
        })

    })

    describe('get order by user', () => {
        it("should get user and all his orders of user with id 1", async () => {

            const userAndOrder = {
                id: 1,
                ...userMock[0],
                order: []
            }

            expect(await userService.getOrderByUser(1)).toEqual(userAndOrder);
        })
    })

    describe("find one by email", () => {

        it(`find user with email ${userMock[0].email}`, async () => {
            const user = userMock[0];
            expect(await userService.findOneByEmail(`${user.email}`)).toEqual(user);
        })

    })

})