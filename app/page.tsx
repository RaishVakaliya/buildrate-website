import { BackgroundDecor } from "@/components/background/background-decor";
import { HardHat, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <div className="relative flex flex-col flex-1 min-h-screen overflow-hidden">
      <BackgroundDecor />

      <header className="relative z-10 flex items-center justify-between px-6 py-4 border-b border-border/60 bg-background/70 backdrop-blur-md">
        <div className="flex items-center gap-2.5">
          <div className="flex items-center justify-center size-8 rounded-md bg-primary text-primary-foreground shadow-md shadow-primary/20">
            <HardHat className="size-4" aria-hidden="true" />
          </div>
          <span className="font-bold text-foreground tracking-tight text-lg">
            BuildRate
          </span>
        </div>
      </header>

      <main className="relative z-10 flex flex-col items-center justify-center flex-1 px-6 py-24 text-center">
        <div className="max-w-2xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold tracking-wide">
            <Sparkles className="size-3.5" aria-hidden="true" />
            <span>Construction Material Price Comparison &amp; Supplier Discovery</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground text-balance leading-[1.15]">
            Construction Materials,{" "}
            <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-primary to-orange-400">
              Better Prices
            </span>
          </h1>

          <p className="text-base sm:text-lg text-muted-foreground text-pretty max-w-xl mx-auto leading-relaxed">
            Browse construction materials, compare listed market prices, and discover
            local suppliers across Ahmedabad — all in one place.
          </p>
        </div>
      </main>

      <footer className="relative z-10 flex items-center justify-center px-6 py-4 border-t border-border/60">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} BuildRate. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
