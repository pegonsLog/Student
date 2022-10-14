import { Column, PrimaryGeneratedColumn } from "typeorm";

export class CreateStudentDto {

    @PrimaryGeneratedColumn()
    id: number
    
    @Column()
    name: string;
  
    @Column()
    key: string;
}
