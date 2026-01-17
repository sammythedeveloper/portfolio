import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "I Let Muse Post for Me | Samson D.",
  description:
    "What happened when I used an AI agent to draft my tech updates and approved every post before it went out.",
};

const serif = {
  fontFamily: "var(--font-instrument-serif), Georgia, serif",
} as const;

export default function MuseArticle() {
  return (
    <main className="min-h-screen bg-second-base text-text-main">
      <article className="mx-auto max-w-2xl px-6 py-16 md:py-24">
        <Link
          href="/#case-study"
          className="text-sm text-text-muted transition-colors hover:text-text-main"
        >
          ← Back
        </Link>

        <header className="mt-10">
          <p className="text-[11px] uppercase tracking-[0.2em] text-text-muted">
            Article · [Month- 10 Year-2026]
          </p>
          <h1 style={serif} className="mt-4 text-4xl leading-tight md:text-5xl">
            I Let Muse Post for Me, and I Approved Every Word
          </h1>
        </header>

        <div className="mt-10 flex flex-col gap-6 text-lg leading-relaxed text-text-muted">
          <p>
            For three weeks, I ran an experiment. An AI agent drafted my tech
            updates for X, and it did this every two hours through the day. I
            reviewed each draft and approved it before anything went live. The
            agent did most of the legwork. I still decided what went out under
            my name.
          </p>

          <h2
            style={serif}
            className="pt-6 text-3xl leading-tight text-text-main"
          >
            What Muse is
          </h2>
          <p>
            Muse is Meta’s family of AI models. The first, Muse Spark, came out
            in April 2026 from Meta Superintelligence Labs and powers Meta AI.
            Meta has since added image generation and models built for agents,
            meaning software that works through multistep tasks rather than
            answering one question at a time. That second part is what caught my
            attention. I wanted to know whether an agent could handle the
            repetitive work of finding and summarizing news while I kept control
            of what I published.
          </p>

          <h2
            style={serif}
            className="pt-6 text-3xl leading-tight text-text-main"
          >
            The setup
          </h2>
          <p>
            [Describe your setup in two or three sentences: which tool or agent
            you used, where it looked for updates, and how you gave it
            instructions.] Every cycle, it gathered [number] items, picked the
            ones that mattered, and drafted a post in my voice. Nothing was
            scheduled to publish automatically. Each draft waited for me, and I
            could approve it, edit it, or throw it out.
          </p>

          <h2
            style={serif}
            className="pt-6 text-3xl leading-tight text-text-main"
          >
            Why the approval step matters
          </h2>
          <p>
            An agent that posts on its own can get facts wrong, repeat a story
            it already covered, or sound like it’s selling something. Keeping
            myself in the loop meant the agent did the search and the first
            draft, and my name stayed attached only to what I had checked.
          </p>

          <h2
            style={serif}
            className="pt-6 text-3xl leading-tight text-text-main"
          >
            What worked
          </h2>
          <p>
            The biggest gain was time. Finding and drafting an update took
            minutes instead of hours, so I could post on a steady schedule
            without it taking over my day. Approval was quick when the drafts
            were good, and they were good when my instructions were specific.
          </p>

          <h2
            style={serif}
            className="pt-6 text-3xl leading-tight text-text-main"
          >
            What didn’t
          </h2>
          <p>
            [Fill in two or three real problems, for example: posts that
            repeated the same story, drafts that overstated a launch, or sources
            that were out of date.] Each time, the fix was to tighten what the
            agent had to check before it drafted, not to take myself out of the
            loop.
          </p>

          {/* Remove this block if you don't have real numbers */}
          <h2
            style={serif}
            className="pt-6 text-3xl leading-tight text-text-main"
          >
            Results
          </h2>
          <p>
            [Add real numbers, such as followers gained, impressions, or
            replies, with the time period. If you don’t have them yet, delete
            this section.]
          </p>

          <h2
            style={serif}
            className="pt-6 text-3xl leading-tight text-text-main"
          >
            What I’d tell anyone trying this
          </h2>
          <p>
            Start with a narrow brief, because a vague one produces vague posts.
            Keep approval mandatory. Check every factual claim against the
            original source before you post it. And say that your posts are
            AI-assisted, so readers know how they were made.
          </p>
          <p>
            The useful part of an agent like Muse isn’t that it works without
            you. It handles the parts of the work that don’t need your judgment,
            so you can spend your attention on the parts that do.
          </p>
        </div>
      </article>
    </main>
  );
}
