import ProductList from "@/components/shop/ProductList";
import ProductFilters from "@/components/shop/ProductFilters";

export default function ShopPage() {
  return (
    <div className="container py-10">
      <div className="space-y-4 mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Shop</h1>
        <p className="text-muted-foreground">
          Browse our latest collection of high-quality products.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-64 flex-shrink-0">
          <ProductFilters />
        </div>
        <div className="flex-1">
          <ProductList />
        </div>
      </div>
    </div>
  );
}