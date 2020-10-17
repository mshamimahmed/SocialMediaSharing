import { HttpModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { SocialMediaController } from './controller/socialmedia.controller';
import { SocialMedia } from './models/socialmedia.entity';
import { SocialMediaService } from './service/socialMedia.service';

@Module({ 
    imports:[
        HttpModule,
        TypeOrmModule.forFeature([SocialMedia]),
      ],
      controllers: [SocialMediaController],
      providers: [SocialMediaService]
})
export class SocialMediaModule {}
