import React from 'react';

type Language = 'en' | 'sv';

type Translations = {
  [key in Language]: {
    home: string;
    about: string;
    services: string;
    pricing: string;
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
            <li>
              <button
                className="button"
                onClick={() => {
                  const target = document.getElementById('pricing');
                  if (!target) return;
                  const navbar = document.querySelector('.sticky') as HTMLElement | null;
                  const navHeight = navbar ? navbar.offsetHeight : 0;
                  const targetY = target.getBoundingClientRect().top + window.scrollY - navHeight - 12; // 12px extra offset for breathing room
                  const duration = 900;
                  const startY = window.scrollY;
                  const diff = targetY - startY;
                  let start: number | undefined = undefined;
                  console.log('Pricing nav click handler fired');
                  function easeInOutCubic(t: number) {
                    return t < 0.5
                      ? 4 * t * t * t
                      : 1 - Math.pow(-2 * t + 2, 3) / 2;
                  }
                  function step(timestamp: number) {
                    if (start === undefined) start = timestamp;
                    const elapsed = timestamp - start;
                    const progress = Math.min(elapsed / duration, 1);
                    const ease = easeInOutCubic(progress);
                    window.scrollTo(0, startY + diff * ease);
                    if (elapsed < duration) {
                      window.requestAnimationFrame(step);
                    }
                  }
                  window.requestAnimationFrame(step);
                }}
              >
                {translations[language].pricing}
              </button>
            </li>
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