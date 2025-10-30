"use client"

export default function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-muted-foreground mb-6">
              I'm a passionate developer with a Diploma in Computer Studies from Shri Bhagubhai Mafatlal Polytechnic. I
              specialize in building modern web and mobile applications using cutting-edge technologies.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              My goal is to work in a dynamic environment where I can grow as a Frontend and Mobile Developer, creating
              innovative solutions that make a real impact.
            </p>
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-purple-400">Education</h3>
              <p className="text-muted-foreground">Diploma in Computer Studies</p>
              <p className="text-muted-foreground">Shri Bhagubhai Mafatlal Polytechnic</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg p-8 border border-purple-500/30">
            <h3 className="text-2xl font-bold mb-6 text-purple-400">Quick Facts</h3>
            <ul className="space-y-4 text-muted-foreground">
              <li>✓ Full-stack development experience</li>
              <li>✓ Mobile app development with Flutter</li>
              <li>✓ Modern web technologies (React, Next.js)</li>
              <li>✓ Backend development (Node.js, Express)</li>
              <li>✓ Database design and optimization</li>
              <li>✓ UI/UX design with Figma</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
