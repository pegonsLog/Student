import { Module } from '@nestjs/common';
import { StudentModule } from './modules/student/student.module';


@Module({
  imports: [ StudentModule],
})
export class AppModule {

}
