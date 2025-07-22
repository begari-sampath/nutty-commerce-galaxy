export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  reviewCount: number;
  description: string;
  ingredients: string[];
  nutritionFacts: {
    servingSize: string;
    calories: number;
    protein: string;
    fat: string;
    carbs: string;
  };
  badge?: string;
  isNew?: boolean;
  onSale?: boolean;
  inStock: boolean;
  stockQuantity: number;
}

// Placeholder images - these will be replaced with real product images
const generatePlaceholderImage = (width: number, height: number, text: string) => 
  `https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=${width}&h=${height}&fit=crop&q=80`;

export const products: Product[] = [
  {
    id: "1",
    name: "Classic Smooth Peanut Butter",
    price: 12.99,
    originalPrice: 15.99,
    image: generatePlaceholderImage(400, 400, "Classic Smooth"),
    category: "smooth",
    rating: 4.8,
    reviewCount: 324,
    description: "Our signature smooth peanut butter made from the finest roasted peanuts. Creamy, rich, and perfect for spreading or cooking.",
    ingredients: ["Roasted Peanuts", "Sea Salt", "Natural Oil"],
    nutritionFacts: {
      servingSize: "2 tbsp (32g)",
      calories: 190,
      protein: "8g",
      fat: "16g",
      carbs: "6g"
    },
    onSale: true,
    inStock: true,
    stockQuantity: 48
  },
  {
    id: "2",
    name: "Crunchy Peanut Butter Delight",
    price: 13.99,
    image: generatePlaceholderImage(400, 400, "Crunchy"),
    category: "crunchy",
    rating: 4.7,
    reviewCount: 256,
    description: "For those who love texture! Our crunchy peanut butter features real peanut pieces in every bite.",
    ingredients: ["Roasted Peanuts", "Peanut Pieces", "Sea Salt", "Natural Oil"],
    nutritionFacts: {
      servingSize: "2 tbsp (32g)",
      calories: 190,
      protein: "8g",
      fat: "16g",
      carbs: "6g"
    },
    badge: "Best Seller",
    inStock: true,
    stockQuantity: 35
  },
  {
    id: "3",
    name: "Honey Roasted Peanut Butter",
    price: 15.99,
    image: generatePlaceholderImage(400, 400, "Honey"),
    category: "flavored",
    rating: 4.9,
    reviewCount: 189,
    description: "Sweet meets nutty in this delicious honey-infused peanut butter. Made with real wildflower honey.",
    ingredients: ["Roasted Peanuts", "Wildflower Honey", "Sea Salt"],
    nutritionFacts: {
      servingSize: "2 tbsp (32g)",
      calories: 200,
      protein: "7g",
      fat: "15g",
      carbs: "8g"
    },
    isNew: true,
    inStock: true,
    stockQuantity: 22
  },
  {
    id: "4",
    name: "Dark Chocolate Peanut Butter",
    price: 16.99,
    image: generatePlaceholderImage(400, 400, "Chocolate"),
    category: "flavored",
    rating: 4.6,
    reviewCount: 143,
    description: "Indulgent blend of premium peanut butter and rich dark chocolate. Perfect for dessert lovers.",
    ingredients: ["Roasted Peanuts", "Dark Chocolate", "Cocoa Powder", "Sea Salt"],
    nutritionFacts: {
      servingSize: "2 tbsp (32g)",
      calories: 210,
      protein: "7g",
      fat: "17g",
      carbs: "9g"
    },
    badge: "Premium",
    inStock: true,
    stockQuantity: 18
  },
  {
    id: "5",
    name: "Organic Natural Peanut Butter",
    price: 17.99,
    image: generatePlaceholderImage(400, 400, "Organic"),
    category: "organic",
    rating: 4.8,
    reviewCount: 267,
    description: "100% organic peanuts with no added oils or preservatives. Just pure, natural peanut goodness.",
    ingredients: ["Organic Roasted Peanuts", "Organic Sea Salt"],
    nutritionFacts: {
      servingSize: "2 tbsp (32g)",
      calories: 180,
      protein: "8g",
      fat: "15g",
      carbs: "5g"
    },
    badge: "Organic",
    inStock: true,
    stockQuantity: 31
  },
  {
    id: "6",
    name: "Spicy Chili Peanut Butter",
    price: 14.99,
    image: generatePlaceholderImage(400, 400, "Spicy"),
    category: "flavored",
    rating: 4.4,
    reviewCount: 98,
    description: "For the adventurous! Our peanut butter infused with carefully selected chili peppers for a perfect kick.",
    ingredients: ["Roasted Peanuts", "Chili Peppers", "Sea Salt", "Paprika"],
    nutritionFacts: {
      servingSize: "2 tbsp (32g)",
      calories: 190,
      protein: "8g",
      fat: "16g",
      carbs: "6g"
    },
    isNew: true,
    inStock: true,
    stockQuantity: 15
  }
];

export const categories = [
  { id: "all", name: "All Products", count: products.length },
  { id: "smooth", name: "Smooth", count: products.filter(p => p.category === "smooth").length },
  { id: "crunchy", name: "Crunchy", count: products.filter(p => p.category === "crunchy").length },
  { id: "flavored", name: "Flavored", count: products.filter(p => p.category === "flavored").length },
  { id: "organic", name: "Organic", count: products.filter(p => p.category === "organic").length },
];