import { useState, useEffect } from 'react'
import { Shield, Clock, Smile, Compass, Star, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react'
import { SectionHeading } from '@/components/shared/SectionHeading'

const features = [
  {
    icon: Smile,
    title: 'Gentle Approach',
    desc: 'We understand dental anxiety. From sedation options to a calming environment, your comfort is our top priority.',
  },
  {
    icon: Shield,
    title: 'Advanced Training',
    desc: 'UCLA education with honors, a UW residency in hospital dentistry, and ongoing continuing education.',
  },
  {
    icon: Clock,
    title: 'Emergency & After-Hours',
    desc: "Dental emergencies don't wait — neither do we. Same-day appointments available for urgent care.",
  },
  {
    icon: Compass,
    title: 'Community Focused',
    desc: 'Rooted in Santa Rosa and dedicated to Sonoma County families. Dr. Chera is your trusty neighborhood dentist.',
  },
]

const testimonials = [
  {
    quote: "Dr. Chera's office is the best! His staff is very professional and friendly. His main priority is making sure his patients are comfortable and they get the best quality dental care. For the first time I don't dread going to the dentist!",
    name: 'Madison M.',
    location: 'Santa Rosa, CA',
    source: 'Google',
  },
  {
    quote: "My teeth look great! That's important to me. Plus, I know that they are in excellent health. Dr. Chera has a very caring and gentle approach, and I appreciate that he explains all procedures to me.",
    name: 'Denise',
    location: 'Santa Rosa, CA',
    source: 'Patient',
  },
  {
    quote: "On a trip to Forestville, I split a tooth in half. Dr. Chera was knowledgeable and professional. He explained what he could do and made sure I was comfortable. He and his staff are wonderful people who truly care about their patients.",
    name: 'Frances H.',
    location: 'Yelp',
    source: 'Yelp',
  },
  {
    quote: "Trust is the operative word and after many years of continued good care I have a lot of trust for Dr. Chera and his staff. Even when the news is not good I feel like I'm getting informed accurately and with the utmost respect.",
    name: 'Jacqueline K.',
    location: 'Santa Rosa, CA',
    source: 'Patient',
  },
  {
    quote: "I have always feared the dentist because of the pain and cost, but Dr. Chera is kind, non-judgmental and sensitive to his patients. His staff is personable and professional. He is the only dentist I would trust with my mouth and checkbook.",
    name: 'Patient',
    location: 'Petaluma, CA',
    source: 'Patient',
  },
  {
    quote: "I first went to Dr. Chera as an emergency for a toothache on a weekend. I was so impressed that I now go to him for all my dental needs. The office is clean and inviting; the staff are all friendly and helpful. I highly recommend them!",
    name: 'Debbie S.',
    location: 'Santa Rosa, CA',
    source: 'Patient',
  },
]

const GOOGLE_REVIEWS_URL = 'https://www.google.com/search?q=Alin+N+Chera+DDS+Santa+Rosa&lrd=0x808447fd6766ee57:0x9a90149434c8d4e5,1,,,'
const YELP_URL = 'https://www.yelp.com/biz/alin-n-chera-dds-santa-rosa'

function Stars() {
  return (
    <div className="flex gap-0.5 mb-3">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-gold-500 text-gold-500" />
      ))}
    </div>
  )
}

export function WhyChooseUs() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)

  // Auto-advance every 6 seconds
  useEffect(() => {
    if (paused) return
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [paused])

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)
  const next = () => setCurrent((c) => (c + 1) % testimonials.length)
  const t = testimonials[current]

  return (
    <section id="why" className="py-10 md:py-10 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Why Choose Us"
          subtitle="More than just a dental office — a place where you feel at home."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex gap-5"
            >
              <div className="w-14 h-14 shrink-0 rounded-full bg-ocean-100 flex items-center justify-center">
                <feature.icon className="w-6 h-6 text-ocean-700" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold text-slate-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mt-16 max-w-3xl mx-auto">
          <h3 className="font-heading text-2xl font-semibold text-center text-slate-900 mb-8">
            What Our Patients Say
          </h3>

          <div
            className="relative bg-white rounded-2xl border border-ocean-100 shadow-sm p-8 md:p-10"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {/* Quote */}
            <div className="min-h-[160px] flex flex-col justify-center">
              <Stars />
              <blockquote className="text-slate-700 leading-relaxed italic mb-4 transition-opacity duration-300">
                "{t.quote}"
              </blockquote>
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-slate-900">
                  {t.name}
                  <span className="font-normal text-slate-500 ml-2">— {t.location}</span>
                </p>
                <span className="text-xs text-ocean-600 font-medium bg-ocean-50 px-2.5 py-0.5 rounded-full">
                  {t.source}
                </span>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-6 pt-4 border-t border-ocean-100/60">
              <div className="flex gap-2">
                <button
                  onClick={prev}
                  className="w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:text-ocean-700 hover:bg-ocean-50 transition-all cursor-pointer"
                  aria-label="Previous testimonial"
                  type="button"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={next}
                  className="w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:text-ocean-700 hover:bg-ocean-50 transition-all cursor-pointer"
                  aria-label="Next testimonial"
                  type="button"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Dots */}
              <div className="flex gap-1.5">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${i === current
                      ? 'bg-ocean-700 w-5'
                      : 'bg-ocean-200 hover:bg-ocean-400'
                      }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                    type="button"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Review links */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-ocean-200 text-sm font-medium text-ocean-800 bg-white hover:bg-ocean-50 hover:border-ocean-300 hover:-translate-y-0.5 shadow-sm transition-all duration-200"
            >
              <ExternalLink className="w-4 h-4" />
              Read Google Reviews
            </a>
            <a
              href={YELP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-ocean-200 text-sm font-medium text-ocean-800 bg-white hover:bg-ocean-50 hover:border-ocean-300 hover:-translate-y-0.5 shadow-sm transition-all duration-200"
            >
              <ExternalLink className="w-4 h-4" />
              Read Yelp Reviews
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
