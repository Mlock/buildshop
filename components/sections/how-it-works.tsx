'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { staggerContainer, fadeInUp } from '@/components/animations/variants'

const steps = [
  {
    number: '01',
    title: 'Learn',
    items: ['cursor', 'supabase', 'stripe_payments', 'ai']
  },
  {
    number: '02',
    title: 'Build',
    items: ['wireframe_ui', 'generate_code', 'debug_loops', 'mvp_ready']
  },
  {
    number: '03',
    title: 'Ship',
    items: ['deploy_vercel', 'launch_product', 'get_paid', 'repeat']
  }
]

export function HowItWorks() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className="py-20 px-6 md:px-12 relative">
      <div className="w-full h-px bg-neutral-900 my-20"></div>

      <motion.div
        ref={ref}
        initial="initial"
        animate={isInView ? "animate" : "initial"}
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 border-t border-neutral-800 pt-12"
      >
        {steps.map((step) => (
          <motion.div key={step.number} variants={fadeInUp} className="group">
            <div className="flex items-center gap-3 mb-6 text-neutral-500">
              <span className="text-xs font-mono border border-neutral-800 rounded px-1.5 py-0.5">{step.number}</span>
              <h3 className="text-sm uppercase tracking-widest font-medium text-white">{step.title}</h3>
            </div>
            <div className="space-y-4">
              {step.items.map((item, i) => (
                <div 
                  key={item} 
                  className="flex items-center gap-3 transition-transform duration-300 group-hover:translate-x-2"
                  style={{ transitionDelay: `${i * 50}ms` }}
                >
                  <span className="text-neutral-600">/</span>
                  <span className="text-2xl md:text-3xl font-medium tracking-tight text-neutral-300 group-hover:text-white transition-colors">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
