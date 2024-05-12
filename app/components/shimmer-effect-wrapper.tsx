import { cn } from "~/lib/utils";

/* Shimmer Effect Wrapper */
export function ShimmerEffectWrapper({
  className,
  children,
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "relative isolate animate-pulse overflow-hidden rounded-2xl before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:border-t before:border-gray-50/10 before:bg-gradient-to-r before:from-transparent before:via-gray-200 before:to-transparent",
        className,
      )}
    >
      {children}
    </div>
  );
}
