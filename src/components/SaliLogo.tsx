export default function SaliLogo({ className = "", width = 200, height = 80 }: { className?: string; width?: number; height?: number }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 200 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Sali Products - To Be Top"
    >
      {/* Background */}
      <rect width="200" height="80" fill="#003366" rx="4" />
      
      {/* Letter S */}
      <g id="letter-s">
        <path
          d="M25 35 Q25 25, 35 25 L45 25 Q50 25, 50 30 Q50 35, 45 35 L30 35 Q25 35, 25 40 Q25 45, 30 45 L45 45 Q50 45, 50 50"
          stroke="white"
          strokeWidth="3"
          fill="none"
        />
        <path
          d="M26 36 Q26 28, 35 28 L44 28 Q47 28, 47 31 Q47 34, 44 34 L31 34 Q27 34, 27 39 Q27 43, 31 43 L44 43 Q47 43, 47 47"
          fill="#DC2626"
        />
      </g>

      {/* Letter A (Triangular Peak Design) */}
      <g id="letter-a-peak">
        {/* White outline */}
        <path
          d="M75 48 L85 22 L95 48 L92 48 L90 40 L80 40 L78 48 Z M81 37 L89 37 L85 27 Z"
          fill="white"
        />
        {/* Red fill */}
        <path
          d="M77 45 L85 25 L93 45 L90 45 L88.5 39 L81.5 39 L80 45 Z M82.5 36 L87.5 36 L85 29 Z"
          fill="#DC2626"
        />
      </g>

      {/* Letter L */}
      <g id="letter-l">
        <path
          d="M105 25 L105 48 L125 48"
          stroke="white"
          strokeWidth="3"
          fill="none"
        />
        <path
          d="M107 28 L107 45 L123 45"
          fill="#DC2626"
        />
        <rect x="105" y="25" width="5" height="23" fill="#DC2626" />
        <rect x="107" y="43" width="18" height="5" fill="#DC2626" />
      </g>

      {/* Letter I */}
      <g id="letter-i">
        <rect x="133" y="25" width="5" height="23" fill="white" />
        <rect x="134" y="27" width="3" height="19" fill="#DC2626" />
        
        {/* Registered Trademark ® */}
        <g id="trademark">
          <circle cx="142" cy="26" r="4" stroke="white" strokeWidth="0.8" fill="none" />
          <text x="142" y="28.5" fontSize="5" fill="white" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="bold">R</text>
        </g>
      </g>

      {/* Globe Icon */}
      <g id="globe-icon" transform="translate(45, 57)">
        <circle cx="0" cy="0" r="4" stroke="white" strokeWidth="0.8" fill="none" />
        <ellipse cx="0" cy="0" rx="4" ry="2.5" stroke="white" strokeWidth="0.6" fill="none" />
        <line x1="0" y1="-4" x2="0" y2="4" stroke="white" strokeWidth="0.6" />
      </g>

      {/* Tagline "TO BE TOP" */}
      <text
        x="55"
        y="61"
        fontSize="7"
        fill="white"
        letterSpacing="2"
        fontFamily="Arial, sans-serif"
        fontWeight="600"
      >
        TO BE TOP
      </text>
    </svg>
  );
}
