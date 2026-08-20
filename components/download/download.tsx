"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { STORE_LINKS } from "@/constants/store-links";
import { StarsBackground } from "@/components/animate-ui/components/backgrounds/stars";

export function DownloadSection() {
  return (
    <section
      id="download"
      aria-labelledby="download-heading"
      className="relative pt-6 pb-14 md:pt-8 md:pb-20 border-t border-border/50 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative max-w-4xl mx-auto rounded-3xl border border-border/80 overflow-hidden p-8 sm:p-12 md:p-14 text-center"
        >
          <StarsBackground
            starColor="#ffffff"
            pointerEvents={true}
            className="absolute inset-0 size-full rounded-3xl -z-0 bg-[radial-gradient(ellipse_at_bottom,_#262626_0%,_#000_100%)]"
          />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold tracking-wide mb-5">
              <span>Available on Android &bull; iOS Coming Soon</span>
            </div>

            <h2
              id="download-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-4"
            >
              Ready to{" "}
              <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-primary to-orange-400">
                Build Smarter?
              </span>
            </h2>

            <p className="text-base sm:text-lg text-muted-foreground text-pretty max-w-xl mx-auto leading-relaxed mb-10">
              Get BuildRate to compare construction material prices and discover
              local suppliers around Ahmedabad.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5 select-none">
              <a
                href={STORE_LINKS.googlePlay.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3.5 px-5 py-3 rounded-2xl bg-black/90 hover:bg-black border border-white/20 hover:border-white/40 text-white transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] min-w-[200px] text-left cursor-pointer"
              >
                <Image
                  src="/google-play-store-icon.webp"
                  alt="Google Play"
                  width={28}
                  height={28}
                  className="size-7 object-contain shrink-0"
                />
                <div className="flex flex-col leading-none">
                  <span className="text-[10px] font-semibold tracking-wider uppercase text-white/70 mb-1">
                    GET IT ON
                  </span>
                  <span className="text-base sm:text-lg font-bold tracking-tight text-white">
                    Google Play
                  </span>
                </div>
              </a>

              <a
                href={STORE_LINKS.indusAppstore.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3.5 px-5 py-3 rounded-2xl bg-black/90 hover:bg-black border border-white/20 hover:border-white/40 text-white transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] min-w-[200px] text-left cursor-pointer"
              >
                <Image
                  src="/indus-icon.webp"
                  alt="Indus Appstore"
                  width={56}
                  height={56}
                  className="size-7 object-contain shrink-0 rounded-md"
                />
                <div className="flex flex-col leading-none">
                  <span className="text-[10px] font-semibold tracking-wider uppercase text-white/70 mb-1">
                    GET IT ON
                  </span>
                  <span className="text-base sm:text-lg font-bold tracking-tight text-white">
                    Indus Appstore
                  </span>
                </div>
              </a>

              <div
                className="inline-flex items-center gap-3.5 px-5 py-3 rounded-2xl bg-black/50 border border-white/10 text-white/40 min-w-[200px] text-left cursor-not-allowed select-none opacity-60 relative group"
                title="iOS version is currently in development"
              >
                <Image
                  src="/Apple_logo_black.svg"
                  alt="Apple App Store"
                  width={28}
                  height={28}
                  className="size-7 object-contain shrink-0 brightness-0 invert opacity-60"
                />
                <div className="flex flex-col leading-none">
                  <span className="text-[10px] font-semibold tracking-wider uppercase text-white/40 mb-1">
                    COMING SOON TO
                  </span>
                  <span className="text-base sm:text-lg font-bold tracking-tight text-white/60">
                    App Store
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
