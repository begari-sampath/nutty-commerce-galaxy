import { useState } from "react";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { products, categories } from "@/data/products";
// Example subcategories (should come from your data)
const subcategories = [
    { id: "classic", name: "Classic", category: "peanut" },
    { id: "crunchy", name: "Crunchy", category: "peanut" },
    { id: "chocolate", name: "Chocolate", category: "peanut" },
];
import { Search, Filter, Grid, List } from "lucide-react";

export default function Products() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [selectedSubcategory, setSelectedSubcategory] = useState("");
    const [sortBy, setSortBy] = useState("name");
    const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");
    const [minRating, setMinRating] = useState("");

    // Local cart and wishlist state
    const [cart, setCart] = useState([]);
    const [wishlist, setWishlist] = useState([]);
    const [showCart, setShowCart] = useState(false);
    const [showWishlist, setShowWishlist] = useState(false);

    // Add to cart
    const handleAddToCart = (product) => {
        if (!cart.find(item => item.id === product.id)) {
            setCart([...cart, { ...product, quantity: 1 }]);
        }
    };
    // Remove from cart
    const handleRemoveFromCart = (id) => {
        setCart(cart.filter(item => item.id !== id));
    };
    // Add to wishlist
    const handleAddToWishlist = (product) => {
        if (!wishlist.find(item => item.id === product.id)) {
            setWishlist([...wishlist, product]);
        }
    };
    // Remove from wishlist
    const handleRemoveFromWishlist = (id) => {
        setWishlist(wishlist.filter(item => item.id !== id));
    };

    // Filter and sort products
    const filteredProducts = products
        .filter(product => {
            const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                product.description.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
            const matchesSubcategory = !selectedSubcategory || product.subcategory === selectedSubcategory;
            const matchesMinPrice = !minPrice || product.price >= Number(minPrice);
            const matchesMaxPrice = !maxPrice || product.price <= Number(maxPrice);
            const matchesMinRating = !minRating || product.rating >= Number(minRating);
            return matchesSearch && matchesCategory && matchesSubcategory && matchesMinPrice && matchesMaxPrice && matchesMinRating;
        })
        .sort((a, b) => {
            switch (sortBy) {
                case "price":
                    return a.price - b.price;
                case "price-desc":
                    return b.price - a.price;
                case "rating":
                    return b.rating - a.rating;
                case "name":
                default:
                    return a.name.localeCompare(b.name);
            }
        });

    return (
        <main className="py-8">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Quick View Cart & Wishlist Buttons */}
                <div className="flex justify-end gap-4 mb-4">
                    <Button variant="outline" onClick={() => setShowCart(!showCart)}>
                        Cart ({cart.length})
                    </Button>
                    <Button variant="outline" onClick={() => setShowWishlist(!showWishlist)}>
                        Wishlist ({wishlist.length})
                    </Button>
                </div>

                {/* Quick View Cart */}
                {showCart && (
                    <div className="fixed top-20 right-4 w-80 bg-card border border-border rounded-lg shadow-lg z-50 p-4">
                        <h3 className="font-bold mb-2">Cart</h3>
                        {cart.length === 0 ? (
                            <p className="text-muted-foreground">Cart is empty.</p>
                        ) : (
                            <ul className="space-y-2">
                                {cart.map(item => (
                                    <li key={item.id} className="flex justify-between items-center">
                                        <span>{item.name}</span>
                                        <Button size="sm" variant="destructive" onClick={() => handleRemoveFromCart(item.id)}>Remove</Button>
                                    </li>
                                ))}
                            </ul>
                        )}
                        <Button className="mt-4 w-full" variant="default" onClick={() => window.location.href = "/cart"}>Go to Cart</Button>
                    </div>
                )}

                {/* Quick View Wishlist */}
                {showWishlist && (
                    <div className="fixed top-20 right-96 w-80 bg-card border border-border rounded-lg shadow-lg z-50 p-4">
                        <h3 className="font-bold mb-2">Wishlist</h3>
                        {wishlist.length === 0 ? (
                            <p className="text-muted-foreground">Wishlist is empty.</p>
                        ) : (
                            <ul className="space-y-2">
                                {wishlist.map(item => (
                                    <li key={item.id} className="flex justify-between items-center">
                                        <span>{item.name}</span>
                                        <Button size="sm" variant="destructive" onClick={() => handleRemoveFromWishlist(item.id)}>Remove</Button>
                                    </li>
                                ))}
                            </ul>
                        )}
                        <Button className="mt-4 w-full" variant="default" onClick={() => window.location.href = "/wishlist"}>Go to Wishlist</Button>
                    </div>
                )}
                {/* Page Header */}
                <div className="text-center mb-12 animate-fade-in">
                    <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                        Our
                        <span className="text-primary"> Premium </span>
                        Collection
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Discover our full range of handcrafted peanut butter varieties,
                        each made with the finest ingredients and traditional recipes.
                    </p>
                </div>

                {/* Filters and Search */}
                <div className="bg-card rounded-xl border border-border p-6 mb-8 shadow-soft">
                    <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
                        {/* Search */}
                        <div className="relative flex-1 max-w-md">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                            <Input
                                type="text"
                                placeholder="Search products..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="pl-10"
                            />
                        </div>

                        {/* Category Filter */}
                        <div className="flex flex-wrap gap-2">
                            {categories.map((category) => (
                                <Button
                                    key={category.id}
                                    variant={selectedCategory === category.id ? "default" : "outline"}
                                    size="sm"
                                    onClick={() => { setSelectedCategory(category.id); setSelectedSubcategory(""); }}
                                    className="relative"
                                >
                                    {category.name}
                                    <Badge variant="secondary" className="ml-2 text-xs">
                                        {category.count}
                                    </Badge>
                                </Button>
                            ))}
                        </div>

                        {/* Subcategory Filter */}
                        <div className="flex flex-wrap gap-2">
                            {subcategories.filter(sub => selectedCategory === "all" || sub.category === selectedCategory).map((sub) => (
                                <Button
                                    key={sub.id}
                                    variant={selectedSubcategory === sub.id ? "default" : "outline"}
                                    size="sm"
                                    onClick={() => setSelectedSubcategory(sub.id)}
                                >
                                    {sub.name}
                                </Button>
                            ))}
                        </div>

                        {/* Advanced Filters */}
                        <div className="flex flex-col gap-2">
                            <input
                                type="number"
                                placeholder="Min Price"
                                value={minPrice}
                                onChange={e => setMinPrice(e.target.value)}
                                className="border p-2 rounded mb-1"
                                min="0"
                            />
                            <input
                                type="number"
                                placeholder="Max Price"
                                value={maxPrice}
                                onChange={e => setMaxPrice(e.target.value)}
                                className="border p-2 rounded mb-1"
                                min="0"
                            />
                            <input
                                type="number"
                                placeholder="Min Rating"
                                value={minRating}
                                onChange={e => setMinRating(e.target.value)}
                                className="border p-2 rounded"
                                min="0"
                                max="5"
                            />
                        </div>

                        {/* Sort and View Controls */}
                        <div className="flex items-center gap-2">
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="px-3 py-2 border border-border rounded-md bg-background text-foreground"
                            >
                                <option value="name">Sort by Name</option>
                                <option value="price">Price: Low to High</option>
                                <option value="price-desc">Price: High to Low</option>
                                <option value="rating">Highest Rated</option>
                            </select>

                            <div className="flex border border-border rounded-md">
                                <Button
                                    variant={viewMode === "grid" ? "default" : "ghost"}
                                    size="sm"
                                    onClick={() => setViewMode("grid")}
                                    className="rounded-r-none"
                                >
                                    <Grid className="h-4 w-4" />
                                </Button>
                                <Button
                                    variant={viewMode === "list" ? "default" : "ghost"}
                                    size="sm"
                                    onClick={() => setViewMode("list")}
                                    className="rounded-l-none"
                                >
                                    <List className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Results Count */}
                <div className="mb-6">
                    <p className="text-muted-foreground">
                        Showing {filteredProducts.length} of {products.length} products
                        {selectedCategory !== "all" && (
                            <span> in {categories.find(c => c.id === selectedCategory)?.name}</span>
                        )}
                    </p>
                </div>

                {/* Products Grid/List */}
                {filteredProducts.length > 0 ? (
                    <div className={
                        viewMode === "grid"
                            ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                            : "flex flex-col gap-4"
                    }>
                        {filteredProducts.map((product, index) => (
                            <div
                                key={product.id}
                                className="animate-slide-up relative"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                {/* Link to product details page */}
                                <a href={`/product/${product.id}`} className="block mb-2">
                                    <ProductCard {...product} />
                                </a>
                                <div className="flex gap-2 absolute top-2 right-2">
                                    <Button size="sm" variant="default" onClick={() => handleAddToCart(product)} disabled={!!cart.find(item => item.id === product.id)}>
                                        {cart.find(item => item.id === product.id) ? "In Cart" : "Add to Cart"}
                                    </Button>
                                    <Button size="sm" variant="outline" onClick={() => handleAddToWishlist(product)} disabled={!!wishlist.find(item => item.id === product.id)}>
                                        {wishlist.find(item => item.id === product.id) ? "In Wishlist" : "Add to Wishlist"}
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12">
                        <div className="w-24 h-24 mx-auto mb-6 bg-muted rounded-full flex items-center justify-center">
                            <Search className="h-12 w-12 text-muted-foreground" />
                        </div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                            No products found
                        </h3>
                        <p className="text-muted-foreground mb-6">
                            Try adjusting your search terms or filters to find what you're looking for.
                        </p>
                        <Button variant="outline" onClick={() => {
                            setSearchTerm("");
                            setSelectedCategory("all");
                        }}>
                            Clear Filters
                        </Button>
                    </div>
                )}
            </div>
        </main>
    );
}