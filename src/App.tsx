import { HashRouter, Routes, Route, useLocation } from 'react-router-dom'
import { lazy, Suspense, useEffect } from 'react'
import { Layout } from '@/components/layout/Layout'
import { HomePage } from '@/pages/HomePage'

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

// Lazy-load legal pages — only needed when directly navigated to
const PrivacyPolicy = lazy(() =>
  import('@/pages/PrivacyPolicy').then((m) => ({ default: m.PrivacyPolicy }))
)
const Accessibility = lazy(() =>
  import('@/pages/Accessibility').then((m) => ({ default: m.Accessibility }))
)
const Forms = lazy(() =>
  import('@/pages/Forms').then((m) => ({ default: m.Forms }))
)

function LoadingFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cream-50">
      <div className="text-center">
        <div className="w-12 h-12 border-4 border-ocean-200 border-t-ocean-700 rounded-full animate-spin mx-auto mb-4" />
        <p className="text-slate-500">Loading...</p>
      </div>
    </div>
  )
}

export function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Layout>
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/accessibility" element={<Accessibility />} />
            <Route path="/forms" element={<Forms />} />
            {/* Catch-all — redirect to home */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </Suspense>
      </Layout>
    </HashRouter>
  )
}
