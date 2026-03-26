"use client";

import { useState } from "react";

const faqs = [
  {
    question: "À qui s'adresse SunuFarm ?",
    answer:
      "SunuFarm s'adresse aux éleveurs avicoles de toutes tailles, des petites fermes aux entreprises multi-sites. Si vous gérez des poulets de chair, des pondeuses ou tout autre volaille, SunuFarm peut vous aider.",
  },
  {
    question: "Est-ce adapté aux petites fermes ?",
    answer:
      "Oui. Le plan Basic est conçu pour les petits éleveurs qui souhaitent commencer à organiser leur activité sans prise de tête. L'application est simple à utiliser, même sans expérience technique.",
  },
  {
    question: "Puis-je changer d'abonnement ?",
    answer:
      "Oui, vous pouvez passer d'un plan à l'autre à tout moment. Commencez avec ce qui vous convient, et évoluez quand vous êtes prêt.",
  },
  {
    question: "Le plan Pro est-il suffisant pour une ferme en croissance ?",
    answer:
      "Oui. Le Pro vous donne accès aux bilans de rentabilité, aux alertes et aux rapports — tout ce qu'il faut pour piloter votre croissance. Si vous dépassez un seul site ou avez besoin de gérer des équipes, le Business prend le relais.",
  },
  {
    question: "Le plan Business convient-il à plusieurs fermes ?",
    answer:
      "Absolument. Le Business est conçu pour les exploitations multi-sites. Vous centralisez tout, comparez les performances par site, et gardez le contrôle depuis un seul tableau de bord.",
  },
  {
    question: "Est-ce facile à prendre en main ?",
    answer:
      "SunuFarm est conçu pour être utilisé sur mobile, par des éleveurs qui n'ont pas le temps de se former des heures. L'interface est simple, directe, et vous guide pas à pas.",
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-100">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between py-5 text-left gap-4"
      >
        <span className="font-semibold text-gray-900">{question}</span>
        <span className={`flex-shrink-0 text-green-700 text-lg transition-transform duration-200 ${open ? "rotate-45" : ""}`}>
          +
        </span>
      </button>
      {open && (
        <p className="pb-5 text-sm text-gray-500 leading-relaxed">{answer}</p>
      )}
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="bg-white px-5 py-14 md:py-20">
      <div className="mx-auto max-w-3xl">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
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
