import { Phone, MapPin, Clock, Send } from 'lucide-react'
import { useState, type FormEvent } from 'react'
import { SectionHeading } from '@/components/shared/SectionHeading'

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const name = data.get('name') as string
    const email = data.get('email') as string
    const phone = data.get('phone') as string
    const message = data.get('message') as string

    // mailto fallback — opens default email client
    const subject = encodeURIComponent(`Website Inquiry from ${name}`)
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`
    )
    window.location.href = `mailto:drchera@sbcglobal.net?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-10 md:py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Get in Touch"
          subtitle="We'd love to hear from you. Reach out to schedule an appointment or ask a question."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact form */}
          <div className="bg-cream-50 rounded-3xl p-8 md:p-10 border border-sand-200">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-ocean-100 flex items-center justify-center mx-auto mb-4">
                  <Send className="w-8 h-8 text-ocean-700" />
                </div>
                <h3 className="font-heading text-2xl font-semibold text-slate-900 mb-2">
                  Message Ready!
                </h3>
                <p className="text-slate-600">
                  Your email client should have opened with your message.
                  You can also call us directly at{' '}
                  <a href="tel:+17075422676" className="text-ocean-700 font-semibold hover:underline">
                    (707) 542-2676
                  </a>.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-ocean-700 font-medium hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium text-slate-700 mb-1.5">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    required
                    autoComplete="name"
                    className="w-full px-4 py-3 rounded-xl border border-sand-200 bg-white text-slate-900 placeholder:text-slate-400 focus:border-ocean-500 focus:ring-2 focus:ring-ocean-500/20 outline-none transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-medium text-slate-700 mb-1.5">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      required
                      autoComplete="email"
                      className="w-full px-4 py-3 rounded-xl border border-sand-200 bg-white text-slate-900 placeholder:text-slate-400 focus:border-ocean-500 focus:ring-2 focus:ring-ocean-500/20 outline-none transition-all"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-phone" className="block text-sm font-medium text-slate-700 mb-1.5">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="contact-phone"
                      name="phone"
                      autoComplete="tel"
                      className="w-full px-4 py-3 rounded-xl border border-sand-200 bg-white text-slate-900 placeholder:text-slate-400 focus:border-ocean-500 focus:ring-2 focus:ring-ocean-500/20 outline-none transition-all"
                      placeholder="(707) 555-0123"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-sm font-medium text-slate-700 mb-1.5">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-sand-200 bg-white text-slate-900 placeholder:text-slate-400 focus:border-ocean-500 focus:ring-2 focus:ring-ocean-500/20 outline-none transition-all resize-y"
                    placeholder="How can we help you?"
                  />
                </div>

                <p className="text-xs text-slate-500">
                  This form does not collect or transmit health information.
                  Please do not include sensitive medical details.
                </p>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-ocean-700 text-white rounded-xl font-semibold hover:bg-ocean-600 transition-all duration-200 shadow-lg shadow-ocean-700/20 hover:shadow-ocean-600/30 hover:-translate-y-0.5 cursor-pointer"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Contact info + map */}
          <div className="space-y-8">
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-ocean-100 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-ocean-700" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-slate-900 mb-1">Visit Us</h3>
                  <p className="text-slate-600">838 2nd St<br />Santa Rosa, CA 95404</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-ocean-100 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-ocean-700" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-slate-900 mb-1">Call Us</h3>
                  <a href="tel:+17075422676" className="text-ocean-700 font-semibold hover:underline">
                    (707) 542-2676
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-ocean-100 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-ocean-700" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-slate-900 mb-1">Office Hours</h3>
                  {/* Placeholder hours — TODO: confirm with Dr. Chera */}
                  <table className="text-slate-600 text-sm">
                    <tbody>
                      <tr><td className="pr-4 py-0.5">Monday – Friday</td><td>8:00 AM – 5:00 PM</td></tr>
                      <tr><td className="pr-4 py-0.5">Saturday – Sunday</td><td className="text-slate-400">Closed</td></tr>
                    </tbody>
                  </table>
                  <p className="text-xs text-ocean-600 mt-1 font-medium">
                    After-hours emergency appointments available
                  </p>
                </div>
              </div>
            </div>

            {/* Google Maps embed — lazy loaded */}
            <div className="rounded-2xl overflow-hidden border border-sand-200 shadow-sm">
              <iframe
                title="Office location — 838 2nd St, Santa Rosa, CA 95404"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3118.7!2d-122.7141!3d38.4404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808442a3e7d5c6f9%3A0x2c5f30b95c1e2a0!2s838%202nd%20St%2C%20Santa%20Rosa%2C%20CA%2095404!5e0!3m2!1sen!2sus!4v1"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
