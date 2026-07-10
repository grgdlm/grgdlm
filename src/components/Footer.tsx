export default function Footer() {
  return (
    <footer className="flex flex-col gap-2 border-t border-line py-8 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-dim sm:flex-row sm:items-center sm:justify-between">
      <span>© {new Date().getFullYear()} George</span>
      <a href="#top" className="transition-colors hover:text-acid">
        Back to top ↑
      </a>
      <span>React + Vite + Tailwind, no template</span>
    </footer>
  )
}
