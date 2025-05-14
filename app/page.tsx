import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { Categories } from "@/components/Categories";
import { Newsletter } from "@/components/Newsletter";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('https://images.pexels.com/photos/5625117/pexels-photo-5625117.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')", 
            opacity: 0.7 
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/50 dark:from-background/95 dark:to-background/20" />
        <div className="container relative z-10">
          <div className="max-w-lg space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Discover Your Style with Elegance
            </h1>
            <p className="text-lg text-muted-foreground">
              Explore our curated collection of premium products designed for modern living.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="/shop">Shop Now</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/categories">Browse Categories</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="container">
        <div className="flex flex-col gap-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Shop by Category</h2>
            <p className="text-muted-foreground">Explore our wide range of products across various categories.</p>
          </div>
          <Categories />
        </div>
      </section>

      {/* Featured Products */}
      <section className="container">
        <div className="flex flex-col gap-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Featured Products</h2>
            <p className="text-muted-foreground">Discover our most popular items handpicked for you.</p>
          </div>
          <FeaturedProducts />
        </div>
      </section>

      {/* Testimonials */}
      <section className="container">
        <div className="flex flex-col gap-6">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold tracking-tight">What Our Customers Say</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Don't just take our word for it - hear from some of our satisfied customers!
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="border rounded-lg p-6 bg-card shadow-sm">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center">
                    {Array(5).fill(0).map((_, j) => (
                      <svg
                        key={j}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-5 h-5 text-yellow-500"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="text-muted-foreground italic">
                    "The quality of the products exceeded my expectations. Fast shipping and excellent customer service. Will definitely shop here again!"
                  </blockquote>
                  <div className="mt-4">
                    <p className="font-medium">Customer {i}</p>
                    <p className="text-sm text-muted-foreground">Verified Buyer</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-secondary">
        <div className="container py-16">
          <Newsletter />
        </div>
      </section>
    </div>
  );
}