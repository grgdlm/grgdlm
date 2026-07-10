import type { ReactNode } from 'react'

type SectionProps = {
  id: string
  index: string
  title: string
  children: ReactNode
}

export default function Section({ id, index, title, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-20 border-t border-line py-20 sm:py-28">
      <div className="mb-12 flex items-baseline gap-3 font-mono text-xs uppercase tracking-[0.2em]">
        <span className="text-acid">{index}</span>
        <span className="text-dim">{title}</span>
      </div>
      {children}
    </section>
  )
}
