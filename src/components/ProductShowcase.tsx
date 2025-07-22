import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { ProductCard } from "./ProductCard";
import { products } from "@/data/products";
import productShowcaseImage from "@/assets/product-showcase.jpg";

export const ProductShowcase = () => {
  // Get featured products (first 4 products)
  const featuredProducts = products.slice(0, 4);

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our
            <span className="text-primary"> Signature </span>
            Collection
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Discover our handcrafted peanut butter varieties, each made with premium ingredients 
            and perfected over generations of family recipes.
          </p>
          
          {/* Showcase Image */}
          <div className="relative max-w-4xl mx-auto mb-12 rounded-2xl overflow-hidden shadow-strong">
            <img
              src={productShowcaseImage}
              alt="Peanut butter product collection"
              className="w-full h-[300px] md:h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent flex items-end justify-center p-8">
              <div className="text-center text-primary-foreground">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">
                  Crafted with Love, Served with Pride
                </h3>
                <p className="text-lg opacity-90">
                  Three generations of peanut butter perfection
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredProducts.map((product, index) => (
            <div
              key={product.id}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center animate-fade-in">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Ready to taste the difference?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Join thousands of satisfied customers who have made the switch to our premium peanut butter.
          </p>
          <Button size="lg" variant="accent" className="text-lg px-8 py-4">
            View All Products
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};