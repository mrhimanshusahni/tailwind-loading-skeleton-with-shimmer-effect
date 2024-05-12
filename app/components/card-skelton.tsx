import { SkeltonBaseUnit } from "./skelton-base-unit";

/* Card Skelton Build using Basic Unit of Skelton */
export function CardSkelton() {
  return (
    <div className="space-y-5 rounded-2xl border border-gray-400 p-4">
      <SkeltonBaseUnit className="h-24 w-full rounded-md" />

      <div className="space-y-3">
        <SkeltonBaseUnit className="h-6 w-1/2 rounded-2xl" />
        <SkeltonBaseUnit className="h-6 w-1/2 rounded-2xl" />
      </div>
    </div>
  );
}
