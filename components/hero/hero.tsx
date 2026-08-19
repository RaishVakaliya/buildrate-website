"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import {
  Box,
  Building2,
  Compass,
  Layers,
  MapPin,
  Store,
  Tag,
} from "lucide-react";
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
      className="relative pt-6 pb-12 md:pt-12 md:pb-16 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          <div className="lg:col-span-7 text-center lg:text-left">
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

            <p className="text-base sm:text-lg md:text-xl text-muted-foreground text-pretty max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-8">
              Compare construction material prices and discover suppliers around
              Ahmedabad.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 mb-10">
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

            <div className="pt-4 border-t border-border/50 max-w-xl mx-auto lg:mx-0">
              <p className="text-xs font-medium text-muted-foreground/80 uppercase tracking-wider mb-3">
                Compare Listed Rates Across Core Materials
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-2.5">
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

          <div className="lg:col-span-5 flex justify-center relative">
            <div className="hidden sm:flex absolute -top-4 -left-4 xl:-left-8 animate-float-slow items-center gap-2 px-3 py-1.5 rounded-full border border-border/70 bg-card/75 backdrop-blur-md shadow-lg shadow-black/20 text-xs font-medium text-foreground select-none z-10">
              <Layers className="size-3.5 text-primary" />
              <span>Cement &amp; Steel</span>
            </div>

            <div className="hidden sm:flex absolute bottom-[-16] -right-9 xl:-right-10 animate-float-reverse items-center gap-2 px-3 py-1.5 rounded-full border border-border/70 bg-card/75 backdrop-blur-md shadow-lg shadow-black/20 text-xs font-medium text-foreground select-none z-10">
              <Tag className="size-3.5 text-primary" />
              <span>Price Comparison</span>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="relative max-w-[280px] sm:max-w-[310px] md:max-w-[330px] rounded-[2.5rem] border-[3px] border-border/90 bg-card/95 p-2.5 sm:p-3 shadow-2xl shadow-black/60 backdrop-blur-xl"
            >
              <div className="relative overflow-hidden rounded-[2rem] bg-black">
                <Image
                  src="/home.webp"
                  alt="BuildRate Mobile Application Home Screen"
                  width={600}
                  height={1200}
                  priority
                  className="w-full h-auto object-cover rounded-[2rem]"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
