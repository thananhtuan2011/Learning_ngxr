import { createAction, props } from "@ngrx/store"

export const GetAllStudent = "@Studens/GetAll"


export const GETS = "@Studens/Get"
export const getSt = createAction(GETS);
export const getStudent = createAction(GetAllStudent, props<{ data: any; }>());
