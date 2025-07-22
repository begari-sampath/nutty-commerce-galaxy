import { useState } from "react";
import { Heart, ShoppingCart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviewCount: number;
  badge?: string;
  isNew?: boolean;
  onSale?: boolean;
}

export const ProductCard = ({
  id,
  name,
  price,
  originalPrice,
  image,
  rating,
  reviewCount,
  badge,
  isNew,
  onSale,
}: ProductCardProps) => {
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleAddToCart = () => {
    // This will be connected to cart context later
    console.log(`Added ${name} to cart`);
  };

  const handleToggleWishlist = () => {
    setIsWishlisted(!isWishlisted);
    console.log(`${isWishlisted ? 'Removed from' : 'Added to'} wishlist: ${name}`);
  };

  return (
    <div className="group relative bg-card rounded-xl border border-border hover:border-primary/20 transition-all duration-300 hover:shadow-medium animate-scale-in">
      {/* Badges */}
      <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
        {isNew && (
          <Badge className="bg-success text-success-foreground">New</Badge>
        )}
        {onSale && (
          <Badge className="bg-accent text-accent-foreground">Sale</Badge>
        )}
        {badge && (
          <Badge variant="secondary">{badge}</Badge>
        )}
      </div>

      {/* Wishlist Button */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        onClick={handleToggleWishlist}
      >
        <Heart
          className={cn(
            "h-5 w-5 transition-colors",
            isWishlisted ? "fill-red-500 text-red-500" : "text-muted-foreground hover:text-red-500"
          )}
        />
      </Button>

      {/* Product Image */}
      <div className="aspect-square p-4">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Product Info */}
      <div className="p-4 pt-0">
        {/* Rating */}
        <div className="flex items-center gap-2 mb-2">
          <div className="flex text-accent">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={cn(
                  "h-4 w-4",
                  i < Math.floor(rating) ? "fill-current" : "text-muted-foreground"
                )}
              />
            ))}
          </div>
          <span className="text-sm text-muted-foreground">({reviewCount})</span>
        </div>

        {/* Product Name */}
        <h3 className="font-semibold text-card-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {name}
        </h3>

        {/* Price */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-lg font-bold text-primary">
            ${price.toFixed(2)}
          </span>
          {originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ${originalPrice.toFixed(2)}
            </span>
          )}
          {originalPrice && (
            <Badge variant="destructive" className="text-xs">
              {Math.round(((originalPrice - price) / originalPrice) * 100)}% OFF
            </Badge>
          )}
        </div>

        {/* Add to Cart Button */}
        <Button
          variant="cart"
          className="w-full"
          onClick={handleAddToCart}
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          Add to Cart
        </Button>
      </div>
    </div>
  );
};