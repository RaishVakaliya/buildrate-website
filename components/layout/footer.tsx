"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, Sparkles, Send } from "lucide-react";

const FOOTER_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Become a Supplier", href: "#become-a-supplier" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  const [dayName, setDayName] = useState("");
  const [currentYear, setCurrentYear] = useState(2026);

  useEffect(() => {
    const now = new Date();
    const formattedDay = new Intl.DateTimeFormat("en-US", {
      weekday: "long",
    }).format(now);
    setDayName(formattedDay);
    setCurrentYear(now.getFullYear());
  }, []);

  return (
    <footer
      id="contact"
      className="w-full border-t border-border/70 bg-card/40 backdrop-blur-sm text-foreground"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-10 border-b border-border/50">
          <div className="md:col-span-5 space-y-4">
            <Link
              href="#home"
              className="flex items-center gap-3 shrink-0 select-none w-fit"
            >
              <div className="relative size-10 rounded-xl overflow-hidden bg-[#c5ad89] border border-border/60 shadow-sm flex items-center justify-center shrink-0">
                <Image
                  src="/app-logo.webp"
                  alt="BuildRate Logo"
                  width={36}
                  height={36}
                  className="object-contain"
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

            <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
              Browse construction materials, compare listed market prices, and
              discover local suppliers in Ahmedabad.
            </p>

            {dayName && (
              <div className="inline-flex items-center gap-1.5 text-xs font-medium text-primary/90 bg-primary/10 border border-primary/20 px-3 py-1 rounded-full">
                <Sparkles className="size-3 text-primary shrink-0" />
                <span>Have a great {dayName}!</span>
              </div>
            )}
          </div>

          <div className="md:col-span-3 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm">
              {FOOTER_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Contact Support
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Have questions or feedback? Reach out directly to our team.
            </p>

            <a
              href="mailto:buildrate.app@gmail.com"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border border-primary/40 bg-primary/10 text-primary hover:bg-primary/20 hover:border-primary/60 transition-all text-xs sm:text-sm font-semibold shadow-sm group"
            >
              <Mail className="size-4 shrink-0" />
              <span>buildrate.app@gmail.com</span>
              <Send className="size-3 opacity-60 group-hover:translate-x-0.5 transition-transform" />
            </a>

            <p className="text-xs text-muted-foreground pt-1">
              Ahmedabad, Gujarat, India
            </p>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>&copy; {currentYear} BuildRate. All rights reserved.</p>

          <p className="flex items-center gap-1">
            Built by{" "}
            <span className="font-semibold text-foreground">
              Raish Vakaliya
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
