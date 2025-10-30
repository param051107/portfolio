"use client"

export default function Skills() {
  const skillCategories = [
    {
      category: "Frontend",
      skills: ["HTML", "CSS", "JavaScript", "React.js", "Next.js"],
    },
    {
      category: "Mobile",
      skills: ["Flutter", "Android Studio", "Dart"],
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express.js"],
    },
    {
      category: "Database",
      skills: ["MongoDB", "Firebase"],
    },
    {
      category: "Tools",
      skills: ["Git", "VS Code", "Postman", "Figma"],
    },
  ]

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          My Skills
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-lg p-6 border border-purple-500/30 hover:border-cyan-500/60 transition"
            >
              <h3 className="text-xl font-bold mb-4 text-cyan-400">{category.category}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill, i) => (
                  <li key={i} className="text-muted-foreground flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
