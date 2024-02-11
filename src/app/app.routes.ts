import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'products/:prodId',
    component: ProductComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  }
];
