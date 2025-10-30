"use client"

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">
              Param
            </h3>
            <p className="text-muted-foreground">Frontend & Mobile Developer</p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#about" className="hover:text-purple-400 transition">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-purple-400 transition">
                  Projects
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-purple-400 transition">
                  Skills
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="mailto:Param051107@gmail.com" className="hover:text-purple-400 transition">
                  Email
                </a>
              </li>
              <li>
                <a href="tel:+919689836360" className="hover:text-purple-400 transition">
                  Phone
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-muted-foreground">
          <p>© 2025 Param. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
