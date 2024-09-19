import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './database/database.module';
import { NovelsModule } from './novels/novels.module';
import { ChaptersModule } from './chapters/chapters.module';
import { PostsModule } from './posts/posts.module';
import { AppController } from './app.controller';
import { MulterModule } from '@nestjs/platform-express';
import { AuthorsModule } from './authors/authors.module';
import { FavouritesModule } from './favourites/favourites.module';
import { TagsModule } from './tags/tags.module';
import { CategoriesModule } from './categories/categories.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserService } from './user/user.service';
import { DatabaseService } from './database/database.service';
import { JwtService } from '@nestjs/jwt';

import { UserController } from './user/user.controller';

import { join } from 'path';

@Module({
  controllers: [AppController, UserController],
  providers: [UserService, DatabaseService, JwtService, ConfigService],
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    MulterModule.register({
      dest: './public',
    }),
    UserModule,
    AuthModule,
    DatabaseModule,
    NovelsModule,
    ChaptersModule,
    PostsModule,
    AuthorsModule,
    FavouritesModule,
    TagsModule,
    CategoriesModule,
  ],
})
export class AppModule {}
