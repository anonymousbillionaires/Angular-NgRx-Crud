import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models';
import { AppStateInterface } from 'src/app/store/app-state.interface';
import { productsSelector } from 'src/app/store/selectors';
import * as actions from '../../store/actions';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  products$: Observable<Product[] | null>;
  constructor(private http: HttpClient, private store: Store<AppStateInterface>) {
    this.store.dispatch(actions.getProducts());
    this.products$ = this.store.select(productsSelector);
  }
}
