import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/hero/hero";
import { Features } from "@/components/features/features";
import { HowItWorks } from "@/components/how-it-works/how-it-works";
import { BecomeSupplier } from "@/components/become-supplier/become-supplier";
import { Footer } from "@/components/layout/footer";
import { GoToTop } from "@/components/ui/go-to-top";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main className="relative z-10 flex-1 flex flex-col pt-15">
        <Hero />
        <Features />
        <HowItWorks />
        <BecomeSupplier />
      </main>
      <Footer />
      <GoToTop />
    </div>
  );
}
