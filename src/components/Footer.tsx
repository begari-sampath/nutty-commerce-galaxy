import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-accent">NuttyDelights</h3>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Crafting premium peanut butter with love and tradition since 1952. 
              Three generations of family recipes, now available nationwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="/" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/products" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="/about" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/recipes" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Recipes
                </a>
              </li>
              <li>
                <a href="/contact" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Support */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Customer Support</h4>
            <ul className="space-y-3">
              <li>
                <a href="/shipping" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="/returns" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Returns & Exchanges
                </a>
              </li>
              <li>
                <a href="/faq" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/privacy" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Get in Touch</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="text-primary-foreground/80">
                  123 Peanut Street<br />
                  Nutville, CA 90210
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="text-primary-foreground/80">
                  (555) 123-NUTS
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="text-primary-foreground/80">
                  hello@nuttydelights.com
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-foreground/60 text-sm">
              © 2024 NuttyDelights. All rights reserved.
            </p>
            <p className="text-primary-foreground/60 text-sm mt-2 md:mt-0">
              Made with ❤️ and lots of peanut butter
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};