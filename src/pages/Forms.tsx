import { SEOHead } from '@/components/shared/SEOHead'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { Link } from 'react-router-dom'
import { FileText, Download } from 'lucide-react'

const forms = [
  {
    name: 'New Patient Form',
    file: '/forms/new_patient.pdf',
    desc: 'Required for all new patients. Please complete and bring to your first appointment.',
  },
  {
    name: 'Record Release Authorization',
    file: '/forms/record_release_authorization.pdf',
    desc: 'Authorize the transfer of your dental records to or from another provider.',
  },
  {
    name: 'Extraction / Surgery Consent',
    file: '/forms/extraction_surgery_consent.pdf',
    desc: 'Informed consent form for tooth extraction or oral surgery procedures.',
  },
  {
    name: 'Root Canal Consent',
    file: '/forms/root_canal_consent.pdf',
    desc: 'Informed consent form for root canal (endodontic) treatment.',
  },
]

export function Forms() {
  return (
    <>
      <SEOHead
        title="Patient Forms"
        description="Download patient forms for Alin N. Chera, DDS including new patient intake, record release, and consent forms."
      />

      <div className="pt-28 pb-20 bg-cream-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <SectionHeading
            title="Patient Forms"
            subtitle="Download, print, and complete these forms ahead of your visit to save time at the office."
            as="h1"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {forms.map((form) => (
              <a
                key={form.file}
                href={form.file}
                download
                className="group flex flex-col p-6 rounded-2xl bg-white border border-ocean-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-3">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-ocean-100 to-ocean-200 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <FileText className="w-5 h-5 text-ocean-700" />
                  </div>
                  <div className="min-w-0">
                    <h2 className="font-heading text-lg font-semibold text-slate-900 leading-snug">
                      {form.name}
                    </h2>
                  </div>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {form.desc}
                </p>
                <div className="mt-auto flex items-center gap-1.5 text-ocean-700 font-medium text-sm group-hover:gap-2.5 transition-all duration-300">
                  <Download className="w-4 h-4" />
                  Download PDF
                </div>
              </a>
            ))}
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
