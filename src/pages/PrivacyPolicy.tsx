import { SectionHeading } from '@/components/shared/SectionHeading'
import { SEOHead } from '@/components/shared/SEOHead'
import { Link } from 'react-router-dom'

export function PrivacyPolicy() {
  return (
    <>
      <SEOHead
        title="Privacy Policy"
        description="Privacy policy for the website of Alin N. Chera, DDS describing data collection and California consumer rights."
      />

      <div className="pt-28 pb-20 bg-cream-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <SectionHeading
            title="Privacy Policy"
            subtitle="Last updated: April 2026"
          />
          <div className="prose prose-slate max-w-none space-y-6 text-slate-700 leading-relaxed">
            <h2 className="text-2xl font-heading font-semibold text-slate-900 mt-10 mb-4">
              Introduction
            </h2>
            <p>
              This Privacy Policy describes how Alin N. Chera, DDS ("we," "our,"
              or "us") collects, uses, and protects information gathered through
              our website at sonomacountysmiles.com (the "Site"). This Site is an
              informational website and does not collect Protected Health
              Information (PHI) as defined under HIPAA.
            </p>

            <h2 className="text-2xl font-heading font-semibold text-slate-900 mt-10 mb-4">
              Information We Collect
            </h2>
            <p>
              When you use our contact form, we may collect the following
              non-medical personal information:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Your name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>The content of your message</li>
            </ul>
            <p>
              <strong>We do not collect health or medical information through
                this website.</strong> Please do not include sensitive medical
              details in the contact form.
            </p>

            <h2 className="text-2xl font-heading font-semibold text-slate-900 mt-10 mb-4">
              How We Use Your Information
            </h2>
            <p>
              We use the information you provide solely to respond to your
              inquiry, schedule appointments, and communicate with you about our
              dental services.
            </p>

            <h2 className="text-2xl font-heading font-semibold text-slate-900 mt-10 mb-4">
              Cookies and Analytics
            </h2>
            <p>
              This website does not currently use cookies or third-party
              analytics services. If we add analytics in the future, this policy
              will be updated accordingly and a cookie consent mechanism will be
              provided.
            </p>

            <h2 className="text-2xl font-heading font-semibold text-slate-900 mt-10 mb-4">
              Third-Party Services
            </h2>
            <p>
              This Site may embed content from third parties, such as Google Maps,
              which are governed by their own privacy policies. We encourage you
              to review those policies.
            </p>

            <h2 className="text-2xl font-heading font-semibold text-slate-900 mt-10 mb-4">
              Your California Privacy Rights (CCPA/CPRA)
            </h2>
            <p>
              If you are a California resident, you have the right to:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Know what personal information we collect and how we use it</li>
              <li>Request deletion of your personal information</li>
              <li>Opt out of the sale or sharing of your personal information (we do not sell or share personal information)</li>
              <li>Non-discrimination for exercising your privacy rights</li>
            </ul>
            <p>
              To exercise these rights, please contact us at{' '}
              <a href="tel:+17075422676" className="text-ocean-700 hover:underline">(707) 542-2676</a>{' '}
              or visit our office at 838 2nd St, Santa Rosa, CA 95404.
            </p>

            <h2 className="text-2xl font-heading font-semibold text-slate-900 mt-10 mb-4">
              Data Security
            </h2>
            <p>
              We take reasonable measures to protect the information you provide
              through this website. However, no internet transmission is
              completely secure, and we cannot guarantee the security of data
              transmitted electronically.
            </p>

            <h2 className="text-2xl font-heading font-semibold text-slate-900 mt-10 mb-4">
              Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes
              will be posted on this page with an updated revision date.
            </p>

            <h2 className="text-2xl font-heading font-semibold text-slate-900 mt-10 mb-4">
              Contact Us
            </h2>
            <p>
              If you have questions about this Privacy Policy, please contact us:
            </p>
            <ul className="list-none space-y-1">
              <li><strong>Alin N. Chera, DDS</strong></li>
              <li>838 2nd St, Santa Rosa, CA 95404</li>
              <li>Phone: <a href="tel:+17075422676" className="text-ocean-700 hover:underline">(707) 542-2676</a></li>
            </ul>
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
