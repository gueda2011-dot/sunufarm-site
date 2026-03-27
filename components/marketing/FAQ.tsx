"use client";

import { useState } from "react";

const faqs = [
  {
    question: "A qui s'adresse SunuFarm ?",
    answer:
      "SunuFarm s'adresse aux eleveurs avicoles, aux exploitations en croissance et aux structures plus organisees qui veulent mieux piloter les operations, les couts et les equipes.",
  },
  {
    question: "Que permet deja SunuFarm aujourd'hui ?",
    answer:
      "La plateforme couvre deja les fermes, les batiments, les lots, la saisie terrain, les achats, les ventes, le stock, les finances, les rapports, les equipes et les droits d'acces. L'objectif est d'avoir un outil de gestion avicole complet, pas seulement un module d'analyse.",
  },
  {
    question: "L'IA de SunuFarm, c'est quoi exactement ?",
    answer:
      "Ce n'est pas un chatbot generaliste. L'IA sert a relire les donnees d'un lot pour faire ressortir des risques, des ecarts et des points d'attention concrets afin d'aider a decider plus vite.",
  },
  {
    question: "L'IA est-elle disponible dans toutes les formules ?",
    answer:
      "Non. Basic se concentre sur la gestion et l'organisation. Pro ajoute l'analyse IA des lots avec un cadre maitrise. Business va plus loin avec un niveau d'analyse et de pilotage plus avance.",
  },
  {
    question: "SunuFarm fonctionne-t-il bien sur mobile ?",
    answer:
      "Oui. L'application est pensee pour le terrain, avec un acces navigateur mobile, une installation PWA et plusieurs parcours deja adaptes a l'usage sur telephone.",
  },
  {
    question: "Peut-on gerer plusieurs utilisateurs ?",
    answer:
      "Oui. Le proprietaire peut organiser l'acces des membres de l'equipe et ajuster les modules visibles selon les roles et les besoins.",
  },
  {
    question: "Puis-je changer de formule plus tard ?",
    answer:
      "Oui. Vous pouvez commencer simplement, puis passer a une formule plus riche quand l'exploitation gagne en volume, en equipe ou en exigences de pilotage.",
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
            Questions frequentes
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
