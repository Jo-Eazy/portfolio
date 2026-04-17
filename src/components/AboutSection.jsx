import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Code, Lightbulb, Users, Zap } from 'lucide-react';

// CUSTOMISE: The four strengths/core values cards in the About section.
// Each card needs: icon (from lucide-react), label (card heading), desc (card body text).
// Available icons: Code, Lightbulb, Users, Zap, Star, Globe, Cpu, Pen, etc.
// Browse all icons at: https://lucide.dev/icons/
const capabilities = [
  {
    icon: Code,
    label: 'Problem Solving',        // CUSTOMISE: Card heading
    desc: 'Writing clean, efficient code to turn complex problems into elegant solutions.',  // CUSTOMISE: Card description
  },
  {
    icon: Lightbulb,
    label: 'Continuous Learning',
    desc: 'Staying current with modern frameworks, tools, and best practices in web development.',
  },
  {
    icon: Users,
    label: 'Collaboration',
    desc: 'Working effectively with teams to build user-focused applications and share knowledge.',
  },
  {
    icon: Zap,
    label: 'Performance First',
    desc: 'Optimizing for speed, accessibility, and user experience in every project.',
  },
];

export default function AboutSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const lineWidth = useTransform(scrollYProgress, [0, 0.3], ['0%', '100%']);

  return (
    <section id="about" ref={ref} className="relative py-24 md:py-40 px-6 md:px-12" aria-label="About Me">
      <div className="mb-16 md:mb-24">
        <div className="flex items-center gap-4 mb-6">
          <span className="font-mono text-xs text-primary tracking-widest">01</span>
          <motion.div className="h-px bg-primary" style={{ width: lineWidth }} />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* CUSTOMISE: The main About section heading (left column) */}
          <motion.h2
            className="text-3xl md:text-5xl lg:text-6xl font-inter font-light text-foreground"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Passionate developer building dynamic web pages
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* CUSTOMISE: First paragraph (right column) — describes your background and motivation */}
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
              I'm Jose Pierre Dhlamini, an entry-level developer at LC Studio dedicated to crafting
              responsive, user-centered web experiences. My journey into tech began with a curiosity
              about how things work, and now I channel that passion into writing clean code, help solve
              real-world problems, or just make something that looks pretty (like my portfolio :P).
            </p>
            {/* CUSTOMISE: Second paragraph (right column) */}
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              I'm committed to continuous growth and consider myself a lifelong learner, eager to collaborate with talented teams to create something exciting,
              and building products that make a positive impact. I am based in Cape Town, South Africa, and
              open to new opportunities.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Capability cards — data comes from the 'capabilities' array above */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {capabilities.map((cap, i) => (
          <motion.div
            key={cap.label}
            className="group p-6 md:p-8 border border-border rounded-sm hover:border-primary/40 transition-colors duration-500 relative overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <cap.icon className="w-5 h-5 text-primary mb-4 relative z-10" />
            <h3 className="font-mono text-sm tracking-wider text-foreground mb-3 relative z-10">
              {cap.label}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed relative z-10">
              {cap.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
