export const scenarioCards = [
  {
    index: "01",
    status: "Channel",
    title: "Share Protocols",
    description:
      "Upload reusable methods, optimized workflows, and practical protocol notes.",
    href: "#share-protocols",
    threadCount: "184 threads",
    pulse: "Most active: qPCR, cloning, IF staining",
  },
  {
    index: "02",
    status: "Channel",
    title: "Lab Experience",
    description:
      "Post lessons from the bench, failed attempts, fixes, and real lab stories.",
    href: "#lab-experience",
    threadCount: "126 threads",
    pulse: "Most active: troubleshooting, sample prep",
  },
  {
    index: "03",
    status: "Channel",
    title: "Jobs and Opportunities",
    description:
      "Share recruiting needs, collaboration calls, and job-seeking posts.",
    href: "#jobs-and-opportunities",
    threadCount: "42 threads",
    pulse: "Most active: RA roles, PhD openings",
  },
  {
    index: "04",
    status: "Channel",
    title: "PI Reviews",
    description:
      "Collect mentor impressions, lab culture notes, and experience-based reviews.",
    href: "#pi-reviews",
    threadCount: "63 threads",
    pulse: "Most active: mentoring style, turnover",
  },
] as const;

export const hotTags = [
  "qPCR",
  "luciferase",
  "western blot",
  "transfection",
  "RA opening",
  "PI culture",
] as const;

export const recentThreads = [
  {
    title: "qPCR housekeeping gene drift after passage 18",
    channel: "Lab Experience",
    replies: 14,
    freshness: "12 min ago",
  },
  {
    title: "A cleaner immunofluorescence blocking protocol for GC-2 cells",
    channel: "Share Protocols",
    replies: 27,
    freshness: "38 min ago",
  },
  {
    title: "Postdoc opening in reproductive biology, Tokyo",
    channel: "Jobs and Opportunities",
    replies: 6,
    freshness: "1 hr ago",
  },
  {
    title: "How to write a PI review without turning it into a rant",
    channel: "PI Reviews",
    replies: 19,
    freshness: "2 hrs ago",
  },
] as const;

export const quickStats = [
  { label: "Channels", value: "4" },
  { label: "Active Threads", value: "415" },
  { label: "New Posts", value: "23 today" },
];

export const postingLanes = [
  {
    title: "Drop a protocol",
    copy: "Post a method with reagents, timing, pitfalls, and what actually mattered.",
  },
  {
    title: "Share a bench lesson",
    copy: "Turn failed repeats, weird artifacts, and small fixes into useful public notes.",
  },
  {
    title: "Signal an opportunity",
    copy: "Publish openings, collaboration requests, or a job-seeking post with context.",
  },
] as const;
