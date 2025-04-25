
import { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

// Lazy load the Scene3D component to improve initial load time
const Scene3D = lazy(() => import('@/components/scene/Scene3D').catch(() => {
  console.error('Failed to load Scene3D component');
  return { default: () => <div className="fixed inset-0 flex items-center justify-center">3D Scene failed to load</div> }
}));

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Suspense fallback={
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="animate-pulse text-primary">Loading 3D Scene...</div>
        </div>
      }>
        <Scene3D />
      </Suspense>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <ContactSection />
        </main>
        <Footer />
      </motion.div>
    </div>
  );
};

export default Index;
