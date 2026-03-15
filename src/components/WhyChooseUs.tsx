import { motion } from "framer-motion";
import { Leaf, BookOpen, Award, Package } from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "Natural Ingredients",
    description: "Pure, wholesome ingredients sourced directly from trusted Indian farms.",
  },
  {
    icon: BookOpen,
    title: "Traditional Recipes",
    description: "Time-honored recipes that preserve the authentic flavors of India.",
  },
  {
    icon: Award,
    title: "Premium Quality",
    description: "Rigorous quality checks ensure every bite meets our high standards.",
  },
  {
    icon: Package,
    title: "Freshly Packed",
    description: "Sealed fresh to lock in flavor, crunch, and nutritional goodness.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="font-body text-sm font-semibold tracking-widest uppercase text-primary">
            Why Us
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-3">
            Why Choose Kora Roots
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center text-center gap-4 p-8"
            >
              <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                <feature.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
