'use client'

import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { fadeInUp, staggerContainer } from '@/components/animations/variants'

export function Hero() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center items-center text-center relative px-6 md:px-12 pt-32">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 opacity-30 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neutral-900 rounded-full blur-[128px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neutral-800 rounded-full blur-[128px]"></div>
      </div>

      <motion.div
        initial="initial"
        animate="animate"
        variants={staggerContainer}
        className="flex flex-col items-center"
      >
        <motion.p variants={fadeInUp} className="text-neutral-500 mb-8 text-sm uppercase tracking-[0.2em]">
          Est. 2025 — Tokyo, Japan
        </motion.p>
        
        <motion.h1 variants={fadeInUp} className="text-6xl md:text-8xl lg:text-9xl font-medium tracking-tighter leading-[0.9] max-w-6xl mx-auto text-glow">
          build something <br className="hidden md:block" />
          <span className="text-neutral-400">real</span> this weekend
        </motion.h1>

        <motion.div variants={fadeInUp} className="mt-16 animate-bounce text-neutral-600">
          <ArrowDown className="w-8 h-8" />
        </motion.div>
      </motion.div>
    </section>
  )
}
