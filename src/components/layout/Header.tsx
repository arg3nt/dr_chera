import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Phone } from 'lucide-react'
import { cn, asset } from '@/lib/utils'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Forms', href: '/forms' },
]

export function Header() {
  const location = useLocation()
  const navigate = useNavigate()
  const isHome = location.pathname === '/'
  const [scrolledRaw, setScrolledRaw] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  // On non-home pages, always show the opaque header
  const scrolled = isHome ? scrolledRaw : true

  useEffect(() => {
    const onScroll = () => setScrolledRaw(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const handleNavClick = (href: string) => {
    setMobileOpen(false)

    // Route links (e.g. /forms) — navigate directly
    if (href.startsWith('/')) {
      navigate(href)
      return
    }

    if (!isHome) {
      // Navigate to home page first, then scroll after DOM renders
      navigate('/')
      setTimeout(() => {
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      {/* Skip to content link — a11y */}
      <a href="#main-content" className="skip-nav">
        Skip to main content
      </a>

      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-2'
            : 'bg-transparent py-4',
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNavClick('#home') }}
            className="flex items-center gap-3 group"
            aria-label="Alin N. Chera, DDS — Home"
          >
            <div
              className={cn(
                'transition-all duration-500 ease-out overflow-hidden',
                scrolled
                  ? 'max-w-[56px] opacity-100 translate-x-0'
                  : 'max-w-0 opacity-0 -translate-x-4',
              )}
            >
              <img
                src={asset('/logo.svg')}
                alt="Alin N. Chera, DDS logo"
                className="h-12 md:h-14 w-auto transition-transform duration-300 group-hover:scale-105"
                width="56"
                height="56"
              />
            </div>
            <div className={cn(
              'hidden sm:block transition-all duration-300',
              scrolled ? 'text-slate-900' : 'text-white',
            )}>
              <span className="block text-lg font-heading font-semibold leading-tight">
                Alin N. Chera,{' '}
                <span className={cn(scrolled ? 'text-ocean-700' : 'text-gold-400')}>DDS</span>
              </span>
              <span className={cn(
                'block text-xs tracking-wider uppercase',
                scrolled ? 'text-slate-500' : 'text-ocean-200',
              )}>
                Santa Rosa, CA
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                className={cn(
                  'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200',
                  scrolled
                    ? 'text-slate-700 hover:text-ocean-700 hover:bg-ocean-50'
                    : 'text-white/90 hover:text-white hover:bg-white/10',
                )}
              >
                {link.label}
              </a>
            ))}

            {/* Phone CTA */}
            <a
              href="tel:+17075422676"
              className="ml-3 inline-flex items-center gap-2 px-5 py-2.5 bg-ocean-700 text-white rounded-full text-sm font-semibold hover:bg-ocean-600 transition-all duration-200 shadow-lg shadow-ocean-700/20 hover:shadow-ocean-600/30 hover:-translate-y-0.5"
            >
              <Phone className="w-4 h-4" />
              <span>(707) 542-2676</span>
            </a>
          </nav>

          {/* Mobile hamburger — morphs to X */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className={cn(
              'md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg transition-colors',
              scrolled ? 'text-slate-700' : 'text-white',
            )}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            <span className="sr-only">{mobileOpen ? 'Close' : 'Menu'}</span>
            <span
              className={cn(
                'absolute h-0.5 w-5 rounded-full transition-all duration-300',
                (scrolled || mobileOpen) ? 'bg-slate-700' : 'bg-white',
                mobileOpen ? 'rotate-45 translate-y-0' : '-translate-y-1.5',
              )}
            />
            <span
              className={cn(
                'absolute h-0.5 w-5 rounded-full transition-all duration-300',
                (scrolled || mobileOpen) ? 'bg-slate-700' : 'bg-white',
                mobileOpen ? 'opacity-0 scale-0' : 'opacity-100',
              )}
            />
            <span
              className={cn(
                'absolute h-0.5 w-5 rounded-full transition-all duration-300',
                (scrolled || mobileOpen) ? 'bg-slate-700' : 'bg-white',
                mobileOpen ? '-rotate-45 translate-y-0' : 'translate-y-1.5',
              )}
            />
          </button>
        </div>
      </header>

      {/* Mobile menu — slides down from top */}
      <div
        className={cn(
          'md:hidden fixed inset-x-0 top-0 z-40 bg-white transition-transform duration-300 ease-out',
          mobileOpen
            ? 'translate-y-0 shadow-xl'
            : '-translate-y-full pointer-events-none',
        )}
      >
        {/* Spacer matching the header height so content starts below it */}
        <div className="h-[60px]" />

        <div className="px-4 py-4">
          <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                className="px-4 py-3 text-lg font-medium text-slate-700 hover:text-ocean-700 hover:bg-ocean-50 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <hr className="rope-divider my-4" />
          <a
            href="tel:+17075422676"
            className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-ocean-700 text-white rounded-full font-semibold hover:bg-ocean-600 transition-colors"
          >
            <Phone className="w-5 h-5" />
            <span>(707) 542-2676</span>
          </a>
          <p className="mt-3 text-center text-sm text-slate-500">
            838 2nd St, Santa Rosa, CA 95404
          </p>
        </div>
      </div>
    </>
  )
}
