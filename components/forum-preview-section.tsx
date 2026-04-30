import { postingLanes, recentThreads } from "@/lib/content";

export function ForumPreviewSection() {
  return (
    <section
      id="forum-preview"
      className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20"
    >
      <div className="grid gap-8 lg:grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)]">
        <div className="rounded-[2rem] bg-[var(--surface-strong)] p-8 shadow-[var(--shadow)] ring-1 ring-[var(--line)]">
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-[var(--accent-strong)]">
            Posting lanes
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Make the homepage feel inhabited
          </h2>
          <p className="mt-4 max-w-lg text-base leading-8 text-[var(--muted)]">
            Give people a few clear ways to contribute instead of throwing every signal at them at once.
          </p>
          <div className="mt-8 space-y-4">
            {postingLanes.slice(0, 2).map((lane, index) => (
              <div
                key={lane.title}
                className="rounded-[1.4rem] bg-white px-6 py-6 ring-1 ring-[var(--line)]"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[var(--accent)] text-sm font-semibold text-[var(--accent-strong)]">
                    {index + 1}
                  </span>
                  <strong className="text-lg">{lane.title}</strong>
                </div>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                  {lane.copy}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] bg-white p-8 shadow-[var(--shadow)] ring-1 ring-[var(--line)]">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.16em] text-[var(--accent-strong)]">
                Recent activity
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Threads should look alive
              </h2>
            </div>
            <div className="rounded-full bg-[var(--foreground)] px-4 py-2 text-xs uppercase tracking-[0.14em] text-white">
              new today
            </div>
          </div>
          <div className="mt-10 space-y-4">
            {recentThreads.slice(0, 3).map((thread) => (
              <div
                key={thread.title}
                className="grid gap-4 rounded-[1.4rem] bg-[var(--surface-soft)] px-6 py-5 ring-1 ring-[var(--line)] sm:grid-cols-[minmax(0,1fr)_auto]"
              >
                <div>
                  <div className="text-xs uppercase tracking-[0.14em] text-[var(--muted)]">
                    {thread.channel}
                  </div>
                  <div className="mt-2 text-base font-medium leading-7 text-[var(--foreground)]">
                    {thread.title}
                  </div>
                </div>
                <div className="flex items-end justify-between gap-4 text-sm text-[var(--muted)] sm:block sm:text-right">
                  <div>{thread.freshness}</div>
                  <div className="mt-2 font-medium text-[var(--accent-strong)]">
                    {thread.replies} replies
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
