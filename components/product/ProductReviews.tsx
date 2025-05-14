"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// Mock reviews data
const mockReviews = [
  {
    id: 1,
    name: "Alice Johnson",
    rating: 5,
    date: "2023-11-15",
    title: "Excellent quality and design",
    comment: "I'm extremely satisfied with this product. The quality is outstanding, and the design is exactly what I was looking for. Highly recommended!",
  },
  {
    id: 2,
    name: "John Smith",
    rating: 4,
    date: "2023-10-28",
    title: "Great product, minor improvements needed",
    comment: "Overall, I'm happy with my purchase. The product meets most of my expectations, but there are a few small details that could be improved. Still, I would recommend it.",
  },
  {
    id: 3,
    name: "Emily Davis",
    rating: 5,
    date: "2023-10-12",
    title: "Exceeded my expectations",
    comment: "This product exceeded all my expectations. The craftsmanship is impeccable, and it performs better than advertised. Definitely worth the investment!",
  },
];

interface ProductReviewsProps {
  productId: string;
  rating: number;
  reviewCount: number;
}

export default function ProductReviews({
  productId,
  rating,
  reviewCount,
}: ProductReviewsProps) {
  const [sortBy, setSortBy] = useState("recent");
  const [showWriteReview, setShowWriteReview] = useState(false);
  const [newReview, setNewReview] = useState({
    rating: "5",
    title: "",
    comment: "",
  });

  // Sort reviews based on selected option
  const sortedReviews = [...mockReviews].sort((a, b) => {
    if (sortBy === "recent") {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    } else if (sortBy === "highest") {
      return b.rating - a.rating;
    } else {
      return a.rating - b.rating;
    }
  });

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("New review:", newReview);
    // Here you would submit the review to your backend
    setShowWriteReview(false);
    setNewReview({ rating: "5", title: "", comment: "" });
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-6 md:items-center md:justify-between">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <div className="flex">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill={i < Math.floor(rating) ? "currentColor" : "none"}
                    stroke="currentColor"
                    className={`h-5 w-5 ${
                      i < Math.floor(rating) ? "text-yellow-500" : "text-muted-foreground"
                    }`}
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clipRule="evenodd"
                    />
                  </svg>
                ))}
            </div>
            <span className="text-lg font-medium">{rating} out of 5</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Based on {reviewCount} reviews
          </p>
        </div>
        <div className="flex gap-4">
          <div>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort reviews" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="recent">Most Recent</SelectItem>
                <SelectItem value="highest">Highest Rated</SelectItem>
                <SelectItem value="lowest">Lowest Rated</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button 
            variant="outline" 
            onClick={() => setShowWriteReview(!showWriteReview)}
          >
            Write a Review
          </Button>
        </div>
      </div>

      {showWriteReview && (
        <div className="border rounded-lg p-6 bg-muted/50">
          <h3 className="text-lg font-medium mb-4">Write Your Review</h3>
          <form onSubmit={handleReviewSubmit} className="space-y-4">
            <div>
              <Label htmlFor="rating">Rating</Label>
              <Select
                value={newReview.rating}
                onValueChange={(value) =>
                  setNewReview({ ...newReview, rating: value })
                }
              >
                <SelectTrigger id="rating">
                  <SelectValue placeholder="Select a rating" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="5">★★★★★ (5/5)</SelectItem>
                  <SelectItem value="4">★★★★☆ (4/5)</SelectItem>
                  <SelectItem value="3">★★★☆☆ (3/5)</SelectItem>
                  <SelectItem value="2">★★☆☆☆ (2/5)</SelectItem>
                  <SelectItem value="1">★☆☆☆☆ (1/5)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="title">Review Title</Label>
              <Input
                id="title"
                value={newReview.title}
                onChange={(e) =>
                  setNewReview({ ...newReview, title: e.target.value })
                }
                placeholder="Summarize your review"
                required
              />
            </div>
            <div>
              <Label htmlFor="comment">Review</Label>
              <Textarea
                id="comment"
                value={newReview.comment}
                onChange={(e) =>
                  setNewReview({ ...newReview, comment: e.target.value })
                }
                placeholder="Write your review here"
                rows={4}
                required
              />
            </div>
            <div className="flex gap-3">
              <Button type="submit">Submit Review</Button>
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => setShowWriteReview(false)}
              >
                Cancel
              </Button>
            </div>
          </form>
        </div>
      )}

      <div className="space-y-6">
        {sortedReviews.map((review) => (
          <div key={review.id} className="border-b pb-6 last:border-0">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium">{review.title}</h3>
                <div className="flex items-center gap-2 mt-1">
                  <div className="flex">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill={i < review.rating ? "currentColor" : "none"}
                          stroke="currentColor"
                          className={`h-4 w-4 ${
                            i < review.rating ? "text-yellow-500" : "text-muted-foreground"
                          }`}
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    by {review.name} on {new Date(review.date).toLocaleDateString()}
                  </span>
                </div>
              </div>
              <Button variant="ghost" size="sm">
                Helpful
              </Button>
            </div>
            <p className="mt-3 text-muted-foreground">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}