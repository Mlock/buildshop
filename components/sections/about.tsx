'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { fadeInUp } from '@/components/animations/variants'

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section id="about" className="relative">
      <div className="w-full h-px bg-neutral-900 my-20 px-6 md:px-12"></div>
      
      <motion.div 
        ref={ref}
        initial="initial"
        animate={isInView ? "animate" : "initial"}
        variants={fadeInUp}
        className="max-w-4xl mx-auto text-center py-20 md:py-32 px-6 md:px-12"
      >
        <h2 className="md:text-6xl text-4xl font-medium tracking-tighter mb-8">what is this bs?</h2>
        <p className="text-xl md:text-2xl leading-relaxed text-neutral-400 font-light max-w-2xl mx-auto">
          <span className="text-white">buildshop</span> is a workshop in Tokyo for weekend warriors. We teach you how to build websites and apps with AI, taking you from zero to deployed in 48 hours.
        </p>
      </motion.div>
    </section>
  )
}
