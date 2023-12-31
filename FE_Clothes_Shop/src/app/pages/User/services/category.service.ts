import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private router: Router, private http: HttpClient) { }

  getList(): Observable<any> {
    return this.http
      .get<any>('api/v1/category')
      .pipe(
        map((z) => {
          return z;
        })
      );
  }

  save(category: any): Observable<any> {
    console.log(category);
    return this.http
      .post<any>('api/v1/category', category)
      .pipe(
        map((z) => {
          return z;
        })
      );
  }

  delete(id: any): Observable<any> {
    return this.http
      .delete<any>('api/v1/category/' + id)
      .pipe(
        map((z) => {
          return z;
        })
      );
  }
}
