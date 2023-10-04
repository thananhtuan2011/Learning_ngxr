import { createAction, props } from "@ngrx/store"
export const loadData = createAction(
    '[Product] LoadData',

);

export const loadDataSuccess = createAction(
    '[Product] LoadDataSuccess',
    props<{ data: any }>(),
);

export const loadDataFail = createAction(
    '[Product] LoadDataFail',
    props<{ error: Error }>(),
);
