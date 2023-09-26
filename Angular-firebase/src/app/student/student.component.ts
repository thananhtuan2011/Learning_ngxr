import { Component, OnInit } from '@angular/core';
import { Student } from '../model/student';
import { AuthService } from '../Services/auth.service';
import { ServicesStudentService } from '../Services/services-student.service';
import { Store, select } from '@ngrx/store';
import { getSt, getStudent } from '../core/store/action/student.action';
import { Observable } from 'rxjs';
import { currentPostSelector } from '../core/store/selector/student.selector';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  MaSV !: string;
  TenSV !: string
  StudentObj: Student =
    {
      MaSV: "",
      TenSV: ""

    };
  count$: Observable<any>;
  constructor(private student_services: ServicesStudentService, private auth: AuthService,
    private store: Store<any>
  ) {
    // this.count$ = store.select('counter');
    this.count$ = this.store.pipe(select(currentPostSelector))

  }
  listStudent: Student[] = [];
  GetAllStudentStore() {
    this.store.dispatch(getSt());
  }
  GetAllStuden() {
    this.student_services.GetAllStudent().subscribe((res: any) => {
      console.log("data", res)
      this.listStudent = res
      // this.listStudent = res.map((e: any) => {

      //   const data = e.payload.doc.data();

      //   data.MaSV = e.payload.doc.id;
      //   return data;
      // })

      console.log("listStudent", this.listStudent)
    })

  }
  Delete(student: Student) {
    this.student_services.deleteStudent(student);
  }
  ngOnInit(): void {
    // this.GetAllStuden();
    this.GetAllStudentStore();
    this.count$.subscribe(res => {
      console.log("ttttt", res)
    })
  }
  logout() {
    this.auth.logout();
  }
  addStudent() {
    this.StudentObj.MaSV = '',
      this.StudentObj.TenSV = this.TenSV
    this.student_services.addStudent(this.StudentObj);
  }
}
