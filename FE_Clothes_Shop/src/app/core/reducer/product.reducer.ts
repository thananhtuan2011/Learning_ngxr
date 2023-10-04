import { props } from '@ngrx/store';
import { createReducer, on } from '@ngrx/store';

import * as productAction from '../action/product.action'
export const initialState: any =
{

}

export const ProductReducer = createReducer(
    initialState,
    // on(studentAction.getSt, (state) => (
    //     { ...state }
    // ),

    // ),


    // on(studentAction.Created, (state, data) => (
    //     console.log("Created", data),
    //     { ...state }
    // ),

    // ),
    on(productAction.loadData, (state, props) => (
        console.log("getStudentgetStudent", props),
        { ...state }
    )

    ),

    on(productAction.loadDataSuccess, (state, props) => (
        console.log("DataSuccess", props),
        { ...state, item: props.data.data }
    )

    )
);