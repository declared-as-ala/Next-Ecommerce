"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Subscribed!",
        description: "You've been added to our newsletter.",
      });
      setEmail("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="flex flex-col md:flex-row gap-8 items-center justify-between">
      <div className="md:w-1/2 space-y-4">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
          Subscribe to Our Newsletter
        </h2>
        <p className="text-muted-foreground">
          Stay updated with the latest products, exclusive offers, and style tips.
        </p>
      </div>
      <form 
        onSubmit={handleSubmit} 
        className="md:w-1/2 flex w-full max-w-sm items-center space-x-2"
      >
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Subscribing..." : "Subscribe"}
        </Button>
      </form>
    </div>
  );
}