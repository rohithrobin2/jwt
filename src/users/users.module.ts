import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostEntity } from 'src/model/post.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PostEntity])],
  providers: [UsersService],
  exports: [UsersService]
})
export class UsersModule {}
