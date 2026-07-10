import type { CSSProperties } from 'react'
import Reveal from './Reveal'

const NAME = 'GEORGE'

const meta = [
  { label: 'Location', value: 'Remote, anywhere' },
  { label: 'Focus', value: 'Full-stack / mobile' },
  { label: 'GitHub', value: '@grgdlm', href: 'https://github.com/grgdlm' },
]

export default function Hero() {
  return (
    <section className="py-24 sm:py-36">
      <p className="mb-8 font-mono text-xs uppercase tracking-[0.2em] text-dim">
        Software Engineer
      </p>
      <h1 className="font-display text-[clamp(4rem,15vw,10rem)] font-extrabold leading-[0.92] tracking-tight">
        <span className="sr-only">George</span>
        <span aria-hidden="true">
          {NAME.split('').map((letter, i) => (
            <span
              key={i}
              className="letter"
              style={{ '--i': i } as CSSProperties}
            >
              {letter}
            </span>
          ))}
        </span>
        <span
          aria-hidden="true"
          className="caret ml-3 inline-block h-[0.09em] w-[0.45em] bg-acid"
        />
      </h1>
      <div className="mt-14 grid gap-10 sm:mt-20 sm:grid-cols-[1.6fr_1fr] sm:gap-16">
        <Reveal delay={150}>
          <p className="max-w-xl text-lg leading-relaxed text-ink/90 sm:text-xl">
            Full-stack engineer working across web, native mobile, and the
            cloud infrastructure underneath. I like the unglamorous parts
            (data models, pipelines, integrations) because that's where
            software actually breaks. On my own time, I design, build, and
            ship iOS apps solo.
          </p>
        </Reveal>
        <Reveal delay={300}>
          <dl className="flex flex-col gap-4 border-t border-line pt-6 font-mono text-xs sm:border-l sm:border-t-0 sm:pl-8 sm:pt-0">
            <div className="flex flex-col gap-1">
              <dt className="uppercase tracking-[0.2em] text-dim">Status</dt>
              <dd className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-acid opacity-60 motion-reduce:hidden" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-acid" />
                </span>
                Open to remote work
              </dd>
            </div>
            {meta.map((item) => (
              <div key={item.label} className="flex flex-col gap-1">
                <dt className="uppercase tracking-[0.2em] text-dim">{item.label}</dt>
                <dd>
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="underline decoration-line underline-offset-4 transition-colors hover:text-acid hover:decoration-acid"
                    >
                      {item.value}
                    </a>
                  ) : (
                    item.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  )
}
