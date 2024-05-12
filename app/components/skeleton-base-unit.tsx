import { cn } from "~/lib/utils";

/* Basic Unit for Skelton  */
export function SkeletonBaseUnit({ className }: React.ComponentProps<"div">) {
  return <div className={cn("bg-gray-200", className)} />;
}
