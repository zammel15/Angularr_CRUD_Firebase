import { Component, OnInit } from '@angular/core';
import {StudentService} from '../../services/student/student.service';
import {Student} from '../../student';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
students: Student[];
totalStudents: number ;

  constructor( public studentService: StudentService) { }

  ngOnInit() {
    this.studentService.getStudent().subscribe(students => {
      this.students = students ;
      console.log(this.students);
      this.getTotalStudents();
    });
  }
  getTotalStudents(){
let  total = 0 ;
for (let index = 0 ; index  < this.students.length; index++){
  total +=  1 ;
}
this.totalStudents = total ;
    console.log(this.totalStudents);

  }

}
