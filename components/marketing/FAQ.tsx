"use client";

import { useState } from "react";

const faqs = [
  {
    question: "A qui s'adresse SunuFarm ?",
    answer:
      "SunuFarm s'adresse aux élevages avicoles qui veulent aller au-delà de la simple saisie: petites fermes, exploitations en croissance et structures multi-fermes.",
  },
  {
    question: "Que permet SunuFarm aujourd'hui ?",
    answer:
      "La plateforme couvre déjà la saisie journalière simple, la rentabilité par lot, le prix minimum de vente, les alertes intelligentes, les actions immédiates depuis les alertes, les reports, le multi-fermes et la gestion équipe / rôles selon la formule.",
  },
  {
    question: "SunuFarm sert-il seulement à saisir des données ?",
    answer:
      "Non. La saisie n'est que la base. La vraie valeur est dans la lecture économique par lot, les alertes intelligentes, les reports et la capacité à agir vite sur ce qui dérape.",
  },
  {
    question: "Que trouve-t-on dans PRO ?",
    answer:
      "PRO est la formule clé pour piloter la rentabilité: bilans par lot, prix minimum de vente, alertes intelligentes, actions immédiates depuis l'alerte et reports de pilotage.",
  },
  {
    question: "Que change BUSINESS par rapport à PRO ?",
    answer:
      "BUSINESS ajoute surtout l'organisation à plus grande échelle: multi-fermes, équipe, rôles et une lecture consolidée adaptée aux structures plus organisées.",
  },
  {
    question: "Peut-on commencer en FREE puis évoluer ?",
    answer:
      "Oui. La logique de l'offre est progressive: FREE pour découvrir, STARTER pour structurer, PRO pour piloter économiquement et BUSINESS pour coordonner à plus grande échelle.",
  },
  {
    question: "Peut-on vous parler directement sur WhatsApp ?",
    answer:
      "Oui. Le site met en avant un CTA WhatsApp pour discuter rapidement de votre contexte, du pricing et de la formule la plus adaptée.",
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
