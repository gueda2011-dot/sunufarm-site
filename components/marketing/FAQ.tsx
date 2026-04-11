"use client";

import { useState } from "react";

const faqs = [
  {
    question: "A qui s'adresse SunuFarm ?",
    answer:
      "SunuFarm s'adresse aux elevages avicoles qui veulent aller au-dela de la simple saisie: petites fermes, exploitations en croissance et structures multi-fermes.",
  },
  {
    question: "Que permet SunuFarm aujourd'hui ?",
    answer:
      "La plateforme couvre deja la saisie journaliere simple, la rentabilite par lot, le prix minimum de vente, les alertes intelligentes, les actions immediates depuis les alertes, les reports, le multi-fermes et la gestion equipe / roles selon la formule.",
  },
  {
    question: "SunuFarm sert-il seulement a saisir des donnees ?",
    answer:
      "Non. La saisie n'est que la base. La vraie valeur est dans la lecture economique par lot, les alertes intelligentes, les reports et la capacite a agir vite sur ce qui derape.",
  },
  {
    question: "Que trouve-t-on dans PRO ?",
    answer:
      "PRO est la formule cle pour piloter la rentabilite: bilans par lot, prix minimum de vente, alertes intelligentes, actions immediates depuis l'alerte et reports de pilotage.",
  },
  {
    question: "Que change BUSINESS par rapport a PRO ?",
    answer:
      "BUSINESS ajoute surtout l'organisation a plus grande echelle: multi-fermes, equipe, roles et une lecture consolidee adaptee aux structures plus organisees.",
  },
  {
    question: "Peut-on commencer en FREE puis evoluer ?",
    answer:
      "Oui. La logique de l'offre est progressive: FREE pour decouvrir, STARTER pour structurer, PRO pour piloter economiquement et BUSINESS pour coordonner a plus grande echelle.",
  },
  {
    question: "Peut-on vous parler directement sur WhatsApp ?",
    answer:
      "Oui. Le site met en avant un CTA WhatsApp pour discuter rapidement de votre contexte, du pricing et de la formule la plus adaptee.",
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
