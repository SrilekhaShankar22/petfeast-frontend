// src/app/pages/products/products-list.component.ts
import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductService } from '../../service/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  products: Product[] = [];
  loading = false;
  error = '';
  selectedCategory = '';

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // If route has query param ?category=Dog, load that category
    this.route.queryParams.subscribe(params => {
      const cat = params['category'];
      if (cat) {
        this.selectedCategory = cat;
        this.loadByCategory(cat);
      } else {
        this.loadAll();
      }
    });
  }

  loadAll() {
    this.loading = true;
    this.error = '';
    this.productService.getAll().subscribe({
      next: data => { this.products = data; this.loading = false; },
      error: err => { this.error = 'Failed to load products'; this.loading = false; console.error(err); }
    });
  }

  loadByCategory(cat: string) {
    if (!cat) return this.loadAll();
    this.loading = true;
    this.error = '';
    this.productService.getByCategory(cat).subscribe({
      next: data => { this.products = data; this.loading = false; },
      error: err => { this.error = 'Failed to load products by category'; this.loading = false; console.error(err); }
    });
  }

  openDetail(p: Product) {
    // navigate to product detail if implemented later; placeholder for now
    this.router.navigate(['/product', p.id]);
  }
}
