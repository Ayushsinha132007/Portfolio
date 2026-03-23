import ParticleBackground from '@/components/ParticleBackground';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import CertificatesSection from '@/components/CertificatesSection';
import EducationSection from '@/components/EducationSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <ParticleBackground />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <CertificatesSection />
      <EducationSection />
      <ContactSection />
    </div>
  );
};

export default Index;
