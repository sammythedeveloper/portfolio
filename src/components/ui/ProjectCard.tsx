"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, ChevronDown } from "lucide-react";

export type ShowcaseField = {
  label: string;
  value: string | string[]; // string = paragraph, array = bullet list
};

export type ShowcaseItem = {
  title: string;
  subtitle?: string; // e.g. company, or a short line under the title
  meta?: string[]; // small mono line at the top, e.g. period, location
  image?: string;
  href?: string; // shows the arrow icon when set
  tags?: string[];
  fields?: ShowcaseField[];
};

type Props = {
  items: ShowcaseItem[];
  columns?: 2 | 3;
  initialRows?: number; // rows visible before "Show more"
};

const serif = {
  fontFamily: "var(--font-instrument-serif), Georgia, serif",
} as const;

export default function ShowcaseGrid({
  items,
  columns = 3,
  initialRows = 1,
}: Props) {
  const initialCount = initialRows * columns;
  const [visibleCount, setVisibleCount] = useState(initialCount);

  const visibleItems = items.slice(0, visibleCount);
  const remaining = items.length - visibleCount;
  const isExpanded = visibleCount > initialCount;

  const gridCols = columns === 2 ? "md:grid-cols-2" : "md:grid-cols-3";

  return (
    <div>
      <div className={`grid gap-6 grid-cols-1 ${gridCols}`}>
        {visibleItems.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: (index % columns) * 0.08 }}
            className="h-full"
          >
            <ShowcaseCard item={item} />
          </motion.div>
        ))}
      </div>

      {(remaining > 0 || isExpanded) && (
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {remaining > 0 && (
            <button
              type="button"
              onClick={() =>
                setVisibleCount((c) => Math.min(c + columns, items.length))
              }
              className="flex items-center gap-2 rounded-full border border-black/15 px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.16em] text-text-main transition-colors duration-300 hover:bg-black/[0.04] dark:border-white/15 dark:hover:bg-white/[0.06]"
            >
              Show more ({remaining})
              <ChevronDown size={14} strokeWidth={1.5} />
            </button>
          )}

          {isExpanded && (
            <button
              type="button"
              onClick={() => setVisibleCount(initialCount)}
              className="flex items-center gap-2 rounded-full px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.16em] text-text-muted transition-colors duration-300 hover:text-text-main"
            >
              Show less
            </button>
          )}
        </div>
      )}
    </div>
  );
}

function ShowcaseCard({ item }: { item: ShowcaseItem }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-black/10 bg-charcoal-base transition-colors duration-300 hover:bg-black/[0.015] dark:border-white/10 dark:hover:bg-white/[0.025]">
      {item.image && (
        <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-black/10 bg-black/[0.03] dark:border-white/10 dark:bg-white/[0.03]">
          <Image
            src={item.image}
            alt={`${item.title} screenshot`}
            fill
            sizes="(min-width: 768px) 33vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
        </div>
      )}

      <div className="flex flex-1 flex-col gap-5 p-6">
        {item.meta && item.meta.length > 0 && (
          <div className="flex flex-wrap gap-x-4 gap-y-1 font-mono text-[11px] text-text-muted">
            {item.meta.map((m) => (
              <span key={m}>{m}</span>
            ))}
          </div>
        )}

        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 style={serif} className="text-3xl leading-none tracking-tight">
              {item.title}
            </h3>
            {item.subtitle && (
              <p className="mt-2 text-sm font-medium text-text-muted">
                {item.subtitle}
              </p>
            )}
          </div>

          {item.href && (
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${item.title}`}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-black/15 text-text-main transition-all duration-300 hover:bg-black hover:text-white dark:border-white/15 dark:hover:bg-white dark:hover:text-black"
            >
              <ArrowUpRight size={18} strokeWidth={1.5} />
            </a>
          )}
        </div>

        {item.fields && item.fields.length > 0 && (
          <div className="flex flex-col gap-3.5">
            {item.fields.map((field) => (
              <Field key={field.label} field={field} />
            ))}
          </div>
        )}

        {item.tags && item.tags.length > 0 && (
          <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="border border-black/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.08em] text-text-muted dark:border-white/10"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

function Field({ field }: { field: ShowcaseField }) {
  return (
    <div>
      <h4 className="mb-1 text-[10px] font-medium uppercase tracking-[0.16em] text-text-main/60">
        {field.label}
      </h4>

      {Array.isArray(field.value) ? (
        <ul className="space-y-2">
          {field.value.map((line) => (
            <li
              key={line}
              className="flex gap-3 text-sm leading-relaxed text-text-muted"
            >
              <span className="mt-[8px] h-1 w-1 shrink-0 rounded-full bg-black/30 dark:bg-white/30" />
              <span>{line}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-sm leading-relaxed text-text-muted">{field.value}</p>
      )}
    </div>
  );
}
