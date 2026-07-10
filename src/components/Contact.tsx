import { useEffect, useRef, useState } from 'react'
import Section from './Section'

const EMAIL = 'georgemanibo@gmail.com'

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const resetTimer = useRef<ReturnType<typeof setTimeout>>(undefined)

  useEffect(() => () => clearTimeout(resetTimer.current), [])

  const copyEmail = async () => {
    await navigator.clipboard.writeText(EMAIL)
    setCopied(true)
    clearTimeout(resetTimer.current)
    resetTimer.current = setTimeout(() => setCopied(false), 1600)
  }

  return (
    <Section id="contact" index="03" title="Contact">
      <p className="max-w-md leading-relaxed text-dim">
        Have something to build, fix, or ship? No contact form — email works.
      </p>
      <a
        href={`mailto:${EMAIL}`}
        className="mt-8 inline-block break-all font-display text-[clamp(1.5rem,4.5vw,3.75rem)] font-bold tracking-tight underline decoration-line decoration-2 underline-offset-8 transition-colors hover:text-acid hover:decoration-acid"
      >
        {EMAIL}
      </a>
      <div className="mt-10 flex flex-wrap items-center gap-4">
        <button
          type="button"
          onClick={copyEmail}
          className="border border-line px-4 py-2 font-mono text-xs uppercase tracking-[0.2em] text-dim transition-colors hover:border-acid hover:text-acid"
        >
          {copied ? 'Copied ✓' : 'Copy email'}
        </button>
        <a
          href="https://github.com/grgdlm"
          target="_blank"
          rel="noreferrer"
          className="border border-line px-4 py-2 font-mono text-xs uppercase tracking-[0.2em] text-dim transition-colors hover:border-acid hover:text-acid"
        >
          GitHub ↗
        </a>
      </div>
    </Section>
  )
}
