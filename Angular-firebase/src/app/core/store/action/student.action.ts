import { createAction, props } from "@ngrx/store"
import { Student } from "src/app/model/student";
// name action 
export const GetAllStudent = "@Studens/GetAll"
export const CreatedStudent = "@Studens/Created"
export const GETS = "@Studens/Get"
export const loadDataSuccess = "@Studens/DataSuccess"

// created action 
export const getSt = createAction(GETS);
export const DataSuccess = createAction(loadDataSuccess, props<{ httpResponseModel: any }>(),);
export const Created = createAction(CreatedStudent, props<{ payload: Student }>());
export const getStudent = createAction(GetAllStudent, props<{ data: any; }>());
