import React, { useState } from 'react';
import Image from 'next/image';
import { personalInfo } from '../config/personalInfo';
/**
 * AboutCard: Visually a small card (150px) that expands on click, but semantically About section is first in DOM.
 * Interactive tilt effect, no border, matches site aesthetic, accessible.
 */
const AboutCard: React.FC = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`transition-transform duration-300 ease-in-out ${expanded ? 'scale-105 rotate-1 shadow-2xl' : 'hover:scale-105 hover:-rotate-2'} bg-gradient-to-br from-cyan-900/80 to-cyan-800/70 rounded-3xl p-4 flex flex-col items-center cursor-pointer select-none max-w-xs`}
      tabIndex={0}
      aria-expanded={expanded}
      onClick={() => setExpanded(!expanded)}
      onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && setExpanded(!expanded)}
      style={{ minWidth: 150, minHeight: 150 }}
      role="region"
      aria-label="About me card"
    >
      <Image
        src={personalInfo.avatar}
        alt="Avatar"
        width={64}
        height={64}
        className="rounded-full mb-2 drop-shadow-lg"
        priority
      />
      <div className="text-center">
      <h3 className="text-lg font-bold mb-1">{personalInfo.name}</h3>
      <p className="text-xs text-cyan-200">{personalInfo.title}</p>
        {expanded && (
          <p className="mt-2 text-sm text-cyan-100">
            Passionate about building beautiful, accessible, and performant web experiences. Always learning, always shipping.
          </p>
        )}
      </div>
    </div>
  );
};

export default AboutCard;
