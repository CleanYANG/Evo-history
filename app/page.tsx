import { EssaySection } from "@/components/essay-section";
import { ExploreSection } from "@/components/explore-section";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <HeroSection />
      <EssaySection
        eyebrow="Purpose"
        title="One place for the things labs usually keep fragmented"
        body={[
          "Protocols often live in private folders. Practical lessons live in chat logs. Hiring signals spread by word of mouth.",
          "This portal is meant to collect useful, experience-based knowledge in a public-facing space connected to the ELN.",
          "The goal is simple: make useful lab knowledge easier to share, browse, and reuse.",
        ]}
      />
      <EssaySection
        id="how-it-works"
        eyebrow="Flow"
        title="How it works"
        body={[
          "Choose a channel based on what you want to contribute or browse.",
          "Post a method, a bench-side lesson, a job need, or a PI review with clear context.",
          "Over time, the site becomes a searchable layer of practical research culture beyond the notebook itself.",
        ]}
      />
      <ExploreSection />
      <Footer />
    </main>
  );
}
