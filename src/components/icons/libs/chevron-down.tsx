import type { ISvgProps } from "../_icon";
import { convertSizes } from "@/utils/convert-sizes";

export default function ChevronDown({ width = 20, ...props }: ISvgProps) {
  const sizes = convertSizes(width);
  return (
    <svg
      width={sizes}
      height={sizes}
      {...props}
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6l-6-6z" />
    </svg>
  );
}
