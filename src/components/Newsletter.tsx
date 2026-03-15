import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("Thank you for subscribing!");
      setEmail("");
    }
  };

  return (
    <section className="py-24 lg:py-32 bg-primary">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-6 text-center"
      >
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary-foreground">
          Stay in the Loop
        </h2>
        <p className="font-body text-primary-foreground/80 mt-4 max-w-md mx-auto">
          Get updates on new flavors, seasonal specials, and exclusive offers
          delivered to your inbox.
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3 mt-8 max-w-md mx-auto"
        >
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-full bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 font-body"
            required
          />
          <Button
            type="submit"
            className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90 font-body font-semibold px-8"
          >
            Subscribe
          </Button>
        </form>
      </motion.div>
    </section>
  );
};

export default Newsletter;
