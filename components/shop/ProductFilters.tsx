"use client";

import { useState } from "react";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger 
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";

// Mock filter data
const categories = [
  { id: "clothing", label: "Clothing" },
  { id: "accessories", label: "Accessories" },
  { id: "home", label: "Home" },
];

const brands = [
  { id: "brand1", label: "Brand 1" },
  { id: "brand2", label: "Brand 2" },
  { id: "brand3", label: "Brand 3" },
  { id: "brand4", label: "Brand 4" },
];

export default function ProductFilters() {
  const [priceRange, setPriceRange] = useState([0, 300]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

  const handleCategoryChange = (id: string) => {
    if (selectedCategories.includes(id)) {
      setSelectedCategories(selectedCategories.filter(item => item !== id));
    } else {
      setSelectedCategories([...selectedCategories, id]);
    }
  };

  const handleBrandChange = (id: string) => {
    if (selectedBrands.includes(id)) {
      setSelectedBrands(selectedBrands.filter(item => item !== id));
    } else {
      setSelectedBrands([...selectedBrands, id]);
    }
  };

  const handlePriceChange = (value: number[]) => {
    setPriceRange(value);
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedBrands([]);
    setPriceRange([0, 300]);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-medium text-lg">Filters</h2>
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={clearFilters}
          className="text-muted-foreground hover:text-foreground"
        >
          Clear All
        </Button>
      </div>

      <Accordion type="multiple" defaultValue={["categories", "price", "brands"]} className="space-y-4">
        <AccordionItem value="categories" className="border rounded-md px-4">
          <AccordionTrigger className="py-3">Categories</AccordionTrigger>
          <AccordionContent className="pt-1 pb-3">
            <div className="space-y-2">
              {categories.map((category) => (
                <div key={category.id} className="flex items-center space-x-2">
                  <Checkbox 
                    id={category.id} 
                    checked={selectedCategories.includes(category.id)}
                    onCheckedChange={() => handleCategoryChange(category.id)}
                  />
                  <Label htmlFor={category.id} className="text-sm cursor-pointer">
                    {category.label}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="price" className="border rounded-md px-4">
          <AccordionTrigger className="py-3">Price Range</AccordionTrigger>
          <AccordionContent className="pt-1 pb-3">
            <div className="space-y-4">
              <Slider 
                min={0} 
                max={300} 
                step={5} 
                value={priceRange} 
                onValueChange={handlePriceChange} 
              />
              <div className="flex items-center justify-between">
                <p className="text-sm">${priceRange[0]}</p>
                <p className="text-sm">${priceRange[1]}</p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="brands" className="border rounded-md px-4">
          <AccordionTrigger className="py-3">Brands</AccordionTrigger>
          <AccordionContent className="pt-1 pb-3">
            <div className="space-y-2">
              {brands.map((brand) => (
                <div key={brand.id} className="flex items-center space-x-2">
                  <Checkbox 
                    id={brand.id} 
                    checked={selectedBrands.includes(brand.id)}
                    onCheckedChange={() => handleBrandChange(brand.id)}
                  />
                  <Label htmlFor={brand.id} className="text-sm cursor-pointer">
                    {brand.label}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div className="pt-4 hidden md:block">
        <Button className="w-full">Apply Filters</Button>
      </div>
    </div>
  );
}