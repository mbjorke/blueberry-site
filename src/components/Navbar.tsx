import React from 'react';

type Language = 'en' | 'sv';

type Translations = {
  [key in Language]: {
    home: string;
    about: string;
    services: string;
    contact: string;
    projects: string;
  };
};

const translations: Translations = {
  en: {
    home: 'Home',
    about: 'About',
    services: 'Services',
    pricing: 'Pricing',
    contact: 'Contact',
    projects: 'Projects',
  },
  sv: {
    home: 'Hem',
    about: 'Om',
    services: 'Tjänster',
    pricing: 'Prissättning',
    contact: 'Kontakt',
    projects: 'Projekt',
  },
};

const Navbar: React.FC<{ language: Language; setLanguage: (lang: Language) => void }> = ({ language, setLanguage }) => {
  return (
    <nav className="sticky top-0 w-full bg-[var(--nav-background)]">
      <div className="max-w-[1400px] mx-auto flex items-center p-4">
        <img src="/blueberry-logo.svg" alt="Blueberry Logo" className="h-8" />
        <div className="flex-grow flex justify-center">
          <ul className="flex space-x-4">
            <li><a href="#home" className="button">{translations[language].home}</a></li>
            <li><a href="#about" className="button">{translations[language].about}</a></li>
            <li><a href="#services" className="button">{translations[language].services}</a></li>
            <li><a href="#pricing" className="button">{translations[language].pricing}</a></li>
            <li><a href="#contact" className="button">{translations[language].contact}</a></li>
            <li><a href="#projects" className="button">{translations[language].projects}</a></li>
          </ul>
        </div>
        <select className="button ml-4" onChange={(e) => setLanguage(e.target.value as Language)} value={language}>
          <option value="en">English</option>
          <option value="sv">Svenska</option>
        </select>
      </div>
    </nav>
  );
};

export default Navbar;