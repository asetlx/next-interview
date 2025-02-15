export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  inStock: boolean;
  description: string;
  rating: number;
  brand?: string;
  createdAt?: string;
  image: string;
}