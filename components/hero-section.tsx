import Link from "next/link";
import { hotTags, quickStats, recentThreads } from "@/lib/content";

const COMMUNITY_HERO_ART_URL =
  "https://raw.githubusercontent.com/CleanYANG/Evo-history/main/assats/%E7%A4%BE%E5%8C%BA%E7%95%8C%E9%9D%A2%E7%94%A8.png";

export function HeroSection() {
  return (
    <section className="mx-auto grid min-h-[78vh] w-full max-w-6xl gap-10 px-6 py-16 sm:px-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)] lg:px-12 lg:py-20">
      <div className="max-w-4xl">
        <div className="flex items-start gap-5">
          <img
            src={COMMUNITY_HERO_ART_URL}
            alt="COOLAB community illustration"
            className="mt-1 h-auto w-24 shrink-0 rounded-[1.4rem] border border-[var(--line)] bg-white/88 object-cover shadow-[0_16px_40px_rgba(17,17,17,0.08)] sm:w-28 lg:w-32"
          />
          <div className="min-w-0">
            <div className="inline-flex items-center rounded-full bg-white/74 px-4 py-2 text-sm text-[var(--muted)] shadow-sm ring-1 ring-[var(--line)] backdrop-blur">
              COOLAB Community
            </div>
            <h1 className="mt-6 max-w-5xl text-5xl font-semibold uppercase leading-[0.96] tracking-[0.01em] sm:text-6xl lg:text-7xl">
              Lab talk, not lab brochure
            </h1>
          </div>
        </div>
        <p className="mt-6 max-w-3xl text-xl leading-8 text-[var(--foreground)]/92 sm:text-2xl">
          A community board for protocols, bench lessons, openings, and PI reviews.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          {hotTags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-white/78 px-4 py-2 text-sm text-[var(--foreground)] shadow-sm ring-1 ring-[var(--line)]"
            >
              #{tag}
            </span>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-4">
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
        <div className="mt-10 grid gap-3 sm:grid-cols-3">
          {quickStats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-[1.4rem] bg-white/72 px-5 py-4 shadow-[var(--shadow)] ring-1 ring-[var(--line)]"
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

      <div className="flex items-center">
        <div className="w-full rounded-[2rem] border border-[var(--line)] bg-[var(--surface-strong)] p-5 shadow-[0_24px_70px_rgba(17,17,17,0.08)]">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs uppercase tracking-[0.16em] text-[var(--accent-strong)]">
                Community Feed
              </div>
              <div className="mt-1 text-lg font-semibold">What people are talking about</div>
            </div>
            <div className="rounded-full bg-[var(--accent)] px-3 py-1 text-xs font-medium text-[var(--accent-strong)]">
              live
            </div>
          </div>
          <div className="mt-5 rounded-[1.4rem] bg-white px-4 py-3 ring-1 ring-[var(--line)]">
            <div className="text-sm text-[var(--muted)]">Start a post</div>
            <div className="mt-2 text-base text-[var(--foreground)]/70">
              Share a protocol, failed run, opening, or PI review...
            </div>
          </div>
          <div className="mt-4 space-y-3">
            {recentThreads.slice(0, 3).map((thread) => (
              <div
                key={thread.title}
                className="rounded-[1.3rem] bg-white/88 px-4 py-4 ring-1 ring-[var(--line)]"
              >
                <div className="flex items-center justify-between gap-4 text-xs uppercase tracking-[0.14em] text-[var(--muted)]">
                  <span>{thread.channel}</span>
                  <span>{thread.freshness}</span>
                </div>
                <div className="mt-2 text-base font-medium leading-7 text-[var(--foreground)]">
                  {thread.title}
                </div>
                <div className="mt-3 text-sm text-[var(--accent-strong)]">
                  {thread.replies} replies
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
