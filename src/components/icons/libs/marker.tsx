import type { ISvgProps } from "../_icon";
import { convertSizes } from "@/utils/convert-sizes";

export default function Marker({ width = 20, ...props }: ISvgProps) {
  const sizes = convertSizes(width);
  return (
    <svg
      width={sizes}
      height={sizes}
      {...props}
      viewBox="0 0 30 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 14.625C0 6.56106 6.5603 0 14.625 0C22.6897 0 29.25 6.56106 29.25 14.625C29.25 25.4144 15.7565 38.2383 15.182 38.7794C15.0249 38.9262 14.825 39 14.625 39C14.425 39 14.2251 38.9262 14.068 38.7794C13.4935 38.2383 0 25.4144 0 14.625ZM6.49997 14.625C6.49997 19.1049 10.1451 22.75 14.625 22.75C19.1049 22.75 22.75 19.1048 22.75 14.625C22.75 10.1452 19.1048 6.49997 14.625 6.49997C10.1452 6.49997 6.49997 10.1451 6.49997 14.625Z"
      />
    </svg>
  );
}
