import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeToggle } from './ThemeToggle';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'glass-card border-b border-border/30 py-3' : 'py-5'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <a href="#hero" className="text-xl font-bold glow-text tracking-tight">
            AK<span className="text-foreground/40">.</span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((n) => (
              <a
                key={n.label}
                href={n.href}
                className="text-sm text-muted-foreground hover:text-foreground px-3 py-2 rounded-lg hover:bg-muted/50 transition-all relative group"
              >
                {n.label}
              </a>
            ))}
            <ThemeToggle />
            <a
              href="#contact"
              className="ml-3 text-sm px-5 py-2.5 rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all font-semibold"
            >
              Hire Me
            </a>
          </div>

          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            <span className={`block w-5 h-0.5 bg-foreground transition-transform ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-5 h-0.5 bg-foreground transition-opacity ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-0.5 bg-foreground transition-transform ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 glass-card flex flex-col items-center justify-center gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {navItems.map((n) => (
              <a
                key={n.label}
                href={n.href}
                onClick={() => setMobileOpen(false)}
                className="text-2xl font-semibold text-foreground/80 hover:text-foreground transition-colors"
              >
                {n.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
