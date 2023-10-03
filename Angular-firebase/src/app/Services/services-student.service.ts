import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Student } from '../model/student';
import { Observable, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesStudentService {
  itemsCollection!: AngularFirestoreCollection<any>
  constructor(private student_services: AngularFirestore,

  ) { this.itemsCollection = student_services.collection<any>('Student'); }


  addStudent(student: Student): Observable<any> {
    // student.MaSV = this.student_services.createId();

    let item = {
      TenSV: student.TenSV,
      MaSV: this.student_services.createId()
    }

    console.log("studentstudentstudent new", item)
    // console.log("kkkkk", student)
    // // student.MaSV = "1"
    // var promise = new Promise((resolve, reject) => {
    //   resolve(this.itemsCollection.doc(student.MaSV).set(student))
    // });
    // return promise;
    return of(this.student_services.collection('/Student').add(item))
  }
  GetAllStudent() {
    return of(this.student_services.collection('/Student').valueChanges());
  }
  deleteStudent(student: Student) {
    this.student_services.doc('/Student/' + student.MaSV).delete();
  }
  async getIdCollection(idsv: any) {

    this.student_services.collection('Student').snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data: any = a.payload.doc.data();
        const id = a.payload.doc.id;
        console.log('id', id, 'data', data);
        return { id, data };
      });
    })).subscribe();


  }
}
