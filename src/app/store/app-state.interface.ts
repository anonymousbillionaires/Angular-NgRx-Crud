import { ErrorResponse, Product } from "../models";

interface BaseInterface {
    isLoading: boolean;
    error: ErrorResponse | null;
}

export interface ProductsStateInterface extends BaseInterface {
    data: Product[] | null; 
}

export interface AppStateInterface {
    products: ProductsStateInterface;
}