import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../service/product.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
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
    // Check for ?category=Dog or ?category=Cat from URL
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
      next: data => {
        this.products = data;
        this.loading = false;
      },
      error: err => {
        this.error = 'Failed to load products';
        this.loading = false;
        console.error(err);
      }
    });
  }

  loadByCategory(cat: string) {
    if (!cat) return this.loadAll();
    this.loading = true;
    this.error = '';
    this.productService.getByCategory(cat).subscribe({
      next: data => {
        this.products = data;
        this.loading = false;
      },
      error: err => {
        this.error = 'Failed to load products by category';
        this.loading = false;
        console.error(err);
      }
    });
  }

  // ✅ handles category dropdown change
  onCategoryChange(event: Event) {
    const select = event.target as HTMLSelectElement;
    const category = select.value;
    this.selectedCategory = category;
    this.loadByCategory(category);
  }

  openDetail(p: Product) {
    // Future: navigate to detail page
    this.router.navigate(['/product', p.id]);
  }
}
