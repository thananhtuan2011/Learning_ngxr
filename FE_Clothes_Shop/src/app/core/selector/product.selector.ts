import { createFeatureSelector, createSelector } from "@ngrx/store";



export const Selector = createFeatureSelector<any>('feature_product')

export const currentProductSelector = createSelector(Selector, state =>



    state.item);