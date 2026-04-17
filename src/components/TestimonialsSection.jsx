import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Quote } from 'lucide-react';

// CUSTOMISE: What My Peers Say About Me — testimonials/quotes from colleagues, friends, etc.
// Each entry needs:
//   quote  — the testimonial text (what they said)
//   name   — the person's full name
//   role   — their relationship to you or their job title
const testimonials = [
  {
    // Real quote — Tyler Joshua Sampson
    quote:
      'Jose is a very chill and relaxed person, always calm even when others are stressing.',
    name: 'Tyler Joshua Sampson',
    role: 'Friend',
  },
  {
    // Real quote — Gazelle Pearson
    quote:
      "He can sometimes be competitive when it comes to code — we were in a competition to see who could make the best webpage, judged by our facilitator at Life Choices. He always brings great, eye-catching designs to the table.",
    name: 'Gazelle Pearson',
    role: 'Colleague · Entry-Level Developer at LC Studio',
  },
  {
    // PLACEHOLDER — replace or keep as-is. Edit the quote, name, and role below.
    quote:
      'Jose has a great eye for design and always brings creative solutions to the table. Seeing his work has been a genuinely rewarding experience.',
    name: 'Mogamat Toufeeq Farat',
    role: 'Colleague · Entry-Level Developer at LC Studio', // CUSTOMISE: Update role if needed
  },
  {
    // PLACEHOLDER — replace or keep as-is. Edit the quote, name, and role below.
    quote:
      "Jose is the kind of developer who doesn't give up on a problem. He puts in the effort, keeps a cool head under pressure, and always brings good energy to the team.",
    name: 'Dominic Peck',
    role: 'Colleague · Entry-Level Developer at LC Studio', // CUSTOMISE: Update role if needed
  },
];

export default function TestimonialsSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const lineWidth = useTransform(scrollYProgress, [0, 0.3], ['0%', '100%']);

  return (
    <section id="peers" ref={ref} className="relative py-24 md:py-40 px-6 md:px-12" aria-label="What My Peers Say About Me">
      <div className="mb-16 md:mb-24">
        <div className="flex items-center gap-4 mb-6">
          <span className="font-mono text-xs text-primary tracking-widest">05</span>
          <motion.div className="h-px bg-primary" style={{ width: lineWidth }} />
        </div>
        {/* CUSTOMISE: The testimonials section heading */}
        <motion.h2
          className="text-3xl md:text-5xl lg:text-6xl font-inter font-light text-foreground"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          What My Peers Say About Me
        </motion.h2>
        <motion.p
          className="font-mono text-sm text-muted-foreground mt-4 max-w-lg tracking-wider"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Kind words from colleagues, friends, and collaborators I've worked with.
        </motion.p>
      </div>

      {/* Testimonial cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            className="group relative p-8 md:p-10 border border-border rounded-sm hover:border-primary/40 transition-colors duration-500 overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            {/* Subtle background glow on hover */}
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Quote icon */}
            <Quote className="w-6 h-6 text-primary/40 mb-6 relative z-10" />

            {/* Quote text */}
            <p className="text-base md:text-lg font-inter font-light text-foreground leading-relaxed mb-8 relative z-10">
              "{t.quote}"
            </p>

            {/* Attribution */}
            <div className="relative z-10 flex items-center gap-4 border-t border-border pt-6">
              {/* Avatar initials circle */}
              <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                <span className="font-mono text-xs text-primary">
                  {/* Shows first letters of first and last name */}
                  {t.name.split(' ').map((n) => n[0]).slice(0, 2).join('')}
                </span>
              </div>
              <div>
                <p className="font-inter text-sm font-light text-foreground">{t.name}</p>
                <p className="font-mono text-[10px] tracking-wider text-muted-foreground mt-0.5">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
