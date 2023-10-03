import { Component, OnInit } from '@angular/core';
import { Student } from '../model/student';
import { AuthService } from '../Services/auth.service';
import { ServicesStudentService } from '../Services/services-student.service';
import { Store, select } from '@ngrx/store';
import { Created, DataSuccess, getSt, getStudent, loadDataSuccess } from '../core/store/action/student.action';
import { Observable, take } from 'rxjs';
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
  // getSearchCriteria() {
  //   return {
  //     size: this.pageable.pageSize,
  //     page: this.pageable.pageNumber,
  //     searchTerms: { ...this.searchTerms },
  //     sort: (this.pageable.sort = this.sorting),
  //   };
  // }
  GetAllStudentStore() {
    // this.store.dispatch(getSt());
    this.store.dispatch(DataSuccess({ httpResponseModel: {} }));
  }
  test() {
    // this.store.select(currentPostSelector).pipe(take(1)).subscribe(
    //   s => {
    //     console.log("bbbbb", s)
    //   }
    // );

    var id = this.student_services.getIdCollection("IeAZKfrd6iZja4hOIhEe").then(
      res => {
        console.log("resresres", res)
      }
    )
    console.log("bbbbb", id)
  }
  GetAllStuden() {
    // this.student_services.GetAllStudent().subscribe((res: any) => {
    //   console.log("data", res)
    //   this.listStudent = res
    //   // this.listStudent = res.map((e: any) => {

    //   //   const data = e.payload.doc.data();

    //   //   data.MaSV = e.payload.doc.id;
    //   //   return data;
    //   // })

    //   console.log("listStudent", this.listStudent)
    // })

  }
  Delete(student: Student) {
    this.student_services.deleteStudent(student);
  }
  ngOnInit(): void {
    // this.GetAllStuden();
    this.GetAllStudentStore();

  }
  logout() {
    this.auth.logout();
  }
  addStudent() {
    this.StudentObj.MaSV = 'ttt',
      this.StudentObj.TenSV = this.TenSV
    const payload: Student = {
      MaSV: "",
      TenSV: this.TenSV
    };
    console.log(" this.payload ", payload)

    // this.store.dispatch(Created({ payload }));

    this.store.dispatch(
      Created({ payload }),
    );
    // this.student_services.addStudent(this.StudentObj);
  }
}
