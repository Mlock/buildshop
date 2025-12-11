'use client'

import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { fadeIn } from '@/components/animations/variants'

export function Header() {
  return (
    <motion.nav 
      initial="initial"
      animate="animate"
      variants={fadeIn}
      className="fixed top-0 w-full z-50 mix-blend-difference px-6 py-6 md:px-12 md:py-8 flex justify-between items-center bg-black/50 backdrop-blur-md border-b border-white/5"
    >
      <Link href="/" className="flex items-center gap-2">
        {/* <div className="w-5 h-5 bg-white rounded-sm"></div> */}
        <span className="text-xl font-medium tracking-tight">buildshop</span>
      </Link>

      <div className="hidden md:flex gap-8 text-sm font-normal text-neutral-400">
        {[
          { label: 'Manifesto', href: '#about' },
          { label: 'Curriculum', href: '#classes' },
          { label: 'Team', href: '#team' },
          { label: 'FAQ', href: '#faq' }
        ].map((item) => (
          <Link 
            key={item.label} 
            href={item.href}
            className="hover:text-white transition-colors duration-300"
          >
            {item.label}
          </Link>
        ))}
      </div>

      <a 
        href="https://luma.com/y7yoxoo9"
        target="_blank"
        rel="noopener noreferrer" 
        className="group flex items-center gap-2 border border-neutral-700 px-5 py-2 hover:bg-white hover:text-black transition-all duration-300 text-xs font-medium tracking-wide uppercase cursor-pointer"
      >
        <span>JOIN CLASS</span>
        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </a>
    </motion.nav>
  )
}
