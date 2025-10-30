"use client"

import { useState } from "react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsOpen(false)
    }
  }

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Param
          </div>

          <div className="hidden md:flex gap-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-purple-500 transition"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-foreground hover:text-purple-500 transition"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-foreground hover:text-purple-500 transition"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground hover:text-purple-500 transition"
            >
              Contact
            </button>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-foreground">
            ☰
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left px-4 py-2 text-foreground hover:text-purple-500"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="block w-full text-left px-4 py-2 text-foreground hover:text-purple-500"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="block w-full text-left px-4 py-2 text-foreground hover:text-purple-500"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left px-4 py-2 text-foreground hover:text-purple-500"
            >
              Contact
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}
