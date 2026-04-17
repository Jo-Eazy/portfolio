import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ProjectCard from './ProjectCard';

// CUSTOMISE: Your portfolio projects. Add, remove, or edit entries here.
// Each project needs:
//   title    — the project name shown below the image
//   category — shown in small text below the title and in the hover tooltip
//   year     — shown on the right below the image
//   tools    — shown in the hover tooltip when you mouse over the image
//   image    — the image URL. Replace with your own images stored in /public/images/
//              e.g. '/images/project-1.jpg' — see /public/images/README.md for guidance
//   link     — URL to the live project or GitHub repo
const projects = [
  {
    title: 'Personal Project — Google Forms Clone',
    category: 'Frontend Development',
    year: '2025',
    tools: 'HTML5 / CSS3 / JavaScript',
    // CUSTOMISE: Replace with '/images/project-1.jpg' once you add your own image
    image: 'public/images/Counterfeit Google Form.png',
    link: 'https://github.com/Jo-Eazy/Personal-Projects.git',
  },
  {
    title: 'ModernTech — HR System ',
    category: 'Full Stack Collaboration',
    year: '2025',
    tools: 'HTML5 / CSS3 / JavaScript',
    // CUSTOMISE: Replace with '/images/project-2.jpg' once you add your own image
    image: 'public/images/ModernTech HR.png',
    link: 'https://github.com/Jo-Eazy/Core-Project.git',
  },
];

export default function ProjectGallery() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const lineWidth = useTransform(scrollYProgress, [0, 0.3], ['0%', '100%']);

  return (
    <section id="work" ref={sectionRef} className="relative py-24 md:py-40 px-6 md:px-12" aria-label="Projects and Work Samples">
      <div className="mb-16 md:mb-24">
        <div className="flex items-center gap-4 mb-6">
          <span className="font-mono text-xs text-primary tracking-widest">02</span>
          <motion.div className="h-px bg-primary" style={{ width: lineWidth }} />
        </div>
        {/* CUSTOMISE: The "Selected Work" heading for this section */}
        <motion.h2
          className="text-3xl md:text-5xl lg:text-6xl font-inter font-light text-foreground"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Featured Work
        </motion.h2>
        {/* CUSTOMISE: The subtitle paragraph under the section heading */}
        <motion.p
          className="font-mono text-sm text-muted-foreground mt-4 max-w-lg tracking-wider"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          A curated collection of projects spanning web applications, responsive interfaces, and full-stack development.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
