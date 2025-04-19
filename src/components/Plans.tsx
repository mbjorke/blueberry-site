import React, { useState } from "react";

import { TierIcons, CheckIcon } from './icons/HeroIcons';

const services = [
  {
    title: "Basic",
    displayTitle: "Basic",
    subtitle: "Simple, flexible web design—one deep focus hour at a time.",
    price: "$99/mo for 3 credits", // Adjust price/credits as you wish
    badge: "15% off for early clients",
    features: [
      "Polish a section, add animation, or quick fix (1 credit)",
      "Draft the first iteration of a new or redesigned landingpage (6–8 credits)",
      "Launch a full site or major redesign (30–40 credits)",
      "Unused credits roll over for 1 month"
    ],
    cta: {
      label: "Book a free intro call",
      url: "#contact"
    },
    highlight: false
  },
  {
    title: "Plus",
    subtitle: "Ongoing design & development for teams who want to move fast.",
    badge: "Limited availability",
    price: "$2,499/month for 30 credits",
    features: [
      "Includes 30 credits/month (one credit = one deep focus hour)",
      "Use credits for any design, prototyping, or development task",
      "Prioritized queue for requests and revisions",
      "Flexible scope: multiple projects, features, or experiments",
      "Dedicated Slack/Zoom support",
      "Unused credits roll over for 1 month"
    ],
    cta: {
      label: "Book Consultation",
      url: "#contact"
    },
    highlight: true
  },
  {
    title: "Pro",
    subtitle: "Custom solutions for ambitious teams, complex products, and unique business needs.",
    price: "Custom Pricing",
    features: [
      "End-to-end product strategy & delivery",
      "Dedicated account manager",
      "Priority support & SLAs",
      "Advanced integrations & workflows",
      "Custom onboarding & training"
    ],
    cta: {
      label: "Contact Us",
      url: "#contact"
    },
    highlight: false
  }
];

const Plans = (): JSX.Element => {
  // Toggle state for the add-on in the Starter card
  const [starterAddon, setStarterAddon] = useState(false);
  return (
    <section id="pricing" className="py-24 max-w-[1400px] mx-auto px-4 rounded-3xl bg-transparent scroll-mt-24">
  <div className="mb-16">
    <h2 className="text-4xl font-extrabold mb-4 text-center tracking-tight text-neutral-50 group-hover:filter group-hover:brightness-130 drop-shadow-lg">Pricing</h2>
    <h3 className="text-2xl font-bold mb-6 text-center text-white/90 group-hover:filter group-hover:brightness-130">Scale for teams of all sizes</h3>
    <p className="text-lg text-center text-white/90 group-hover:filter group-hover:brightness-130 max-w-2xl mx-auto mb-12">
      Flexible plans designed to accommodate companies of any size, making it easy for anyone to start improving their user experiences.<br />
      <span className="block mt-2 font-medium">What is a credit? Each credit = 1 deep focus hour, dedicated to your project in either Framer or Windsurf.</span>
      <span className="block mt-4 text-white/90 group-hover:filter group-hover:brightness-130">
        <strong>Framer:</strong> Full control over content & layout, hosting included via your own creditcard, simple sites are free, Plus customers usually want their own domain name and hence pay from 5 € per month and upwards. Framer pricing: https://www.framer.com/pricing/<br />
        <strong>Windsurf:</strong> Advanced interactivity, code delivery, separate hosting (great for enterprise or custom needs).
      </span>
    </p>
  </div>

      <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
        {services.map((service, idx) => {
          let displayPrice = service.price;
          return (
            <div
              key={idx}
              className={`group relative rounded-[24px] p-12 flex flex-col justify-between transition-all duration-200
                ${service.highlight
                   ? 'z-10 ring-1 ring-cyan-400 shadow-2xl bg-gradient-to-b from-cyan-900/40 to-cyan-800/30 border border-cyan-400'
                   : 'shadow-lg bg-[linear-gradient(-47.07deg,_#056c7e_0%,_rgb(5,35,45)_100%)]'}
                hover:scale-105 hover:z-20 hover:shadow-2xl hover:ring-2 hover:ring-cyan-300 hover:bg-gradient-to-b hover:from-cyan-900/80 hover:to-cyan-800/60` }
            >
              {/* Tier Icon */}
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 rounded-full p-5 shadow-lg flex items-center justify-center w-20 h-20 bg-[#232946] border-4 border-white/10">
                {(() => {
                  const Icon = TierIcons[service.title as keyof typeof TierIcons];
                  return <Icon className="w-10 h-10 text-neutral-50 group-hover:filter group-hover:brightness-130" aria-label={service.title + ' icon'} />;
                })()}
              </div>
              <div className="mt-14 flex flex-col items-center h-full w-full group">
                {/* Custom rendering for the first card (Starter Credits) */}
                {idx === 0 ? (
                  <>
                    {/* Badge */}
                    <div className="mb-2 w-full flex justify-start">
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-neutral-900 drop-shadow-md">
                        {service.badge}
                      </span>
                    </div>
                    <h3 className="text-3xl font-extrabold mb-2 text-left w-full tracking-tight text-neutral-50 group-hover:filter group-hover:brightness-130 drop-shadow-md">
                      {service.displayTitle}
                    </h3>
                    <div className="text-white/80 group-hover:filter group-hover:brightness-130 text-base w-full mb-2 text-left font-medium">{service.subtitle}</div>
                    <div className="text-left w-full mb-3">
                      <span className="inline-block px-2 py-1 rounded font-extrabold text-4xl tracking-tight text-neutral-50 group-hover:filter group-hover:brightness-130 bg-black/20">
                        {displayPrice}
                      </span>
                    </div>
                    {/* Features (single column for clarity) */}
                    <ul className="w-full mb-4 space-y-3">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start text-base text-white/90 group-hover:filter group-hover:brightness-130">
                          <CheckIcon className="w-5 h-5 mr-2 mt-1 flex-shrink-0 text-white/90 group-hover:filter group-hover:brightness-130" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <>
                    {/* Badge for Plus/Pro */}
                    {service.badge && (
                      <div className="mb-2 w-full flex justify-start">
                        <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-neutral-900 drop-shadow-md">
                          {service.badge}
                        </span>
                      </div>
                    )}
                    <h3 className="text-3xl font-extrabold mb-2 text-left w-full tracking-tight text-neutral-50 group-hover:filter group-hover:brightness-130 drop-shadow-md">
                      {service.title}
                    </h3>
                    {service.subtitle && (
                      <div className="text-white/80 group-hover:filter group-hover:brightness-130 text-base w-full mb-2 text-left font-medium">{service.subtitle}</div>
                    )}
                    {/* For the Plus plan (idx === 1), move first two features to a paragraph above the price */}
                    {idx === 1 && (
                      <div className="text-white/90 group-hover:filter group-hover:brightness-130 text-base w-full mb-3 text-left">
                        <span className="text-base">{service.features[0]}</span><br />
                        <span className="text-base">{service.features[1]}</span>
                      </div>
                    )}
                    <div className="text-left w-full mb-3">
                      <span className="inline-block px-2 py-1 rounded font-extrabold text-4xl tracking-tight text-neutral-50 group-hover:filter group-hover:brightness-130 bg-black/20">
                        {service.price}
                      </span>
                    </div>
                    <ul className="mb-8 space-y-3 w-full">
                      {(idx === 1
                        ? service.features.slice(2)
                        : service.features
                      ).map((feature, i) => (
                        <li key={i} className="flex items-start text-base text-white/90 group-hover:filter group-hover:brightness-130">
                          <CheckIcon className="w-5 h-5 mr-2 mt-1 flex-shrink-0 text-white/90 group-hover:filter group-hover:brightness-130" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <a
                      href={service.cta.url}
                      className="mt-4 w-full inline-block px-6 py-3 rounded-xl font-semibold text-center transition-colors duration-200 text-lg shadow-lg border-2 bg-white/10 text-neutral-50 group-hover:filter group-hover:brightness-130 border-white/20 hover:bg-white/20 hover:text-white/20"
                    >
                      {service.cta.label}
                    </a>
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Plans;
