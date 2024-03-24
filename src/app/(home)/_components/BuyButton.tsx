import { SpotlightButton } from "~/components/ui/SpotlightButton";

export default function Page() {
  return (
    <SpotlightButton className="cursor-pointer">
      <span className="font-mona relative mt-px bg-gradient-to-b from-white/25 to-white bg-clip-text text-lg font-medium text-transparent transition-all duration-200">
        Buy Now
      </span>
    </SpotlightButton>
  );
}
