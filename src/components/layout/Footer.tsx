import { Phone, MapPin, Clock, AnchorIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
import { asset } from '@/lib/utils'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-ocean-900 text-white relative overflow-hidden">
      {/* Subtle nautical compass pattern in background */}
      <div className="absolute inset-0 opacity-[0.03]" aria-hidden="true">
        <div className="absolute top-10 right-10 w-64 h-64">
          <img src={asset('/molar-outline.png')} alt="" className="w-full h-full object-contain" />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Column 1: Contact Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img
                src={asset('/logo.svg')}
                alt=""
                className="h-10 w-auto brightness-0 invert"
                width="40"
                height="40"
                aria-hidden="true"
              />
              <div>
                <p className="font-heading text-lg font-semibold">Alin N. Chera, DDS</p>
                <p className="text-ocean-300 text-sm">Care-Full Dentistry</p>
              </div>
            </div>
            <ul className="space-y-3 text-ocean-200 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-gold-400 shrink-0" />
                <a
                  href="https://maps.google.com/?q=Alin+N.+Chera,+DDS,+838+2nd+St,+Santa+Rosa,+CA+95404"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  838 2nd St<br />Santa Rosa, CA 95404
                </a>
              </li>
              <li>
                <a
                  href="tel:+17075422676"
                  className="flex items-center gap-3 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                  <span>(707) 542-2676</span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 mt-0.5 text-gold-400 shrink-0" />
                {/* Office hours — placeholder until confirmed */}
                <span>Mon – Fri: 8:00 AM – 5:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-2 text-ocean-200 text-sm">
              {[
                { label: 'Home', href: '#home' },
                { label: 'About Dr. Chera', href: '#about' },
                { label: 'Our Services', href: '#services' },
                { label: 'Patient Forms', href: '/forms' },
                { label: 'Contact Us', href: '#contact' },
              ].map((link) => (
                <li key={link.href}>
                  {link.href.startsWith('/') ? (
                    <Link
                      to={link.href}
                      className="hover:text-white hover:translate-x-1 inline-block transition-all duration-200"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="hover:text-white hover:translate-x-1 inline-block transition-all duration-200"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>

            <h3 className="font-heading text-lg font-semibold mt-8 mb-4 text-white">Legal</h3>
            <ul className="space-y-2 text-ocean-200 text-sm">
              <li>
                <Link
                  to="/privacy"
                  className="hover:text-white hover:translate-x-1 inline-block transition-all duration-200"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/accessibility"
                  className="hover:text-white hover:translate-x-1 inline-block transition-all duration-200"
                >
                  Accessibility
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Office Hours & Trust */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-6 text-white">About the Practice</h3>
            <p className="text-ocean-200 text-sm leading-relaxed mb-6">
              Dr. Chera graduated with honors from the UCLA School of Dentistry
              and completed a General Practice Residency at the University of
              Washington. He is dedicated to providing gentle, personalized dental
              care to families throughout Sonoma County.
            </p>
            <div className="flex items-center gap-2 text-gold-400 text-sm">
              <AnchorIcon className="w-4 h-4 text-gold-400 shrink-0" />
              <span className="font-medium">Member, Redwood Empire Dental Society</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-ocean-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-ocean-400 text-xs">
            <p>&copy; {currentYear} Alin N. Chera, DDS. All rights reserved.</p>
            <p>
              Licensed by the Dental Board of California
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
