import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Student } from '../model/student';

@Injectable({
  providedIn: 'root'
})
export class ServicesStudentService {
  itemsCollection!: AngularFirestoreCollection<any>
  constructor(private student_services: AngularFirestore,

  ) { this.itemsCollection = student_services.collection<any>('Student'); }


  addStudent(student: Student) {
    student.MaSV = this.student_services.createId();
    // student.MaSV = "1"
    this.itemsCollection.doc(student.MaSV).set(student)
    // this.student_services.collection('/Student').add(student)
  }
  GetAllStudent() {
    return this.student_services.collection('/Student').valueChanges();
  }
  deleteStudent(student: Student) {
    this.student_services.doc('/Student/' + student.MaSV).delete();
  }
}
