import { Component, OnInit } from '@angular/core';
import { Student } from '../model/student';
import { AuthService } from '../Services/auth.service';
import { ServicesStudentService } from '../Services/services-student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  MaSV !:string;
  TenSV !:string
StudentObj:Student=
{
    MaSV:"",
    TenSV:""

};
  constructor( private student_services:ServicesStudentService,private auth:AuthService) { }
listStudent  :Student[]=[];
  GetAllStuden()
  {
    this.student_services.GetAllStudent().subscribe((res:any)=>
      {
      this.listStudent= res.map((e:any)=>
        {
          
          const data = e.payload.doc.data();
          data.MaSV = e.payload.doc.id;
          return data;
        })

        console.log("listStudent",this.listStudent)
      })
   
  }
  Delete(student:Student)
  {
      this.student_services.deleteStudent(student);
  }
  ngOnInit(): void {
    this.GetAllStuden();
  }
  logout()
  {
    this.auth.logout();
  }
  addStudent()
  {
   this.StudentObj.MaSV='',
   this.StudentObj.TenSV=this.TenSV
    this.student_services.addStudent(this.StudentObj);
  }
}
