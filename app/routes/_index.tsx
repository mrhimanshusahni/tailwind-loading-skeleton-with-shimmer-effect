import { type MetaFunction } from "@remix-run/node";
import { ShimmerEffectWrapper } from "~/components/shimmer-effect-wrapper";
import { CardSkelton } from "~/components/card-skelton";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div>
      <h1>Welcome to Remix</h1>

      <ShimmerEffectWrapper className="mx-auto max-w-xs">
        <CardSkelton />
      </ShimmerEffectWrapper>
    </div>
  );
}
