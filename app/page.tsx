import { ExploreSection } from "@/components/explore-section";
import { Footer } from "@/components/footer";
import { ForumPreviewSection } from "@/components/forum-preview-section";
import { HeroSection } from "@/components/hero-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <HeroSection />
      <ForumPreviewSection />
      <ExploreSection />
      <Footer />
    </main>
  );
}
