"use client"

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-purple-950/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Let's Connect
        </h2>

        <div className="max-w-2xl mx-auto bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-lg p-8 border border-purple-500/30">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-purple-400 mb-2">Email</h3>
              <a href="mailto:Param051107@gmail.com" className="text-muted-foreground hover:text-purple-400 transition">
                Param051107@gmail.com
              </a>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-purple-400 mb-2">Phone</h3>
              <a href="tel:+919869383630" className="text-muted-foreground hover:text-purple-400 transition">
                +91 9869383630
              </a>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-purple-400 mb-4">Connect With Me</h3>
              <div className="flex gap-4">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center hover:bg-purple-500/40 transition text-purple-400"
                >
                  in
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center hover:bg-purple-500/40 transition text-purple-400"
                >
                  ⚙
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
