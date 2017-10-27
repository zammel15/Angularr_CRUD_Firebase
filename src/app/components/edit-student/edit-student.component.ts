import { Component, OnInit } from '@angular/core';
import {Student} from '../../student';
import {StudentService} from '../../services/student/student.service';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {
  id: string;
  student: Student = {
    email: ' ',
    firstName: '',
    lastName: '',
    phone: 0


  };

  constructor(public studentService: StudentService, public router: Router, public activateRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.id = this.activateRoute.snapshot.params['id'];
    this.studentService.getStudents(this.id).subscribe(student => {
      this.student = student;
    });
  }

  mySubmit({value, valid}: { value: Student, valid: boolean }) {
    if (!valid) {
      this.router.navigate(['edit-student/' + this.id]);
    } else {
      console.log(this.student);
      this.studentService.updateStudent(this.id , value);
      this.router.navigate(['student/' + this.id]);
    }

  }
}
