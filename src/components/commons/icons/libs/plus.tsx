import { convertSizes } from "@/utils/convert-sizes";
import type { ISvgProps } from "../_icon";

export default function Plus({ width = 20, ...props }: ISvgProps) {
  const sizes = convertSizes(width);
  return (
    <svg width={sizes} height={sizes} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z" />
    </svg>
  );
}
