import Head from 'next/head'
import About from '../components/About'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Contact from '../components/Contact'
import Herosection from '@/components/Herosection'
import Navbar from '@/components/Navbar'
import Education from '@/components/Education'

export default function Home() {
  return (
    <>
      <Head>
        <title>Arya</title>
      </Head>
      <main className="bg-gradient-to-br from-dark-primary to-dark-secondary text-white min-h-screen overflow-x-hidden">
        {/* Floating Background Shapes */}
        <div className="floating-shapes">
          <div className="shape"></div>
          <div className="shape"></div>
          <div className="shape"></div>
          <div className="shape"></div>
        </div>

        {/* Navigation */}
        <Navbar />

        {/* Hero Section */}
        <Herosection />

        {/* About Section */}
        <About />

        {/* Projects Section */}
        <Projects />

        {/* Skills Section */}
        <Skills />

        {/*Education section */}
        <Education />

        {/* Contact Section */}
        <Contact />
      </main>
    </>
  )
}
