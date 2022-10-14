import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { Student } from './entities/student.entity';

@Injectable()
export class StudentService {
  constructor(
  ){}
  private readonly students: Student[] = [
    {
      id: 1,
      name: 'Pedro',
      key: 'Qualquer',
    },
    {
      id: 2,
      name: 'Paulo',
      key: 'Dois',
    },
  ];

  create(createStudentDto: CreateStudentDto) {
    return 'This action adds a new student';
  }

  findAll() {
    return this.students;
  }

  findOne(id: number) {
    return '';
  }

  update(id: number, updateStudentDto: UpdateStudentDto) {
    return `This action updates a #${id} student`;
  }

  remove(id: number) {
    return `This action removes a #${id} student`;
  }
}
