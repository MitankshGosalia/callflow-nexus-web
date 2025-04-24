
import React from "react";

const Logo = ({ size = 40 }: { size?: number }) => (
  <div
    className="rounded-lg bg-gradient-to-tr from-primary to-purple-600 flex items-center justify-center overflow-hidden"
    style={{ width: size, height: size }}
  >
    <svg viewBox="0 0 40 40" width={size} height={size} fill="none">
      <rect width="40" height="40" fill="url(#gradient)" />
      <path
        d="M10 15C10 13 11.5 11 14 11H26C28.5 11 30 13 30 15V25C30 27 28.5 29 26 29H14C11.5 29 10 27 10 25V15Z"
        fill="white"
        fillOpacity="0.9"
      />
      <path
        d="M15 18L15 22"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M20 15L20 25"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M25 18L25 22"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M10 20H30"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray="2 2"
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
          <stop stopColor="#8b5cf6" />
          <stop offset="1" stopColor="#6366f1" />
        </linearGradient>
      </defs>
    </svg>
  </div>
);

export default Logo;
