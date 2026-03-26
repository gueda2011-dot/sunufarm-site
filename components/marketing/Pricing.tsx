const plans = [
  {
    name: "Basic",
    price: "5 000",
    tagline: "Commencez a suivre et organiser votre elevage",
    description:
      "Pour les eleveurs qui veulent sortir du pilotage approximatif et structurer leurs informations de terrain.",
    features: [
      "Suivi des lots et mortalites",
      "Enregistrement des depenses",
      "Historique des cycles",
      "Acces web sur mobile et ordinateur",
      "Sans analyse IA",
    ],
    cta: "Commencer avec Basic",
    highlighted: false,
    audience: "Pour demarrer simplement",
    aiLabel: "IA incluse : non",
  },
  {
    name: "Pro",
    price: "10 000",
    tagline: "Pilotez la rentabilite et reduisez les pertes",
    description:
      "Pour les eleveurs serieux qui veulent decider avec des chiffres fiables et une analyse plus rapide des lots.",
    features: [
      "Tout ce qui est dans Basic",
      "Bilan de rentabilite par lot",
      "Analyse IA des lots",
      "Recommandations standards",
      "Quotas d'analyse limites",
      "Alertes et indicateurs de performance",
      "Rapports et tableaux de bord",
      "Export des donnees",
    ],
    cta: "Choisir Pro",
    highlighted: true,
    audience: "Offre recommandee",
    aiLabel: "IA incluse : oui, en quota maitrise",
  },
  {
    name: "Business",
    price: "25 000",
    tagline: "Pilotez plusieurs operations avec plus de controle",
    description:
      "Pour les grosses fermes, entreprises et structures multi-sites qui veulent plus de profondeur d'analyse et de coordination.",
    features: [
      "Tout ce qui est dans Pro",
      "Gestion multi-sites",
      "Gestion des equipes et acces",
      "Analyse IA des lots avec insights plus pousses",
      "Comparaisons plus profondes entre lots et sites",
      "Traitement prioritaire",
      "Pilotage global et comparatif",
      "Support prioritaire",
    ],
    cta: "Parler a l'equipe",
    highlighted: false,
    audience: "Pour fermes structurees et entreprises",
    aiLabel: "IA incluse : priorite et analyse avancee",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-white px-5 py-14 md:py-20">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            Des offres claires selon votre niveau de pilotage
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-gray-500">
            {`Commencez avec l'essentiel, passez a l'analyse metier quand vous voulez`}
            {" "}
            mieux comprendre vos pertes, puis gagnez en controle quand vos operations grandissent.
          </p>
        </div>

        <div className="mb-8 rounded-3xl border border-amber-100 bg-amber-50 px-5 py-4 text-sm text-amber-900">
          {`L'acces d'essai donne seulement quelques analyses IA. L'IA n'est pas incluse`}
          {" "}
          dans Basic, elle devient un vrai levier dans Pro et va plus loin dans Business.
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl border p-6 ${
                plan.highlighted
                  ? "border-green-600 bg-green-700 text-white shadow-lg"
                  : "border-gray-100 bg-white shadow-sm"
              }`}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-amber-400 px-4 py-0.5 text-xs font-bold text-gray-900">
                  Recommandee
                </span>
              )}

              <div>
                <p
                  className={`text-xs font-semibold uppercase tracking-[0.16em] ${
                    plan.highlighted ? "text-green-200" : "text-gray-500"
                  }`}
                >
                  {plan.audience}
                </p>
                <p
                  className={`text-sm font-semibold uppercase tracking-wide ${
                    plan.highlighted ? "text-green-200" : "text-green-700"
                  }`}
                >
                  {plan.name}
                </p>
                <p className={`mt-1 text-3xl font-bold ${plan.highlighted ? "text-white" : "text-gray-900"}`}>
                  {plan.price}{" "}
                  <span
                    className={`text-base font-normal ${
                      plan.highlighted ? "text-green-200" : "text-gray-400"
                    }`}
                  >
                    FCFA / mois
                  </span>
                </p>
                <p className={`mt-2 font-semibold ${plan.highlighted ? "text-white" : "text-gray-800"}`}>
                  {plan.tagline}
                </p>
                <p className={`mt-1 text-sm ${plan.highlighted ? "text-green-100" : "text-gray-500"}`}>
                  {plan.description}
                </p>
                <div
                  className={`mt-4 inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                    plan.highlighted ? "bg-white/15 text-white" : "bg-green-50 text-green-700"
                  }`}
                >
                  {plan.aiLabel}
                </div>
              </div>

              <ul className="mt-5 flex-1 space-y-2">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className={`flex items-start gap-2 text-sm ${
                      plan.highlighted ? "text-green-100" : "text-gray-600"
                    }`}
                  >
                    <span className={`mt-0.5 ${plan.highlighted ? "text-green-300" : "text-green-600"}`}>
                      +
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`mt-6 block rounded-xl px-5 py-3 text-center text-sm font-semibold transition-colors ${
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
