'use client';
import React from 'react';
import { motion } from 'framer-motion';
import AboutCard from './AboutCard';

type HeroProps = {
  language: 'en' | 'sv';
};

const Hero: React.FC<HeroProps> = ({ language }) => {
  return (
    <section className="relative flex items-center justify-center min-h-screen bg-cover bg-no-repeat bg-center w-full" style={{ backgroundImage: "url('/assets/alone-surfer.jpg')" }}>
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80 z-0"></div>
      <div className="relative z-10 flex flex-row items-center justify-between w-full max-w-4xl mx-auto p-8 font-montserrat">
        <div className="text-left text-white flex-1 pr-8">
          <h6 className="mt-4 text-[12px] font-semibold uppercase tracking-widest">Building digital products since 1997</h6>
          <h1 className="mt-4 text-5xl">
            Where <span className="font-extrabold text-white">development</span> meets <span className="font-extrabold text-white">design</span>
          </h1>
          <p className="mt-4 font-light">Blueberry applies a focused kaizen mindset into everything we make. 'Kai' means 'change' and 'zen' means 'for the better'.</p>
          <p className="mt-4 font-light">Let’s improve your UX solutions together.</p>
          <div className="mt-4">
            <button className="flex items-center justify-center px-6 py-3 bg-[#cffafe] rounded-full hover:bg-cyan-200 transition duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="24" height="24" fill="#05232D">
                <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
              </svg>
            </button>
          </div>
        </div>
        <div className="flex-shrink-0">
          <AboutCard />
        </div>
      </div>
    </section>
  );
};

export default Hero;
