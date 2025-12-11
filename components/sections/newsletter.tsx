'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { fadeInUp } from '@/components/animations/variants'
import { cn } from '@/lib/utils'

export function Newsletter() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setStatus('loading')
    setMessage('')

    try {
      // Create a form data object to send
      // We use FormData instead of JSON because Google Apps Script handles it naturally
      // without needing complex CORS preflight options for application/json
      const formData = new FormData()
      formData.append('email', email)
      formData.append('created_at', new Date().toISOString())

      // Replace this URL with your Google Apps Script Web App URL
      const GOOGLE_SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_SCRIPT_URL || ''
      
      if (!GOOGLE_SCRIPT_URL) {
        throw new Error('Google Script URL not configured')
      }

      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        body: formData,
        mode: 'no-cors', // Important for Google Apps Script to avoid CORS errors
      })

      // Since mode is no-cors, we can't read the response status directly
      // We assume success if the request completed without throwing
      setStatus('success')
      setEmail('')
      setMessage('Thanks for subscribing! We\'ll keep you posted.')
    } catch (error) {
      console.error('Newsletter submission error:', error)
      setStatus('error')
      setMessage('Something went wrong. Please try again later.')
    }
  }

  return (
    <section className="py-24 border-t border-neutral-900 relative px-6 md:px-12 overflow-hidden">
      <motion.div 
        ref={ref}
        initial="initial"
        animate={isInView ? "animate" : "initial"}
        variants={fadeInUp}
        className="max-w-2xl mx-auto text-center relative z-10 px-6"
      >
        <h2 className="text-4xl md:text-5xl font-medium tracking-tighter mb-4 text-white">not in tokyo?</h2>
        <p className="text-neutral-400 text-lg md:text-xl font-light mb-10">
          join our newsletter and we'll send you the build guides
        </p>
        
        <form className="flex flex-col md:flex-row gap-3 w-full max-w-md mx-auto" onSubmit={handleSubmit}>
          <div className="w-full relative">
            <input 
              type="email" 
              placeholder="email@address.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={status === 'loading' || status === 'success'}
              className={cn(
                "bg-neutral-900/50 border border-neutral-800 text-white px-4 py-3 w-full focus:outline-none focus:border-white transition-colors placeholder:text-neutral-600 text-sm font-light",
                status === 'error' && "border-red-500/50 focus:border-red-500"
              )}
              required
            />
          </div>
          <button 
            type="submit" 
            disabled={status === 'loading' || status === 'success'}
            className={cn(
              "bg-white text-black font-medium px-6 py-3 border border-white hover:bg-neutral-200 transition-colors uppercase tracking-wide text-xs whitespace-nowrap cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",
              status === 'success' && "bg-green-500 border-green-500 text-white hover:bg-green-600"
            )}
          >
            {status === 'loading' ? 'Subscribing...' : status === 'success' ? 'Subscribed' : 'Subscribe'}
          </button>
        </form>

        {message && (
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={cn(
              "mt-4 text-sm font-light",
              status === 'success' ? "text-green-400" : "text-red-400"
            )}
          >
            {message}
          </motion.p>
        )}
      </motion.div>

      {/* Subtle background gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-lg max-h-lg bg-white/5 blur-[100px] rounded-full pointer-events-none -z-0 opacity-50"></div>
    </section>
  )
}
