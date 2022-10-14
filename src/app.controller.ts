import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateStudentDto } from './modules/student/dto/create-student.dto';

@Controller('student')
export class AppController {
  constructor(private readonly appService: AppService) {}



}
