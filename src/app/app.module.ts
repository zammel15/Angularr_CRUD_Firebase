import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import {FormsModule} from '@angular/forms';

import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { StudentInfoComponent } from './components/student-info/student-info.component';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { EditStudentComponent } from './components/edit-student/edit-student.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SettingComponent } from './components/setting/setting.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import {StudentService} from './services/student/student.service';
import {StudentsComponent} from './components/students/students.component';

export const firebaseConfig = {

  apiKey: 'AIzaSyBuxwaAw_MSSj5Csra0i1HI_mH7UuUTAAQ',
  authDomain: 'studentmanagment-6d9f0.firebaseapp.com',
  databaseURL: 'https://studentmanagment-6d9f0.firebaseio.com',
  projectId: 'studentmanagment-6d9f0',
  storageBucket: 'studentmanagment-6d9f0.appspot.com',
  messagingSenderId: '766755573874'

};



const appRoute: Routes = [
  {path : '' , component: DashboardComponent},
  {path : 'register' , component: RegisterComponent},
  {path : 'add-student' , component: AddStudentComponent},
  {path : 'student/:id' , component: StudentInfoComponent},
  {path : 'edit-student/:id' , component: EditStudentComponent},
  {path : 'login' , component: LoginComponent },



];
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    StudentInfoComponent,
    AddStudentComponent,
    EditStudentComponent,
    NavbarComponent,
    SidebarComponent,
    LoginComponent,
    RegisterComponent,
    SettingComponent,
    PageNotFoundComponent,
    StudentsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoute),
    AngularFireModule.initializeApp(firebaseConfig),


  ],
  providers: [StudentService
  ,
    AngularFireAuth,
    AngularFireDatabase,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
