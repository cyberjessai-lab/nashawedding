'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { X, Send, CheckCircle2, Heart } from 'lucide-react'

const TYPES = [
  { value: 'feedback', label: 'Feedback', icon: '\u{1F4AC}' },
  { value: 'praise', label: 'Love it', icon: '\u{1F49B}' },
  { value: 'feature_request', label: 'Suggestion', icon: '\u2728' },
  { value: 'bug_report', label: 'Something broken', icon: '\u{1F527}' },
  { value: 'wishlist', label: 'Wish', icon: '\u{1F31F}' },
]

export default function FeedbackWidget() {
  const [open, setOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [type, setType] = useState('feedback')
  const [message, setMessage] = useState('')
  const [name, setName] = useState('')
  const pathname = usePathname()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!message.trim()) return
    setSending(true)

    try {
      await fetch('/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          user_name: name.trim() || null,
          type,
          message: message.trim(),
          page_path: pathname,
        }),
      })

      setSubmitted(true)
      setTimeout(() => {
        setOpen(false)
        setSubmitted(false)
        setMessage('')
        setName('')
        setType('feedback')
      }, 2500)
    } catch (err) {
      console.warn('Feedback submission failed:', err)
    } finally {
      setSending(false)
    }
  }

  return (
    <>
      {!open && (
        <button
          onClick={() => setOpen(true)}
          aria-label="Share your thoughts"
          className="fixed bottom-6 left-6 z-[998] w-12 h-12 rounded-full bg-soft-gold text-white border-none shadow-lg cursor-pointer flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl hover:bg-caramel"
        >
          <Heart size={20} fill="currentColor" />
        </button>
      )}

      {open && (
        <div className="fixed bottom-6 left-6 z-[999] w-80 max-w-[calc(100vw-3rem)] bg-warm-white rounded-2xl shadow-2xl overflow-hidden border border-beige/60 animate-feedback-slide-up">
          {/* Header */}
          <div className="bg-gradient-to-r from-soft-gold to-caramel px-5 py-4 flex justify-between items-center">
            <span className="text-white font-display text-lg tracking-wide">
              Share Your Thoughts
            </span>
            <button
              onClick={() => setOpen(false)}
              className="bg-transparent border-none text-white/80 cursor-pointer p-1 rounded-full hover:text-white hover:bg-white/20 transition-all"
              aria-label="Close feedback"
            >
              <X size={18} />
            </button>
          </div>

          {submitted ? (
            <div className="py-10 px-8 text-center">
              <CheckCircle2 size={48} className="text-soft-gold mx-auto mb-3" />
              <p className="font-display text-xl text-chocolate mb-1">Thank you!</p>
              <p className="text-sm text-caramel font-body">Your thoughts mean the world to us.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-4 flex flex-col gap-3">
              {/* Type Selector */}
              <div className="flex flex-wrap gap-1.5">
                {TYPES.map((t) => (
                  <button
                    key={t.value}
                    type="button"
                    onClick={() => setType(t.value)}
                    className={
                      type === t.value
                        ? 'px-3 py-1.5 rounded-full text-xs cursor-pointer font-body transition-all duration-200 bg-soft-gold/15 border-2 border-soft-gold text-chocolate font-semibold'
                        : 'px-3 py-1.5 rounded-full text-xs cursor-pointer font-body transition-all duration-200 bg-white border border-beige text-mocha hover:border-caramel'
                    }
                  >
                    {t.icon} {t.label}
                  </button>
                ))}
              </div>

              {/* Message */}
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell us what you think about the website..."
                required
                maxLength={1000}
                rows={3}
                className="w-full p-3 rounded-xl border border-beige bg-white text-sm text-chocolate font-body resize-vertical placeholder:text-caramel/60 focus:outline-none focus:border-soft-gold focus:ring-1 focus:ring-soft-gold/30 transition-all"
              />
              <div className="text-[11px] text-caramel/60 text-right -mt-1.5">
                {message.length}/1000
              </div>

              {/* Name (optional) */}
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name (optional)"
                className="w-full p-2.5 rounded-xl border border-beige bg-white text-sm text-chocolate font-body placeholder:text-caramel/60 focus:outline-none focus:border-soft-gold focus:ring-1 focus:ring-soft-gold/30 transition-all"
              />

              {/* Submit */}
              <button
                type="submit"
                disabled={!message.trim() || sending}
                className={
                  message.trim()
                    ? 'py-2.5 px-4 rounded-full text-white border-none font-semibold text-sm font-body flex items-center justify-center gap-2 transition-all duration-300 bg-soft-gold hover:bg-caramel cursor-pointer hover:shadow-md'
                    : 'py-2.5 px-4 rounded-full text-white border-none font-semibold text-sm font-body flex items-center justify-center gap-2 transition-all duration-300 bg-beige cursor-not-allowed'
                }
              >
                {sending ? 'Sending...' : (
                  <>
                    <Send size={15} /> Send
                  </>
                )}
              </button>

              <p className="text-[11px] text-caramel/50 text-center m-0 font-body">
                Only seen by Nasha &amp; Celson
              </p>
            </form>
          )}
        </div>
      )}
    </>
  )
}
