import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-section',
  templateUrl: './category-section.component.html',
  styleUrls: ['./category-section.component.css']
})
export class CategorySectionComponent {
  constructor(private router: Router) {}

  openCategory(cat: string) {
    // Navigate to /products with query parameter
    this.router.navigate(['/products'], { queryParams: { category: cat } });
  }
}
