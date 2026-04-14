import { SEOHead } from '@/components/shared/SEOHead'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { Link } from 'react-router-dom'

export function Accessibility() {
  return (
    <>
      <SEOHead
        title="Accessibility Statement"
        description="Accessibility commitment statement for the website of Alin N. Chera, DDS."
      />

      <div className="pt-28 pb-20 bg-cream-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <SectionHeading
            title="Accessibility Statement"
            as="h1"
          />

          <div className="prose prose-slate max-w-none space-y-6 text-slate-700 leading-relaxed">
            <h2 className="text-2xl font-heading font-semibold text-slate-900 mt-10 mb-4">
              Our Commitment
            </h2>
            <p>
              Alin N. Chera, DDS is committed to ensuring digital accessibility
              for all visitors, including individuals with disabilities. We
              strive to conform to the{' '}
              <strong>
                Web Content Accessibility Guidelines (WCAG) 2.2 Level AA
              </strong>{' '}
              standards to ensure our website is perceivable, operable,
              understandable, and robust for all users.
            </p>

            <h2 className="text-2xl font-heading font-semibold text-slate-900 mt-10 mb-4">
              Accessibility Features
            </h2>
            <p>Our website includes the following accessibility features:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Semantic HTML structure with proper heading hierarchy</li>
              <li>Alternative text for all meaningful images</li>
              <li>Keyboard-navigable interface with visible focus indicators</li>
              <li>Skip-to-content navigation link</li>
              <li>Sufficient color contrast ratios (minimum 4.5:1 for text)</li>
              <li>Labeled form inputs with clear instructions</li>
              <li>Responsive design that works across devices and screen sizes</li>
              <li>ARIA landmarks and labels where appropriate</li>
            </ul>

            <h2 className="text-2xl font-heading font-semibold text-slate-900 mt-10 mb-4">
              Feedback & Assistance
            </h2>
            <p>
              If you encounter any accessibility barriers on our website, or if
              you have suggestions for improvement, we would like to hear from
              you. Please contact us:
            </p>
            <ul className="list-none space-y-1">
              <li><strong>Phone:</strong>{' '}
                <a href="tel:+17075422676" className="text-ocean-700 hover:underline">(707) 542-2676</a>
              </li>
              <li><strong>Address:</strong> 838 2nd St, Santa Rosa, CA 95404</li>
            </ul>
            <p>
              We aim to respond to accessibility feedback within 5 business days
              and to resolve identified issues as quickly as possible.
            </p>

            <h2 className="text-2xl font-heading font-semibold text-slate-900 mt-10 mb-4">
              Ongoing Efforts
            </h2>
            <p>
              We are continuously working to improve the accessibility of our
              website. We regularly review our site against WCAG 2.2 AA criteria
              and make updates as needed to maintain and improve accessibility.
            </p>
          </div>

          <div className="mt-12">
            <Link
              to="/"
              className="text-ocean-700 font-medium hover:underline"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
