export default function YellowTriangleSVG({ className }: { className?: string }) {
  return (
    <svg
      width="25"
      height="36"
      viewBox="0 0 25 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g filter="url(#filter0_d_192_72)">
        <path
          d="M24 12.768C25.3333 13.5378 25.3333 15.4622 24 16.232L3.75 27.9234C2.41666 28.6932 0.75 27.7309 0.75 26.1913L0.75 2.80866C0.75 1.26906 2.41667 0.306807 3.75 1.07661L24 12.768Z"
          fill="#FF9025"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_192_72"
          x="0.75"
          y="0.805664"
          width="24.25"
          height="34.3887"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="7" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.699706 0 0 0 0 0.390997 0 0 0 0 0.0934128 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_192_72"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_192_72"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}
