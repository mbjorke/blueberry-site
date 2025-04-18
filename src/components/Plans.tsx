import React from "react";

import { TierIcons, CheckIcon } from './icons/HeroIcons';

const services = [
  {
    title: "Starter",
    price: "€1299 (One-time)",
    features: [
      "A responsive landing page designed in Framer",
      "Unlimited text changes",
      "Two design revisions",
      "Handover for full site control",
      "Availability: 3/4 spots left this month"
    ],
    cta: {
      label: "Get Started",
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

const Plans = () => (
  <section className="py-20 px-4 max-w-6xl mx-auto rounded-3xl bg-transparent">
    <h2 className="text-4xl font-extrabold mb-12 text-center tracking-tight text-white drop-shadow-lg">Our Service Tiers</h2>
    <div className="grid md:grid-cols-3 gap-8">
      {services.map((service, idx) => (
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
          </div>
          <a
            href={service.cta.url}
            className="mt-4 w-full inline-block px-6 py-3 rounded-xl font-semibold text-center transition-colors duration-200 text-lg shadow-lg border-2 bg-white/10 text-white border-white/20 hover:bg-white/20 hover:text-blue-200"
          >
            {service.cta.label}
          </a>
        </div>
      ))}
    </div>
  </section>
);

export default Plans;
