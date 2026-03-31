import ProductCard from "./ProductCard";
import productClassic from "@/assets/product-classic-makhana.jpg";
import productPeriPeri from "@/assets/product-peri-peri.jpg";
import productMasalaSev from "@/assets/product-masala-sev.jpg";
import productSaltedSev from "@/assets/product-salted-sev.jpg";

const products = [
  {
    name: "Classic Roasted Makhana",
    description: "Lightly salted and perfectly roasted fox nuts with a satisfying crunch.",
    price: "Coming Soon",
    image: productClassic,
    badge: "Best Seller",
  },
  {
    name: "Peri Peri Makhana",
    description: "Bold and spicy peri peri flavored makhana for adventurous snackers.",
    price: "Coming Soon",
    image: productPeriPeri,
  },
  {
    name: "Masala makhana",
    description: "Traditional crispy makhana seasoned with aromatic Indian spices.",
    price: "Coming Soon",
    image: productMasalaSev,
  },
  {
    name: "Salted makhana",
    description: "Classic lightly salted makhana — the timeless Indian tea-time snack.",
    price: "Coming Soon",
    image: productSaltedSev,
  },
];

const FeaturedProducts = () => {
  return (
    <section id="products" className="py-24 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="font-body text-sm font-semibold tracking-widest uppercase text-primary">
            Our Collection
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-3">
            Featured Products
          </h2>
          <p className="font-body text-muted-foreground mt-4 max-w-lg mx-auto">
            Handpicked snacks made with the finest natural ingredients and
            traditional recipes passed down through generations.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
