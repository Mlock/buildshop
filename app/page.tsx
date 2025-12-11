'use client'

import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Hero } from '@/components/sections/hero'
import { About } from '@/components/sections/about'
import { HowItWorks } from '@/components/sections/how-it-works'
import { Classes } from '@/components/sections/classes'
import { Testimonials } from '@/components/sections/testimonials'
import { Newsletter } from '@/components/sections/newsletter'
import { Team } from '@/components/sections/team'
import { FAQ } from '@/components/sections/faq'

export default function Home() {
  return (
    <>
      <Header />
      <main className="relative w-full overflow-hidden">
        <Hero />
        <About />
        <HowItWorks />
        <Classes />
        {/* <Testimonials /> */}
        <Newsletter />
        <Team />
        <FAQ />
        
        <Footer />
      </main>
    </>
  )
}
