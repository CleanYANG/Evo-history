import Link from "next/link";
import { hotTags, quickStats } from "@/lib/content";

const COMMUNITY_HERO_ART_URL =
  "https://raw.githubusercontent.com/CleanYANG/Evo-history/main/assats/%E7%A4%BE%E5%8C%BA%E7%95%8C%E9%9D%A2%E7%94%A8.png";

export function HeroSection() {
  return (
    <section className="mx-auto min-h-[60vh] w-full max-w-6xl px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
      <div className="max-w-4xl">
        <div className="max-w-4xl">
          <img
            src={COMMUNITY_HERO_ART_URL}
            alt="COOLAB community illustration"
            className="h-auto w-24 rounded-[1.4rem] border border-[var(--line)] bg-white/88 object-cover shadow-[0_16px_40px_rgba(17,17,17,0.08)] sm:w-28 lg:w-32"
          />
          <div className="mt-5 inline-flex items-center rounded-full bg-white/74 px-4 py-2 text-sm text-[var(--muted)] shadow-sm ring-1 ring-[var(--line)] backdrop-blur">
            COOLAB Community
          </div>
          <h1 className="mt-5 max-w-4xl text-4xl font-normal leading-[1] tracking-[0.01em] sm:text-5xl lg:text-6xl">
            Bio-Coolab Community
          </h1>
        </div>
        <p className="mt-8 max-w-2xl text-lg leading-8 text-[var(--foreground)]/88 sm:text-xl">
          A community board for protocols, bench lessons, openings, and PI reviews.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          {hotTags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-white/78 px-4 py-2 text-sm text-[var(--foreground)]/86 shadow-sm ring-1 ring-[var(--line)]"
            >
              #{tag}
            </span>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap gap-4">
          <Link
            href="#explore"
            className="inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-base font-medium text-white transition hover:-translate-y-0.5 hover:bg-[var(--accent-strong)]"
          >
            Browse channels
          </Link>
          <Link
            href="#forum-preview"
            className="inline-flex items-center justify-center rounded-full bg-white/86 px-6 py-3 text-base font-medium text-[var(--foreground)] ring-1 ring-[var(--line)] transition hover:-translate-y-0.5 hover:bg-white"
          >
            See live vibe
          </Link>
        </div>
        <div className="mt-14 grid max-w-2xl gap-3 sm:grid-cols-2">
          {quickStats.slice(0, 2).map((stat) => (
            <div
              key={stat.label}
              className="rounded-[1.4rem] bg-white/64 px-5 py-4 shadow-[var(--shadow)] ring-1 ring-[var(--line)]"
            >
              <div className="text-xs uppercase tracking-[0.16em] text-[var(--muted)]">
                {stat.label}
              </div>
              <div className="mt-2 text-2xl font-semibold text-[var(--foreground)]">
                {stat.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
