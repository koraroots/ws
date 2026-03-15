import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface ProductCardProps {
  name: string;
  description: string;
  price: string;
  image: string;
  badge?: string;
}

const ProductCard = ({ name, description, price, image, badge }: ProductCardProps) => {
  const handleAddToCart = () => {
    toast.success(`${name} added to cart!`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -4 }}
      className="group relative bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-300"
    >
      {badge && (
        <span className="absolute top-4 left-4 z-10 bg-accent text-accent-foreground text-xs font-semibold font-body px-3 py-1 rounded-full">
          {badge}
        </span>
      )}
      <div className="overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-56 object-cover group-hover:scale-[1.03] transition-transform duration-500"
        />
      </div>
      <div className="p-5 flex flex-col gap-2">
        <h3 className="font-display text-lg font-semibold text-foreground">{name}</h3>
        <p className="font-body text-sm text-muted-foreground leading-relaxed">{description}</p>
        <div className="flex items-center justify-between mt-3">
          <span className="font-display text-xl font-bold text-accent">{price}</span>
          <Button
            size="sm"
            className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 font-body gap-2"
            onClick={handleAddToCart}
          >
            <ShoppingCart className="h-4 w-4" />
            Add
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
