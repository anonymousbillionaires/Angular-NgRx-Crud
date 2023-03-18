import { createSelector } from "@ngrx/store";
import { AppStateInterface } from "./app-state.interface";

export const selectProduts = (state: AppStateInterface) => state.products

export const isLoadingProductsSelector = createSelector(selectProduts, state => state.isLoading)
export const productsSelector = createSelector(selectProduts, state => state.data)
export const isErrorProductsSelector = createSelector(selectProduts, state => state.error)