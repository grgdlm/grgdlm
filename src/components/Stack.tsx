import Reveal from './Reveal'
import Section from './Section'

const groups = [
  {
    label: 'Front-end',
    items: ['React', 'Next.js', 'Angular', 'TypeScript', 'JavaScript'],
  },
  {
    label: 'Mobile',
    items: ['React Native', 'iOS / Swift'],
  },
  {
    label: 'Back-end',
    items: ['Node.js', 'Express', 'NestJS', 'Hono'],
  },
  {
    label: 'Data',
    items: ['MySQL', 'SQLite', 'Firestore', 'MongoDB', 'Google Sheets (loljk)'],
  },
  {
    label: 'Cloud & Delivery',
    items: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'GitHub Actions', 'CI/CD'],
  },
  {
    label: 'Enterprise',
    items: ['Salesforce integrations', 'HubSpot', 'SaaS architecture'],
  },
]

export default function Stack() {
  return (
    <Section id="stack" index="02" title="Stack">
      <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {groups.map((group, i) => (
          <Reveal key={group.label} delay={i * 70}>
            <h3 className="border-b border-line pb-3 font-mono text-xs uppercase tracking-[0.2em] text-dim">
              {group.label}
            </h3>
            <ul className="mt-4 space-y-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="cursor-default leading-relaxed transition-colors hover:text-acid"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
