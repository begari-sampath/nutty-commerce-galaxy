import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { ProductShowcase } from "@/components/ProductShowcase";
import { Newsletter } from "@/components/Newsletter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <Hero />
        <Features />
        <ProductShowcase />
        <Newsletter />
      </main>
    </div>
  );
};

export default Index;
