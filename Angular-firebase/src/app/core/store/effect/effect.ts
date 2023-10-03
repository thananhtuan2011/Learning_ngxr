import { ServicesStudentService } from './../../../Services/services-student.service';
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as fromFeature from "../action/student.action";
import { exhaustMap, map, catchError, tap, mergeMap, concatMap, switchMap } from "rxjs/operators";
import { EMPTY, Observable, combineLatest, of } from "rxjs";

import * as studentAction from '../action/student.action'
import { Action } from '@ngrx/store';
import { Student } from 'src/app/model/student';
@Injectable()
export class FeatureEffects {

    // submit object with props
    // => use object props to call HTTP service
    // => 
    loadStudent$ = createEffect(() => this.actions$.pipe(
        ofType(studentAction.loadDataSuccess),
        switchMap(() =>
            this.service.GetAllStudent()


        ),
        map(posts => {
            console.log("postsposts", posts)
            // posts.pipe(
            //     map((dt: any) => {
            //         const data = dt.payload.doc.data();

            //         data.MaSV = dt.payload.doc.id;
            //         // return data;
            //         console.log("map", data)
            //     })
            // )
            studentAction.DataSuccess({ httpResponseModel: posts })

        }


        ),
        catchError(error => of(error))
    ));
    createdStudent$ = createEffect(() => this.actions$.pipe(
        ofType(studentAction.Created),
        switchMap((data: any) =>
        (
            this.service.addStudent(data.payload).pipe(
                map((dt: any) => {
                    studentAction.Created({ payload: dt })
                }),
                catchError((error: Error) =>
                    of(null),
                ),
            )
        )
        ),
        catchError(error => of(error))
    ));

    // createdstudent$ = createEffect(() => this.actions$.pipe(
    //     ofType(studentAction.Created),
    //     // switchMap((data: any) =>
    //     // (
    //     //     console.log("payload", data.payload),
    //     //     this.service
    //     //         .addStudent(
    //     //             data.payload
    //     //         )
    //     //         .then(
    //     //             // map((httpResponseModel: HttpResponseModel) =>
    //     //             //   sampleDataActions.loadDataSuccess({ httpResponseModel }),
    //     //             // ),
    //     //             catchError((error: Error) =>
    //     //                 of(null),
    //     //             ),
    //     //         )),
    //     // ),


    //     map((action: any) => action.payload),
    //     mergeMap((dt: any) =>
    //     (
    //         console.log("cccc", dt),
    //         this.service
    //             .addStudent(dt)
    //             .then(
    //                 map((data: Student) => {
    //                     console.log("ggggg", data)
    //                     // const criteriaDataModel: SearchCriteriaDataModel = {
    //                     //   criteria: searchCriteriaDataModel.criteria,
    //                     //   data,
    //                     // };
    //                     return studentAction.Created({ payload: data });
    //                 })
    //                 ,
    //                 catchError((error: Error) =>
    //                     of(null),
    //                 ),
    //             )
    //     ),

    //     ),

    //     // (

    //     //     console.log("services adđ ", student),
    //     //     this.service
    //     //         .addStudent(student.playload)
    //     //         .then(
    //     //             map((data: any) => {
    //     //                 console.log("vvvvvv", data)
    //     //                 //   const criteriaDataModel: SearchCriteriaDataModel = {
    //     //                 //     criteria: searchCriteriaDataModel.criteria,
    //     //                 //     data,
    //     //                 //   };
    //     //                 //   return sampleDataActions.createDataSuccess({
    //     //                 //     searchCriteriaDataModel: criteriaDataModel,
    //     //                 //   });
    //     //             }),
    //     //             catchError((error: Error) =>
    //     //                 of(null)
    //     //                 //   of(sampleDataActions.createDataFail({ error })),

    //     //             ),
    //     //         )


    //     // ),

    //     // ),
    //     catchError(error => of(error))
    // ));
    //   getId$ = createEffect(
    //     () =>
    //       this.actions$.pipe(
    //         ofType(fromFeature.getStudent),
    //         map(action => action),
    //         exhaustMap(
    //           (obj) => combineLatest([this.service.getOb1(obj), this.service.getOb2()]).pipe(
    //             map(([first, second]) => ({first, second})),
    //             map(resp => fromFeature.setData({data: resp}))
    //           )
    //         )
    //       )
    //   );
    constructor(private actions$: Actions, private service: ServicesStudentService) { }
}
