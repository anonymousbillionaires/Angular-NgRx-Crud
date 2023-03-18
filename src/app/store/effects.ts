import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap, of, catchError } from "rxjs";
import * as actions from './actions';

@Injectable()
export class AppEffects {
    constructor(private actions$: Actions, private http: HttpClient) {}
    getProducts$ = createEffect(() =>
        this.actions$.pipe(
            ofType(actions.getProducts),
            mergeMap(() =>
                this.http.get('http://localhost:9010/api/products', {}).pipe(
                    map(products => actions.getProductsSuccess({products})),
                    catchError(error => of(actions.getProductsFailure({error})))
                ))
        )
    )
}