'use client';

import { ProductAdapter } from "@/contexts/products/adapter/productAdapter.adapter";
import { Product } from "@/contexts/products/domain/product";
//import { sampleProducts } from "@/contexts/products/sampleProducts";
import { useState, useEffect } from "react";

export default function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const productAdapter = new ProductAdapter();


  const fetchProducts = async () => {
    setIsLoading(true);
    const url = "https://fakestoreapi.com/products";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const json = await response.json();

      const newProducts = productAdapter.multiple(json);
      setProducts(newProducts);
      setIsLoading(false);
      console.log(json)
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      }
    }
  };

  useEffect(() => {
    //setProducts(sampleProducts);
    fetchProducts();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { products, isLoading };
}