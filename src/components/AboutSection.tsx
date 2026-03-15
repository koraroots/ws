import { motion } from "framer-motion";
import heroImg from "@/assets/hero-makhana.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl overflow-hidden shadow-card"
        >
          <img
            src={heroImg}
            alt="Kora Roots story"
            className="w-full h-[400px] object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-col gap-6"
        >
          <span className="font-body text-sm font-semibold tracking-widest uppercase text-primary">
            Our Story
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
            Bringing Tradition to Your Table
          </h2>
          <p className="font-body text-muted-foreground leading-relaxed">
            At Kora Roots, we believe that the best snacks come from the best
            traditions. Born from a deep love for India's rich culinary heritage,
            we set out to bring you authentic, healthy snacks crafted the
            old-fashioned way — with care, patience, and the finest natural
            ingredients.
          </p>
          <p className="font-body text-muted-foreground leading-relaxed">
            Every handful of our makhana and makhana carries the warmth of time-tested
            recipes, reimagined for the modern, health-conscious snacker. No
            artificial preservatives, no shortcuts — just pure, honest flavors
            rooted in tradition.
          </p>
          <div className="flex gap-8 pt-4">
            <div>
              <p className="font-display text-2xl font-bold text-accent">50+</p>
              <p className="font-body text-sm text-muted-foreground">Happy Retailers</p>
            </div>
            <div>
              <p className="font-display text-2xl font-bold text-accent">10K+</p>
              <p className="font-body text-sm text-muted-foreground">Customers</p>
            </div>
            <div>
              <p className="font-display text-2xl font-bold text-accent">100%</p>
              <p className="font-body text-sm text-muted-foreground">Natural</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
