"use client"

export default function Hero() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background via-background to-purple-950/20 pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl sm:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
          Frontend & Mobile Developer
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Crafting beautiful, responsive web and mobile applications with modern technologies. Passionate about creating
          seamless user experiences.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <button
            onClick={() => scrollToSection("projects")}
            className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition"
          >
            View My Work
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="px-8 py-3 border border-purple-500 text-purple-400 rounded-lg hover:bg-purple-500/10 transition"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  )
}
