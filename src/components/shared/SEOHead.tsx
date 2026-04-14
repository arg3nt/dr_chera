import { useEffect } from 'react'

interface SEOHeadProps {
  title: string
  description: string
}

/**
 * Lightweight SEO head manager — sets document title and meta description
 * without pulling in a heavy dependency like react-helmet.
 */
export function SEOHead({ title, description }: SEOHeadProps) {
  useEffect(() => {
    const suffix = 'Alin N. Chera, DDS | Santa Rosa, CA'
    document.title = title ? `${title} | ${suffix}` : suffix

    let meta = document.querySelector('meta[name="description"]')
    if (meta) {
      meta.setAttribute('content', description)
    } else {
      meta = document.createElement('meta')
      meta.setAttribute('name', 'description')
      meta.setAttribute('content', description)
      document.head.appendChild(meta)
    }
  }, [title, description])

  return null
}
