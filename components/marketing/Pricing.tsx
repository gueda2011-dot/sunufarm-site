const plans = [
  {
    name: "Basic",
    price: "5 000",
    tagline: "Commencez à organiser votre élevage",
    description: "Pour les petits éleveurs qui veulent passer d'une gestion au hasard à une gestion structurée.",
    features: [
      "Suivi des lots et mortalités",
      "Enregistrement des dépenses",
      "Historique des cycles",
      "Accès mobile",
    ],
    cta: "Commencer avec Basic",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "10 000",
    tagline: "Réduisez les pertes et suivez votre rentabilité",
    description: "Pour les éleveurs sérieux qui veulent piloter leur activité avec des chiffres fiables.",
    features: [
      "Tout ce qui est dans Basic",
      "Bilan de rentabilité par lot",
      "Alertes et indicateurs de performance",
      "Rapports et tableaux de bord",
      "Export des données",
    ],
    cta: "Choisir Pro",
    highlighted: true,
  },
  {
    name: "Business",
    price: "20 000",
    tagline: "Pilotez plusieurs opérations avec plus de contrôle",
    description: "Pour les grosses fermes et entreprises qui gèrent plusieurs sites ou équipes.",
    features: [
      "Tout ce qui est dans Pro",
      "Gestion multi-sites",
      "Gestion des équipes et accès",
      "Pilotage global et comparatif",
      "Support prioritaire",
    ],
    cta: "Contacter l'équipe",
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-white px-5 py-14 md:py-20">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            Une offre adaptée à chaque situation
          </h2>
          <p className="mt-3 text-gray-500 max-w-xl mx-auto">
            Commencez petit, évoluez quand vous êtes prêt. Changez de plan à tout moment.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-6 flex flex-col border ${
                plan.highlighted
                  ? "border-green-600 shadow-lg"
                  : "border-gray-100 shadow-sm bg-white"
              } ${plan.highlighted ? "bg-green-700 text-white" : ""}`}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-amber-400 px-4 py-0.5 text-xs font-bold text-gray-900">
                  Recommandé
                </span>
              )}

              <div>
                <p className={`text-sm font-semibold uppercase tracking-wide ${plan.highlighted ? "text-green-200" : "text-green-700"}`}>
                  {plan.name}
                </p>
                <p className={`mt-1 text-3xl font-bold ${plan.highlighted ? "text-white" : "text-gray-900"}`}>
                  {plan.price}{" "}
                  <span className={`text-base font-normal ${plan.highlighted ? "text-green-200" : "text-gray-400"}`}>
                    FCFA / mois
                  </span>
                </p>
                <p className={`mt-2 font-semibold ${plan.highlighted ? "text-white" : "text-gray-800"}`}>
                  {plan.tagline}
                </p>
                <p className={`mt-1 text-sm ${plan.highlighted ? "text-green-100" : "text-gray-500"}`}>
                  {plan.description}
                </p>
              </div>

              <ul className="mt-5 space-y-2 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className={`flex items-start gap-2 text-sm ${plan.highlighted ? "text-green-100" : "text-gray-600"}`}>
                    <span className={`mt-0.5 ${plan.highlighted ? "text-green-300" : "text-green-600"}`}>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`mt-6 block rounded-xl px-5 py-3 text-sm font-semibold text-center transition-colors ${
                  plan.highlighted
                    ? "bg-white text-green-700 hover:bg-green-50"
                    : "border border-green-700 text-green-700 hover:bg-green-50"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
