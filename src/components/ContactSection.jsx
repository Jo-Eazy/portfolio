import { motion } from 'framer-motion';
import { ArrowUpRight, Mail, MapPin, Phone, Linkedin, Github } from 'lucide-react';
import MagneticButton from './MagneticButton';

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-24 md:py-40 px-6 md:px-12" aria-label="Contact Information">
      <div className="flex items-center gap-4 mb-16">
        <span className="font-mono text-xs text-primary tracking-widest">04</span>
        <motion.div
          className="h-px bg-primary flex-1"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          style={{ transformOrigin: 'left' }}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
        <div>
          {/* CUSTOMISE: The large contact section heading.
              The word "amazing" appears in the accent colour (purple). */}
          <motion.h2
            className="text-3xl md:text-5xl lg:text-7xl font-inter font-light text-foreground leading-tight"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Let's work on
            <br />
            <span className="text-primary">amazing</span>  {/* CUSTOMISE: The purple/accent word */}
            <br />
            projects together
          </motion.h2>

          <motion.div
            className="mt-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* CUSTOMISE: The email address the "Get in Touch" button links to */}
            <MagneticButton
              href="mailto:josedhlamini9@gmail.com"
              className="border border-primary text-primary px-8 py-5 hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
            >
              <Mail className="w-4 h-4" />
              {/* CUSTOMISE: The call-to-action button text */}
              <span>Get in Touch</span>
              <ArrowUpRight className="w-4 h-4" />
            </MagneticButton>
          </motion.div>
        </div>

        <motion.div
          className="space-y-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Email */}
          <div>
            <p className="font-mono text-xs text-muted-foreground tracking-widest uppercase mb-3">
              Email
            </p>
            {/* CUSTOMISE: Your contact email address */}
            <a
              href="mailto:josedhlamini9@gmail.com"
              className="text-xl md:text-2xl font-inter font-light text-foreground hover:text-primary transition-colors duration-300 flex items-center gap-2"
            >
              <Mail className="w-4 h-4 text-primary shrink-0" />
              josedhlamini9@gmail.com
            </a>
          </div>

          {/* Phone */}
          <div>
            <p className="font-mono text-xs text-muted-foreground tracking-widest uppercase mb-3">
              Phone
            </p>
            {/* CUSTOMISE: Your phone number */}
            <a
              href="tel:+27641388011"
              className="text-xl md:text-2xl font-inter font-light text-foreground hover:text-primary transition-colors duration-300 flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-primary shrink-0" />
              064 138 8011
            </a>
          </div>

          {/* Location */}
          <div>
            <p className="font-mono text-xs text-muted-foreground tracking-widest uppercase mb-3">
              Location
            </p>
            <div className="flex items-center gap-2 text-foreground">
              <MapPin className="w-4 h-4 text-primary shrink-0" />
              {/* CUSTOMISE: Your city / location */}
              <span className="text-xl md:text-2xl font-inter font-light">
                Cape Town, South Africa
              </span>
            </div>
          </div>

          {/* Social links */}
          <div>
            <p className="font-mono text-xs text-muted-foreground tracking-widest uppercase mb-3">
              Connect
            </p>
            <div className="flex flex-col gap-3">
              {/* CUSTOMISE: Your LinkedIn URL */}
              <a
                href="www.linkedin.com/in/jose-dhlamini-30b1212b7"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-lg font-inter font-light text-foreground hover:text-primary transition-colors duration-300"
              >
                <Linkedin className="w-4 h-4 text-primary shrink-0" />
                LinkedIn
              </a>
              {/* CUSTOMISE: Your GitHub URL */}
              <a
                href="https://github.com/Jo-Eazy"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-lg font-inter font-light text-foreground hover:text-primary transition-colors duration-300"
              >
                <Github className="w-4 h-4 text-primary shrink-0" />
                GitHub
              </a>
            </div>
          </div>

          {/* Availability indicator */}
          <div>
            <p className="font-mono text-xs text-muted-foreground tracking-widest uppercase mb-3">
              Availability
            </p>
            <div className="flex items-center gap-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
              </span>
              {/* CUSTOMISE: Your availability status */}
              <span className="text-lg font-inter font-light text-foreground">
                Open to opportunities
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
