export default function SkeletonLoader() {
  return (
    <div className="rounded-xl overflow-hidden bg-card border border-border">
      {/* Image Skeleton */}
      <div className="h-48 bg-linear-to-r from-card via-muted to-card animate-pulse" />

      {/* Content Skeleton */}
      <div className="p-6 space-y-4">
        <div className="h-4 w-20 bg-linear-to-r from-card via-muted to-card rounded animate-pulse" />
        <div className="h-6 w-3/4 bg-linear-to-r from-card via-muted to-card rounded animate-pulse" />
        <div className="space-y-2">
          <div className="h-4 bg-linear-to-r from-card via-muted to-card rounded animate-pulse" />
          <div className="h-4 w-5/6 bg-linear-to-r from-card via-muted to-card rounded animate-pulse" />
        </div>

        {/* Tags Skeleton */}
        <div className="flex gap-2 pt-2">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="h-6 w-16 bg-linear-to-r from-card via-muted to-card rounded-full animate-pulse"
            />
          ))}
        </div>

        {/* Buttons Skeleton */}
        <div className="flex gap-3 pt-4">
          <div className="h-10 w-20 bg-linear-to-r from-card via-muted to-card rounded-lg animate-pulse" />
          <div className="h-10 flex-1 bg-linear-to-r from-card via-muted to-card rounded-lg animate-pulse" />
        </div>
      </div>
    </div>
  );
}
