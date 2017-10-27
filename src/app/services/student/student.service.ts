import { Injectable } from '@angular/core';
import { AngularFireDatabase , FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';
import {Observable } from 'rxjs' ;
import {Student} from '../../student';

@Injectable()
export class StudentService {
  students: FirebaseListObservable<any[]>;
student: FirebaseObjectObservable<any>;

  constructor( public  af: AngularFireDatabase) {
    this.students = this.af.list('/Students') as FirebaseListObservable<Student[]>;
  }
  getStudent(){
    return this.students ;
  }
  addStudent(Student: Student){
    return this.students.push(Student);
  }
  getStudents(id: string){
    this.student = this.af.object('/Students/' + id) as FirebaseObjectObservable<Student>;
    return this.student;

  }
  deleteStudent(id: string){
    return this.students.remove(id) ;
  }
  updateStudent(id: string , student: Student){
    return this.students.update(id, student) ;
  }
}
