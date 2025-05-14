"use client";

import { useState } from "react";
import { MinusIcon, PlusIcon, Heart, ShoppingCart, TruckIcon, ShieldCheck, ArrowLeft } from "lucide-react";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { useParams } from "next/navigation";
import ProductReviews from "@/components/product/ProductReviews";
import RelatedProducts from "@/components/product/RelatedProducts";

// Mock product data
const products = [
  {
    id: "1",
    name: "Modern Leather Jacket",
    description: "A premium quality leather jacket with modern design. Crafted from genuine leather, this jacket is perfect for any casual or semi-formal occasion. Features include multiple pockets, adjustable cuffs, and a soft inner lining for maximum comfort.",
    price: 199.99,
    images: [
      "https://images.pexels.com/photos/4937449/pexels-photo-4937449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/6347546/pexels-photo-6347546.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/5625117/pexels-photo-5625117.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    category: "Clothing",
    brand: "Elegance",
    rating: 4.5,
    reviewCount: 47,
    inStock: true,
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Brown", "Navy"],
    features: [
      "Premium quality genuine leather",
      "Durable and water-resistant",
      "Multiple pockets for storage",
      "Soft inner lining for comfort",
      "Adjustable cuffs",
    ],
    specifications: {
      "Material": "Genuine Leather",
      "Lining": "Polyester",
      "Closure": "Zipper",
      "Care": "Professional Leather Cleaning Only",
      "Season": "Fall, Winter, Spring"
    }
  }
];

export default function ProductPage() {
  const params = useParams();
  const productId = params.id as string;
  
  // Find product by ID or use the first one for demo
  const product = products.find(p => p.id === productId) || products[0];
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const addToCart = () => {
    console.log("Added to cart:", {
      product,
      quantity,
      selectedSize,
      selectedColor
    });
    // Here you would add the product to the cart
  };

  return (
    <div className="container py-10">
      <Link 
        href="/shop" 
        className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary mb-6"
      >
        <ArrowLeft size={14} />
        <span>Back to Shop</span>
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="aspect-square overflow-hidden rounded-lg bg-muted">
            <img
              src={product.images[selectedImage]}
              alt={product.name}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex gap-4 overflow-auto py-1">
            {product.images.map((image, index) => (
              <button
                key={index}
                className={`relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-md ${
                  selectedImage === index ? "ring-2 ring-primary" : "ring-1 ring-border"
                }`}
                onClick={() => setSelectedImage(index)}
              >
                <img
                  src={image}
                  alt={`${product.name} - view ${index + 1}`}
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">{product.name}</h1>
            <div className="mt-2 flex items-center gap-4">
              <div className="flex items-center">
                {Array(5).fill(0).map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill={i < Math.floor(product.rating) ? "currentColor" : "none"}
                    stroke="currentColor"
                    className={`h-4 w-4 ${
                      i < Math.floor(product.rating) ? "text-yellow-500" : "text-muted-foreground"
                    }`}
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clipRule="evenodd"
                    />
                  </svg>
                ))}
                <span className="ml-2 text-sm text-muted-foreground">
                  ({product.reviewCount} reviews)
                </span>
              </div>
              <Badge variant="outline" className="text-xs">
                {product.category}
              </Badge>
            </div>
          </div>

          <div className="border-t border-b py-4">
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold">${product.price.toFixed(2)}</span>
              {product.inStock ? (
                <Badge variant="outline" className="text-green-600 border-green-600">
                  In Stock
                </Badge>
              ) : (
                <Badge variant="outline" className="text-red-500 border-red-500">
                  Out of Stock
                </Badge>
              )}
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="mb-2 font-medium">Size</h3>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <Button
                    key={size}
                    variant={selectedSize === size ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedSize(size)}
                    className="h-9 w-9"
                  >
                    {size}
                  </Button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-2 font-medium">Color</h3>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((color) => (
                  <Button
                    key={color}
                    variant={selectedColor === color ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedColor(color)}
                  >
                    {color}
                  </Button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-2 font-medium">Quantity</h3>
              <div className="flex w-32 items-center">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8 rounded-r-none"
                  onClick={decreaseQuantity}
                  disabled={quantity <= 1}
                >
                  <MinusIcon className="h-3 w-3" />
                  <span className="sr-only">Decrease quantity</span>
                </Button>
                <div className="flex h-8 w-10 items-center justify-center border-y border-input bg-background">
                  {quantity}
                </div>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8 rounded-l-none"
                  onClick={increaseQuantity}
                >
                  <PlusIcon className="h-3 w-3" />
                  <span className="sr-only">Increase quantity</span>
                </Button>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button size="lg" className="w-full sm:w-auto" onClick={addToCart}>
              <ShoppingCart className="mr-2 h-4 w-4" />
              Add to Cart
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              <Heart className="mr-2 h-4 w-4" />
              Add to Wishlist
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-4 py-4">
            <div className="flex items-center gap-2 text-sm">
              <TruckIcon className="h-4 w-4 text-muted-foreground" />
              <span>Free shipping over $100</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <ShieldCheck className="h-4 w-4 text-muted-foreground" />
              <span>2-year warranty</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <Tabs defaultValue="description">
          <TabsList className="w-full justify-start border-b rounded-none h-auto p-0">
            <TabsTrigger 
              value="description"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary"
            >
              Description
            </TabsTrigger>
            <TabsTrigger 
              value="features"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary"
            >
              Features
            </TabsTrigger>
            <TabsTrigger 
              value="specifications"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary"
            >
              Specifications
            </TabsTrigger>
            <TabsTrigger 
              value="reviews"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary"
            >
              Reviews ({product.reviewCount})
            </TabsTrigger>
          </TabsList>
          <TabsContent value="description" className="pt-4">
            <p className="text-muted-foreground">{product.description}</p>
          </TabsContent>
          <TabsContent value="features" className="pt-4">
            <ul className="list-disc pl-5 space-y-2">
              {product.features.map((feature, index) => (
                <li key={index} className="text-muted-foreground">{feature}</li>
              ))}
            </ul>
          </TabsContent>
          <TabsContent value="specifications" className="pt-4">
            <div className="space-y-2">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="grid grid-cols-3 gap-4 py-2 border-b last:border-0">
                  <div className="font-medium">{key}</div>
                  <div className="col-span-2 text-muted-foreground">{value}</div>
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="reviews" className="pt-4">
            <ProductReviews productId={product.id} rating={product.rating} reviewCount={product.reviewCount} />
          </TabsContent>
        </Tabs>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">Related Products</h2>
        <RelatedProducts category={product.category} currentProductId={product.id} />
      </div>
    </div>
  );
}