import Image, { type ImageProps } from "next/image";
import { withBase } from "@/lib/base-path";

export function AssetImage({ src, ...props }: ImageProps) {
  const resolved = typeof src === "string" ? withBase(src) : src;
  return <Image src={resolved} {...props} />;
}
