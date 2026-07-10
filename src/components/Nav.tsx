import { useEffect, useRef, useState } from 'react'

const SCRAMBLE_CHARS = '!<>-_/[]{}=+*^?#'

type ScrambleLinkProps = {
  href: string
  label: string
  className?: string
}

function ScrambleLink({ href, label, className }: ScrambleLinkProps) {
  const [display, setDisplay] = useState(label)
  const timer = useRef<ReturnType<typeof setInterval>>(undefined)

  useEffect(() => () => clearInterval(timer.current), [])

  const scramble = () => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let step = 0
    clearInterval(timer.current)
    timer.current = setInterval(() => {
      step++
      setDisplay(
        label
          .split('')
          .map((char, i) =>
            i < step
              ? char
              : SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)],
          )
          .join(''),
      )
      if (step >= label.length) {
        clearInterval(timer.current)
        setDisplay(label)
      }
    }, 30)
  }

  return (
    <a href={href} onMouseEnter={scramble} onFocus={scramble} className={className}>
      {display}
    </a>
  )
}

function Clock() {
  const [now, setNow] = useState(() => new Date())

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <span className="tabular-nums">
      {now.toLocaleTimeString('en-GB', { hour12: false })}
    </span>
  )
}

function ProgressBar() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let raf = 0
    const update = () => {
      const doc = document.documentElement
      const max = doc.scrollHeight - doc.clientHeight
      el.style.transform = `scaleX(${max > 0 ? doc.scrollTop / max : 0})`
    }
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-acid"
    />
  )
}

const links = [
  { href: '#work', label: 'Work' },
  { href: '#stack', label: 'Stack' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/85 backdrop-blur-sm">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4 sm:px-8">
        <ScrambleLink
          href="#top"
          label="grgdlm"
          className="font-mono text-xs font-medium uppercase tracking-[0.2em] transition-colors hover:text-acid"
        />
        <nav className="flex items-center gap-5 font-mono text-xs uppercase tracking-[0.2em] text-dim sm:gap-8">
          {links.map((link) => (
            <ScrambleLink
              key={link.href}
              href={link.href}
              label={link.label}
              className="transition-colors hover:text-acid"
            />
          ))}
        </nav>
        <div className="hidden font-mono text-xs text-dim md:block">
          <Clock /> <span className="text-ink/40">local</span>
        </div>
      </div>
      <ProgressBar />
    </header>
  )
}
