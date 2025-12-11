'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Quote } from 'lucide-react'
import { staggerContainer, fadeInUp } from '@/components/animations/variants'

const testimonials = [
  {
    quote: "I shipped my first SaaS in a single weekend. The AI workflow they teach is pure magic. It felt like cheating, but the revenue is real.",
    initials: "DK",
    name: "David K.",
    handle: "@david_codes"
  },
  {
    quote: "buildshop stripped away all the complexity. I stopped overthinking the stack and just built. The 'ship' mindset is contagious.",
    initials: "SY",
    name: "Sarah Y.",
    handle: "@sarah_builds"
  },
  {
    quote: "Went from Figma designs to a live URL in 48 hours. The energy in the room was electric. Best investment I made this year.",
    initials: "MJ",
    name: "Mike J.",
    handle: "@mike_ships"
  }
]

export function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className="py-12 px-6 md:px-12 relative">
      <div className="w-full h-px bg-neutral-900 my-20"></div>

      <h2 className="md:text-5xl text-4xl font-medium tracking-tighter text-center mb-16">ship happens here</h2>

      <motion.div
        ref={ref}
        initial="initial"
        animate={isInView ? "animate" : "initial"}
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {testimonials.map((t, i) => (
          <motion.div 
            key={i}
            variants={fadeInUp}
            className="p-8 border border-neutral-800 bg-neutral-900/20 hover:border-neutral-600 transition-colors duration-300 flex flex-col justify-between h-full group"
          >
            <div>
              <Quote className="w-6 h-6 text-neutral-600 mb-6 fill-neutral-600/20 group-hover:text-neutral-500 transition-colors" />
              <p className="text-lg text-neutral-300 font-light leading-relaxed mb-8">
                "{t.quote}"
              </p>
            </div>
            <div className="flex items-center gap-4 pt-6 border-t border-neutral-800/50">
              <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-xs font-mono border border-neutral-700">
                {t.initials}
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium text-white">{t.name}</span>
                <span className="text-xs text-neutral-500 font-mono">{t.handle}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
