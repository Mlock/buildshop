'use client'

import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { fadeInUp } from '@/components/animations/variants'

export function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <footer className="relative w-full bg-[#F5F2EB] text-black pt-16 pb-0 px-6 md:px-12 overflow-hidden border-t border-neutral-900">
      <motion.div
        ref={ref}
        initial="initial"
        animate={isInView ? "animate" : "initial"}
        variants={fadeInUp}
      >
        {/* Top Info Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 mb-16 md:mb-24 text-xs md:text-sm font-semibold uppercase tracking-tight">
          {/* Left */}
          <div className="flex flex-col space-y-0.5">
            <a href="mailto:hello@buildshop.com" className="hover:text-neutral-600 transition-colors">buildshopjp@gmail.com</a>
            <p>Shibuya City, Tokyo</p>
            <p>150-0002, Japan</p>
          </div>
          
          {/* Center */}
          <div className="flex flex-col md:items-center">
            <a href="#" className="hover:text-neutral-600 transition-colors">Instagram</a>
          </div>

          {/* Right */}
          <div className="flex flex-col md:items-end text-left md:text-right space-y-0.5">
            <p>Website by buildshop</p>
            <p>©2025 — All Rights Reserved</p>
          </div>
        </div>

        {/* Big Typography Section */}
        <div className="relative w-full flex flex-col items-center leading-none select-none pb-4 md:pb-8">
          {/* Stacked Text to fit width and match style */}
          <div className="w-full text-center">
            <h1 className="font-anton text-[25vw] leading-[0.8] tracking-[-0.03em] uppercase transform scale-y-[1.4] origin-bottom block w-full">
              BUILD
            </h1>
          </div>
          <div className="w-full text-center -mt-[3vw] md:-mt-[2vw]">
            <h1 className="font-anton text-[25vw] leading-[0.8] tracking-[-0.03em] uppercase transform scale-y-[1.4] origin-top block w-full">
              SHOP
            </h1>
          </div>
          
          {/* Overlay Handwriting */}
          <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
            <p className="font-marker text-[#FACC15] text-5xl md:text-7xl lg:text-9xl rotate-[-6deg] text-center drop-shadow-sm opacity-90 mix-blend-multiply leading-tight">
              never stop <br /> shipping
            </p>
          </div>
        </div>
      </motion.div>
    </footer>
  )
}
