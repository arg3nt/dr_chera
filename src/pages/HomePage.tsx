import { SEOHead } from '@/components/shared/SEOHead'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Services } from '@/components/sections/Services'
import { WhyChooseUs } from '@/components/sections/WhyChooseUs'
import { Contact } from '@/components/sections/Contact'
import { WaveDivider } from '@/components/shared/WaveDivider'

export function HomePage() {
  return (
    <>
      <SEOHead
        title=""
        description="Dr. Alin N. Chera, DDS provides gentle, personalized dental care in Santa Rosa, CA. UCLA-trained dentist offering general, cosmetic, implant, emergency, and sedation dentistry."
      />
      <Hero />
      <About />
      <WaveDivider
        topColor="var(--color-sand-100)"
        bottomColor="var(--color-ocean-50)"
      />
      <Services />
      <WaveDivider
        topColor="var(--color-ocean-50)"
        bottomColor="var(--color-cream-50)"
      />
      <WhyChooseUs />
      <WaveDivider
        topColor="var(--color-cream-50)"
        bottomColor="var(--color-white, #ffffff)"
      />
      <Contact />
    </>
  )
}
