
import React from "react";

const Logo = ({ size = 40 }: { size?: number }) => (
  <div
    className="rounded-lg bg-gradient-to-tr from-primary/90 to-purple-500 flex items-center justify-center overflow-hidden"
    style={{ width: size, height: size }}
  >
    <svg viewBox="0 0 40 40" width={size} height={size} fill="none">
      <rect width="40" height="40" fill="url(#gradient)" />
      <path
        d="M12 20C12 16.5 14.5 14 18 14H22C25.5 14 28 16.5 28 20C28 23.5 25.5 26 22 26H18C14.5 26 12 23.5 12 20Z"
        fill="white"
      />
      <path
        d="M20 14V26"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M16 17L16 23"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M24 17L24 23"
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
