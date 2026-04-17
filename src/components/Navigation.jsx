import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import MagneticButton from './MagneticButton';

// CUSTOMISE: The navigation links shown in the full-screen menu.
// Change 'label' for the text, 'href' for the section it scrolls to.
// The href values match the id="" on each section (e.g. id="work" → href: '#work').
const navLinks = [
  { label: 'About',   href: '#about' },
  { label: 'Work',    href: '#work' },
  { label: 'Skills',  href: '#services' },
  { label: 'Contact', href: '#contact' },
  { label: 'Peers',   href: '#peers' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id) => {
    setIsOpen(false);
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 mix-blend-difference">
        <div className="flex items-center justify-between px-6 md:px-12 py-6">
          {/* CUSTOMISE: The brand name / logo text in the top-left corner — use your name or initials */}
          <motion.a
            href="#"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-mono text-sm tracking-widest text-foreground uppercase"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            JOSE.
          </motion.a>

          <motion.button
            onClick={() => setIsOpen(true)}
            className="flex items-center gap-3 text-foreground"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            aria-label="Open navigation menu"
          >
            {/* CUSTOMISE: Text next to the menu icon (only visible on desktop) */}
            <span className="font-mono text-xs tracking-widest uppercase hidden md:block">Menu</span>
            <Menu className="w-6 h-6" />
          </motion.button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-xl flex flex-col"
            initial={{ clipPath: 'circle(0% at calc(100% - 3rem) 2.5rem)' }}
            animate={{ clipPath: 'circle(150% at calc(100% - 3rem) 2.5rem)' }}
            exit={{ clipPath: 'circle(0% at calc(100% - 3rem) 2.5rem)' }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="flex items-center justify-between px-6 md:px-12 py-6">
              {/* CUSTOMISE: Brand name also shown inside the open menu */}
              <span className="font-mono text-sm tracking-widest text-foreground uppercase">
                JOSE.
              </span>
              <button
                onClick={() => setIsOpen(false)}
                className="text-foreground"
                aria-label="Close navigation menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex-1 flex items-center px-6 md:px-20">
              <div className="space-y-2 md:space-y-4 w-full">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: -60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + i * 0.1, ease: [0.76, 0, 0.24, 1] }}
                  >
                    <MagneticButton onClick={() => scrollTo(link.href)}>
                      <span className="text-4xl md:text-7xl lg:text-8xl font-inter font-light text-foreground hover:text-primary transition-colors duration-500 flex items-center gap-4 group">
                        <span className="font-mono text-xs text-muted-foreground">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        {link.label}
                        <ArrowUpRight className="w-6 h-6 md:w-10 md:h-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-primary" />
                      </span>
                    </MagneticButton>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CUSTOMISE: Social media links shown at the bottom of the open menu.
                Change the href values to your actual social profiles. */}
            <div className="px-6 md:px-12 py-8 flex flex-wrap gap-6 text-muted-foreground font-mono text-xs tracking-wider">
              {/* CUSTOMISE: Replace with your actual GitHub username */}
              <a href="https://github.com/Jo-Eazy" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">GitHub</a>
              {/* CUSTOMISE: Replace with your actual LinkedIn profile URL */}
              <a href="www.linkedin.com/in/jose-dhlamini-30b1212b7" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">LinkedIn</a>
              <a href="mailto:josedhlamini9@gmail.com" className="hover:text-primary transition-colors">Email</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
