import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Check } from "lucide-react";

export const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // This will be connected to a real newsletter service later
      console.log("Newsletter subscription:", email);
      setIsSubscribed(true);
      setEmail("");
      
      // Reset after 3 seconds for demo
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl mx-auto text-center text-primary-foreground animate-fade-in">
          <div className="w-16 h-16 mx-auto mb-6 bg-accent rounded-full flex items-center justify-center">
            <Mail className="h-8 w-8 text-accent-foreground" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Stay in the Loop!
          </h2>
          
          <p className="text-lg text-primary-foreground/90 mb-8">
            Get exclusive recipes, special offers, and be the first to know about our new flavors. 
            Join our community of peanut butter enthusiasts!
          </p>

          {!isSubscribed ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-background/10 backdrop-blur border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/70"
                required
              />
              <Button 
                type="submit" 
                variant="accent" 
                className="px-8"
              >
                Subscribe
              </Button>
            </form>
          ) : (
            <div className="flex items-center justify-center gap-3 bg-success/20 text-success-foreground p-4 rounded-lg max-w-md mx-auto">
              <Check className="h-5 w-5" />
              <span className="font-medium">Thank you for subscribing!</span>
            </div>
          )}

          <p className="text-sm text-primary-foreground/70 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};