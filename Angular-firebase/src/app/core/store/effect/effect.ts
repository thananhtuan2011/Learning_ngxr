import { ServicesStudentService } from './../../../Services/services-student.service';
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as fromFeature from "../action/student.action";
import { exhaustMap, map, catchError, tap, mergeMap } from "rxjs/operators";
import { EMPTY, combineLatest, of } from "rxjs";

import * as studentAction from '../action/student.action'
@Injectable()
export class FeatureEffects {

    // submit object with props
    // => use object props to call HTTP service
    // => 
    loadStudent$ = createEffect(() => this.actions$.pipe(
        ofType(studentAction.getSt),
        mergeMap(() => this.service.GetAllStudent()),
        map(posts => studentAction.getStudent({ data: posts })),
        catchError(error => of(error))
    ));

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
