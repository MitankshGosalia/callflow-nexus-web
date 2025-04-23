
import React from "react";

const Logo = ({ size = 40 }: { size?: number }) => (
  <div
    className="rounded-lg bg-gradient-to-tr from-primary to-purple-400 flex items-center justify-center"
    style={{ width: size, height: size }}
  >
    {/* Custom SVG logo for AI Call Bot */}
    <svg viewBox="0 0 40 40" width={size} height={size} fill="none">
      <circle cx="20" cy="20" r="20" fill="#9b87f5" />
      <rect x="11" y="13" width="18" height="14" rx="4" fill="#fff" />
      <circle cx="20" cy="20" r="3.5" fill="#9b87f5" />
      <rect x="15" y="15" width="10" height="2" rx="1" fill="#9b87f5" />
      <rect x="15" y="23" width="10" height="2" rx="1" fill="#9b87f5" />
    </svg>
  </div>
);

export default Logo;
