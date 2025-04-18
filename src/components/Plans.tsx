import React, { useState } from "react";

import { TierIcons, CheckIcon } from './icons/HeroIcons';

const services = [
  {
    title: "Starter",
    displayTitle: "Landing Page",
    subtitle: "Ideal for designing or redesigning website to double your conversion rates",
    price: "$490 + [fixed]",
    badge: "15% off for the first clients",
    extra: "Better email? Let's chat >",
    features: [
      "Timeline: 7–10 days",
      "1–4 unique pages",
      "3D visuals, interactive animations, and custom illustrations",
      "Interactive prototype",
      "Development-ready files in Figma",
      "5/7 Communication via Slack & Zoom",
      "50/25/25 secure payment"
    ],
    addOn: {
      label: "+No-code Development",
      price: "$150"
    },
    cta: {
      label: "Book a 15-min call",
      url: "#contact"
    },
    highlight: false
  },
  {
    title: "Professional",
    price: "€2499/month",
    features: [
      "Ongoing web/product development partnership",
      "Project planning, vibe coding, app specs, web building, prototyping, UX design/research",
      "Clear requirement gathering",
      "Kanban board for backlog management",
      "Fast feedback loop",
      "Flexible engagement: pause or cancel anytime"
    ],
    cta: {
      label: "Book Consultation",
      url: "#contact"
    },
    highlight: true
  },
  {
    title: "Enterprise",
    price: "Custom Pricing",
    features: [
      "Tailored solutions for large-scale projects",
      "Dedicated account manager",
      "Priority support",
      "Advanced integrations",
      "Custom workflow and onboarding"
    ],
    cta: {
      label: "Contact Us",
      url: "#contact"
    },
    highlight: false
  }
];

const Plans = () => {
  // Toggle state for the add-on in the Starter card
  const [starterAddon, setStarterAddon] = useState(false);
  return (
    <section className="py-20 px-4 max-w-6xl mx-auto rounded-3xl bg-transparent">
      <h2 className="text-4xl font-extrabold mb-12 text-center tracking-tight text-white drop-shadow-lg">Our Service Tiers</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, idx) => {
          // Compute price for Starter with add-on
          let displayPrice = service.price;
          if (idx === 0 && starterAddon && service.addOn) {
            // Extract numeric part and sum for demonstration (assumes $)
            const base = parseFloat(service.price.replace(/[^\d.]/g, ""));
            const addon = parseFloat(service.addOn.price.replace(/[^\d.]/g, ""));
            if (!isNaN(base) && !isNaN(addon)) {
              displayPrice = `$${base + addon} + [fixed]`;
            }
          }
          return (
            <div
              key={idx}
              className={`relative rounded-[24px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.25)] bg-[linear-gradient(-47.07deg,_#056c7e_0%,_rgb(5,35,45)_100%)] p-12 flex flex-col justify-between transition-all duration-200 brightness-100 hover:brightness-125
                ${service.highlight ? 'scale-105 z-10 ring-2 ring-cyan-400' : ''}`}
            >
              {/* Tier Icon */}
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 rounded-full p-5 shadow-lg flex items-center justify-center w-20 h-20 bg-[#232946] border-4 border-white/10">
                {(() => {
                  const Icon = TierIcons[service.title as keyof typeof TierIcons];
                  return <Icon className="w-10 h-10 text-white" aria-label={service.title + ' icon'} />;
                })()}
              </div>
              <div className="mt-14 flex flex-col items-center">
                {/* Custom rendering for the first card (Landing Page) */}
                {idx === 0 ? (
                  <>
                    {/* Badge */}
                    <div className="mb-2 w-full flex justify-end">
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 drop-shadow-md">
                        {service.badge}
                      </span>
                    </div>
                    <h3 className="text-3xl font-extrabold mb-2 text-left w-full tracking-tight text-black drop-shadow-md">
                      {service.displayTitle}
                    </h3>
                    <div className="text-gray-500 text-base w-full mb-2 text-left">{service.subtitle}</div>
                    <div className="text-left w-full mb-4">
                      <span className="inline-block px-2 py-1 rounded font-extrabold text-3xl tracking-tight text-black">
                        {displayPrice}
                      </span>
                    </div>
                    {/* Extra info */}
                    <div className="w-full text-left text-black font-medium mb-2">{service.extra}</div>
                    {/* Features (split into two columns for visual similarity) */}
                    <div className="flex w-full gap-4 mb-4">
                      <ul className="flex-1 space-y-3">
                        {service.features.slice(0, Math.ceil(service.features.length / 2)).map((feature, i) => (
                          <li key={i} className="flex items-start text-base text-gray-700">
                            <CheckIcon className="w-5 h-5 mr-2 mt-1 flex-shrink-0 text-cyan-600" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <ul className="flex-1 space-y-3">
                        {service.features.slice(Math.ceil(service.features.length / 2)).map((feature, i) => (
                          <li key={i} className="flex items-start text-base text-gray-700">
                            <CheckIcon className="w-5 h-5 mr-2 mt-1 flex-shrink-0 text-cyan-600" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    {/* Add-on toggle (interactive) */}
                    {service.addOn && (
                      <div className="w-full flex items-center bg-gray-100 rounded-xl px-4 py-3 mb-4">
                        <div className="flex items-center mr-3">
                          <span className="relative inline-block w-10 mr-2 align-middle select-none">
                            <input
                              type="checkbox"
                              checked={starterAddon}
                              onChange={() => setStarterAddon((v) => !v)}
                              className="absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                              style={{ left: 0, top: 0 }}
                            />
                            <span className="block overflow-hidden h-6 rounded-full bg-gray-300"></span>
                          </span>
                        </div>
                        <span className="text-base font-semibold text-gray-700">{service.addOn.label}: <span className="font-bold">{service.addOn.price}</span></span>
                      </div>
                    )}
                  </>
                ) : (
                  <>
                    <h3 className="text-2xl font-bold mb-2 text-center tracking-tight flex items-center justify-center gap-2 uppercase text-white drop-shadow-md">
                      {service.title}
                    </h3>
                    <div className="text-center mb-6">
                      <span className="inline-block px-5 py-2 rounded-full font-extrabold text-3xl shadow-lg tracking-tight bg-white/10 text-white border border-white/20">
                        {service.price}
                      </span>
                    </div>
                    <ul className="mb-8 space-y-3">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start text-base text-white/90">
                          <CheckIcon className="w-5 h-5 mr-2 mt-1 flex-shrink-0 text-white/80" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
              <a
                href={service.cta.url}
                className="mt-4 w-full inline-block px-6 py-3 rounded-xl font-semibold text-center transition-colors duration-200 text-lg shadow-lg border-2 bg-white/10 text-white border-white/20 hover:bg-white/20 hover:text-blue-200"
              >
                {service.cta.label}
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Plans;
