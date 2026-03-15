import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-makhana.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6 lg:gap-8"
        >
          <span className="font-body text-sm font-semibold tracking-widest uppercase text-primary">
            Premium Indian Snacks
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
            Rooted in Tradition,{" "}
            <span className="italic text-primary">Crafted for Today</span>
          </h1>
          <p className="font-body text-lg text-muted-foreground max-w-md leading-relaxed">
            Discover the authentic taste of India with our handcrafted makhana,
             and traditional snacks — made with natural ingredients and
            timeless recipes.
          </p>
          <div className="flex gap-4 pt-2">
            <Button
              size="lg"
              className="rounded-full px-8 bg-primary text-primary-foreground hover:bg-primary/90 font-body font-semibold shadow-soft"
              asChild
            >
              <a href="#products">Shop Now</a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-body font-semibold"
              asChild
            >
              <a href="#about">Our Story</a>
            </Button>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          className="relative"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-card-hover">
            <img
              src={heroImg}
              alt="Premium roasted makhana in a ceramic bowl"
              className="w-full h-[400px] sm:h-[500px] lg:h-[560px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 to-transparent" />
          </div>
          {/* Floating badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="absolute -bottom-4 -left-4 md:-left-6 bg-accent text-accent-foreground rounded-xl px-5 py-3 shadow-card"
          >
            <p className="font-display text-sm font-semibold">100% Natural</p>
            <p className="font-body text-xs opacity-80">No preservatives</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
