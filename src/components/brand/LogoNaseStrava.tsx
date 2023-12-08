import { cn } from "@/utils/cn";

function Logomark({
  className = "",
  ...props
}: {
  className?: string;
  [x: string]: any;
}) {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <g clipPath="url(#clip0_2842_9554)">
        <path
          d="M44.104 38.907l-4.072-1.319c-.113-.036-.178.124-.073.178l3.812 1.946c1.8.92 2.198 3.31.814 4.764-1.438 1.512-3.964 1.074-4.913-.784l-1.906-3.733c-.054-.106-.214-.04-.178.073l1.32 4.072a3.016 3.016 0 01-2.87 3.946 3.016 3.016 0 01-2.87-3.946l1.319-4.072c.036-.112-.124-.178-.178-.073l-1.947 3.812a3.016 3.016 0 11-4.059-4.059l3.813-1.946c.106-.054.04-.214-.072-.178l-4.074 1.32a3.017 3.017 0 01-3.945-2.793c-.05-2.086 2.045-3.563 4.03-2.92l3.989 1.292c.112.036.178-.124.072-.178l-3.813-1.947a3.016 3.016 0 01-.76-4.818 3.016 3.016 0 014.82.76l1.946 3.813c.054.105.214.04.178-.073l-1.32-4.074a3.016 3.016 0 012.87-3.945 3.016 3.016 0 012.87 3.945l-1.319 4.074c-.036.111.123.178.178.073l1.946-3.812a3.016 3.016 0 014.764-.815c1.512 1.438 1.074 3.963-.784 4.913l-3.733 1.906c-.106.054-.04.214.073.178l3.987-1.292c1.986-.643 4.081.834 4.03 2.92a3.017 3.017 0 01-3.945 2.792z"
          fill="#FF5942"
        />
        <path
          d="M24.023 35.879c-.085-6.509-5.344-11.767-11.852-11.851-.053-.003-.106-.003-.159-.003-.053 0-.105 0-.159.003-6.51.084-11.767 5.342-11.85 11.85-.003.054-.003.106-.003.16 0 .052 0 .105.002.158.084 6.511 5.344 11.77 11.855 11.851.053.004.102.004.155.004.053 0 .104 0 .157-.004 6.508-.081 11.77-5.34 11.854-11.85.002-.054.002-.107.002-.16 0-.053 0-.105-.002-.158zm-11.695 7.847h-.63a10.23 10.23 0 00-7.373-7.374v-.629a10.226 10.226 0 007.373-7.373h.63a10.226 10.226 0 007.373 7.373v.629a10.229 10.229 0 00-7.373 7.374z"
          fill="#664FF2"
        />
        <path
          d="M37.864 12.107c5.728.878 10.125 5.814 10.185 11.795a.122.122 0 01-.122.123h-23.78a.122.122 0 01-.122-.123c.06-5.981 4.457-10.917 10.185-11.795a.023.023 0 00-.004-.046h-10.06a.121.121 0 01-.12-.123C24.09 5.334 29.442 0 36.037 0c6.593 0 11.945 5.334 12.01 11.938a.121.121 0 01-.12.123H37.865c-.03 0-.032.041-.002.046z"
          fill="#BAABE8"
        />
        <path
          d="M0 24.025h24.025V0H0v24.025zm12.012-3.604a8.409 8.409 0 118.409-8.408 8.408 8.408 0 01-8.409 8.408z"
          fill="#00BA8F"
        />
      </g>
      <defs>
        <clipPath id="clip0_2842_9554">
          <path fill="#fff" d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

//
// Main component
export default function LogoNaseStrava({
  className = "",
  href = "https://nasestrava.cz",
}: {
  className?: string;
  href?: string;
}) {
  return (
    <a
      href={href}
      className={cn(
        "relative flex items-center justify-start gap-4",
        className
      )}
    >
      <Logomark className="origin-right scale-90" />
      <span className="block text-lg font-semibold text-dark-purple min-[374px]:text-2xl">
        Naše strava od VIS Plzeň
      </span>
    </a>
  );
}
