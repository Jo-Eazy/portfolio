import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Download } from 'lucide-react';
import MagneticButton from './MagneticButton';

// CUSTOMISE: This is the large animated headline that appears letter by letter.
// Change the text between the quotes — keep it short (3–5 words work best).
const headlineChars = "ENTRY-LEVEL DEVELOPER".split('');

export default function HeroSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  // Handler for CV download — the PDF file lives at /public/Jose_Pierre_Dhlamini_CV.pdf
  // CUSTOMISE: If you rename the CV file, update the filename below to match.
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Jose_Pierre_Dhlamini_CV.pdf';
    link.download = 'Jose_Pierre_Dhlamini_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative h-screen flex flex-col justify-end overflow-hidden px-6 md:px-12 pb-12"
      aria-label="Landing section"
    >
      {/* CUSTOMISE: The small vertical text on the right side of the screen */}
      <motion.div
        className="absolute top-32 right-6 md:right-12 font-mono text-[10px] tracking-widest text-muted-foreground hidden md:block"
        style={{ writingMode: 'vertical-rl', opacity }}
      >
        SCROLL TO EXPLORE — 2026
      </motion.div>

      {/* CUSTOMISE: The coordinates shown in the bottom-right corner.
          Currently set to Cape Town, South Africa.
          Change to your own city's coordinates or remove this block. */}
      <motion.div
        className="absolute bottom-12 right-6 md:right-12 font-mono text-[10px] tracking-widest text-muted-foreground"
        style={{ opacity }}
      >
        33.9249° S, 18.4241° E
      </motion.div>

      {/* Main headline and subtitle */}
      <motion.div style={{ y, opacity }} className="mb-12">
        <div className="flex flex-wrap leading-none mb-6">
          {headlineChars.map((char, i) => (
            <motion.span
              key={i}
              // CUSTOMISE: The colour the headline letters turn when you hover over them.
              // 'hsl(265, 89%, 76%)' is the purple accent colour.
              // Change the hsl() values to any colour you like.
              className="text-4xl sm:text-6xl md:text-8xl lg:text-[9rem] font-inter font-light text-foreground"
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.6 + i * 0.03,
                ease: [0.76, 0, 0.24, 1],
              }}
              whileHover={{
                color: 'hsl(265, 89%, 76%)', // CUSTOMISE: Hover colour on headline letters
                letterSpacing: '0.05em',
                transition: { duration: 0.2 },
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </div>

        <motion.div
          className="flex flex-col md:flex-row md:items-end justify-between gap-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          {/* CUSTOMISE: The subtitle paragraph below the main headline */}
          <div className="flex flex-col gap-4">
            <p className="font-inter text-base md:text-lg text-muted-foreground max-w-md leading-relaxed">
              Building responsive, dynamic web applications with modern technologies. Welcome to my portfolio.
            </p>
            {/* CUSTOMISE: Update your name below if needed */}
            <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
              Jose Pierre Dhlamini — Entry-Level Developer @ LC Studio, Cape Town
            </p>
          </div>

          {/* CTA Buttons — Explore Work and Download CV */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            {/* Scroll to Work section */}
            <MagneticButton
              onClick={() =>
                document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' })
              }
              className="border border-foreground/20 px-6 py-4 hover:border-primary hover:text-primary"
            >
              {/* CUSTOMISE: Text on the hero call-to-action button */}
              <span>Explore Work</span>
              <ArrowDown className="w-4 h-4" />
            </MagneticButton>

            {/* Download CV button — downloads /public/Jose_Pierre_Dhlamini_CV.pdf */}
            {/* CUSTOMISE: Change the label text if desired */}
            <MagneticButton
              onClick={handleDownloadCV}
              className="border border-primary text-primary px-6 py-4 hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
            >
              <Download className="w-4 h-4" />
              <span>Download CV</span>
            </MagneticButton>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom divider line */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-border"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, delay: 1.6, ease: [0.76, 0, 0.24, 1] }}
        style={{ transformOrigin: 'left' }}
      />
    </section>
  );
}
