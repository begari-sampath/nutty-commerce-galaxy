import { useState } from "react";
import { ShoppingCart, Heart, Search, Menu, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom"; // ← Important

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cartItems = 0;
  const wishlistItems = 0;

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              NuttyDelights
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">Home</Link>
            <Link to="/products" className="text-foreground hover:text-primary transition-colors">Products</Link>
            <Link to="/login" className="text-foreground hover:text-primary transition-colors"></Link>
            <Link to="/about" className="text-foreground hover:text-primary transition-colors">About</Link>
            <Link to="/contact" className="text-foreground hover:text-primary transition-colors">Contact</Link>
          </nav>

          <div className="hidden lg:flex items-center flex-1 max-w-sm mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input type="text" placeholder="Search products..." className="pl-10 pr-4 w-full" />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Search className="h-5 w-5" />
            </Button>

            <Button variant="ghost" size="icon" className="relative">
              <Link to="/wishlist">
                <Heart className="h-5 w-5" />
                {wishlistItems > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                    {wishlistItems}
                  </Badge>
                )}
              </Link>
            </Button>

            <Button variant="ghost" size="icon" className="relative">
              <Link to="/cart">
                <ShoppingCart className="h-5 w-5" />
                {cartItems > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                    {cartItems}
                  </Badge>
                )}
              </Link>
            </Button>

            <Button variant="ghost" size="icon">
              <Link to="/login">
                <User className="h-5 w-5" />
              </Link>
            </Button>

            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-slide-up">
            <div className="flex flex-col space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input type="text" placeholder="Search products..." className="pl-10 pr-4 w-full" />
              </div>
              <nav className="flex flex-col space-y-2">
                <Link to="/" className="text-foreground hover:text-primary transition-colors py-2">Home</Link>
                <Link to="/products" className="text-foreground hover:text-primary transition-colors py-2">Products</Link>
                <Link to="/about" className="text-foreground hover:text-primary transition-colors py-2">About</Link>
                <Link to="/contact" className="text-foreground hover:text-primary transition-colors py-2">Contact</Link>
                <Link to="/login" className="text-foreground hover:text-primary transition-colors py-2">Login</Link>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
