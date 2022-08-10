import { Test } from "@nestjs/testing";
import { SnackRepository } from "../../src/database/repository/SnackRepository";
import { SnackService } from "../../src/snack/snack.service";
import { SnackRepositoryMock } from "./SnackRepositoryMock";
import snackMock from '../../src/mock/data/snack.mock';
import { SnackDTO } from "../../src/snack/entities/SnackDTO";

describe('Snack Service', () => {

    let snackService: SnackService;
    let snackRepository: SnackRepository;

    beforeEach(async () => {

        const moduleRef = await Test.createTestingModule({
            providers: [SnackService, SnackRepository]
        })
            .overrideProvider(SnackRepository)
            .useClass(SnackRepositoryMock)
            .compile()

        snackService = moduleRef.get<SnackService>(SnackService);
        snackRepository = moduleRef.get<SnackRepository>(SnackRepository);
    })

    describe('get all snacks', () => {
        it('should get all snacks', async () => {

            const allSnacks = snackMock;
            expect(await snackService.getAllSnacks()).toEqual(allSnacks);

        })
    })

    describe('get snack by id', () => {
        it('should get snack with id 1', async () => {

            const snack = {
                id: expect.any(Number),
                ...snackMock[0]
            }
            expect(await snackService.getSnackById(1)).toEqual(snack);
        })
    })

    describe('get all snacks by category', () => {
        test('should get all snacks with category dessert', async () => {
            const allDesserts = snackMock.filter(snack => snack.category == 'dessert')
            expect(await snackService.getSnacksByCategory('dessert')).toEqual(allDesserts);
        })
    })

    describe('insert snack', () => {

        it('should insert a snack', async () => {
            const snackToInsert = new SnackDTO();
            snackToInsert.name = 'exemplo';
            snackToInsert.value = 12;
            snackToInsert.image = 'image';
            snackToInsert.category = 'no cat';
            snackToInsert.status = 'available';

            const snackInserted = {
                id: expect.any(Number),
                ...snackToInsert
            }
            expect(await snackService.insertSnack(snackToInsert)).toEqual(snackInserted);
        })

    })


    describe('update snack', () => {
        it('should update snack with id 1', async () => {
            const snackToUpdate = new SnackDTO();
            snackToUpdate.name = 'exemplo de update';
            snackToUpdate.value = 12;
            snackToUpdate.image = 'image';
            snackToUpdate.category = 'no cat';
            snackToUpdate.status = 'available';

            const snackUpdated = {
                id: 1,
                ...snackToUpdate
            }

            const resultUpdated = await snackService.updateSnack(1, snackToUpdate);
            //const snackGetById = await snackService.getSnackById(1);
            expect(resultUpdated).toEqual(snackUpdated);

        })
    })

    describe('delete snack', () => {
        it('should delete snack with id 1', async () => {

            const deletedSnack = snackMock[0];
            expect(await snackService.deleteSnack(1)).toEqual(deletedSnack);

        })
    })


    it("true should be true", () => {
        expect(true).toBe(true);
    })

})