import { useState, useEffect, useMemo, useCallback } from 'react'
import {
  BriefcaseMedical,
  Sparkles,
  CircleDot,
  Siren,
  Moon,
  Zap,
  Search,
  X,
} from 'lucide-react'
import { SectionHeading } from '@/components/shared/SectionHeading'

import type { LucideIcon } from 'lucide-react'

interface SubService {
  name: string
  desc: string
}

interface ServiceCategory {
  icon: LucideIcon
  title: string
  desc: string
  details: SubService[]
}

const services: ServiceCategory[] = [
  {
    icon: BriefcaseMedical,
    title: 'General Dentistry',
    desc: 'Comprehensive exams, cleanings, digital X-rays, and preventive care to keep your smile healthy for life.',
    details: [
      {
        name: 'Dental Exam',
        desc: 'Professional dental exams are all about prevention — preventing existing problems from getting worse and preventing new problems from developing. Your teeth will be examined for signs of plaque, tartar and decay, and your gums checked for early signs of gum disease.',
      },
      {
        name: 'Digital Dental X-Rays',
        desc: 'Digital X-rays produce high-quality images viewable instantly on a monitor, reducing radiation by up to 90%. Intraoral photography captures clear images of cavities, fractures, and discolorations for thorough review with your dentist.',
      },
      {
        name: 'Teeth Cleaning',
        desc: 'We use ultrasonic scalers to remove plaque and tartar through high-frequency sound waves — quicker, quieter and more comfortable than traditional methods. Deep cleanings (scaling and root planing) are available for deposits below the gum line.',
      },
      {
        name: 'Oral Cancer Screening',
        desc: 'Oral cancer affects nearly 35,000 Americans every year. Screenings take just minutes, are pain-free and can be performed during regular dental exams. Early detection and treatment are the keys to the best outcomes.',
      },
      {
        name: 'Dentistry for Children',
        desc: 'Our staff is specially trained to treat children from infancy through their teenage years, with in-depth knowledge about children\'s behavior, growth and development. We love to make kids feel comfortable and relaxed.',
      },
      {
        name: 'Gum Disease Treatment',
        desc: 'More than 80% of adults have some form of gum disease. Treatment ranges from thorough cleaning for mild gingivitis to scaling and root planing for advanced periodontal disease. Laser gum surgery is also available.',
      },
      {
        name: 'Root Canal / Endodontics',
        desc: 'Root canals remove infection from the inner tooth and prevent it from spreading. Modern techniques make this faster and more comfortable than ever. Pulp capping is an alternative when infection has not yet reached the pulp.',
      },
      {
        name: 'Oral Surgery',
        desc: 'Surgical treatments including wisdom teeth extractions and bone grafting. Bone grafting transfers bone from one part of the jaw to another, usually to accommodate a dental implant.',
      },
      {
        name: 'TMJ Treatment',
        desc: 'If you have persistent jaw pain, ear pain and headaches, you could have TMD. Treatment may involve an orthotic splint, enamel reshaping, crowns, braces, or night guards to stabilize your bite.',
      },
    ],
  },
  {
    icon: Sparkles,
    title: 'Cosmetic Dentistry',
    desc: 'Smile makeovers, white fillings, cosmetic bonding, porcelain veneers, crowns, bridges, and professional teeth whitening.',
    details: [
      {
        name: 'Porcelain Veneers',
        desc: 'Veneers are thin custom-made porcelain shells designed to cover the front side of teeth. Made of tooth-colored materials, they treat gaps and teeth that are permanently stained, poorly shaped, slightly crooked, chipped, worn, or eroded at the gum line.',
      },
      {
        name: 'Teeth Whitening',
        desc: 'Laser teeth whitening treatments take just an hour and can whiten teeth up to 10 shades. At-home professional-grade kits are also available. For best results, we recommend consulting with us before trying any over-the-counter whitening system.',
      },
      {
        name: 'White Fillings',
        desc: 'Made of composite resin, white fillings match the natural color of your teeth and are an excellent option for small to mid-sized cavities. They are strong, stain-resistant, and require less removal of tooth structure than amalgam fillings.',
      },
      {
        name: 'Smile Makeover',
        desc: 'A smile makeover can transform chipped, cracked, gapped, crooked, or stained teeth into the smile of your dreams through a combination of white fillings, cosmetic bonding, porcelain veneers, crowns, braces, bridges, and implants.',
      },
    ],
  },
  {
    icon: CircleDot,
    title: 'Implant Dentistry',
    desc: 'Permanent tooth replacement with single-tooth implants and implant-supported dentures for a natural-looking smile.',
    details: [
      {
        name: 'Single-Tooth Implants',
        desc: 'Single-tooth implants act as tooth roots for replacement teeth — securely anchored into the jaw and topped with a dental crown. Surrounding teeth and the jawbone are better preserved, and implants are easier to clean and usually outlast bridges and dentures by many years.',
      },
      {
        name: 'The Implant Procedure',
        desc: 'A titanium implant is inserted into the jawbone under local anesthesia, then fuses to the bone over three to six months. A post is added and topped with a dental crown. Your new tooth is extremely secure and functions just like any other.',
      },
      {
        name: 'Implant-Supported Dentures',
        desc: 'Dental implants can anchor dentures into place for more stability than traditional dentures, at lower cost than a complete set of individual implants. For best results, practice excellent oral hygiene, eat well and avoid smoking.',
      },
      {
        name: 'Dental Bridges',
        desc: 'One of the most durable, conservative and cost-effective options for replacing missing teeth. Bridges prevent surrounding teeth from drifting, improve chewing and speaking, and maintain your natural face shape. They can last up to 30 years.',
      },
      {
        name: 'Dentures',
        desc: 'Natural-looking dentures are custom-designed to fit your mouth. Full dentures replace all teeth on a jaw, while partial dentures work for several missing teeth. Same-day dentures are available in some cases. With proper maintenance, dentures can last for many years.',
      },
      {
        name: 'Porcelain Crowns',
        desc: 'Porcelain crowns match the natural color of your teeth and are virtually undetectable. Metal-free, they are an excellent option for patients with metal allergies. They don\'t just look beautiful — they are long-lasting, too.',
      },
    ],
  },
  {
    icon: Siren,
    title: 'Emergency Dentistry',
    desc: 'Same-day and after-hours care for dental trauma, infections, broken teeth, and other urgent dental needs.',
    details: [
      {
        name: 'Same-Day Appointments',
        desc: 'We prioritize dental emergencies and work to see you the same day you call.',
      },
      {
        name: 'Dental Trauma Care',
        desc: 'Immediate treatment for knocked-out, cracked, or broken teeth to save your smile.',
      },
      {
        name: 'Infection & Pain Relief',
        desc: 'Urgent care for abscesses, severe toothaches, and swelling to get you out of pain fast.',
      },
      {
        name: 'After-Hours Care',
        desc: 'Emergency availability outside regular office hours — call our office line for after-hours guidance.',
      },
    ],
  },
  {
    icon: Moon,
    title: 'Sedation Dentistry',
    desc: 'Comfortable options for conscious sedation, so anxious patients can relax through any procedure.',
    details: [
      {
        name: 'Nitrous Oxide',
        desc: 'Minimal sedation involves inhaling nitrous oxide ("laughing gas"). It helps you relax and wears off quickly, making it ideal for patients who want mild relaxation during routine or longer procedures.',
      },
      {
        name: 'Conscious Sedation',
        desc: 'A moderate level of sedation taken in pill form that causes drowsiness. You remain conscious but deeply relaxed, allowing you to sail through dental visits without anxiety or fear.',
      },
      {
        name: 'Anxiety Management',
        desc: 'Would you rather endure a toothache than go to the dentist? You could be a perfect candidate for sedation dentistry. We offer different levels of sedation to accommodate every patient, so you can forget about fear and focus on relaxation.',
      },
    ],
  },
  {
    icon: Zap,
    title: 'Single Visit Dentistry',
    desc: 'Modern dental technology allows us to complete many treatments in a single appointment, saving you time.',
    details: [
      {
        name: 'CEREC 3D',
        desc: 'CEREC stands for Chairside Economical Restoration of Esthetic Ceramics — restore damaged teeth in a single appointment using a high-quality ceramic material that matches the natural color of your teeth.',
      },
      {
        name: 'How CEREC Works',
        desc: 'Dr. Chera uses a special camera to take an accurate picture of the damaged tooth. This optical impression is transferred to a computer, where CAD technology designs the restoration. Then the milling machine automatically creates it while you wait — the whole process takes about an hour.',
      },
      {
        name: 'CEREC Crowns',
        desc: 'No messy impressions, no temporary crowns, no multiple visits. CEREC crowns are made right in the office and placed in just one visit. Made of pure porcelain with no metal, they look and feel like your real teeth.',
      },
      {
        name: 'A Better Experience',
        desc: 'CEREC eliminates the need for temporaries, lab impressions, and second visits. We can save more of your original tooth structure, producing stronger and longer-lasting results. CEREC 3D has over a decade of clinical research proving its precision, safety, and effectiveness.',
      },
    ],
  },
]

export function Services() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [closing, setClosing] = useState(false)
  const activeService = activeIndex !== null ? services[activeIndex] : null

  const closeModal = useCallback(() => {
    if (activeIndex === null) return
    setClosing(true)
    setTimeout(() => {
      setActiveIndex(null)
      setClosing(false)
    }, 250)
  }, [activeIndex])

  // Lock body scroll and handle Escape key when modal is open
  useEffect(() => {
    if (activeIndex === null) return
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [activeIndex, closeModal])

  // Filter sub-services across all categories when searching
  const searchResults = useMemo(() => {
    const q = searchQuery.trim().toLowerCase()
    if (!q) return null
    return services
      .map((service, i) => {
        const matchingDetails = service.details
          .filter(
            (d) =>
              d.name.toLowerCase().includes(q) ||
              d.desc.toLowerCase().includes(q),
          )
          .sort((a, b) => {
            // Header (name) matches first, then body-only matches
            const aHeader = a.name.toLowerCase().includes(q) ? 0 : 1
            const bHeader = b.name.toLowerCase().includes(q) ? 0 : 1
            return aHeader - bHeader
          })
        return { ...service, categoryIndex: i, matchingDetails }
      })
      .filter((s) => s.matchingDetails.length > 0)
      .sort((a, b) => {
        // Categories whose title matches the query come first
        const aTitle = a.title.toLowerCase().includes(q) ? 0 : 1
        const bTitle = b.title.toLowerCase().includes(q) ? 0 : 1
        return aTitle - bTitle
      })
  }, [searchQuery])

  const isSearching = searchQuery.trim().length > 0

  return (
    <section id="services" className="py-10 md:py-10 bg-ocean-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Our Services"
          subtitle="From routine check-ups to advanced restorations, we offer a full range of dental services in a comfortable, caring environment."
        />

        {/* Search bar */}
        <div className="max-w-md mx-auto mb-10 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Find a service…"
            className="w-full pl-12 pr-10 py-3 rounded-xl border border-ocean-200 bg-white text-slate-900 placeholder:text-slate-400 focus:border-ocean-500 focus:ring-2 focus:ring-ocean-500/20 outline-none transition-all shadow-sm"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Search results */}
        {isSearching ? (
          searchResults && searchResults.length > 0 ? (
            <div className="space-y-8">
              {searchResults.map((result) => (
                <div key={result.title}>
                  <button
                    type="button"
                    onClick={() => { setSearchQuery(''); setActiveIndex(result.categoryIndex) }}
                    className="flex items-center gap-2 mb-4 group/cat cursor-pointer"
                  >
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-ocean-100 to-ocean-200 flex items-center justify-center">
                      <result.icon className="w-4 h-4 text-ocean-700" />
                    </div>
                    <h3 className="font-heading text-lg font-semibold text-ocean-800 group-hover/cat:text-ocean-600 transition-colors">
                      {result.title}
                    </h3>
                  </button>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {result.matchingDetails.map((sub) => (
                      <div
                        key={sub.name}
                        className="p-5 rounded-xl bg-white border border-ocean-100 shadow-sm hover:shadow-md hover:border-ocean-200 transition-all duration-300"
                      >
                        <h4 className="font-heading font-semibold text-ocean-800 mb-2 text-sm">
                          {sub.name}
                        </h4>
                        <p className="text-slate-600 text-sm leading-relaxed">
                          {sub.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-slate-500 py-8">
              No services found matching <span className="font-medium text-slate-700">"{searchQuery}"</span>. Try a different term or <button type="button" onClick={() => setSearchQuery('')} className="text-ocean-700 font-medium hover:underline cursor-pointer">browse all services</button>.
            </p>
          )
        ) : (

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <article
                key={service.title}
                onClick={() => setActiveIndex(i)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    setActiveIndex(i)
                  }
                }}
                className={`group relative p-8 rounded-2xl bg-white border border-ocean-100 shadow-sm cursor-pointer
                transition-all duration-300 hover:shadow-xl hover:-translate-y-2`}
              >
                {/* Decorative top accent */}
                <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-gold-600 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-ocean-100 to-ocean-200 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-ocean-700" />
                </div>

                <h3 className="font-heading text-xl font-semibold text-slate-900 mb-3">
                  {service.title}
                </h3>

                <p className="text-slate-600 leading-relaxed text-sm">
                  {service.desc}
                </p>
              </article>
            ))}
          </div>
        )}

        {/* Modal overlay */}
        {activeService && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            onClick={closeModal}
            role="dialog"
            aria-modal="true"
            aria-label={`${activeService.title} details`}
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-ocean-900/60 backdrop-blur-sm"
              style={{ animation: closing ? 'fade-out 0.25s ease-in forwards' : 'fade-in 0.3s ease-out forwards' }}
            />

            {/* Modal content */}
            <div
              className="relative bg-white rounded-2xl border border-ocean-100 shadow-2xl w-full max-w-3xl max-h-[85vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
              style={{ animation: closing ? 'modal-slide-down 0.25s ease-in forwards' : 'modal-slide-up 0.3s ease-out forwards' }}
            >
              {/* Sticky header */}
              <div className="p-6 md:p-8 pb-0 shrink-0">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-ocean-100 to-ocean-200 flex items-center justify-center">
                      <activeService.icon className="w-5 h-5 text-ocean-700" />
                    </div>
                    <h3 className="font-heading text-2xl font-semibold text-slate-900">
                      {activeService.title}
                    </h3>
                  </div>
                  <button
                    onClick={closeModal}
                    className="w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-all duration-200 cursor-pointer"
                    aria-label="Close details"
                    type="button"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <hr className="rope-divider" style={{ width: '100%' }} />
              </div>

              {/* Scrollable body */}
              <div className="p-4 overflow-y-auto modal-scroll">
                {/* Sub-service cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {activeService.details.map((sub, j) => (
                    <div
                      key={sub.name}
                      className="p-5 rounded-xl bg-ocean-50/60 border border-ocean-100/60 hover:border-ocean-200 hover:shadow-md transition-all duration-300"
                      style={{
                        animation: `fade-in-up 0.4s ease-out ${j * 0.07}s both`,
                      }}
                    >
                      <h4 className="font-heading font-semibold text-ocean-800 mb-2 text-sm">
                        {sub.name}
                      </h4>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {sub.desc}
                      </p>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-6 text-center">
                  <a
                    href="tel:+17075422676"
                    className="inline-flex items-center gap-2 px-6 py-2.5 bg-ocean-700 text-white rounded-full text-sm font-semibold hover:bg-ocean-600 transition-all duration-200 shadow-md hover:-translate-y-0.5"
                  >
                    Schedule a {activeService.title} appointment
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <p className="text-slate-600 mb-4">
            Not sure which service you need? We're happy to help.
          </p>
          <a
            href="tel:+17075422676"
            className="inline-flex items-center gap-2 px-8 py-3 bg-ocean-700 text-white rounded-full font-semibold hover:bg-ocean-600 transition-all duration-200 shadow-lg shadow-ocean-700/20 hover:-translate-y-0.5"
          >
            Call to discuss your needs
          </a>
        </div>
      </div>
    </section>
  )
}
