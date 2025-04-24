
import React from "react";

const Logo = ({ size = 40 }: { size?: number }) => (
  <div
    className="rounded-lg bg-gradient-to-tr from-primary/90 to-purple-500 flex items-center justify-center overflow-hidden"
    style={{ width: size, height: size }}
  >
    <svg viewBox="0 0 40 40" width={size} height={size} fill="none">
      <rect width="40" height="40" fill="url(#gradient)" />
      <path
        d="M12 17C12 14.5 13.5 13 16 13H24C26.5 13 28 14.5 28 17V23C28 25.5 26.5 27 24 27H16C13.5 27 12 25.5 12 23V17Z"
        fill="white"
      />
      <path
        d="M20 13V27"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M15 17L15 23"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M25 17L25 23"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M12 20H28"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <defs>
        <linearGradient
          id="gradient"
          x1="0"
          y1="0"
          x2="40"
          y2="40"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9b87f5" />
          <stop offset="1" stopColor="#7E69AB" />
        </linearGradient>
      </defs>
    </svg>
  </div>
);

export default Logo;
