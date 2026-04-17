import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

// CUSTOMISE: Your technical skills organized by category.
// Each skill needs:
//   number      — the display number (purely visual, e.g. '01')
//   title       — the skill or category name
//   description — what you can do with this skill or tools included
//   tags        — specific technologies/libraries (e.g. React, Node.js)
const services = [
  {
    number: '01',
    title: 'Frontend Development',
    description: 'Building responsive, interactive user interfaces with modern JavaScript frameworks and CSS3. Creating engaging experiences with animations and smooth interactions.',
    tags: ['React', 'Vue.js', 'JavaScript', 'HTML5 / CSS3', 'Tailwind CSS'],
  },
  {
    number: '02',
    title: 'Backend Development',
    description: 'Server-side development with Node.js and PHP. Building RESTful APIs, admin dashboards, and integrating third-party services.',
    tags: ['Node.js', 'Express', 'PHP', 'SQL'],
  },
  {
    number: '03',
    title: 'Tools & Platforms',
    description: 'Version control, deployment, and development tools. Working with Git, GitHub, deployment platforms, and modern development environments.',
    tags: ['Git', 'GitHub', 'VS Code', 'Vite', 'Microsoft Azure'],
  },
  {
    number: '04',
    title: 'Soft Skills',
    description: 'Problem-solving, communication, and teamwork. Eager to learn, adapt quickly, and contribute effectively to team projects in an agile environment.',
    tags: ['Communication', 'Collaboration', 'Agile', 'Adaptability', 'Problem Solving'],
  },
];

// CUSTOMISE: The skill icon grid below the rows.
// Each icon uses a devicon SVG loaded from CDN.
// 'label' is the display name, 'icon' is the devicon CDN filename.
// Browse available icons at: https://devicon.dev/
const skillIcons = [
  { label: 'HTML5',      icon: 'html5',      color: '#E34F26' },
  { label: 'CSS3',       icon: 'css3',       color: '#1572B6' },
  { label: 'JavaScript', icon: 'javascript', color: '#F7DF1E' },
  { label: 'React',      icon: 'react',      color: '#61DAFB' },
  { label: 'Vue.js',     icon: 'vuejs',      color: '#42B883' },
  { label: 'PHP',        icon: 'php',        color: '#777BB4' },
  { label: 'Node.js',    icon: 'nodejs',     color: '#339933' },
  { label: 'Tailwind',   icon: 'tailwindcss',color: '#06B6D4' },
  { label: 'Git',        icon: 'git',        color: '#F05032' },
  { label: 'GitHub',     icon: 'github',     color: '#ffffff' },
  { label: 'VS Code',    icon: 'vscode',     color: '#007ACC' },
  { label: 'Azure',      icon: 'azure',      color: '#0089D6' },
];

function ServiceRow({ service, index }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="group border-b border-border py-8 md:py-12 cursor-default"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-start md:items-center gap-6 md:gap-10 flex-1">
          <span className="font-mono text-xs text-primary tracking-widest mt-1 md:mt-0">
            {service.number}
          </span>
          <div className="flex-1">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-inter font-light text-foreground group-hover:text-primary transition-colors duration-500">
              {service.title}
            </h3>
            <motion.p
              className="text-sm text-muted-foreground mt-2 max-w-lg leading-relaxed"
              animate={{ opacity: isHovered ? 1 : 0.6, y: isHovered ? 0 : 5 }}
              transition={{ duration: 0.3 }}
            >
              {service.description}
            </motion.p>
            <div className="flex flex-wrap gap-2 mt-3">
              {service.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[10px] tracking-wider text-muted-foreground border border-border px-3 py-1 rounded-full group-hover:border-primary/30 group-hover:text-primary/80 transition-all duration-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
        <motion.div
          animate={{ rotate: isHovered ? 45 : 0, scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.3 }}
        >
          <ArrowUpRight className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function ServicesSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const lineWidth = useTransform(scrollYProgress, [0, 0.3], ['0%', '100%']);

  return (
    <section id="services" ref={ref} className="relative py-24 md:py-40 px-6 md:px-12" aria-label="Skills and Expertise">
      <div className="mb-12 md:mb-16">
        <div className="flex items-center gap-4 mb-6">
          <span className="font-mono text-xs text-primary tracking-widest">03</span>
          <motion.div className="h-px bg-primary" style={{ width: lineWidth }} />
        </div>
        {/* CUSTOMISE: The Skills section heading */}
        <motion.h2
          className="text-3xl md:text-5xl lg:text-6xl font-inter font-light text-foreground"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Skills & Expertise
        </motion.h2>
      </div>

      {/* Skill category rows */}
      <div className="border-t border-border">
        {services.map((service, i) => (
          <ServiceRow key={service.number} service={service} index={i} />
        ))}
      </div>

      {/* ── Tech Icon Grid ──────────────────────────────────────────────
          Icons load from the Devicon CDN — no extra packages needed.
          CUSTOMISE: Edit the 'skillIcons' array at the top of this file
          to add, remove, or swap icons for your actual tech stack.    */}
      <motion.div
        className="mt-16 md:mt-24"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase mb-8">
          Technologies & Tools
        </p>
        <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-12 gap-6 md:gap-8">
          {skillIcons.map((skill, i) => (
            <motion.div
              key={skill.label}
              className="flex flex-col items-center gap-2 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              title={skill.label}
            >
              <div className="w-10 h-10 flex items-center justify-center opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                {/* Devicon SVG loaded from CDN — replace 'icon' value in skillIcons array to change */}
                <img
                  src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${skill.icon}/${skill.icon}-original.svg`}
                  alt={`${skill.label} icon`}
                  className="w-8 h-8 object-contain"
                  onError={(e) => {
                    // Fallback: show a plain text label if the CDN icon fails to load
                    e.target.style.display = 'none';
                    e.target.parentNode.querySelector('.icon-fallback').style.display = 'flex';
                  }}
                />
                {/* Fallback label shown if CDN icon fails */}
                <span
                  className="icon-fallback hidden w-8 h-8 items-center justify-center font-mono text-[8px] text-primary border border-primary/30 rounded-sm"
                >
                  {skill.label.slice(0, 3).toUpperCase()}
                </span>
              </div>
              <span className="font-mono text-[9px] tracking-wider text-muted-foreground group-hover:text-foreground transition-colors duration-300 text-center leading-tight">
                {skill.label}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
