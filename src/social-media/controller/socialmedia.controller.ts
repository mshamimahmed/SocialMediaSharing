import { Body, Controller, Get, Post, UploadedFiles } from "@nestjs/common";
import { UseInterceptors } from "@nestjs/common/decorators/core/use-interceptors.decorator";
import { FilesInterceptor } from "@nestjs/platform-express/multer/interceptors/files.interceptor";
import { SocialMediaDto } from "../models/socialmedia.dto";
import { SocialMediaService } from "../service/socialMedia.service";


@Controller("resturant")
export class SocialMediaController {
    constructor(private readonly socialMediaService: SocialMediaService) {}

    @Post("facebookPost")
    @UseInterceptors(FilesInterceptor('file'))
    async shareOnFacebook(@UploadedFiles() file, @Body() social: SocialMediaDto ) {
      
        return await this.socialMediaService.postOnFacebook(file,social);
    }
 
    @Post("user/create")
    async createUser(@Body() user: SocialMediaDto) {
        // return await this.userService.createUser(user)
    }
}