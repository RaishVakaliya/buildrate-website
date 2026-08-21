"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { Star, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

const FAQS: FAQItem[] = [
  {
    question: "What is BuildRate?",
    answer:
      "BuildRate is a construction material price comparison and supplier discovery platform for Ahmedabad. It helps builders, contractors, and individuals explore market rates and connect directly with local suppliers.",
  },
  {
    question: "What materials can I compare?",
    answer:
      "You can compare listed prices across core construction categories including Cement, Steel & RMC, Bricks & Blocks, and Sand & Aggregates.",
  },
  {
    question: "How does BuildRate find suppliers?",
    answer:
      "BuildRate lists verified construction material suppliers across Ahmedabad, providing direct phone numbers, business details, and listed material rates.",
  },
  {
    question: "Is BuildRate free to use?",
    answer:
      "Yes, BuildRate is 100% free for buyers, builders, and contractors to browse materials, compare prices, and connect with suppliers.",
  },
  {
    question: "Can I buy materials inside the app?",
    answer:
      "No. BuildRate is purely a price exploration and discovery platform. All orders, payments, and negotiations take place directly between you and the supplier.",
  },
  {
    question: "Can suppliers register on BuildRate?",
    answer:
      'Yes, suppliers can apply through the app\'s Account tab under "Become a Supplier". Applications are reviewed and verified by BuildRate admins before accounts are activated.',
  },
  {
    question: "How can I contact a listed supplier?",
    answer:
      "You can view supplier profiles and contact them directly with a single tap to discuss your requirements, verify stock, and negotiate pricing.",
  },
  {
    question: "Is BuildRate available in regional languages?",
    answer:
      "Yes, BuildRate supports both English and Gujarati for seamless regional usability.",
  },
  {
    question: "How can I report incorrect information?",
    answer: (
      <>
        If you notice pricing discrepancies or outdated supplier details, please
        reach out to our support team directly at{" "}
        <a
          href="mailto:buildrate.app@gmail.com"
          className="font-solway font-semibold text-primary hover:underline"
        >
          buildrate.app@gmail.com
        </a>
        .
      </>
    ),
  },
];

const TESTIMONIALS = [
  {
    name: "Rajesh Patel",
    role: "Contractor, Ahmedabad",
    source: "Google Play",
    sourceIcon: "/google-play-store-icon.webp",
    rating: 5,
    message:
      "Comparing cement and steel prices across Ahmedabad before finalizing orders saves our team hours of calling suppliers every morning.",
  },
  {
    name: "Suresh Prajapati",
    role: "Material Supplier",
    source: "Indus Appstore",
    sourceIcon: "/indus-icon.webp",
    rating: 5,
    message:
      "Listing our shop on BuildRate helped nearby builders and site engineers discover our inventory and reach out to us directly.",
  },
  {
    name: "Manish Shah",
    role: "Site Supervisor",
    source: "Google Play",
    sourceIcon: "/google-play-store-icon.webp",
    rating: 5,
    message:
      "Very clean interface without clutter. The Gujarati language option and 1-tap direct supplier calling make it straightforward to check daily rates.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>();

  const toggleItem = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="relative pt-8 pb-16 md:pt-14 md:pb-24 border-t border-border/50 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="lg:col-span-7"
          >
            <h2
              id="faq-heading"
              className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-foreground mb-3"
            >
              Frequently Asked{" "}
              <span className="font-exo font-extrabold">Questions</span>
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground mb-8">
              Everything you need to know about BuildRate.
            </p>

            <div className="divide-y divide-border/60 border-y border-border/60">
              {FAQS.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <div key={faq.question} className="py-1">
                    <button
                      type="button"
                      onClick={() => toggleItem(index)}
                      className="flex w-full items-center justify-between gap-4 py-4 text-left text-sm sm:text-base font-semibold text-foreground hover:text-foreground transition-colors cursor-pointer"
                      aria-expanded={isOpen}
                    >
                      <span>{faq.question}</span>
                      <ChevronDown
                        className={cn(
                          "size-4 shrink-0 text-muted-foreground transition-transform duration-200",
                          isOpen && "rotate-180",
                        )}
                      />
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <p className="font-overlock text-xs sm:text-sm text-muted-foreground leading-relaxed pt-0 pb-4">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.45, delay: 0.1, ease: "easeOut" }}
            className="lg:col-span-5 flex flex-col justify-start"
          >
            <div className="mb-8">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-foreground mb-3">
                What Our{" "}
                <span className="font-exo font-extrabold">Users Say</span>
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Feedback from builders, contractors, and suppliers.
              </p>
            </div>

            <div className="space-y-4">
              {TESTIMONIALS.map((item) => (
                <article
                  key={item.name}
                  className="rounded-2xl border border-border/80 bg-card/60 p-5 sm:p-6 backdrop-blur-sm transition-all duration-300 hover:border-border hover:bg-card/85"
                >
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-1">
                      {Array.from({ length: item.rating }).map((_, i) => (
                        <Star
                          key={i}
                          className="size-4 fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full select-none border border-border/70 bg-black/40 text-[11px] font-medium text-muted-foreground">
                      <Image
                        src={item.sourceIcon}
                        alt={item.source}
                        width={14}
                        height={14}
                        className="size-3.5 object-contain"
                      />
                      <span>{item.source}</span>
                    </div>
                  </div>

                  <p className="font-overlock text-xs sm:text-sm text-foreground/90 leading-relaxed mb-4">
                    &ldquo;{item.message}&rdquo;
                  </p>

                  <div className="flex items-center justify-between border-t border-border/40 pt-3 text-xs">
                    <span className="font-bold text-foreground">
                      {item.name}
                    </span>
                    <span className="text-muted-foreground">{item.role}</span>
                  </div>
                </article>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
