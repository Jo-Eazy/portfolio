import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight, ExternalLink, Github } from 'lucide-react';

export default function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const codeLink = project.codeLink || project.link;

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      ref={ref}
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 80 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className="relative overflow-hidden rounded-sm aspect-[3/2]">
        <motion.img
          src={project.image}
          alt={`${project.title} project screenshot`}
          className="w-full h-full object-cover"
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
        />

        <motion.div
          className="absolute inset-0 bg-background/40"
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />

        <motion.div
          className="absolute top-4 right-4 w-10 h-10 rounded-full border border-foreground/30 flex items-center justify-center"
          animate={{
            opacity: isHovered ? 1 : 0,
            scale: isHovered ? 1 : 0.5,
          }}
          transition={{ duration: 0.3 }}
        >
          <ArrowUpRight className="w-4 h-4 text-foreground" />
        </motion.div>

        {isHovered && (
          <motion.div
            className="absolute pointer-events-none bg-card/90 backdrop-blur-sm border border-border px-4 py-3 rounded-sm z-10"
            style={{
              left: Math.min(mousePos.x + 20, 240),
              top: mousePos.y - 20,
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.15 }}
          >
            <p className="font-mono text-[10px] text-primary tracking-widest uppercase mb-1">{project.category}</p>
            <p className="font-mono text-[10px] text-muted-foreground tracking-wider">{project.year} / {project.tools}</p>
          </motion.div>
        )}
      </div>

      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <h3 className="font-inter text-lg md:text-xl font-light text-foreground group-hover:text-primary transition-colors duration-300">
            {project.title}
          </h3>
          <p className="font-mono text-xs text-muted-foreground tracking-wider mt-1">
            {project.category} / {project.role}
          </p>
        </div>
        <span className="font-mono text-xs text-muted-foreground shrink-0">{project.year}</span>
      </div>

      {project.summary && (
        <p className="text-sm text-muted-foreground leading-relaxed mt-4">
          {project.summary}
        </p>
      )}

      {project.impact?.length > 0 && (
        <ul className="mt-4 space-y-2">
          {project.impact.map((item) => (
            <li key={item} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
              <span className="mt-2 h-1 w-1 rounded-full bg-primary shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-5 flex flex-wrap gap-3">
        {codeLink && codeLink !== '#' && (
          <a
            href={codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-foreground/20 px-4 py-3 font-mono text-[10px] uppercase tracking-widest text-foreground hover:border-primary hover:text-primary transition-colors duration-300"
          >
            <Github className="w-4 h-4" />
            View Code
          </a>
        )}
        {project.liveLink && project.liveLink !== '#' && (
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-primary px-4 py-3 font-mono text-[10px] uppercase tracking-widest text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
          >
            <ExternalLink className="w-4 h-4" />
            Live Demo
          </a>
        )}
      </div>
    </motion.div>
  );
}
