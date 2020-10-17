import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SocialMediaModule } from './social-media/social-media.module';
import { config } from 'dotenv';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { modules } from './modules';
import { entities } from './entities';
config()
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DBHOST,
      port: Number.parseInt(process.env.PORT),
      username: process.env.DBUSERNAME,
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
      synchronize: true,
      entities: entities,
    }),
    ...modules
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
