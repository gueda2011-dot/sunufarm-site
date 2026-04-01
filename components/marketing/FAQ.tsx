"use client";

import { useState } from "react";

const faqs = [
  {
    question: "A qui s'adresse SunuFarm ?",
    answer:
      "SunuFarm s'adresse aux eleveurs avicoles, aux exploitations en croissance et aux structures plus organisees qui veulent mieux piloter les operations, les couts, le stock, les equipes et la rentabilite.",
  },
  {
    question: "Que permet SunuFarm aujourd'hui ?",
    answer:
      "La plateforme couvre deja les besoins terrain et de pilotage : fermes, batiments, lots, saisie journaliere, sante, stock aliments et medicaments, achats fournisseurs, ventes, depenses, finances, rapports, equipe, alertes push et lecture Business consolidee.",
  },
  {
    question: "Quelles fonctions predictives sont deja disponibles ?",
    answer:
      "SunuFarm propose deja trois axes predictifs utiles : prediction de rupture stock, prediction du risque mortalite sur 7 jours et projection de la marge finale d'un lot. Ces signaux sont disponibles dans Pro et Business.",
  },
  {
    question: "Que change Business par rapport a Pro ?",
    answer:
      "Pro aide surtout a piloter lot par lot. Business ajoute une vraie vue globale exploitation avec signaux prioritaires, recommandations dirigeant, export Business consolide, multi-fermes, equipe et pilotage transverse.",
  },
  {
    question: "SunuFarm fonctionne-t-il bien sur mobile ?",
    answer:
      "Oui. L'application est pensee pour le terrain, avec acces navigateur mobile, installation PWA, alertes push et un premier niveau de travail hors ligne avec resynchronisation sur les flux critiques.",
  },
  {
    question: "Peut-on gerer plusieurs utilisateurs ?",
    answer:
      "Oui. Le proprietaire peut organiser l'acces des membres de l'equipe, ajuster les modules visibles selon les roles et restreindre les droits par ferme si besoin. C'est particulierement utile avec Business.",
  },
  {
    question: "Puis-je changer de formule plus tard ?",
    answer:
      "Oui. Vous pouvez commencer avec Basic a 3 000 FCFA, passer a Pro pour mieux piloter vos lots, puis evoluer vers Business quand l'exploitation gagne en volume, en equipe ou en exigence de pilotage global.",
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
