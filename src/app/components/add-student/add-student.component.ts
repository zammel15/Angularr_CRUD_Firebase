import { Component, OnInit } from '@angular/core';
import {Student} from '../../student';
import {FormControl} from '@angular/forms';
import {FormsModule} from '@angular/forms';
import {Router} from '@angular/router';
import {StudentService} from '../../services/student/student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
student: Student = {
  email: ' ' ,
  firstName: ' ',
  lastName: ' ' ,
  phone: 0
};
  constructor(public router: Router, public studentService: StudentService) { }

  ngOnInit() {
  }
  mySubmit({value, valid}:  {value: Student , valid: boolean}){
    if (!valid) {
   this.router.navigate(['/add-student']);
    }else {
      console.log(this.student);
      this.studentService.addStudent(value);
      this.router.navigate(['/']);
    }



  }
}
