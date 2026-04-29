import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Learning", href: "#certificates" },
  { label: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = links.map((l) => l.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3 glass shadow-elegant" : "py-5 bg-transparent"
      }`}
    >
      <nav className="container flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <span className="w-9 h-9 rounded-lg bg-gradient-gold flex items-center justify-center font-display font-bold text-accent-foreground shadow-gold transition-transform duration-500 group-hover:rotate-12">
            M
          </span>
          <span className="font-display font-semibold tracking-tight hidden sm:inline">
            Maayer Hassan<span className="text-gold">.</span>
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-1">
          {links.map((l) => {
            const isActive = active === l.href;
            return (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={`relative px-3 py-2 text-sm transition-colors ${
                    isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {l.label}
                  <span
                    className={`absolute left-3 right-3 bottom-1 h-px bg-gradient-gold transition-transform duration-300 origin-left ${
                      isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-flex px-5 py-2 rounded-full bg-gradient-gold text-accent-foreground text-sm font-semibold shadow-gold hover:scale-105 transition-transform duration-300"
        >
          Hire Me
        </a>

        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden glass mt-3 mx-4 rounded-2xl p-4 animate-fade-in">
          <ul className="flex flex-col gap-1">
            {links.map((l) => {
              const isActive = active === l.href;
              return (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className={`block px-3 py-2 text-sm rounded-lg transition-colors ${
                      isActive
                        ? "bg-accent/10 text-accent"
                        : "text-muted-foreground hover:text-accent"
                    }`}
                  >
                    {l.label}
                  </a>
                </li>
              );
            })}
            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex w-full items-center justify-center px-5 py-2 rounded-full bg-gradient-gold text-accent-foreground text-sm font-semibold shadow-gold"
              >
                Hire Me
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};
