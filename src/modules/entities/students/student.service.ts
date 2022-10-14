import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import CreateStudentDto from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { Student } from './student.entity';



@Injectable()
export class StudentService {
  constructor(
    @Inject('STUDENT_REPOSITORY')
    private studentRepository: Repository<Student>,
  ) {}

  private readonly students: Student[] = [];

  create(createStudentDto: CreateStudentDto) {
    return this.students.push(createStudentDto)
  }

  findAll() {
    return this.students;
  }

  findOne(id: number) {
    return this.students.find((student) => student.id = id);
  }

  update(id: number, updateStudentDto: UpdateStudentDto) {

    return this.update(id, updateStudentDto);
  }

  remove(id: number) {
    return this.remove(id);
  }
}
