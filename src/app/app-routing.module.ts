import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProductComponent } from './components/add-product/add-product.component';
import { DeleteProductComponent } from './components/delete-product/delete-product.component';
import { ModifyProductComponent } from './components/modify-product/modify-product.component';
import { ProductsComponent } from './components/products/products.component';
const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path:'products', component: ProductsComponent },
  { path:'add-product', component: AddProductComponent },
  { path:'delete-product', component: DeleteProductComponent },
  { path:'modify-product', component: ModifyProductComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }