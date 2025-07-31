'use client'

import Link from 'next/link'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'

export default function Navbar() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-zinc-900 ">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/">
          <span className="text-xl font-bold text-gray-900 dark:text-white">
            Ganesan P
          </span>
        </Link>
        <div className="flex items-center gap-4">
          <Link href="#projects" className="text-gray-700 dark:text-gray-300 hover:underline">
            Projects
          </Link>
          <Link href="#about" className="text-gray-700 dark:text-gray-300 hover:underline">
            About
          </Link>
            <a href="#blog" className="text-gray-700 dark:text-gray-300 hover:underline">
  Blog
</a>
          <Link href="#contact" className="text-gray-700 dark:text-gray-300 hover:underline">
            Contact
          </Link>
        

          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-700"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          )}
        </div>
      </div>
    </nav>
  )
}
