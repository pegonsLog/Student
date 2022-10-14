import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateStudentDto } from './modules/student/dto/create-student.dto';
import { Student } from './modules/student/entities/student.entity';

@Injectable()
export class AppService {
  constructor(

  ) {}

}
