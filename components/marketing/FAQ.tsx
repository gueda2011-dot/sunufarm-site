"use client";

import { useState } from "react";

const faqs = [
  {
    question: "A qui s'adresse SunuFarm ?",
    answer:
      "SunuFarm s'adresse aux eleveurs avicoles, aux fermes en croissance et aux entreprises multi-sites. L'objectif reste le meme : mieux suivre les lots, controler les depenses et decider avec des chiffres fiables.",
  },
  {
    question: "L'IA de SunuFarm, c'est quoi exactement ?",
    answer:
      "Ce n'est pas un chatbot. L'IA sert a analyser les donnees d'un lot pour faire ressortir les risques, la rentabilite probable et des recommandations concretes. Elle vous aide a decider plus vite et plus clairement.",
  },
  {
    question: "L'IA est-elle disponible dans tous les plans ?",
    answer:
      "Non. Basic n'inclut pas d'IA. Le plan Pro inclut l'analyse IA des lots avec des recommandations standards et des quotas limites. Le plan Business va plus loin avec des insights plus pousses, des comparaisons plus profondes et un traitement prioritaire. L'essai donne seulement quelques analyses.",
  },
  {
    question: "Le plan Pro est-il le meilleur choix pour une ferme en croissance ?",
    answer:
      "Oui, dans la plupart des cas. Pro est le plan recommande pour les elevages qui veulent piloter la rentabilite, reduire les pertes et commencer a utiliser l'analyse IA des lots sans passer tout de suite a une organisation multi-sites.",
  },
  {
    question: "Quand faut-il passer au plan Business ?",
    answer:
      "Le plan Business est pense pour les grosses fermes, les entreprises et les exploitations qui pilotent plusieurs operations. Si vous devez comparer plusieurs sites, encadrer des equipes ou aller plus loin dans l'analyse, Business devient plus adapte.",
  },
  {
    question: "Puis-je changer d'abonnement ?",
    answer:
      "Oui. Vous pouvez evoluer de Basic a Pro, puis vers Business selon vos besoins. Cela permet de commencer simplement et d'ajouter plus d'analyse et de controle a mesure que l'exploitation se structure.",
  },
  {
    question: "Faut-il telecharger une application ?",
    answer:
      "Aujourd'hui, SunuFarm fonctionne comme application web, accessible depuis un navigateur sur ordinateur ou telephone. Une installation mobile ou desktop pourra arriver plus tard, mais elle n'est pas necessaire pour utiliser la plateforme maintenant.",
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-100">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <span className="font-semibold text-gray-900">{question}</span>
        <span
          className={`flex-shrink-0 text-lg text-green-700 transition-transform duration-200 ${
            open ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>
      {open && <p className="pb-5 text-sm leading-relaxed text-gray-500">{answer}</p>}
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="bg-white px-5 py-14 md:py-20">
      <div className="mx-auto max-w-3xl">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
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
