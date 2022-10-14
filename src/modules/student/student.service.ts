import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { Student } from './entities/student.entity';


@Injectable()
export class StudentService {

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
