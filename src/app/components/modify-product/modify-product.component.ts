import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppStateInterface } from 'src/app/store/app-state.interface';

@Component({
  selector: 'app-modify-product',
  templateUrl: './modify-product.component.html',
  styleUrls: ['./modify-product.component.scss']
})
export class ModifyProductComponent {
  modifyProductForm: FormGroup;
  constructor(private http: HttpClient, private store: Store<AppStateInterface>) {
    this.modifyProductForm = new FormGroup({
      id: new FormControl(''),
      name: new FormControl(''),
      quantity: new FormControl(''),
      price: new FormControl(''),
      observation: new FormControl('')
    });
  }
  onSubmit(form: FormGroup) {
    this.http.put(`http://localhost:9010/api/products/${form.value.id}`, {
      name: form.value.name,
      quantity: form.value.quantity,
      price: form.value.price,
      observation: form.value.observation
    }).subscribe(data => console.log(data))
  }
}
