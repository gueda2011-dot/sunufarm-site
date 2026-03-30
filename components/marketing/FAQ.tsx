"use client";

import { useState } from "react";

const faqs = [
  {
    question: "À qui s'adresse SunuFarm ?",
    answer:
      "SunuFarm s&apos;adresse aux éleveurs avicoles, aux exploitations en croissance et aux structures plus organisées qui veulent mieux piloter les opérations, les coûts et les équipes.",
  },
  {
    question: "Que permet déjà SunuFarm aujourd'hui ?",
    answer:
      "La plateforme couvre déjà les fermes, les bâtiments, les lots, la saisie terrain, les achats, les ventes, le stock, les finances, les rapports, les équipes et les droits d&apos;accès. L&apos;objectif est d&apos;avoir un outil de gestion avicole complet, pas seulement un module d&apos;analyse.",
  },
  {
    question: "L'IA de SunuFarm, c'est quoi exactement ?",
    answer:
      "Ce n&apos;est pas un chatbot généraliste. L&apos;IA sert à relire les données d&apos;un lot pour faire ressortir des risques, des écarts et des points d&apos;attention concrets afin d&apos;aider à décider plus vite.",
  },
  {
    question: "L'IA est-elle disponible dans toutes les formules ?",
    answer:
      "Non. Basic se concentre sur la gestion et l&apos;organisation. Pro ajoute l&apos;analyse IA des lots avec un cadre maîtrisé. Business va plus loin avec un niveau d&apos;analyse et de pilotage plus avancé.",
  },
  {
    question: "SunuFarm fonctionne-t-il bien sur mobile ?",
    answer:
      "Oui. L&apos;application est pensée pour le terrain, avec un accès navigateur mobile, une installation PWA et plusieurs parcours déjà adaptés à l&apos;usage sur téléphone.",
  },
  {
    question: "Peut-on gérer plusieurs utilisateurs ?",
    answer:
      "Oui. Le propriétaire peut organiser l&apos;accès des membres de l&apos;équipe et ajuster les modules visibles selon les rôles et les besoins.",
  },
  {
    question: "Puis-je changer de formule plus tard ?",
    answer:
      "Oui. Vous pouvez commencer simplement, puis passer à une formule plus riche quand l&apos;exploitation gagne en volume, en équipe ou en exigences de pilotage.",
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-100 dark:border-white/10">
      <button
        onClick={() => setOpen((value) => !value)}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <span className="font-semibold text-gray-900 dark:text-white">{question}</span>
        <span
          className={`flex-shrink-0 text-lg text-green-700 transition-transform duration-200 ${
            open ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>
      {open ? <p className="pb-5 text-sm leading-relaxed text-gray-500 dark:text-gray-400">{answer}</p> : null}
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="bg-white px-5 py-14 dark:bg-[#07110c] md:py-20">
      <div className="mx-auto max-w-3xl">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
            Questions fréquentes
          </h2>
        </div>

        <div>
          {faqs.map((faq) => (
            <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}
