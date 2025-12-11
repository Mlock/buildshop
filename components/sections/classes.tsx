'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import { fadeInUp } from '@/components/animations/variants'

export function Classes() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section id="classes" className="py-12 px-6 md:px-12 relative">
      <div className="w-full h-px bg-neutral-900 my-20"></div>

      <motion.div
        ref={ref}
        initial="initial"
        animate={isInView ? "animate" : "initial"}
        variants={fadeInUp}
      >
        <h2 className="text-4xl md:text-5xl font-medium tracking-tighter mb-12 text-center md:text-left">
          upcoming_classes
        </h2>

        <div className="group relative w-full border border-neutral-800 hover:border-neutral-700 bg-neutral-900/20 transition-all duration-300">
          <div className="grid md:grid-cols-12 gap-0 md:gap-8 items-stretch">
            
            {/* Image Space */}
            <div className="md:col-span-5 w-full h-64 md:h-auto bg-neutral-900 relative overflow-hidden flex items-center justify-center border-b md:border-b-0 md:border-r border-neutral-800">
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-700 to-black"></div>
              {/* Abstract placeholder graphic */}
              <div className="w-24 h-24 border border-neutral-800 rounded-full flex items-center justify-center opacity-50 group-hover:scale-110 transition-transform duration-500">
                <div className="w-16 h-16 border border-neutral-700 rounded-full"></div>
              </div>
            </div>

            {/* Content */}
            <div className="md:col-span-7 p-8 md:p-12 flex flex-col justify-center items-start">
              <div className="flex items-center gap-3 mb-6">
                <span className="font-mono text-xs text-neutral-500 border border-neutral-800 px-2 py-0.5 rounded-sm">ex.01</span>
                <div className="h-px w-8 bg-neutral-800"></div>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4 group-hover:text-neutral-200 transition-colors">
                soft_landing
              </h3>
              
              <p className="text-lg text-neutral-400 font-light mb-8 max-w-md leading-relaxed">
                learn how to build a landing page with ai in less than 2 hours.
              </p>

              <a 
                href="https://luma.com/y7yoxoo9"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm uppercase tracking-widest font-medium border border-white/20 px-8 py-4 hover:bg-white hover:text-black transition-all duration-300 cursor-pointer"
              >
                <span>Sign Up</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
