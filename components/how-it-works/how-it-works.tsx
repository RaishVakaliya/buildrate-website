"use client";

import { motion } from "motion/react";
import { Search, Scale, Building2, PhoneCall } from "lucide-react";

const STEPS = [
  {
    step: "01",
    icon: Search,
    title: "Search Materials",
    description:
      "Find the construction materials you need across cement, steel, bricks, and sand.",
  },
  {
    step: "02",
    icon: Scale,
    title: "Compare Prices",
    description:
      "Compare listed prices from available suppliers to identify current market rates.",
  },
  {
    step: "03",
    icon: Building2,
    title: "Explore Suppliers",
    description:
      "View supplier details, profiles, and discover options available around Ahmedabad.",
  },
  {
    step: "04",
    icon: PhoneCall,
    title: "Contact Directly",
    description:
      "Contact the supplier directly via phone to discuss your project requirements.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-heading"
      className="relative pt-6 pb-16 md:pt-12 md:pb-24 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold tracking-wide mb-4">
            <span>Simple 4-Step Process</span>
          </div>
          <h2
            id="how-it-works-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-4"
          >
            How BuildRate{" "}
            <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-primary to-orange-400">
              Works
            </span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground text-pretty leading-relaxed">
            Find the right materials and suppliers in a few simple steps.
          </p>
        </div>

        <div className="relative">
          <div
            aria-hidden="true"
            className="hidden lg:block absolute top-7 left-[12.5%] right-[12.5%] h-0.5 bg-primary/60 z-0"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6 relative z-10">
            {STEPS.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.article
                  key={item.step}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                  className="group relative flex flex-col items-center text-center lg:items-start lg:text-left"
                >
                  <div className="relative mb-5 flex size-14 items-center justify-center rounded-2xl border-2 border-primary/40 bg-card shadow-lg shadow-black/30 backdrop-blur-md transition-all duration-300 group-hover:scale-105 group-hover:border-primary group-hover:shadow-primary/10">
                    <span className="text-base font-extrabold text-primary font-mono">
                      {item.step}
                    </span>
                  </div>

                  <div className="w-full flex-1 rounded-2xl border border-border/80 bg-card/60 p-6 backdrop-blur-sm transition-all duration-300 group-hover:border-primary/50 group-hover:bg-card/85 group-hover:shadow-xl group-hover:shadow-primary/5 flex flex-col items-center text-center lg:items-start lg:text-left">
                    <div className="mb-4 inline-flex size-10 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                      <Icon className="size-5" />
                    </div>

                    <h3 className="text-lg font-bold text-[#c5ad89] mb-2 tracking-tight">
                      {item.title}
                    </h3>

                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
