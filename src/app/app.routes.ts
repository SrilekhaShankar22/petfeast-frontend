import { Routes } from '@angular/router';
import { ProductsListComponent } from './pages/products/products-list.component';
import { HttpClientModule } from '@angular/common/http';


export const routes: Routes = [
  { path: 'products', component: ProductsListComponent }
];
 
