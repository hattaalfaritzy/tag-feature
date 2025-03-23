import type { ISvgProps } from "../_icon";
import { convertSizes } from "@/utils/convert-sizes";

export default function MRT({ width = 20, ...props }: ISvgProps) {
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
      <g
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <path d="M20 10c0 4.418-3.582 10-8 10s-8-5.582-8-10a8 8 0 1 1 16 0" />
        <path d="M8 18c.939-1.22 2.382-2 4-2s3.061.78 4 2M9.249 9.604A9.8 9.8 0 0 0 12 10c.966 0 1.893-.145 2.751-.396c1.16-.34 1.668-.994.844-2.016c-1.705-2.117-5.485-2.117-7.19 0c-.824 1.022-.315 1.676.844 2.016M5 19l-2 3m16-3l2 3" />
      </g>
    </svg>
  );
}
