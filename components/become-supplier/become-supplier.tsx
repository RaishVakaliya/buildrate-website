"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ShieldCheck, Store, ArrowRight } from "lucide-react";
import { Button } from "@/components/animate-ui/components/buttons/button";

const SUPPLIER_STEPS = [
  {
    step: "01",
    title: "Open Account",
    description: "Launch the BuildRate app and head over to the Account tab.",
  },
  {
    step: "02",
    title: "Become a Supplier",
    description: 'Tap "Become a Supplier" from the account menu to start.',
  },
  {
    step: "03",
    title: "Fill Your Details",
    description:
      "Enter your business name, contact info, shop location, and material categories.",
  },
  {
    step: "04",
    title: "Submit Application",
    description:
      "Submit for review. The BuildRate team verifies your details and creates your account upon approval.",
  },
];

export function BecomeSupplier() {
  return (
    <section
      id="become-a-supplier"
      aria-labelledby="supplier-heading"
      className="relative pt-8 pb-16 md:pt-14 md:pb-24 border-t border-border/50 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="lg:col-span-5 flex justify-center order-2 lg:order-1"
          >
            <div className="relative w-full max-w-[290px] sm:max-w-[320px] md:max-w-[340px]">
              <div className="rounded-[2.25rem] border-[3px] border-border/90 bg-card p-2 sm:p-2.5 shadow-2xl shadow-black/50">
                <div className="relative overflow-hidden rounded-[1.75rem] bg-black">
                  <Image
                    src="/become-supplier.webp"
                    alt="BuildRate Become a Supplier form"
                    width={600}
                    height={1200}
                    className="w-full h-auto object-cover rounded-[1.75rem]"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="lg:col-span-7 order-1 lg:order-2 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold tracking-wide mb-4">
              <Store className="size-3.5 text-primary" />
              <span>Supplier Registration</span>
            </div>

            <h2
              id="supplier-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-4"
            >
              Grow Your Business with{" "}
              <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-primary to-orange-400">
                BuildRate
              </span>
            </h2>

            <p className="text-base sm:text-lg text-muted-foreground text-pretty max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-8">
              Join BuildRate as a supplier and help customers discover your
              business and materials around Ahmedabad.
            </p>

            <ol className="space-y-4 mb-8 text-left">
              {SUPPLIER_STEPS.map((item) => (
                <li
                  key={item.step}
                  className="flex items-start gap-4 p-4 rounded-xl border border-border/70 bg-card/50 transition-colors hover:border-primary/40 hover:bg-card/75"
                >
                  <span className="shrink-0 flex size-8 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-xs font-bold font-mono text-primary">
                    {item.step}
                  </span>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-foreground mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="flex items-center gap-2.5 p-3.5 rounded-xl border border-border/80 bg-card/60 text-xs text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 text-left">
              <ShieldCheck className="size-4 text-primary shrink-0" />
              <span>
                All applications are reviewed and verified by BuildRate admins
                before supplier credentials are provided.
              </span>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto text-base font-semibold shadow-lg shadow-primary/25 cursor-pointer"
              >
                <Link href="#download">
                  <span>Become a Supplier</span>
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
