// File: app/page.tsx

import Header from "./components/Header";
import Hero from "./components/Hero";
import PaceAISection from "./components/PaceAI/PaceAISection";
import TrustedLogos from "./components/TrustedLogos";

export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-[#fdfcff] text-black">
      <Header />
      <Hero />
      <TrustedLogos />
      <PaceAISection />
    </main>
  );
}
