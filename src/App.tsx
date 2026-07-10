import Nav from './components/Nav'
import Hero from './components/Hero'
import Work from './components/Work'
import Stack from './components/Stack'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Spotlight from './components/Spotlight'

export default function App() {
  return (
    <div id="top" className="min-h-screen font-sans antialiased">
      <Spotlight />
      <div className="relative z-10">
        <Nav />
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <main>
            <Hero />
            <Work />
            <Stack />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </div>
  )
}
