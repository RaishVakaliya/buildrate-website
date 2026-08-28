"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Home, RefreshCw, Mail } from "lucide-react";
import { Button } from "@/components/animate-ui/components/buttons/button";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error("BuildRate App Error:", error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col justify-between bg-background text-foreground relative overflow-hidden">
      <header className="w-full border-b border-border/80 bg-background/90 backdrop-blur-md sticky top-0 z-50">
        <div className="mx-auto flex h-15 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-3 select-none">
            <div className="relative size-9 rounded-xl overflow-hidden bg-[#c5ad89] border border-border/60 shadow-sm flex items-center justify-center shrink-0">
              <Image
                src="/app-logo.webp"
                alt="BuildRate Logo"
                width={32}
                height={32}
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col leading-none gap-0.5">
              <span className="text-base font-bold tracking-tight text-foreground">
                Build<span className="text-[#c5ad89]">Rate</span>
              </span>
              <span className="text-[10px] font-medium text-[#c5ad89]/80 tracking-wide">
                Compare Material Prices
              </span>
            </div>
          </Link>

          <Button
            asChild
            variant="secondary"
            size="sm"
            className="cursor-pointer"
          >
            <Link
              href="/"
              className="flex items-center gap-1.5 text-xs font-semibold"
            >
              <Home className="size-3.5 text-primary" />
              <span>Go Home</span>
            </Link>
          </Button>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8 relative z-10">
        <div className="w-full max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-destructive/40 bg-destructive/10 text-destructive-foreground font-delius text-xs font-semibold tracking-wide mb-6">
            <span>Structural Hiccup &bull; Error 500</span>
          </div>

          <div className="relative mx-auto mb-8 w-full max-w-[320px] sm:max-w-[380px] rounded-2xl border-2 border-border/80 bg-card/80 p-3 shadow-2xl shadow-black/40 backdrop-blur-md overflow-hidden">
            <div className="relative w-full aspect-video sm:aspect-[4/3] rounded-xl overflow-hidden bg-black/60 flex items-center justify-center">
              <Image
                src="https://i.giphy.com/media/FaFu1s2hO1xYHdpk6N/giphy.gif"
                alt="Unexpected site error animation"
                fill
                unoptimized
                className="object-cover select-none"
                priority
              />
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground text-balance leading-tight mb-4">
            Something Broke on{" "}
            <span className="font-exo font-extrabold text-primary bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-primary to-orange-400">
              Site
            </span>
          </h1>

          <p className="text-sm sm:text-base text-muted-foreground text-pretty max-w-lg mx-auto leading-relaxed mb-8">
            An unexpected error interrupted your session. Don&apos;t worry
            &mdash; our team has been alerted. Try rebuilding the page.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 max-w-md mx-auto mb-8">
            <Button
              onClick={() => reset()}
              size="lg"
              className="w-full sm:w-auto text-sm font-semibold shadow-lg shadow-primary/20 cursor-pointer"
            >
              <RefreshCw className="size-4" />
              <span>Try Again / Rebuild</span>
            </Button>

            <Button
              asChild
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto text-sm font-semibold border border-border/80 cursor-pointer"
            >
              <Link href="/" className="flex items-center gap-2">
                <Home className="size-4 text-primary" />
                <span>Return to Home</span>
              </Link>
            </Button>
          </div>

          <p className="text-xs text-muted-foreground">
            Persistent issue? Contact us directly at{" "}
            <a
              href="mailto:buildrate.app@gmail.com"
              className="font-solway font-medium text-primary hover:underline"
            >
              buildrate.app@gmail.com
            </a>
          </p>
        </div>
      </main>

      <footer className="w-full border-t border-border/60 py-6 text-center text-xs text-muted-foreground">
        <p>
          &copy; {new Date().getFullYear()} BuildRate. Ahmedabad, Gujarat,
          India.
        </p>
      </footer>
    </div>
  );
}
