import type { ISvgProps } from "../_icon";
import { convertSizes } from "@/utils/convert-sizes";

export default function BusStop({ width = 20, ...props }: ISvgProps) {
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
      <path d="M22 7v9c0 .71-.38 1.36-1 1.72v1.53c0 .41-.34.75-.75.75h-.5c-.41 0-.75-.34-.75-.75V18h-7v1.25c0 .41-.34.75-.75.75h-.5c-.41 0-.75-.34-.75-.75v-1.53c-.61-.36-1-1.01-1-1.72V7c0-3 3-3 6.5-3S22 4 22 7m-9 8c0-.55-.45-1-1-1s-1 .45-1 1s.45 1 1 1s1-.45 1-1m7 0c0-.55-.45-1-1-1s-1 .45-1 1s.45 1 1 1s1-.45 1-1m0-8h-9v4h9zM7 9.5C6.97 8.12 5.83 7 4.45 7.05A2.5 2.5 0 0 0 2 9.6A2.51 2.51 0 0 0 4 12v8h1v-8c1.18-.24 2-1.29 2-2.5" />
    </svg>
  );
}
