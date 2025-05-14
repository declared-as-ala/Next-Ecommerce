import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <h3 className="text-lg font-medium">ELEGANCE</h3>
            <p className="text-sm text-muted-foreground">
              Premium shopping experience with the latest products.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="font-medium mb-3">Shop</h3>
            <ul className="space-y-2">
              <li><Link href="/shop" className="text-sm text-muted-foreground hover:text-primary">All Products</Link></li>
              <li><Link href="/categories/clothing" className="text-sm text-muted-foreground hover:text-primary">Clothing</Link></li>
              <li><Link href="/categories/accessories" className="text-sm text-muted-foreground hover:text-primary">Accessories</Link></li>
              <li><Link href="/categories/home" className="text-sm text-muted-foreground hover:text-primary">Home</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-3">Account</h3>
            <ul className="space-y-2">
              <li><Link href="/login" className="text-sm text-muted-foreground hover:text-primary">Login</Link></li>
              <li><Link href="/register" className="text-sm text-muted-foreground hover:text-primary">Register</Link></li>
              <li><Link href="/orders" className="text-sm text-muted-foreground hover:text-primary">Orders</Link></li>
              <li><Link href="/wishlist" className="text-sm text-muted-foreground hover:text-primary">Wishlist</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-3">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm text-muted-foreground hover:text-primary">About Us</Link></li>
              <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">Contact</Link></li>
              <li><Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-sm text-muted-foreground hover:text-primary">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t mt-8 pt-6 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Elegance. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}