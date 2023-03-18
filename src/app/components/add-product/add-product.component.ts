import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppStateInterface } from 'src/app/store/app-state.interface';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {
  addProductForm: FormGroup;
  constructor(private http: HttpClient, private store: Store<AppStateInterface>) {
    this.addProductForm = new FormGroup({
      name: new FormControl(''),
      quantity: new FormControl(''),
      price: new FormControl(''),
      observation: new FormControl('')
    });
  }
  onSubmit(form: FormGroup) {
    this.http.post("http://localhost:9010/api/products", {
      name: form.value.name,
      quantity: form.value.quantity,
      price: form.value.price,
      observation: form.value.observation
    }).subscribe(data => console.log(data))
  }
}
