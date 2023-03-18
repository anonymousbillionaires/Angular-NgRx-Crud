import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppStateInterface } from 'src/app/store/app-state.interface';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.scss']
})
export class DeleteProductComponent {
  deleteProductForm: FormGroup;
  constructor(private http: HttpClient, private store: Store<AppStateInterface>) {
    this.deleteProductForm = new FormGroup({
      id: new FormControl(''),
    });
  }
  onSubmit(form: FormGroup) {
    this.http.delete(`http://localhost:9010/api/products/${form.value.id}`).subscribe(data => console.log(data))
  }
}
