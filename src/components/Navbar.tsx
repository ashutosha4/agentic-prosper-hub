import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Work", href: "/#work" },
  { label: "Experience", href: "/#experience" },
  { label: "Skills", href: "/#skills" },
  { label: "Contact", href: "/#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      )}
    >
      <nav className="container-narrow flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-md gradient-hero flex items-center justify-center text-primary-foreground font-display font-bold text-sm shadow-md group-hover:shadow-glow transition-all">
            AA
          </div>
          <div className="hidden sm:block">
            <div className="font-display font-semibold text-sm tracking-tight">Ashutosh A</div>
            <div className="text-[11px] text-muted-foreground -mt-0.5 font-mono">AI Product Manager</div>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md"
            >
              {l.label}
            </a>
          ))}
          <a
            href="mailto:aashutosha4@gmail.com"
            className="ml-2 inline-flex items-center px-4 py-2 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:bg-navy-deep shadow-md hover:shadow-glow transition-all"
          >
            Get in touch
          </a>
        </div>

        <button
          className="md:hidden p-2 rounded-md text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="container-narrow py-4 flex flex-col gap-1">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-3 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary rounded-md transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="mailto:aashutosha4@gmail.com"
              className="mt-2 inline-flex items-center justify-center px-4 py-3 rounded-md bg-primary text-primary-foreground text-sm font-medium"
            >
              Get in touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
