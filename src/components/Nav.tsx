import { useEffect, useState } from 'react'

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

const links = [
  { href: '#work', label: 'Work' },
  { href: '#stack', label: 'Stack' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/85 backdrop-blur-sm">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4 sm:px-8">
        <a
          href="#top"
          className="font-mono text-xs font-medium uppercase tracking-[0.2em] transition-colors hover:text-acid"
        >
          grgdlm
        </a>
        <nav className="flex items-center gap-5 font-mono text-xs uppercase tracking-[0.2em] text-dim sm:gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-acid"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="hidden font-mono text-xs text-dim md:block">
          <Clock /> <span className="text-ink/40">local</span>
        </div>
      </div>
    </header>
  )
}
