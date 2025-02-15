import { Product } from "@/contexts/products/domain/product";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import Image from "next/image";

interface Props {
  product: Product
}

export default function ProductCard({ product }: Props) {
  const formatter = new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'EUR',
  });

  console.log(product);

  // "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"

  return (
    <Card className="flex flex-col">
      {product.image && (
        <Image
          src={product.image}
          alt={product.name}
          width={231}
          height={240}
          className="w-full h-72 object-contain rounded-t-lg p-6"
        />
      )}
      <CardHeader>
        <CardTitle>{product.name}</CardTitle>
        <CardDescription className="line-clamp-3">{product.description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex gap-2">
          <Badge variant="secondary">{product.category}</Badge>
          {product.brand && <Badge variant="outline">{product.brand}</Badge>}
        </div>

        <Badge variant={product.inStock ? "default" : "destructive"}>
          {product.inStock ? "In Stock" : "Out of Stock"}
        </Badge>

        {product.rating && (
          <div className="flex items-center text-sm text-gray-600">
            {[...Array(Math.round(product.rating))].map((_, i) => (
              <span key={i}>⭐</span>
            ))}
            <span className="ml-1">{product.rating}</span>
          </div>
        )}

      </CardContent>
      <CardFooter className="flex flex-col justify-center mt-auto">
        <div className="text-lg font-semibold w-full text-end mb-3">{formatter.format(product.price)}</div>
        <Button className="w-full" disabled={!product.inStock}>
          {product.inStock ? "Buy Now" : "Out of Stock"}
        </Button>
      </CardFooter>
    </Card>
  )
}