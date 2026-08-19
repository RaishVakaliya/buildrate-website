"use client";

import { motion } from "motion/react";
import {
  Scale,
  Building2,
  PhoneCall,
  BadgeCheck,
  Search,
  Languages,
} from "lucide-react";

const FEATURES = [
  {
    icon: Scale,
    title: "Compare Material Prices",
    description: "Compare listed prices across construction materials.",
  },
  {
    icon: Building2,
    title: "Find Local Suppliers",
    description: "Discover suppliers around Ahmedabad.",
  },
  {
    icon: PhoneCall,
    title: "Direct Supplier Contact",
    description: "Connect directly with suppliers with a single tap.",
  },
  {
    icon: BadgeCheck,
    title: "Supplier Profiles",
    description: "View supplier details and contact information.",
  },
  {
    icon: Search,
    title: "Search Materials",
    description: "Quickly find the construction materials you need.",
  },
  {
    icon: Languages,
    title: "English & Gujarati",
    description: "Use the app in English or Gujarati.",
  },
];

export function Features() {
  return (
    <section
      id="features"
      aria-labelledby="features-heading"
      className="relative pt-6 pb-16 md:pt-15 md:pb-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2
            id="features-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-4"
          >
            Everything You Need to{" "}
            <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-primary to-orange-400">
              Build Smarter
            </span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground text-pretty leading-relaxed">
            BuildRate helps you compare construction materials and discover
            local suppliers in one place.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {FEATURES.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.article
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.06,
                  ease: "easeOut",
                }}
                className="group relative rounded-2xl border border-border/80 bg-card/60 p-6 sm:p-7 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:bg-card/85 hover:shadow-xl hover:shadow-primary/5"
              >
                <div className="mb-5 inline-flex size-11 items-center justify-center rounded-xl border border-primary/25 bg-primary/10 text-primary transition-colors group-hover:bg-primary/20 group-hover:border-primary/40">
                  <Icon className="size-5" />
                </div>

                <h3 className="text-lg font-bold text-foreground mb-2 tracking-tight">
                  {feature.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
