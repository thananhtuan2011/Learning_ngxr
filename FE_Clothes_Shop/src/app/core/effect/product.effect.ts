import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
// import { Update } from '@ngrx/entity';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import * as ProductDataActions from '../action/product.action';
import { ProductService } from 'src/app/pages/User/services/product.service';

/* @export
 * @class SampleDataEffects
 */
@Injectable()
export class ProductEffects {
    /* @type {Observable<Action>}
     * @memberof SampleDataEffects
     */
    loadData$: Observable<Action> = createEffect(() =>
        this.actions.pipe(
            ofType(ProductDataActions.loadData),
            map((action) => action),
            switchMap(() =>
                this.product_services
                    .getListSPHome()
                    .pipe(
                        map((data: any) =>
                        (
                            ProductDataActions.loadDataSuccess({ data })
                        ),
                        ),
                        catchError((error: Error) =>
                            of(ProductDataActions.loadDataFail({ error })),
                        ),
                    ),
            ),
        ),
    );

    /* @type {Observable<Action>}
     * @memberof SampleDataEffects
     */
    //   createData$: Observable<Action> = createEffect(() =>
    //     this.actions.pipe(
    //       ofType(sampleDataActions.createData),
    //       map((action) => action.searchCriteriaDataModel),
    //       switchMap((searchCriteriaDataModel: SearchCriteriaDataModel) =>
    //         this.sampledataservice
    //           .saveSampleData(searchCriteriaDataModel.data)
    //           .pipe(
    //             map((data: SampleDataModel) => {
    //               const criteriaDataModel: SearchCriteriaDataModel = {
    //                 criteria: searchCriteriaDataModel.criteria,
    //                 data,
    //               };
    //               return sampleDataActions.createDataSuccess({
    //                 searchCriteriaDataModel: criteriaDataModel,
    //               });
    //             }),
    //             catchError((error: Error) =>
    //               of(sampleDataActions.createDataFail({ error })),
    //             ),
    //           ),
    //       ),
    //     ),
    //   );

    //   /* @type {Observable<Action>}
    //    * @memberof SampleDataEffects
    //    */
    //   createDataSuccess$: Observable<Action> = createEffect(() =>
    //     this.actions.pipe(
    //       ofType(sampleDataActions.createDataSuccess),
    //       map((action) =>
    //         sampleDataActions.loadData({
    //           sampleDataModel: action.searchCriteriaDataModel.criteria,
    //         }),
    //       ),
    //     ),
    //   );

    /* @type {Observable<Action>}
     * @memberof SampleDataEffects
     */
    //   deleteData$: Observable<Action> = createEffect(() =>
    //     this.actions.pipe(
    //       ofType(sampleDataActions.deleteData),
    //       map((action) => action.searchCriteriaDataModel),
    //       switchMap((searchCriteriaDataModel: any) =>
    //         this.sampledataservice
    //           .deleteSampleData(searchCriteriaDataModel.data.id)
    //           .pipe(
    //             map(() =>
    //               sampleDataActions.deleteDataSuccess({ searchCriteriaDataModel }),
    //             ),
    //             catchError((error: Error) =>
    //               of(sampleDataActions.deleteDataFail({ error })),
    //             ),
    //           ),
    //       ),
    //     ),
    //   );

    /* @type {Observable<Action>}
     * @memberof SampleDataEffects
     */
    //   deleteDataSuccess$: Observable<Action> = createEffect(() =>
    //     this.actions.pipe(
    //       ofType(sampleDataActions.deleteDataSuccess),
    //       map((action) =>
    //         sampleDataActions.loadData({
    //           sampleDataModel: action.searchCriteriaDataModel.data,
    //         }),
    //       ),
    //     ),
    //   );

    /* @type {Observable<Action>}
     * @memberof SampleDataEffects
     */
    //   updateData$: Observable<Action> = createEffect(() =>
    //     this.actions.pipe(
    //       ofType(sampleDataActions.updateData),
    //       map((action) => action.searchCriteriaDataModel),
    //       switchMap((searchCriteriaDataModel: SearchCriteriaDataModel) =>
    //         this.sampledataservice
    //           .editSampleData(searchCriteriaDataModel.data)
    //           .pipe(
    //             map((editdata: SampleDataModel) => {
    //               const update: Update<SampleDataModel> = {
    //                 id: editdata.id,
    //                 changes: {
    //                   name: editdata.name,
    //                   surname: editdata.surname,
    //                   age: editdata.age,
    //                   email: editdata.email,
    //                 },
    //               };
    //               return sampleDataActions.updateDataSuccess({
    //                 criteria: searchCriteriaDataModel.criteria,
    //                 data: update,
    //               });
    //             }),
    //             catchError((error: Error) =>
    //               of(sampleDataActions.updateDataFail({ error })),
    //             ),
    //           ),
    //       ),
    //     ),
    //   );

    /* @type {Observable<Action>}
     * @memberof SampleDataEffects
     */
    //   updateDataSuccess$: Observable<Action> = createEffect(() =>
    //     this.actions.pipe(
    //       ofType(sampleDataActions.updateDataSuccess),
    //       map((action) =>
    //         sampleDataActions.loadData({
    //           sampleDataModel: action.criteria,
    //         }),
    //       ),
    //     ),
    //   );

    /* Creates an instance of SampleDataEffects.
     * @param {Actions} actions
     * @param {AuthService} authservice
     * @param {SampleDataService} sampledataservice
     * @memberof SampleDataEffects
     */
    constructor(
        private actions: Actions,
        private product_services: ProductService,
    ) { }
}
