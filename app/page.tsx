import { BackgroundDecor } from "@/components/background/background-decor";
import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/hero/hero";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col bg-background text-foreground overflow-hidden">
      <BackgroundDecor />
      <Navbar />
      <main className="relative z-10 flex-1 flex flex-col justify-center pt-14">
        <Hero />
      </main>
    </div>
  );
}
