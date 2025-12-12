'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Github, Globe, Instagram, Twitter } from 'lucide-react'
import { fadeInUp, staggerContainer } from '@/components/animations/variants'

interface Social {
  type: 'twitter' | 'github' | 'instagram' | 'globe'
  href: string
}

interface Member {
  name: string
  role: string
  handle: string
  description: string
  image: string
  socials: Social[]
}

const TEAM: Member[] = [
  {
    name: 'Sota',
    role: 'founding member',
    handle: 'full_stack_architect',
    description: 'Ex-Mercari engineer obsessed with shipping. I break down complex distributed systems into copy-pasteable blocks for your MVP.',
    image: '/sota.png',
    socials: [
      { type: 'twitter', href: '#' },
      { type: 'github', href: '#' },
    ]
  },
  {
    name: 'Matt',
    role: 'founding member',
    handle: 'product_engineer',
    description: 'Early-lyft team member and launched startups around the world. I teach you how to make your hastily written code look like a Series A startup from day one.',
    image: '/matt.png',
    socials: [
      { type: 'instagram', href: '#' },
      { type: 'globe', href: '#' },
    ]
  }
]

const SocialIcon = ({ type }: { type: Social['type'] }) => {
  switch (type) {
    case 'twitter':
      return <Twitter className="w-5 h-5" />
    case 'github':
      return <Github className="w-5 h-5" />
    case 'instagram':
      return <Instagram className="w-5 h-5" />
    case 'globe':
      return <Globe className="w-5 h-5" />
  }
}

export function Team() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="team" ref={ref} className="md:px-12 overflow-hidden border-neutral-900 border-t pt-24 pr-6 pb-24 pl-6 relative">
      <motion.div 
        initial="initial"
        animate={isInView ? "animate" : "initial"}
        variants={staggerContainer}
        className="max-w-7xl mx-auto"
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 border-b border-neutral-900 pb-8">
          <motion.div variants={fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tighter text-white mb-2">meet the crew</h2>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest">Online / Tokyo</span>
            </div>
          </motion.div>
          <motion.p variants={fadeInUp} className="text-neutral-400 font-light max-w-md text-sm md:text-base leading-relaxed text-right md:text-left">
            The engineers and designers behind the curriculum. We ship products for a living and teach the next generation
            on weekends.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {TEAM.map((member, index) => (
            <motion.div key={member.name} variants={fadeInUp} className="group flex flex-col">
              <div
                className="relative w-full aspect-[4/3] md:aspect-[16/10] overflow-hidden bg-neutral-900 border border-neutral-800 mb-6">
                <div
                  className="absolute inset-0 bg-neutral-900 z-10 transition-opacity duration-500 group-hover:opacity-0 pointer-events-none mix-blend-color"
                ></div>
                <Image 
                  src={member.image} 
                  alt={member.role}
                  fill
                  className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                />

                {/* Floating Badge */}
                <div className="absolute bottom-4 left-4 z-20">
                  <span className="bg-black/50 backdrop-blur-md border border-white/10 text-white text-[10px] uppercase tracking-widest px-3 py-1 font-medium">{member.role}</span>
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <div className="flex justify-between items-start">
                  <h3 className="text-2xl font-medium text-white tracking-tight group-hover:text-neutral-200 transition-colors">
                    {member.name}
                  </h3>
                  <div className="flex gap-3">
                    {member.socials.map((social) => (
                      <Link 
                        key={social.type} 
                        href={social.href} 
                        className="text-neutral-600 hover:text-white transition-colors"
                      >
                        <SocialIcon type={social.type} />
                      </Link>
                    ))}
                  </div>
                </div>
                <p className="text-sm font-mono text-neutral-500 mb-4">{member.handle}</p>
                <p className="text-neutral-400 font-light leading-relaxed border-l border-neutral-800 pl-4">
                  {member.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
