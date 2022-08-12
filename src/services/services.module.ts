import { Module } from "@nestjs/common";
import { CloudinaryService } from "./images/cloudinary.service";
import { CloudinaryProvider } from "./providers/cloudinary.provider";

@Module({
    providers: [CloudinaryProvider, CloudinaryService],
    exports: [CloudinaryProvider, CloudinaryService],
})

export class ServicesModule { }