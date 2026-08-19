"use client";

import Link from "next/link";
import { Box, Building2, Compass, Layers, MapPin, Store } from "lucide-react";
import { Button } from "@/components/animate-ui/components/buttons/button";
import { Download as DownloadIcon } from "@/components/animate-ui/icons/download";

const MATERIAL_TAGS = [
  { icon: Layers, label: "Cement" },
  { icon: Building2, label: "Steel & RMC" },
  { icon: Box, label: "Bricks & Blocks" },
  { icon: Compass, label: "Sand & Aggregates" },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold tracking-wide mb-6">
          <MapPin className="size-3.5 text-primary" />
          <span>Ahmedabad, Gujarat</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground text-balance leading-[1.12] mb-6">
          Construction Materials,{" "}
          <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-primary to-orange-400">
            Better Prices
          </span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-muted-foreground text-pretty max-w-2xl mx-auto leading-relaxed mb-8">
          Compare construction material prices and discover suppliers around
          Ahmedabad.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-14">
          <Button
            asChild
            size="lg"
            className="w-full sm:w-auto text-base font-semibold shadow-lg shadow-primary/25 cursor-pointer"
          >
            <Link href="#download">
              <DownloadIcon size={20} animateOnHover />
              <span>Download BuildRate</span>
            </Link>
          </Button>

          <Button
            asChild
            variant="secondary"
            size="lg"
            className="w-full sm:w-auto text-base font-semibold border border-border/80 cursor-pointer"
          >
            <Link href="#become-a-supplier">
              <Store className="size-4 text-primary" />
              <span>Become a Supplier</span>
            </Link>
          </Button>
        </div>

        <div className="pt-4 border-t border-border/50 max-w-xl mx-auto">
          <p className="text-xs font-medium text-muted-foreground/80 uppercase tracking-wider mb-3">
            Compare Listed Rates Across Core Materials
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
            {MATERIAL_TAGS.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-border/70 bg-card/60 text-xs font-medium text-foreground/90 backdrop-blur-xs hover:border-primary/40 transition-colors"
              >
                <Icon className="size-3.5 text-primary" />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
