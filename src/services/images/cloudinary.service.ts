import { Injectable } from "@nestjs/common";
import { v2 } from 'cloudinary';

@Injectable()
export class CloudinaryService {

    async uploadImage(file: Express.Multer.File) {
        try {
            const upload = await v2.uploader.upload(file.path);

            return {
                url: upload.secure_url,
                imageId: upload.public_id,
            };

        } catch (error) {
            console.error(error);
        }
    }

    async destroyImage(id: string) {
        try {
            const { result } = await v2.uploader.destroy(id);
            console.log(result);
            if (result == 'ok') {
                return true;
            }
            return false;
        } catch (error) {
            console.error(error);
        }
        return false;
    }

}