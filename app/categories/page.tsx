import { Categories } from "@/components/Categories";

export default function CategoriesPage() {
  return (
    <div className="container py-10">
      <div className="space-y-4 mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Categories</h1>
        <p className="text-muted-foreground">
          Browse our products by category to find exactly what you're looking for.
        </p>
      </div>
      <Categories />
    </div>
  );
}