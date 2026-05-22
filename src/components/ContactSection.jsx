import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  Check,
  Clock3,
  Copy,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react';
import MagneticButton from './MagneticButton';

const email = 'josedhlamini9@gmail.com';
const phoneNumber = '064 138 8011';
const phoneHref = 'tel:+27641388011';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = email;
      textarea.setAttribute('readonly', '');
      textarea.style.position = 'absolute';
      textarea.style.left = '-9999px';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
    }

    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  };

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
          <motion.h2
            className="text-3xl md:text-5xl lg:text-7xl font-inter font-light text-foreground leading-tight"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Let's build
            <br />
            <span className="text-primary">reliable</span>
            <br />
            products together
          </motion.h2>

          <motion.p
            className="text-base md:text-lg text-muted-foreground leading-relaxed mt-6 max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Remote-ready for product teams that value clear communication, structured delivery, and reliable collaboration.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <MagneticButton
              href={`mailto:${email}`}
              className="border border-primary text-primary px-6 py-4 hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
            >
              <Mail className="w-4 h-4" />
              <span>Email Me</span>
              <ArrowUpRight className="w-4 h-4" />
            </MagneticButton>

            <button
              type="button"
              onClick={copyEmail}
              className="inline-flex items-center gap-2 border border-foreground/20 px-6 py-4 font-mono text-sm tracking-wider uppercase text-foreground hover:border-primary hover:text-primary transition-colors duration-300"
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'Copied' : 'Copy Email'}</span>
            </button>

          </motion.div>
        </div>

        <motion.div
          className="space-y-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div>
            <p className="font-mono text-xs text-muted-foreground tracking-widest uppercase mb-3">
              Email
            </p>
            <a
              href={`mailto:${email}`}
              className="text-xl md:text-2xl font-inter font-light text-foreground hover:text-primary transition-colors duration-300 flex items-center gap-2"
            >
              <Mail className="w-4 h-4 text-primary shrink-0" />
              {email}
            </a>
          </div>

          <div>
            <p className="font-mono text-xs text-muted-foreground tracking-widest uppercase mb-3">
              Phone
            </p>
            <a
              href={phoneHref}
              className="text-xl md:text-2xl font-inter font-light text-foreground hover:text-primary transition-colors duration-300 flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-primary shrink-0" />
              {phoneNumber}
            </a>
          </div>

          <div>
            <p className="font-mono text-xs text-muted-foreground tracking-widest uppercase mb-3">
              Location
            </p>
            <div className="flex items-center gap-2 text-foreground">
              <MapPin className="w-4 h-4 text-primary shrink-0" />
              <span className="text-xl md:text-2xl font-inter font-light">
                Cape Town, South Africa / Remote
              </span>
            </div>
          </div>

          <div>
            <p className="font-mono text-xs text-muted-foreground tracking-widest uppercase mb-3">
              Remote Fit
            </p>
            <div className="flex items-center gap-2 text-foreground">
              <Clock3 className="w-4 h-4 text-primary shrink-0" />
              <span className="text-xl md:text-2xl font-inter font-light">
                Remote collaboration with flexible time-zone overlap
              </span>
            </div>
          </div>

          <div>
            <p className="font-mono text-xs text-muted-foreground tracking-widest uppercase mb-3">
              Connect
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="https://www.linkedin.com/in/jose-dhlamini-30b1212b7/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-lg font-inter font-light text-foreground hover:text-primary transition-colors duration-300"
              >
                <Linkedin className="w-4 h-4 text-primary shrink-0" />
                LinkedIn
              </a>
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

          <div>
            <p className="font-mono text-xs text-muted-foreground tracking-widest uppercase mb-3">
              Availability
            </p>
            <div className="flex items-center gap-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
              </span>
              <span className="text-lg font-inter font-light text-foreground">
                Open to remote opportunities with large tech teams
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
