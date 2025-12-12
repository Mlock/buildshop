'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus } from 'lucide-react'
import { cn } from '@/lib/utils'

const questions = [
  {
    question: "Do I need experience?",
    answer: "No. We start from zero. If you can think of an idea, we'll show you how to build it. The founders teach the exact steps they used to ship real products."
  },
  {
    question: "Can I join from anywhere?",
    answer: "No. We meet in Tokyo at the moment and our classes are in-person. We may offer online classes in the future, but for now, we're focused on in-person learning."
  },
  {
    question: "How long does it take?",
    answer: "Four weeks to ship something real. Our free landing page course takes two hours. The full program moves at your pace with structured milestones."
  },
  {
    question: "What tools do we use?",
    answer: "Cursor, modern AI tools, and whatever works for your idea. We focus on speed and results, and outcomes. So we may use tools that are not the most popular, but are the most effective for the task at hand."
  },
  {
    question: "What if I get stuck?",
    answer: "The founders are there. The community is there. You're never alone in this. Real feedback on real work, every step of the way."
  }
]

interface FAQItemProps {
  question: string
  answer: string
  isOpen: boolean
  onClick: () => void
}

function FAQItem({ question, answer, isOpen, onClick }: FAQItemProps) {
  return (
    <div className="border-b border-neutral-800 pb-6 mb-6 last:mb-0 last:border-0">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-start cursor-pointer group text-left"
      >
        <span className={cn(
          "text-lg md:text-xl font-medium transition-colors duration-200",
          isOpen ? "text-white" : "text-neutral-200 group-hover:text-white"
        )}>
          {question}
        </span>
        <span className={cn(
          "text-neutral-500 transition-transform duration-300 group-hover:text-white",
          isOpen && "rotate-45 text-white"
        )}>
          <Plus className="w-6 h-6" />
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0, marginTop: 0 }}
            animate={{ height: "auto", opacity: 1, marginTop: 16 }}
            exit={{ height: 0, opacity: 0, marginTop: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-neutral-400 leading-relaxed font-light max-w-2xl">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="md:px-12 bg-black border-neutral-900 border-t pt-24 pr-6 pb-24 pl-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12">
        {/* FAQ Header */}
        <div className="md:col-span-4">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tighter mb-6 text-white">
            got questions?
          </h2>
          <p className="text-neutral-500 text-sm font-light max-w-xs">
            Everything you need to know about joining buildshop and shipping your product.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="md:col-span-8">
          {questions.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
