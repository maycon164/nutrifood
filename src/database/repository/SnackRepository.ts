import { Injectable } from "@nestjs/common";
import { CloudinaryService } from "src/services/images/cloudinary.service";
import { SnackDTO } from "src/snack/entities/SnackDTO";
import { SnackRepositoryInterface } from "../interfaces/SnackRepositoryInterface";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class SnackRepository implements SnackRepositoryInterface {

    constructor(
        private readonly prisma: PrismaService,
        private readonly cloudinary: CloudinaryService,
    ) { }

    findAll(): Promise<any[]> {
        return this.prisma.snack.findMany();
    }
    findBy(options: { category: string; }): Promise<any[]> {
        return this.prisma.snack.findMany({
            where: options
        })
    }

    findById(id: number): Promise<any> {
        return this.prisma.snack.findUnique(
            {
                where: {
                    id: id
                }
            }
        );
    }

    async insert(snack: SnackDTO, file: Express.Multer.File): Promise<any> {

        const { url, imageId } = await this.cloudinary.uploadImage(file);
        snack.image = url;
        snack.imageId = imageId;

        return await this.prisma.snack.create({
            data: snack
        })

    }

    async update(id: number, snack: SnackDTO, file?: Express.Multer.File): Promise<any> {

        if (file) {

            const previousImageId = await this.getImageId(id);
            const result = await this.cloudinary.destroyImage(previousImageId);

            if (result) {
                const { url, imageId } = await this.cloudinary.uploadImage(file);
                snack.image = url;
                snack.imageId = imageId;
            }

        }

        return await this.prisma.snack.update({
            where: { id: id },
            data: snack.toUpdate()
        })
    }

    async delete(id: number): Promise<any> {

        const previousImageId = await this.getImageId(id);
        const result = await this.cloudinary.destroyImage(previousImageId);

        return await this.prisma.snack.delete({
            where: {
                id: id
            }
        })
    }

    async getImageId(id: number) {
        const { imageId: previousImageId } = await this.prisma.snack.findUnique({
            where: { id: id },
            select: { imageId: true }
        });
        return previousImageId;

    }

}