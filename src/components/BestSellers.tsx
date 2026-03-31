import ProductCard from "./ProductCard";
import productClassic from "@/assets/product-classic-makhana.jpg";
import productPeriPeri from "@/assets/product-peri-peri.jpg";
import productMasalaSev from "@/assets/product-masala-sev.jpg";

const bestSellers = [
  {
    name: "Classic Roasted Makhana",
    description: "Our signature roasted fox nuts — light, crunchy, and irresistible.",
    price: "₹199",
    image: productClassic,
    badge: "⭐ Top Rated",
  },
  {
    name: "Peri Peri Makhana",
    description: "A fiery twist on a classic — bold flavor in every bite.",
    price: "₹229",
    image: productPeriPeri,
    badge: "🔥 Trending",
  },
  {
    name: "Masala Makhana",
    description: "The ultimate spiced makhan that pairs perfectly with chai.",
    price: "₹149",
    image: productMasalaSev,
    badge: "❤️  Fan Favorite",
  },
];

const BestSellers = () => {
  return (
    <section className="py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="font-body text-sm font-semibold tracking-widest uppercase text-primary">
            Most Loved
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-3">
            Best Sellers
          </h2>
          <p className="font-body text-muted-foreground mt-4 max-w-lg mx-auto">
            The snacks our customers can't stop ordering.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {bestSellers.map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
