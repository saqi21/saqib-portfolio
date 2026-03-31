"use client";

/**
 * Skeleton loader cards for content sections.
 * Provides visual feedback while real content is being prepared.
 */

export function ArticleCardSkeleton() {
  return (
    <div className="glass animate-pulse overflow-hidden rounded-2xl">
      <div className="h-40 w-full bg-surface-700/50" />
      <div className="p-4">
        <div className="flex items-center gap-2">
          <div className="h-3 w-12 rounded bg-surface-700/50" />
          <div className="h-3 w-16 rounded bg-surface-700/50" />
        </div>
        <div className="mt-2 h-4 w-3/4 rounded bg-surface-700/50" />
        <div className="mt-1 h-4 w-1/2 rounded bg-surface-700/50" />
        <div className="mt-3 h-3 w-24 rounded bg-surface-700/50" />
      </div>
    </div>
  );
}

export function ProjectCardSkeleton() {
  return (
    <div className="glass animate-pulse overflow-hidden rounded-2xl">
      <div className="flex aspect-[16/9] items-center justify-center bg-surface-700/30 md:aspect-[4/3]">
        <div className="h-20 w-20 rounded-lg bg-surface-700/50" />
      </div>
      <div className="p-6">
        <div className="h-3 w-12 rounded bg-surface-700/50" />
        <div className="mt-2 h-5 w-2/3 rounded bg-surface-700/50" />
        <div className="mt-3 h-3 w-full rounded bg-surface-700/50" />
        <div className="mt-1 h-3 w-3/4 rounded bg-surface-700/50" />
        <div className="mt-4 flex gap-2">
          <div className="h-6 w-14 rounded-full bg-surface-700/50" />
          <div className="h-6 w-16 rounded-full bg-surface-700/50" />
          <div className="h-6 w-12 rounded-full bg-surface-700/50" />
        </div>
      </div>
    </div>
  );
}
