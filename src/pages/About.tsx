import React from "react";
import { motion } from "framer-motion";
import { Leaf, Heart, ShieldCheck, Globe2 } from "lucide-react";

const AboutPage = () => {
  const features = [
    {
      icon: <Leaf className="h-8 w-8 text-green-600" />,
      title: "Natural Ingredients",
      description: "Only premium peanuts. No additives. No compromises.",
    },
    {
      icon: <Heart className="h-8 w-8 text-red-500" />,
      title: "Health First",
      description: "High-protein, heart-healthy peanut butter for all ages.",
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-blue-600" />,
      title: "Safe & Certified",
      description: "FDA-approved, ISO certified, and made in hygienic facilities.",
    },
    {
      icon: <Globe2 className="h-8 w-8 text-yellow-500" />,
      title: "Globally Loved",
      description: "Trusted by customers in 30+ countries.",
    },
  ];

  return (
    <main className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-yellow-50 py-16 px-6 text-center">
        <motion.h1
          className="text-4xl font-bold md:text-5xl text-brown-800"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Us
        </motion.h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto text-gray-600">
          Born from a passion for health and flavor, we bring you peanut butter
          that fuels your body and delights your taste buds.
        </p>
      </section>

      {/* Vision Section */}
      <section className="py-16 px-6 max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <img
          src="/images/peanut-butter-jar.jpg"
          alt="Peanut Butter Jar"
          className="rounded-xl shadow-lg"
        />
        <div>
          <h2 className="text-3xl font-bold mb-4 text-brown-700">Our Story</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            We started with a simple goal – to offer a clean, nutritious, and
            delicious alternative to sugary spreads. With locally sourced
            peanuts and zero compromise on quality, our peanut butter is crafted
            for athletes, kids, and everyone in between.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-brown-50 py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-brown-800 mb-12">
            Why Choose Our Peanut Butter?
          </h2>
          <div className="grid md:grid-cols-4 gap-10">
            {features.map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-brown-700 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
