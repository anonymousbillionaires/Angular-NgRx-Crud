import { createAction, props } from "@ngrx/store";

export enum ActionTypes {
    GetProducts = '[Root] Get Products',
    GetProductsSuccess = '[Root] Get Products Success',
    GetProductsFailure = '[Root] Get Products Failure'
}

export const getProducts = createAction(ActionTypes.GetProducts)
export const getProductsSuccess = createAction(ActionTypes.GetProductsSuccess, props<any>())
export const getProductsFailure = createAction(ActionTypes.GetProductsFailure, props<any>())