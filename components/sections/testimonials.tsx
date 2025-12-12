'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Quote } from 'lucide-react'
import { staggerContainer, fadeInUp } from '@/components/animations/variants'

const testimonials: { quote: string; initials: string; name: string; handle?: string }[] = [
  {
    quote: "buildshop stripped away all the complexity. I’ve never coded a day in my life. And never thought I could do it as my day job is wayyy outside of tech. But in two-ish hours, I learned more about coding and website building than I had in the past 39 years.",
    initials: "JB",
    name: "Joe B.",
    // handle: "@joe_builds"
  },
  {
    quote: "I’m not an engineer but I built 5 websites + apps after my first session with the buildshop team. One app in particular got 1000 signups on the day it launched, and had people actively using it. It’s really incredible that I’ve been able to build real working products for real problems, just from one session. Today it’s second nature for me to build simple tools — and I’ve gone familiar with code in the process!",
    initials: "SI",
    name: "Saya I.",
    // handle: "@iiwoks"
  },
  {
    quote: "I've been working in the public sector for most of my career, and a couple hours with Matt, I felt like I had the confidence to start coding my own projects. Shortly after, I published my first app on the App Store! I would have never thought I could do this before buildshop.",
    initials: "JB",
    name: "Jesse B.",
    // handle: "@j"
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
              <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-xs font-mono border border-neutral-700 shrink-0">
                {t.initials}
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium text-white whitespace-nowrap">{t.name}</span>
                {t.handle && <span className="text-xs text-neutral-500 font-mono">{t.handle}</span>}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
