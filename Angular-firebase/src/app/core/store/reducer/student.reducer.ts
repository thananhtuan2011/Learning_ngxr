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
    on(studentAction.getStudent, (state, props) => (
        console.log("getStudentgetStudent", props),
        { ...state, item: props.data }
    )

    )


);