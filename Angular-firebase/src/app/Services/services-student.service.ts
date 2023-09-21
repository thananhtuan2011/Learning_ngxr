import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Student } from '../model/student';

@Injectable({
  providedIn: 'root'
})
export class ServicesStudentService {

  constructor(private student_services:AngularFirestore) { }


  addStudent(student:Student)
  {
    student.MaSV=this.student_services.createId();
    this.student_services.collection('/Student').add(student)
  }
  GetAllStudent()
  {
    return this.student_services.collection('/Student').snapshotChanges();
  }
  deleteStudent(student : Student) {
    this.student_services.doc('/Student/'+student.MaSV).delete();
 }
}
