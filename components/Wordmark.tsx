import { AssetImage as Image } from "@/components/AssetImage";

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`wordmark ${className}`.trim()} aria-hidden="true">
      <Image
        src="/brand/southern-fadez-lockup.svg"
        alt=""
        width={1206}
        height={587}
        priority
      />
    </span>
  );
}
