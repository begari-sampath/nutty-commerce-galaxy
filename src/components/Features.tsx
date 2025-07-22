import { Shield, Leaf, Heart, Award } from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "100% Natural",
    description: "No artificial preservatives, colors, or flavors. Just pure, natural ingredients.",
  },
  {
    icon: Shield,
    title: "Quality Guaranteed",
    description: "Rigorous quality control ensures every jar meets our high standards.",
  },
  {
    icon: Heart,
    title: "Family Recipe",
    description: "Traditional recipes passed down through three generations of our family.",
  },
  {
    icon: Award,
    title: "Award Winning",
    description: "Recognized by food experts and loved by customers nationwide.",
  },
];

export const Features = () => {
  return (
    <section className="py-16 lg:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Why Choose
            <span className="text-primary"> NuttyDelights?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're committed to bringing you the finest peanut butter experience with 
            every jar we craft.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="text-center group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative mb-6">
                <div className="w-20 h-20 mx-auto bg-gradient-primary rounded-2xl flex items-center justify-center shadow-medium group-hover:shadow-strong transition-shadow duration-300">
                  <feature.icon className="h-10 w-10 text-primary-foreground" />
                </div>
                {/* Decorative circle */}
                <div className="absolute -inset-2 bg-accent/10 rounded-full -z-10 group-hover:bg-accent/20 transition-colors duration-300"></div>
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};