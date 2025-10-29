// src/app/models/product.model.ts
export interface Product {
  id: number;
  name: string;
  category: string;
  description?: string;
  price: number;
  stockQuantity?: number;
  imageUrl?: string;
}
