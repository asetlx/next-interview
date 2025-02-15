'use client';

import ProductPagination from "@/components/products/pagination";
import ProductCard from "@/components/products/productCard";
import Spinner from "@/components/ui/spinner";
import usePagination from "@/hooks/usePagination";
import useProducts from "@/hooks/useProducts";

export default function Home() {
  const { products, isLoading } = useProducts();
  const pagination = usePagination(products, 4);

  return (
    <div className="h-screen flex flex-col">
      <h1 className="p-5 text-4xl font-semibold text-center">Products</h1>
      <main className="p-5">
        {isLoading ? (
          <Spinner />
        ) : (
          <div className="grid grid-cols-4 gap-4">
            {pagination.pageContent.map((product) =>
              <ProductCard key={product.id} product={product} />
            )}
          </div>
        )}
      </main >
      <ProductPagination {...pagination} />
    </div >
  );
}
