'use client';
import React from 'react';
import { motion } from 'framer-motion';

const heroTranslations = {
  en: {
    title: 'Where <b>development</b> meets <b>design</b>',
    subtitle: 'Building digital products since 1997',
    description: 'I design with a kaizen mindset. \'Kai\' means \'change\' and \'zen\' means \'for the better\'. Nothing is impossible with the right tools and the right approach.',
    callToAction: 'Let’s improve your UX solutions together.',
  },
  sv: {
    title: 'Där <b>utveckling</b> möter <b>design</b>',
    subtitle: 'Bygger digitala produkter sedan 1997',
    description: 'Jag designar med en kaizen-mentalitet. \'Kai\' betyder \'förändring\' och \'zen\' betyder \'till det bättre\'. Ingenting är omöjligt med rätt verktyg och rätt tillvägagångssätt.',
    callToAction: 'Förbättra din UX-lösning tillsammans med mig.',
  },
};

interface Language {
  language: 'en' | 'sv';
}

const Hero: React.FC<{ language: Language }> = ({ language }) => {
  return (
    <section className="flex items-center justify-center min-h-screen bg-cover bg-no-repeat bg-center w-full" style={{ backgroundImage: "url('/assets/alone-surfer.jpg')" }}>
      <div className="text-left text-white p-4 max-w-[600px] mx-auto font-montserrat">
        <h6 className="mt-4 text-[12px] font-semibold uppercase tracking-widest" dangerouslySetInnerHTML={{ __html: heroTranslations[language].subtitle }} />
        <h1 className="mt-4 text-5xl leading-[1.1]" dangerouslySetInnerHTML={{ __html: heroTranslations[language].title }} />
        <p className="mt-6 font-light">{heroTranslations[language].description}</p>
        <p className="mt-8">{heroTranslations[language].callToAction}</p>
        <div className="mt-4">
          <button className="flex items-center justify-center px-6 py-3 bg-[#cffafe] rounded-full hover:bg-cyan-200 transition duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="24" height="24" fill="#05232D">
              <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
