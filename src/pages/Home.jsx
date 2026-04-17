import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ProjectGallery from '../components/ProjectGallery';
import ServicesSection from '../components/ServicesSection';
import ContactSection from '../components/ContactSection';
import TestimonialsSection from '../components/TestimonialsSection';
import Footer from '../components/Footer';
import ScrollProgress from '../components/ScrollProgress';

// Page layout — sections appear in this order on the page.
// CUSTOMISE: To reorder sections, simply move the component lines around.
export default function Home() {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <ScrollProgress />
      <Navigation />
      {/* 00 — Landing */}
      <HeroSection />
      {/* 01 — About Me */}
      <AboutSection />
      {/* 02 — Selected Work / Projects */}
      <ProjectGallery />
      {/* 03 — Skills & Expertise */}
      <ServicesSection />
      {/* 04 — Contact */}
      <ContactSection />
      {/* 05 — What My Peers Say */}
      <TestimonialsSection />
      <Footer />
    </div>
  );
}
