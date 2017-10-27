import { Component, OnInit } from '@angular/core';
import {Student} from '../../student';
import {StudentService} from '../../services/student/student.service';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-student-info',
  templateUrl: './student-info.component.html',
  styleUrls: ['./student-info.component.css']
})
export class StudentInfoComponent implements OnInit {

  id: string;
  student: Student ;
  constructor(public studentService: StudentService , public router: Router , public activateRouter: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activateRouter.snapshot.params['id'] ;
    this.studentService.getStudents(this.id).subscribe(student => {
      this.student = student   ;
      console.log(this.student) ;

    });
  }
  myDelete(){
    if (confirm('Are you sur ! :( ')){
      this.studentService.deleteStudent(this.id);
      this.router.navigate(['/']);
    }

  }

}
