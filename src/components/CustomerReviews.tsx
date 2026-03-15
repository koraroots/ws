import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Priya S.",
    text: "The classic makhana is absolutely addictive! So light and crunchy. Love that it's all natural with no preservatives.",
    rating: 5,
  },
  {
    name: "Rahul M.",
    text: "Finally found a snack brand that respects traditional flavors while keeping it healthy. The masala Makhana is next level!",
    rating: 5,
  },
  {
    name: "Ananya K.",
    text: "The packaging is beautiful and the quality is premium. Peri peri makhana is my new go-to evening snack.",
    rating: 5,
  },
];

const CustomerReviews = () => {
  return (
    <section id="reviews" className="py-24 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="font-body text-sm font-semibold tracking-widest uppercase text-primary">
            Testimonials
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-3">
            What Our Customers Say
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card rounded-2xl p-8 shadow-card flex flex-col gap-4"
            >
              <div className="flex gap-1">
                {Array.from({ length: review.rating }).map((_, idx) => (
                  <Star key={idx} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="font-body text-sm text-muted-foreground leading-relaxed italic">
                "{review.text}"
              </p>
              <p className="font-display font-semibold text-foreground mt-auto">
                {review.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
