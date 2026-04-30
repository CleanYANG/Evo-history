import Link from "next/link";

export function HeroSection() {
  return (
    <section className="mx-auto flex min-h-[74vh] w-full max-w-6xl items-center px-6 py-20 sm:px-8 lg:px-12">
      <div className="max-w-4xl">
        <div className="inline-flex items-center rounded-full bg-white/70 px-4 py-2 text-sm text-[var(--muted)] shadow-sm ring-1 ring-[var(--line)] backdrop-blur">
          COOLAB Community
        </div>
        <h1 className="mt-8 max-w-5xl text-5xl font-semibold uppercase tracking-[0.01em] sm:text-6xl lg:text-7xl">
          Share what the lab really feels like
        </h1>
        <p className="mt-6 max-w-3xl text-xl leading-8 text-[var(--foreground)]/92 sm:text-2xl">
          Protocols. Experience. Opportunities. PI reviews.
        </p>
        <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg">
          A public-facing community space connected to the ELN, built for people
          who want to share useful methods, bench lessons, career signals, and
          honest lab culture notes.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="#explore"
            className="inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-base font-medium text-white transition hover:-translate-y-0.5 hover:bg-[var(--accent-strong)]"
          >
            Explore channels
          </Link>
          <Link
            href="#how-it-works"
            className="inline-flex items-center justify-center rounded-full bg-white/80 px-6 py-3 text-base font-medium text-[var(--foreground)] ring-1 ring-[var(--line)] transition hover:-translate-y-0.5 hover:bg-white"
          >
            How it works
          </Link>
        </div>
      </div>
    </section>
  );
}
