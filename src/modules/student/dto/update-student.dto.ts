import { PartialType } from '@nestjs/mapped-types';
import { PrimaryGeneratedColumn } from 'typeorm';
import { CreateStudentDto } from './create-student.dto';

export class UpdateStudentDto extends PartialType(CreateStudentDto) {
    @PrimaryGeneratedColumn()
    id: number
}
