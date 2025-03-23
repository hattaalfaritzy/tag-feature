import type { ISvgProps } from "../_icon";
import { convertSizes } from "@/utils/convert-sizes";

export default function Eye({ width = 20, ...props }: ISvgProps) {
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
      <path d="M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5" />
    </svg>
  );
}
