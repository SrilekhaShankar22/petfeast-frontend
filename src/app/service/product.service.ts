import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl: string;

  constructor(private http: HttpClient, @Inject('API_BASE_URL') apiBaseUrl: string) {
    this.baseUrl = `${apiBaseUrl}/products`; // e.g. http://localhost:8080/api/products
  }

  // ✅ Get all products
  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl);
  }

  // ✅ Get products by category (Dog, Cat, etc.)
  getByCategory(category: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}/category/${category}`);
  }

  // (Optional) Future: get single product by id
  getById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.baseUrl}/${id}`);
  }
}
