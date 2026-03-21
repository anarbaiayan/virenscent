import { useEffect, useState } from 'react';
import { AboutSection } from './components/AboutSection';
import { AromasSection } from './components/AromasSection';
import { BenefitsSection } from './components/BenefitsSection';
import { ContactSection } from './components/ContactSection';
import { DevicesSection } from './components/DevicesSection';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Footer } from './components/Footer';
import { FaqSection } from './components/FaqSection';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { PricingSection } from './components/PricingSection';
import { SpacesSection } from './components/SpacesSection';
import { TrustSection } from './components/TrustSection';

type ThemeMode = 'light' | 'dark';

export default function App() {
  const [theme, setTheme] = useState<ThemeMode>('light');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  return (
    <div className="relative overflow-x-hidden">
      <Header
        theme={theme}
        onToggleTheme={() =>
          setTheme((currentTheme) =>
            currentTheme === 'light' ? 'dark' : 'light',
          )
        }
      />

      <main>
        <HeroSection />
        <AboutSection />
        <HowItWorksSection />
        <DevicesSection />
        <SpacesSection />
        <AromasSection />
        <BenefitsSection />
        <PricingSection />
        {/* <TrustSection /> */}
        <FaqSection />
        <ContactSection />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
