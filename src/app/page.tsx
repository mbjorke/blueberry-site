"use client"; // Ensure this is at the very top

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';

type Language = 'en' | 'sv';

export default function Home() {
  const [language, setLanguage] = useState<Language>('en');

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar language={language} setLanguage={setLanguage} />
      <Hero language={language} />
      {/* Other components */}
    </main>
  );
}