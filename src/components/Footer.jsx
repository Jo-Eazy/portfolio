import { motion } from 'framer-motion';

// CUSTOMISE: The footer navigation columns.
// Each group has a 'title' (column heading) and 'links' (array of label + href).
// To link to a page section use e.g. href: '#work'.
// To link to an external site use the full URL e.g. href: 'https://linkedin.com/...'.
const linkGroups = [
  {
    title: 'Navigation',
    links: [
      { label: 'About',    href: '#about' },
      { label: 'Work',     href: '#work' },
      { label: 'Skills',   href: '#services' },
      { label: 'Contact',  href: '#contact' },
      { label: 'Peers',    href: '#peers' },
    ],
  },
  {
    title: 'Social',
    links: [
      // CUSTOMISE: Replace with your actual social profile URLs
      { label: 'GitHub',   href: 'https://github.com/Jo-Eazy' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/jose-dhlamini-30b1212b7/' },
      { label: 'Email',    href: 'mailto:josedhlamini9@gmail.com' },
    ],
  },
];

function AnimatedLink({ label, href, external }) {
  const scrollTo = (e) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <a
      href={href}
      onClick={scrollTo}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="group relative inline-block text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
    >
      {label}
      <span className="absolute bottom-0 left-1/2 h-px w-0 bg-primary group-hover:w-full group-hover:left-0 transition-all duration-500" />
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-border px-6 md:px-12 py-16 md:py-24">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-8 mb-20">
        <motion.div
          className="col-span-2 md:col-span-1"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* CUSTOMISE: Brand name in the footer */}
          <span className="font-mono text-sm tracking-widest text-foreground uppercase">
            JOSE.
          </span>
          {/* CUSTOMISE: The short tagline below the footer brand name */}
          <p className="text-sm text-muted-foreground mt-4 leading-relaxed max-w-xs">
            Entry-Level Developer crafting responsive, user-centred web experiences from Cape Town, South Africa.
          </p>
        </motion.div>

        {/* Link groups — data comes from the 'linkGroups' array above */}
        {linkGroups.map((group, i) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: (i + 1) * 0.1 }}
          >
            <h4 className="font-mono text-[10px] tracking-widest text-primary uppercase mb-4">
              {group.title}
            </h4>
            <div className="flex flex-col gap-3">
              {group.links.map((link) => (
                <AnimatedLink
                  key={link.label}
                  label={link.label}
                  href={link.href}
                  external={link.href.startsWith('http') || link.href.startsWith('mailto')}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-border">
        {/* CUSTOMISE: The copyright line at the very bottom of the page */}
        <p className="font-mono text-[10px] tracking-widest text-muted-foreground">
          © 2026 JOSE PIERRE DHLAMINI. ALL RIGHTS RESERVED.
        </p>
        {/* CUSTOMISE: The small text on the right side of the footer bottom bar */}
        <p className="font-mono text-[10px] tracking-widest text-muted-foreground">
          DESIGNED WITH PRECISION — CAPE TOWN
        </p>
      </div>
    </footer>
  );
}
