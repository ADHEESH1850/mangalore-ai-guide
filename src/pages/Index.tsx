import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import TourismSection from '@/components/TourismSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <TourismSection />
      <Features />
    </div>
  );
};

export default Index;