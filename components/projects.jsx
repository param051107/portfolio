"use client"

export default function Projects() {
  const projects = [
    {
      title: "Hybrid Messaging App",
      description: "A real-time messaging application with user authentication, chat rooms, and instant notifications.",
      tech: ["Flutter", "Firebase","Dart"],
    },
    {
      title: "Food Delivery UI App",
      description: "Beautiful and intuitive food delivery application UI with smooth animations and responsive design.",
      tech: ["Flutter", "Dart", "Firebase"],
    },
    {
      title: "Portfolio Website",
      description: "Modern portfolio website showcasing projects and skills with smooth animations and dark mode.",
      tech: ["Next.js", "React", "Tailwind CSS"],
    },
  ]

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-background to-purple-950/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-lg p-6 border border-purple-500/30 hover:border-purple-500/60 transition group"
            >
              <h3 className="text-xl font-bold mb-3 text-purple-400 group-hover:text-pink-400 transition">
                {project.title}
              </h3>
              <p className="text-muted-foreground mb-6">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span key={i} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
