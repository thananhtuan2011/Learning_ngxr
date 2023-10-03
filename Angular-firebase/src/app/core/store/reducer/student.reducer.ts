import { props } from '@ngrx/store';
import { createReducer, on } from '@ngrx/store';

import * as studentAction from '../action/student.action'
export const initialState: any =
{

}

export const counterReducer = createReducer(
    initialState,
    on(studentAction.getSt, (state) => (
        { ...state }
    ),

    ),


    on(studentAction.Created, (state, data) => (
        console.log("Created", data),
        { ...state }
    ),

    ),
    on(studentAction.getStudent, (state, props) => (
        console.log("getStudentgetStudent", props),
        { ...state, item: props.data }
    )

    ),

    on(studentAction.DataSuccess, (state, props) => (
        console.log("DataSuccess", props),
        { ...state, item: props }
    )

    )
);