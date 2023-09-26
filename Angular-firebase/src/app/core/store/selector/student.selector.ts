import { createFeatureSelector, createSelector } from "@ngrx/store";



export const Selector = createFeatureSelector<any>('feature_student')

export const currentPostSelector = createSelector(Selector, state => state.item);