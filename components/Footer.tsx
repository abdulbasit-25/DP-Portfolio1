const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="px-6 md:px-10 py-16 border-t border-card-border">
      <div className="max-w-content mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-10">
        <div>
          <p className="font-display text-xl text-text">Abdul Basit</p>
          <p className="text-muted text-sm mt-2">Digital Producer • AI • Web • Product</p>
        </div>

        <nav>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:text-text transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-5 text-sm text-muted">
          <a href="https://github.com" aria-label="GitHub" className="hover:text-text transition-colors">
            GitHub
          </a>
          <a href="https://linkedin.com" aria-label="LinkedIn" className="hover:text-text transition-colors">
            LinkedIn
          </a>
          <a href="mailto:hello@abdulbasit.dev" aria-label="Email" className="hover:text-text transition-colors">
            Email
          </a>
        </div>
      </div>

      <div className="max-w-content mx-auto mt-12 pt-8 border-t border-card-border">
        <p className="text-xs text-muted">© 2026 Abdul Basit. Built with curiosity + code.</p>
      </div>
    </footer>
  );
}
