import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from 'src/database/database.module';
import { StudentController } from './student.controller';
import { Student } from './student.entity';
import { studentProviders } from './student.providers';
import { StudentService } from './student.service';

@Module({
  imports: [TypeOrmModule.forFeature([Student]), DatabaseModule],
  controllers: [StudentController],
  providers: [...studentProviders, StudentService],
  exports: [StudentModule, TypeOrmModule],
})
export class StudentModule {}
