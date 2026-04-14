import { Heart, Home, GraduationCap, Users } from 'lucide-react'
import { SectionHeading } from '@/components/shared/SectionHeading'

const credentials = [
  {
    icon: Heart,
    title: 'Decades of Local Care',
    desc: 'Proudly serving Sonoma County families with gentle, personalized dentistry since 1998',
  },
  {
    icon: Home,
    title: 'An Office with a Story',
    desc: 'A warm, welcoming atmosphere in a beautifully restored Craftsman-style building',
  },
  {
    icon: GraduationCap,
    title: 'Advanced Training',
    desc: 'UCLA School of Dentistry graduate, inducted into the Omicron-Kappa-Upslion Honorary Dental Society',
  },
  {
    icon: Users,
    title: 'Grounded in Community',
    desc: 'Actively involved in community service and outreach in Sonoma County and beyond',
  },
]

export function About() {
  return (
    <section id="about" className="py-10 md:py-10 bg-sand-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Meet Dr. Chera"
          subtitle="A local dentist dedicated to making your visit comfortable."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Bio */}
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-slate-700">
              As a trusted member of Sonoma County's community, Dr. Alin N. Chera has been caring for local families for decades.
              His philosophy is that great dentistry begins with genuine relationships and a welcoming atmosphere,
              and is sustained by clinical excellence that translates to long-term health. That's why he's chosen to practice
              in a beautifully reimagined 1875 farmhouse, equipped with robust dental technology for treatment that lasts.
            </p>
            <p className="text-lg leading-relaxed text-slate-700">
              Dr. Chera earned his Doctor of Dental Surgery degree with honors
              from the{' '}
              <strong className="text-ocean-700">UCLA School of Dentistry</strong>
              {' '}and completed a General Practice Residency at the{' '}
              <strong className="text-ocean-700">University of Washington</strong>,
              training extensively in hospital dentistry and sedation techniques.
              This advanced training allows him to offer a full spectrum of
              care — from routine cleanings to complex procedures — all with
              an emphasis on patient comfort.
            </p>
            <blockquote className="relative pl-6 border-l-4 border-gold-500 py-4 mt-2">
              <p className="font-heading text-xl italic leading-relaxed text-ocean-800">
                "At my practice, we strive each day to give our patients the same careful attention that we give
                members of our own family. Dentistry is our expertise, and we share what we know with
                our patients as we help them achieve and maintain healthy, beautiful smiles."
              </p>
              <footer className="mt-4 flex items-center gap-3">
                <span className="block w-6 h-px bg-gold-500" aria-hidden="true" />
                <cite className="not-italic font-heading font-semibold text-ocean-700 tracking-wide">
                  Dr. Chera
                </cite>
              </footer>
            </blockquote>
          </div>

          {/* Credentials grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {credentials.map((cred, i) => (
              <div
                key={cred.title}
                className={`nautical-card p-6 rounded-2xl hover:-translate-y-1 transition-all duration-300 animate-fade-in-up stagger-${i + 1}`}
              >
                <div className="w-12 h-12 rounded-xl bg-gold-600/20 border border-gold-600/30 flex items-center justify-center mb-4">
                  <cred.icon className="w-6 h-6 text-gold-400" />
                </div>
                <h3 className="font-heading font-semibold text-slate-900 mb-1">
                  {cred.title}
                </h3>
                <hr className="rope-divider my-3" style={{ width: '60px' }} />
                <p className="text-sm text-slate-600 leading-relaxed">
                  {cred.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
