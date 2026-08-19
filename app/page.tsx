import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/hero/hero";
import { Features } from "@/components/features/features";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main className="relative z-10 flex-1 flex flex-col pt-15">
        <Hero />
        <Features />
      </main>
    </div>
  );
}
