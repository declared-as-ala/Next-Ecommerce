"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, ShoppingCart, Heart } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

// Mock product data
const products = [
  {
    id: 1,
    name: "Modern Leather Jacket",
    price: 199.99,
    image: "https://images.pexels.com/photos/4937449/pexels-photo-4937449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Clothing",
    isNew: true,
    isSale: false,
  },
  {
    id: 2,
    name: "Elegant Watch",
    price: 149.99,
    originalPrice: 199.99,
    image: "https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Accessories",
    isNew: false,
    isSale: true,
  },
  {
    id: 3,
    name: "Premium Backpack",
    price: 79.99,
    image: "https://images.pexels.com/photos/3731256/pexels-photo-3731256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Accessories",
    isNew: true,
    isSale: false,
  },
  {
    id: 4,
    name: "Cotton T-shirt",
    price: 29.99,
    originalPrice: 39.99,
    image: "https://images.pexels.com/photos/5384423/pexels-photo-5384423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Clothing",
    isNew: false,
    isSale: true,
  },
  {
    id: 5,
    name: "Ceramic Plant Pot",
    price: 24.99,
    image: "https://images.pexels.com/photos/5699665/pexels-photo-5699665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Home",
    isNew: true,
    isSale: false,
  },
  {
    id: 6,
    name: "Designer Sunglasses",
    price: 119.99,
    originalPrice: 149.99,
    image: "https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Accessories",
    isNew: false,
    isSale: true,
  },
];

export function FeaturedProducts() {
  const [startIndex, setStartIndex] = useState(0);
  const itemsToShow = 3;

  const nextSlide = () => {
    if (startIndex + itemsToShow < products.length) {
      setStartIndex(startIndex + 1);
    } else {
      setStartIndex(0);
    }
  };

  const prevSlide = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    } else {
      setStartIndex(products.length - itemsToShow);
    }
  };

  return (
    <div className="relative">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.slice(startIndex, startIndex + itemsToShow).map((product) => (
          <Card key={product.id} className="overflow-hidden group">
            <div className="relative h-60 overflow-hidden">
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
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <Button
                  variant="secondary"
                  size="icon"
                  className="rounded-full bg-background/80 backdrop-blur-sm"
                >
                  <Heart className="h-4 w-4" />
                  <span className="sr-only">Add to wishlist</span>
                </Button>
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
              <Button className="w-full gap-2">
                <ShoppingCart className="h-4 w-4" /> Add to Cart
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="absolute -left-3 top-1/2 -translate-y-1/2 md:flex hidden">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full"
          onClick={prevSlide}
        >
          <ChevronLeft className="h-5 w-5" />
          <span className="sr-only">Previous slide</span>
        </Button>
      </div>
      <div className="absolute -right-3 top-1/2 -translate-y-1/2 md:flex hidden">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full"
          onClick={nextSlide}
        >
          <ChevronRight className="h-5 w-5" />
          <span className="sr-only">Next slide</span>
        </Button>
      </div>
    </div>
  );
}