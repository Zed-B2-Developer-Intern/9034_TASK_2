import Navbar from '@/components/NavBar'
import ThemeToggle from '../components/ThemeToggle'
import {projects} from '@/data/projects'
import Link from 'next/link'
import Image from 'next/image'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Skills from "@/components/Skills"
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import ScrollAnimation from '@/components/ScrollAnimation'
import BlogCard from '@/components/BlogCard'

import SectionWrapper from "@/components/SectionWrapper";
import CardGrid from "@/components/CardGrid";



export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white px-6 md:px-20 py-20">
        <Navbar />
        <ScrollAnimation>
             <Hero />
        </ScrollAnimation>

        <ScrollAnimation>
          
             <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">My Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Link key={project.id} href={`/projects/${project.id}`}>
            <Projects project={project} />
          </Link>
        ))}
      </div>
    </div>
       </ScrollAnimation>
       <ScrollAnimation>
             <About/>
      </ScrollAnimation>
      <ScrollAnimation>
            <Skills />
       </ScrollAnimation>
       <ScrollAnimation>
        <SectionWrapper id="blog" title=" Blog Posts">
  <CardGrid>
  <section className="py-16 px-4" id="blog">
    
    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
      <BlogCard
        title="Getting Started with Tailwind CSS"
        summary="Learn how to quickly style modern websites using utility-first CSS framework Tailwind."
        link="https://yourbloglink.com/tailwind-guide"
      />
      <BlogCard
        title="Why TypeScript is a Game Changer"
        summary="A deep dive into how TypeScript helps prevent bugs and improve code clarity."
        link="https://yourbloglink.com/typescript-benefits"
      />
    </div>
  </section>
   </CardGrid>
</SectionWrapper>
</ScrollAnimation>
      <ScrollAnimation>
            <Contact />
      </ScrollAnimation>
            <Footer />
      </main>
    </>
  )
}
