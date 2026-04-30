import Link from "next/link";
import { scenarioCards } from "@/lib/content";

export function ExploreSection() {
  return (
    <section
      id="explore"
      className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-8 lg:px-12"
    >
      <div className="max-w-2xl">
        <p className="text-sm font-medium uppercase tracking-[0.16em] text-[var(--accent-strong)]">
          Channels
        </p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
          Enter the right room
        </h2>
        <p className="mt-4 max-w-xl text-base leading-8 text-[var(--muted)] sm:text-lg">
          Each channel should feel like a room in a forum, not a static feature card.
        </p>
      </div>

      <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {scenarioCards.map((card) => (
          <Link
            key={card.title}
            href={card.href}
            className="group rounded-[2rem] bg-[var(--surface)] p-6 shadow-[var(--shadow)] ring-1 ring-[var(--line)] backdrop-blur-sm transition duration-200 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(17,17,17,0.08)]"
          >
            <div className="flex items-center justify-between text-sm text-[var(--muted)]">
              <span>{card.index}</span>
              <span>{card.status}</span>
            </div>
            <h3 className="mt-12 text-2xl font-medium tracking-tight text-[var(--foreground)]">
              {card.title}
            </h3>
            <p className="mt-4 max-w-xs text-sm leading-7 text-[var(--muted)]">
              {card.description}
            </p>
            <div className="mt-6 rounded-[1.1rem] bg-[var(--accent)]/55 px-4 py-3 text-sm text-[var(--foreground)]">
              <div className="font-medium text-[var(--accent-strong)]">{card.threadCount}</div>
              <div className="mt-1 leading-6 text-[var(--muted)]">{card.pulse}</div>
            </div>
            <div className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-[var(--accent-strong)]">
              Open channel
              <span className="transition group-hover:translate-x-1">→</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
