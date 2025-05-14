"use client";

import { useState } from "react";
import { Heart, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

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

export default function ProductList() {
  const [sortOrder, setSortOrder] = useState("featured");

  // Function to sort products based on selected option
  const getSortedProducts = () => {
    switch (sortOrder) {
      case "price-low-high":
        return [...products].sort((a, b) => a.price - b.price);
      case "price-high-low":
        return [...products].sort((a, b) => b.price - a.price);
      case "newest":
        return [...products].sort((a, b) => (a.isNew ? -1 : 1));
      default:
        return products;
    }
  };

  const sortedProducts = getSortedProducts();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <p className="text-muted-foreground">
          Showing {products.length} products
        </p>
        <div className="flex items-center gap-2">
          <span className="text-sm">Sort by:</span>
          <Select value={sortOrder} onValueChange={setSortOrder}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="featured">Featured</SelectItem>
              <SelectItem value="newest">Newest</SelectItem>
              <SelectItem value="price-low-high">Price: Low to High</SelectItem>
              <SelectItem value="price-high-low">Price: High to Low</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedProducts.map((product) => (
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
    </div>
  );
}