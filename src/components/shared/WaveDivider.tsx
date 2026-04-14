interface WaveDividerProps {
  topColor?: string
  bottomColor?: string
  flip?: boolean
  className?: string
}

export function WaveDivider({
  topColor = 'var(--color-cream-50)',
  bottomColor = 'var(--color-ocean-50)',
  flip = false,
  className = '',
}: WaveDividerProps) {
  return (
    <div
      className={`relative w-full overflow-hidden leading-[0] ${flip ? 'rotate-180' : ''} ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="relative block w-full h-[60px] md:h-[80px] lg:h-[100px]"
      >
        <rect width="1440" height="120" fill={bottomColor} />
        <path
          d="M0,0 L1440,0 L1440,40 C1320,100 1200,80 1080,60 C960,40 840,80 720,90 C600,100 480,60 360,50 C240,40 120,80 0,60 Z"
          fill={topColor}
        />
        <path
          d="M0,0 L1440,0 L1440,20 C1380,60 1260,70 1140,50 C1020,30 900,60 780,70 C660,80 540,40 420,30 C300,20 180,50 0,40 Z"
          fill={topColor}
          opacity="0.5"
        />
      </svg>
    </div>
  )
}
