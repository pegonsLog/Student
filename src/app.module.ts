import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { StudentModule } from './modules/entities/students/student.module';


@Module({
  imports: [TypeOrmModule.forRoot(), StudentModule],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
