import { useRef, useEffect, useCallback } from 'react'
import { Phone } from 'lucide-react'

/**
 * Attempt to match prefers-reduced-motion so we can skip the
 * rAF loop entirely for users who don't want animation.
 */
function prefersReducedMotion() {
  return window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
}

/**
 * Generate a smooth wave path using layered sine waves.
 *
 * Physics model:
 *  - Multiple sine waves at irrational frequency ratios create
 *    organic, non-repeating motion (like real ocean waves).
 *  - An asymmetric shaping function makes each wave "lap":
 *    fast rush up (momentum), slow crest (gravity overcomes),
 *    then accelerated retreat (gravity pulls back).
 */

/**
 * Asymmetric lap cycle: models how a wave advances up a beach
 * and retreats, viewed from above.
 *
 * - Fast rush up the shore (momentum)
 * - Brief linger at the peak (energy dissipating)
 * - Slower gravity-pulled retreat
 *
 * Returns 0..1 where 1 = maximum advance up the beach.
 */
function lapCycle(t: number, period: number): number {
  const phase = ((t % period) / period) // 0..1
  // Use a sin curve raised to a power for asymmetry:
  // sin^0.6 rises quickly, falls slowly
  const raw = Math.sin(phase * Math.PI)
  return Math.pow(raw, 0.6)
}

/**
 * Generate shoreline path — top-down view.
 *
 * The dominant effect is the entire waterline advancing/retreating
 * vertically (controlled by lapCycle). A subtle spatial ripple
 * along the edge adds organic texture.
 */
function generateWavePath(
  t: number,
  width: number,
  restY: number,
  advanceDistance: number,
  period: number,
  phaseOffset: number,
): { path: string; advance: number } {
  const segments = 60
  const step = width / segments

  // How far up the beach the water has advanced (0 = rest, 1 = max)
  const advance = lapCycle(t + phaseOffset, period)

  // The waterline position — higher Y = further down onto the beach (sand below)
  const waterlineY = restY + advance * advanceDistance

  const points: string[] = []

  for (let i = 0; i <= segments; i++) {
    const x = i * step
    const nx = x / width

    // Subtle edge ripple — gives the waterline an organic, non-straight shape
    // Multiple frequencies for natural variation
    const ripple =
      Math.sin(nx * Math.PI * 3 + t * 0.5) * 3 +
      Math.sin(nx * Math.PI * 5.7 + t * 0.8 + 1.2) * 1.5 +
      Math.sin(nx * Math.PI * 11 + t * 1.3 + 3.1) * 0.7

    // Ripple amplitude scales with advance — more turbulent when wave is fully up
    const rippleScale = 0.3 + advance * 0.7

    const y = waterlineY + ripple * rippleScale

    if (i === 0) {
      points.push(`M0,${y.toFixed(1)}`)
    } else {
      points.push(`L${x.toFixed(0)},${y.toFixed(1)}`)
    }
  }

  points.push(`L${width},0 L0,0 Z`)
  return { path: points.join(' '), advance }
}

export function Hero() {
  const primaryRef = useRef<SVGPathElement>(null)
  const secondaryRef = useRef<SVGPathElement>(null)
  const rafRef = useRef<number>(0)

  const animate = useCallback(() => {
    const t = performance.now() / 1000

    if (primaryRef.current) {
      const { path, advance } = generateWavePath(t, 1440, 150, 40, 4, 0)
      primaryRef.current.setAttribute('d', path)
      // Steep opacity curve — fades fast on retreat
      primaryRef.current.setAttribute('opacity', (advance * advance).toFixed(2))
    }
    if (secondaryRef.current) {
      const { path, advance } = generateWavePath(t, 1440, 145, 30, 5.5, 2)
      secondaryRef.current.setAttribute('d', path)
      secondaryRef.current.setAttribute('opacity', (advance * advance * 0.8).toFixed(2))
    }

    rafRef.current = requestAnimationFrame(animate)
  }, [])

  useEffect(() => {
    if (prefersReducedMotion()) {
      const p = generateWavePath(0, 1440, 150, 40, 4, 0)
      primaryRef.current?.setAttribute('d', p.path)
      primaryRef.current?.setAttribute('opacity', '0.6')
      const s = generateWavePath(0, 1440, 145, 30, 5.5, 2)
      secondaryRef.current?.setAttribute('d', s.path)
      secondaryRef.current?.setAttribute('opacity', '0.4')
      return
    }

    rafRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(rafRef.current)
  }, [animate])

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen lg:min-h-[115vh] flex items-center justify-center overflow-hidden"
    >
      {/* Background image with gradient overlay */}
      <div className="absolute inset-0">
        <img
          src="/office-exterior.jpg"
          alt="Dr. Chera's dental office exterior — a charming Craftsman-style building at 838 2nd St, Santa Rosa, CA"
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center -20px' }}
          loading="eager"
          fetchPriority="high"
        />
        {/* Gradient overlay — fully opaque ocean-900 by the time the wave starts */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(27,58,92,0.55) 0%, rgba(27,58,92,0.4) 45%, rgba(27,58,92,1) 75%)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ocean-900/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-30 max-w-5xl mx-auto px-4 sm:px-6 text-center pt-2">
        <div className="animate-fade-in-up">
          <img
            src="/logo.svg"
            alt=""
            className="mx-auto h-36 md:h-48 lg:h-56 w-auto mb-8 drop-shadow-2xl invert"
            style={{ filter: 'invert(1) drop-shadow(0 0 24px rgba(255,255,255,0.25))' }}
            width="224"
            height="224"
            aria-hidden="true"
          />
        </div>

        <h1
          className="animate-fade-in-up stagger-1 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-tight mb-6"
          style={{ textShadow: '0 2px 8px rgba(0,0,0,0.5), 0 4px 20px rgba(27,58,92,0.6)' }}
        >
          Gentle, Personalized
          <span className="block text-gold-400" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.4), 0 4px 16px rgba(27,58,92,0.5)' }}>Dental Care</span>
        </h1>

        <p
          className="animate-fade-in-up stagger-2 text-lg sm:text-xl md:text-2xl text-ocean-100 max-w-2xl mx-auto mb-10 leading-relaxed font-light"
          style={{ textShadow: '0 1px 6px rgba(0,0,0,0.5), 0 2px 12px rgba(27,58,92,0.5)' }}
        >
          Steadfast treatment for families across Sonoma&nbsp;County.
        </p>

        <div className="animate-fade-in-up stagger-3 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="tel:+17075422676"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gold-600 text-white rounded-full text-lg font-semibold hover:bg-gold-500 transition-all duration-300 shadow-xl shadow-gold-600/30 hover:shadow-gold-500/40 hover:-translate-y-1"
          >
            <Phone className="w-5 h-5" />
            Schedule an Appointment
          </a>
          <button
            onClick={scrollToAbout}
            type="button"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-full text-lg font-medium hover:bg-white/20 transition-all duration-300 hover:-translate-y-1"
          >
            Learn More
          </button>
        </div>
      </div>

      {/* Physics-based shoreline wave */}
      <div className="absolute bottom-0 left-0 right-0 z-20" aria-hidden="true">
        <svg
          viewBox="0 0 1440 200"
          preserveAspectRatio="none"
          className="block w-full h-[80px] md:h-[200px] lg:h-[240px]"
        >
          <defs>
            {/* Shallows: ultra-smooth deep ocean → turquoise → sand */}
            <linearGradient id="shallowsGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1B3A5C" />
              <stop offset="15%" stopColor="#1E4A6E" />
              <stop offset="30%" stopColor="#236080" />
              <stop offset="45%" stopColor="#2E7D96" />
              <stop offset="55%" stopColor="#3A99AE" />
              <stop offset="65%" stopColor="#55B5C5" />
              <stop offset="75%" stopColor="#7DD4E0" />
              <stop offset="85%" stopColor="#A8E2E4" />
              <stop offset="92%" stopColor="#CDEAE0" />
              <stop offset="100%" stopColor="var(--color-sand-100)" />
            </linearGradient>
            {/* Surf wave: visible blue wash behind wavefront */}
            <linearGradient id="surfGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopOpacity="0" stopColor="#1B3A5C" />
              <stop offset="50%" stopOpacity="0" stopColor="#2A6A8A" />
              <stop offset="70%" stopColor="#3A8AAB" stopOpacity="0.3" />
              <stop offset="85%" stopColor="#5BAAC5" stopOpacity="0.6" />
              <stop offset="95%" stopColor="#7BBAD0" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#A8D8EA" stopOpacity="1" />
            </linearGradient>
            {/* Foam: bright white wavefront */}
            <linearGradient id="foamGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopOpacity="0" stopColor="#1B3A5C" />
              <stop offset="55%" stopOpacity="0" stopColor="#3A7A9B" />
              <stop offset="75%" stopColor="#5BA0BA" stopOpacity="0.2" />
              <stop offset="90%" stopColor="white" stopOpacity="0.4" />
              <stop offset="100%" stopColor="white" stopOpacity="0.9" />
            </linearGradient>
          </defs>
          {/* Full-height shallows with curved upper edge */}
          <path
            d="M0,18 C200,25 400,15 600,30 C800,20 1000,12 1200,26 C1350,30 1440,18 1440,22 L1440,200 L0,200 Z"
            fill="url(#shallowsGradient)"
          />
          {/* Primary surf wave */}
          <path ref={primaryRef} fill="url(#surfGradient)" />
          {/* Secondary foam wave */}
          <path ref={secondaryRef} fill="url(#foamGradient)" />
        </svg>
      </div>

    </section>
  )
}
