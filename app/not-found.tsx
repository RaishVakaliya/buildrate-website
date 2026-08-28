import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Home, Store } from "lucide-react";

export const metadata = {
  title: "404 — Page Not Found | BuildRate",
  description: "The page you are looking for does not exist on BuildRate.",
};

export default function NotFound() {
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

          <Link
            href="/"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-secondary text-secondary-foreground text-xs font-semibold hover:bg-secondary/80 transition-colors border border-border/80"
          >
            <Home className="size-3.5 text-primary" />
            <span>Go Home</span>
          </Link>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8 relative z-10">
        <div className="w-full max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary font-delius text-xs font-semibold tracking-wide mb-6">
            <span>Page Not Found &bull; 404 Error</span>
          </div>

          <div className="relative mx-auto mb-8 w-full max-w-[320px] sm:max-w-[380px] rounded-2xl border-2 border-border/80 bg-card/80 p-3 shadow-2xl shadow-black/40 backdrop-blur-md overflow-hidden">
            <div className="relative w-full aspect-video sm:aspect-[4/3] rounded-xl overflow-hidden bg-black/60 flex items-center justify-center">
              <Image
                src="https://i.giphy.com/media/C21GGDOpKT6Z4VuXyn/giphy.gif"
                alt="404 lost animation"
                fill
                unoptimized
                className="object-cover select-none"
                priority
              />
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground text-balance leading-tight mb-4">
            Blueprint{" "}
            <span className="font-exo font-extrabold text-primary bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-primary to-orange-400">
              Not Found
            </span>
          </h1>

          <p className="text-sm sm:text-base text-muted-foreground text-pretty max-w-lg mx-auto leading-relaxed mb-8">
            The page, material category, or supplier record you are looking for
            has been moved or doesn&apos;t exist yet on BuildRate.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 max-w-md mx-auto">
            <Link
              href="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all active:scale-[0.98]"
            >
              <ArrowLeft className="size-4" />
              <span>Return to Home</span>
            </Link>

            <Link
              href="/#become-a-supplier"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-secondary text-secondary-foreground font-semibold text-sm border border-border/80 hover:bg-secondary/80 transition-all active:scale-[0.98]"
            >
              <Store className="size-4 text-primary" />
              <span>Become a Supplier</span>
            </Link>
          </div>
        </div>
      </main>

      <footer className="w-full border-t border-border/60 py-6 text-center text-xs text-muted-foreground">
        <p>&copy; 2026 BuildRate. Ahmedabad, Gujarat, India.</p>
      </footer>
    </div>
  );
}
