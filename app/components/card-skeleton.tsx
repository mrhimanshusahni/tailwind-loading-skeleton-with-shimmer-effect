import { SkeletonBaseUnit } from "./skeleton-base-unit";

/* Card Skelton Build using Basic Unit of Skelton */
export function CardSkeleton() {
  return (
    <div className="space-y-5 rounded-2xl border border-gray-400 p-4">
      <SkeletonBaseUnit className="h-24 w-full rounded-md" />

      <div className="space-y-3">
        <SkeletonBaseUnit className="h-6 w-1/2 rounded-2xl" />
        <SkeletonBaseUnit className="h-6 w-1/2 rounded-2xl" />
      </div>
    </div>
  );
}
