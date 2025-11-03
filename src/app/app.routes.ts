import { Routes } from '@angular/router';
import { ProductsListComponent } from './pages/products/products-list.component';

export const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' }, // default route
  { path: 'products', component: ProductsListComponent }
];
