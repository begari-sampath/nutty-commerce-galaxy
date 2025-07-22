import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import heroImage from "@/assets/hero-peanut-butter.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center bg-gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-background/20 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
              <div className="flex text-accent">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <span className="text-accent-foreground font-medium">Trusted by 10,000+ customers</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              Spread Joy with Our
              <span className="block text-accent">Gourmet Peanut Butter</span>
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto lg:mx-0">
              Handcrafted with the finest roasted peanuts and natural ingredients.
              Experience the rich, creamy taste that brings families together.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" variant="accent" className="text-lg px-8 py-4">
                Shop Collection
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4 bg-background/10 backdrop-blur border-primary-foreground/20 text-primary-foreground hover:bg-background/20">
                Learn More
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4 mt-12 max-w-md mx-auto lg:mx-0">
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">100%</div>
                <div className="text-sm text-primary-foreground/80">Natural</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">No</div>
                <div className="text-sm text-primary-foreground/80">Preservatives</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">3</div>
                <div className="text-sm text-primary-foreground/80">Varieties</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-scale-in">
            <div className="relative rounded-2xl overflow-hidden shadow-strong">
              <img
                src={heroImage}
                alt="Premium peanut butter with natural ingredients"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />

              {/* Floating Elements */}
              <div className="absolute top-6 right-6 bg-accent text-accent-foreground px-4 py-2 rounded-full font-semibold shadow-medium animate-bounce">
                Fresh Daily!
              </div>

              <div className="absolute bottom-6 left-6 bg-background/90 backdrop-blur p-4 rounded-lg shadow-medium">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center">
                    <Star className="h-6 w-6 text-accent-foreground fill-current" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Premium Quality</div>
                    <div className="text-sm text-muted-foreground">Handcrafted with love</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};