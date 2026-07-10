import Reveal from './Reveal'
import Section from './Section'

const projects = [
  {
    index: '001',
    name: 'Suki',
    kicker: 'Small Business Tracker · App Store',
    href: 'https://apps.apple.com/ph/app/suki-small-business-tracker/id6762774301',
    blurb:
      'Sales and utang tracker for Filipino small businesses. Log transactions by chat in English, Tagalog, or Taglish; track customer credit and inventory. Fully offline, no accounts, and data stays in iCloud.',
    tags: ['iOS', 'Offline-first', 'iCloud'],
  },
  {
    index: '002',
    name: 'Beat',
    kicker: 'Your Habit Tracker · App Store',
    href: 'https://apps.apple.com/us/app/beat-your-habit-tracker/id6769709164',
    blurb:
      'Habit tracker with an on-device AI coach built on Apple Intelligence: weekly recaps, widgets, Live Activities, Apple Watch. No cloud, no accounts. Nothing leaves the phone.',
    tags: ['SwiftUI', 'Apple Intelligence', 'On-device AI'],
  },
  {
    index: '003',
    name: 'Academe',
    kicker: 'School management system',
    href: null,
    blurb:
      'Years of full-stack work on a school management system: enrollment, student records, grading, and billing, plus the reporting schools actually run on.',
    tags: ['Full-stack', 'SaaS', 'EdTech'],
  },
  {
    index: '004',
    name: 'Platform work',
    kicker: 'Client & team work',
    href: null,
    blurb:
      'Salesforce integrations, SaaS architecture, and CI/CD pipelines for teams shipping on AWS, Azure, and GCP.',
    tags: ['Salesforce', 'CI/CD', 'Cloud'],
  },
]

function Row({ project }: { project: (typeof projects)[number] }) {
  const inner = (
    <>
      <span className="pt-2 font-mono text-xs text-dim transition-colors group-hover:text-acid">
        {project.index}
      </span>
      <div>
        <p className="mb-2 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-dim">
          {project.kicker}
          {project.href && (
            <span
              aria-hidden="true"
              className="ml-1 inline-block transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            >
              ↗
            </span>
          )}
        </p>
        <h3 className="font-display text-3xl font-bold tracking-tight transition-colors group-hover:text-acid sm:text-4xl">
          {project.name}
        </h3>
        <p className="mt-3 max-w-lg leading-relaxed text-dim">{project.blurb}</p>
      </div>
      <div className="flex flex-wrap items-start gap-2 pt-2 sm:justify-end">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="border border-line px-2.5 py-1 font-mono text-[0.65rem] uppercase tracking-widest text-dim transition-colors group-hover:border-ink/30"
          >
            {tag}
          </span>
        ))}
      </div>
    </>
  )

  const rowClass = 'group grid gap-4 sm:grid-cols-[4rem_1fr_auto] sm:gap-8'

  return project.href ? (
    <a href={project.href} target="_blank" rel="noreferrer" className={rowClass}>
      {inner}
    </a>
  ) : (
    <div className={rowClass}>{inner}</div>
  )
}

export default function Work() {
  return (
    <Section id="work" index="01" title="Selected Work">
      <ul>
        {projects.map((project, i) => (
          <li
            key={project.index}
            className="border-t border-line py-10 first:border-t-0 first:pt-0"
          >
            <Reveal delay={i * 90}>
              <Row project={project} />
            </Reveal>
          </li>
        ))}
      </ul>
      <Reveal delay={200}>
        <a
          href="https://github.com/grgdlm"
          target="_blank"
          rel="noreferrer"
          className="mt-12 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-dim transition-colors hover:text-acid"
        >
          More on GitHub <span aria-hidden="true">↗</span>
        </a>
      </Reveal>
    </Section>
  )
}
