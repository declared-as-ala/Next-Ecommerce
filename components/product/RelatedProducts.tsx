"use client";

import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

// Mock product data
const products = [
  {
    id: "1",
    name: "Modern Leather Jacket",
    price: 199.99,
    image: "https://images.pexels.com/photos/4937449/pexels-photo-4937449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Clothing",
    isNew: true,
    isSale: false,
  },
  {
    id: "2",
    name: "Elegant Watch",
    price: 149.99,
    originalPrice: 199.99,
    image: "https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Accessories",
    isNew: false,
    isSale: true,
  },
  {
    id: "3",
    name: "Premium Backpack",
    price: 79.99,
    image: "https://images.pexels.com/photos/3731256/pexels-photo-3731256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Accessories",
    isNew: true,
    isSale: false,
  },
  {
    id: "4",
    name: "Cotton T-shirt",
    price: 29.99,
    originalPrice: 39.99,
    image: "https://images.pexels.com/photos/5384423/pexels-photo-5384423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Clothing",
    isNew: false,
    isSale: true,
  },
];

interface RelatedProductsProps {
  category: string;
  currentProductId: string;
}

export default function RelatedProducts({
  category,
  currentProductId,
}: RelatedProductsProps) {
  // Filter products by category and exclude current product
  const relatedProducts = products
    .filter(product => product.category === category && product.id !== currentProductId)
    .slice(0, 4);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {relatedProducts.map((product) => (
        <Card key={product.id} className="overflow-hidden group">
          <div className="relative h-48 overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute top-2 left-2 flex gap-2">
              {product.isNew && (
                <Badge variant="default" className="bg-blue-500 hover:bg-blue-600">New</Badge>
              )}
              {product.isSale && (
                <Badge variant="default" className="bg-red-500 hover:bg-red-600">Sale</Badge>
              )}
            </div>
          </div>
          <CardContent className="pt-4">
            <div className="text-sm text-muted-foreground mb-1">
              {product.category}
            </div>
            <Link href={`/product/${product.id}`} className="hover:underline">
              <h3 className="font-medium leading-tight mb-2">{product.name}</h3>
            </Link>
            <div className="flex gap-2 items-center">
              <p className="font-bold">${product.price.toFixed(2)}</p>
              {product.originalPrice && (
                <p className="text-sm text-muted-foreground line-through">
                  ${product.originalPrice.toFixed(2)}
                </p>
              )}
            </div>
          </CardContent>
          <CardFooter className="pt-0">
            <Button className="w-full gap-2" variant="outline">
              <ShoppingCart className="h-4 w-4" /> Add to Cart
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}