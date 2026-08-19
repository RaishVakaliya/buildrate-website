import { cn } from "@/lib/utils";
import { Building2, Layers, Search, Tag } from "lucide-react";

interface BackgroundDecorProps {
  className?: string;
  showStickers?: boolean;
}

export function BackgroundDecor({
  className,
  showStickers = true,
}: BackgroundDecorProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "absolute inset-0 overflow-hidden pointer-events-none select-none",
        className,
      )}
    >
      {showStickers && (
        <div className="relative w-full h-full max-w-7xl mx-auto">
          <div className="hidden md:flex absolute top-24 left-8 lg:left-16 animate-float-slow items-center gap-2 px-3.5 py-1.5 rounded-full border border-border/70 bg-background/40 backdrop-blur-md shadow-lg shadow-black/20 text-xs font-medium text-foreground">
            <Layers className="size-3.5 text-primary" />
            <span>Cement &amp; Aggregates</span>
          </div>

          <div className="hidden md:flex absolute top-40 right-8 lg:right-20 animate-float-reverse items-center gap-2 px-3.5 py-1.5 rounded-full border border-border/70 bg-background/40 backdrop-blur-md shadow-lg shadow-black/20 text-xs font-medium text-foreground">
            <Building2 className="size-3.5 text-primary" />
            <span>Steel &amp; TMT</span>
          </div>

          <div className="hidden lg:flex absolute bottom-36 left-12 animate-float-reverse items-center gap-2 px-3.5 py-1.5 rounded-full border border-border/70 bg-background/40 backdrop-blur-md shadow-lg shadow-black/20 text-xs font-medium text-muted-foreground">
            <Search className="size-3.5 text-primary" />
            <span>Supplier Directory</span>
          </div>

          <div className="hidden lg:flex absolute bottom-28 right-16 animate-float-slow items-center gap-2 px-3.5 py-1.5 rounded-full border border-border/70 bg-background/40 backdrop-blur-md shadow-lg shadow-black/20 text-xs font-medium text-foreground">
            <Tag className="size-3.5 text-primary" />
            <span>Price Comparison</span>
          </div>
        </div>
      )}
    </div>
  );
}
