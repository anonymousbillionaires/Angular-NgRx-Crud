import { createReducer, on } from "@ngrx/store";
import { ProductsStateInterface } from "./app-state.interface";
import * as actions from './actions';
export const initialProductsState: ProductsStateInterface = {
    isLoading: false,
    error: null,
    data: null
}

export const productsReducer = createReducer(
    initialProductsState,
    on(actions.getProducts, state => {
        return {
            ...state,
            isLoading: true
        }
    }),
    on(actions.getProductsSuccess, (state, {products}) => {
        return {
            ...state,
            isLoading: false,
            data: products
        }
    }),
    on(actions.getProductsFailure, (state, {error}) => {
        return {
            ...state,
            isLoading: false,
            error
        }
    })
)