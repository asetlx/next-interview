/* eslint-disable @typescript-eslint/no-explicit-any */
import { Product } from "../domain/product"

export class ProductAdapter {

  single(data: any): Product {
    return {
      id: data?.id,
      name: data?.title,
      price: data?.price,
      category: data?.category,
      inStock: true,
      description: data?.description,
      rating: data?.rating?.rate,
      image: data?.image,
    }
  }

  multiple(data: any[]): Product[] {
    if (Array.isArray(data)) {
      return data.map((item) => this.single(item));
    }
    return [];
  }
}