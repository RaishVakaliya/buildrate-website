"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, Store, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/animate-ui/components/buttons/button";
import { Download as DownloadIcon } from "@/components/animate-ui/icons/download";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Become a Supplier", href: "#become-a-supplier", highlight: true },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full border-b border-border/80 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-15 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3 shrink-0 select-none">
          <div className="relative size-10 rounded-xl overflow-hidden bg-[#c5ad89] border border-border/60 shadow-sm flex items-center justify-center shrink-0">
            <Image
              src="/app-logo.png"
              alt="BuildRate Logo"
              width={36}
              height={36}
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

        <nav className="hidden md:flex items-center gap-1.5 lg:gap-2">
          {NAV_LINKS.map((link) => {
            if (link.highlight) {
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-primary/40 bg-primary/10 text-xs font-semibold text-primary hover:bg-primary/20 hover:border-primary/60 transition-colors ml-1 mr-1"
                >
                  <Store className="size-3.5" />
                  <span>{link.label}</span>
                </Link>
              );
            }

            return (
              <Link
                key={link.label}
                href={link.href}
                className="px-3 py-1.5 rounded-md text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/60 transition-colors"
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Button
            asChild
            size="default"
            className="shadow-md shadow-primary/20 cursor-pointer"
          >
            <Link href="#download">
              <DownloadIcon size={16} animateOnHover />
              <span>Download App</span>
            </Link>
          </Button>
        </div>

        <div className="flex md:hidden items-center gap-2">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex size-9 items-center justify-center rounded-lg border border-border/80 bg-secondary/60 text-foreground hover:bg-secondary transition-colors cursor-pointer"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="size-5" />
            ) : (
              <Menu className="size-5" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="md:hidden border-b border-border/80 bg-background/95 backdrop-blur-xl px-4 pt-2 pb-6 space-y-3 overflow-hidden"
          >
            <nav className="flex flex-col space-y-1">
              {NAV_LINKS.map((link) => {
                if (link.highlight) {
                  return (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-2 px-3 py-2.5 rounded-lg border border-primary/40 bg-primary/10 text-sm font-semibold text-primary"
                    >
                      <Store className="size-4" />
                      <span>{link.label}</span>
                    </Link>
                  );
                }

                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-3 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/60 transition-colors"
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            <div className="pt-2 border-t border-border/60">
              <Button
                asChild
                size="default"
                className="w-full shadow-md shadow-primary/20 cursor-pointer"
              >
                <Link href="#download" onClick={() => setMobileMenuOpen(false)}>
                  <DownloadIcon size={16} animateOnHover />
                  <span>Download App</span>
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
