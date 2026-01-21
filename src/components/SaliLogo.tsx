export default function SaliLogo({ className = "", width = 200, height = 100 }: { className?: string; width?: number; height?: number }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 600 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Sali Products Kenya"
    >
      <defs>
        <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>
      </defs>
      
      {/* Letter S - curved blue */}
      <path
        d="M 100 80 Q 70 60, 80 40 Q 90 20, 120 20 L 160 20 Q 185 20, 185 45 Q 185 70, 160 75 L 110 75 Q 85 75, 85 100 Q 85 125, 110 130 L 160 130 Q 180 130, 185 145 Q 190 160, 175 175 Q 160 190, 130 190 L 90 190 Q 65 190, 65 165"
        fill="url(#blueGradient)"
      />

      {/* Letter A - triangle peak design */}
      <g id="letter-a">
        {/* Main triangle body */}
        <path
          d="M 250 40 L 330 190 L 300 190 L 290 160 L 210 160 L 200 190 L 170 190 Z"
          fill="#1e40af"
        />
        {/* Inner triangle cutout (lighter blue for depth) */}
        <path
          d="M 250 85 L 275 145 L 225 145 Z"
          fill="#3b82f6"
        />
        {/* Horizontal bar */}
        <path
          d="M 205 165 L 295 165 L 290 180 L 210 180 Z"
          fill="#1e3a8a"
        />
      </g>

      {/* Letter L */}
      <path
        d="M 360 40 L 395 40 L 395 170 L 480 170 L 480 190 L 360 190 Z"
        fill="url(#blueGradient)"
      />

      {/* Letter I */}
      <path
        d="M 505 40 L 540 40 L 540 190 L 505 190 Z"
        fill="url(#blueGradient)"
      />

      {/* Registered trademark ® symbol */}
      <g id="trademark" transform="translate(555, 55)">
        <circle cx="0" cy="0" r="18" stroke="#003087" strokeWidth="2.5" fill="none" />
        <text 
          x="0" 
          y="7" 
          fontSize="22" 
          fill="#003087" 
          textAnchor="middle" 
          fontFamily="Arial, sans-serif" 
          fontWeight="bold"
        >
          R
        </text>
      </g>

      {/* Tagline "TO BE TOP A" in blue */}
      <text
        x="80"
        y="250"
        fontSize="45"
        fill="#003087"
        letterSpacing="12"
        fontFamily="Arial, sans-serif"
        fontWeight="700"
      >
        TO BE TOP A
      </text>
    </svg>
  );
}
 