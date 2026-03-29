const plans = [
  {
    name: "Basic",
    price: "5 000",
    tagline: "Posez une base propre pour votre exploitation",
    description:
      "Pour les exploitations qui veulent sortir de la gestion approximative et centraliser les donnees essentielles.",
    features: [
      "Fermes, batiments et lots",
      "Saisie quotidienne de base",
      "Achats, ventes et depenses essentielles",
      "Acces mobile et ordinateur",
      "Historique d'exploitation",
      "Sans analyse IA",
    ],
    cta: "Commencer avec Basic",
    highlighted: false,
    audience: "Pour demarrer proprement",
    aiLabel: "IA incluse : non",
  },
  {
    name: "Pro",
    price: "10 000",
    tagline: "Passez d'une gestion basique a un vrai pilotage",
    description:
      "Pour les exploitations qui veulent suivre la performance, mieux arbitrer et aller plus loin dans l'analyse.",
    features: [
      "Tout ce qui est dans Basic",
      "Rapports et tableaux de bord",
      "Bilans de rentabilite par lot",
      "Analyse IA des lots",
      "Recommandations standards",
      "Alertes et indicateurs de performance",
      "Exports de donnees",
    ],
    cta: "Choisir Pro",
    highlighted: true,
    audience: "Plan le plus choisi",
    aiLabel: "IA incluse : oui, en quota maitrise",
  },
  {
    name: "Business",
    price: "25 000",
    tagline: "Equipez une organisation plus exigeante",
    description:
      "Pour les structures qui veulent encadrer plusieurs utilisateurs, mieux organiser les acces et piloter avec plus de profondeur.",
    features: [
      "Tout ce qui est dans Pro",
      "Gestion des equipes et acces",
      "Organisation plus adaptee aux operations multi-sites",
      "Comparaisons plus profondes entre lots et exploitations",
      "Analyse IA avec niveau avance",
      "Pilotage plus global de l'activite",
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
    <section id="pricing" className="bg-white px-5 py-14 dark:bg-[#07110c] md:py-20">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
            Des formules simples selon votre niveau d&apos;organisation
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-gray-500 dark:text-gray-400">
            Commencez avec l&apos;essentiel, ajoutez plus de pilotage et d&apos;analyse quand
            l&apos;exploitation gagne en volume, en equipe et en exigence.
          </p>
        </div>

        <div className="mb-8 rounded-3xl border border-amber-100 bg-amber-50 px-5 py-4 text-sm text-amber-900 dark:border-amber-400/25 dark:bg-amber-500/10 dark:text-amber-200">
          L&apos;essai permet de decouvrir la plateforme. L&apos;IA n&apos;est pas la base du
          produit : elle vient en complement dans Pro et Business pour enrichir
          l&apos;analyse.
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl border p-6 ${
                plan.highlighted
                  ? "border-green-500 bg-green-700 text-white shadow-xl ring-4 ring-green-200/70"
                  : "border-gray-100 bg-white shadow-sm dark:border-white/10 dark:bg-[#101914] dark:shadow-none"
              }`}
            >
              {plan.highlighted ? (
                <div className="absolute -top-4 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full bg-amber-400 px-4 py-1 text-xs font-bold text-gray-900 shadow-sm">
                  <span>Recommandee</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-gray-900" />
                  <span>Pro</span>
                </div>
              ) : null}

              <div>
                <p
                  className={`text-xs font-semibold uppercase tracking-[0.16em] ${
                    plan.highlighted ? "text-green-200" : "text-gray-500 dark:text-gray-400"
                  }`}
                >
                  {plan.audience}
                </p>
                <p
                  className={`text-sm font-semibold uppercase tracking-wide ${
                    plan.highlighted ? "text-green-200" : "text-green-700 dark:text-green-300"
                  }`}
                >
                  {plan.name}
                </p>
                <p className={`mt-1 text-3xl font-bold ${plan.highlighted ? "text-white" : "text-gray-900 dark:text-white"}`}>
                  {plan.price}{" "}
                  <span
                    className={`text-base font-normal ${
                      plan.highlighted ? "text-green-200" : "text-gray-400 dark:text-gray-500"
                    }`}
                  >
                    FCFA / mois
                  </span>
                </p>
                <p className={`mt-2 font-semibold ${plan.highlighted ? "text-white" : "text-gray-800 dark:text-gray-100"}`}>
                  {plan.tagline}
                </p>
                <p className={`mt-1 text-sm ${plan.highlighted ? "text-green-100" : "text-gray-500 dark:text-gray-400"}`}>
                  {plan.description}
                </p>
                <div
                  className={`mt-4 inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                    plan.highlighted ? "bg-white/15 text-white" : "bg-green-50 text-green-700 dark:bg-green-500/15 dark:text-green-300"
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
                      plan.highlighted ? "text-green-100" : "text-gray-600 dark:text-gray-300"
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
                    : "border border-green-700 text-green-700 hover:bg-green-50 dark:border-green-400 dark:text-green-300 dark:hover:bg-white/5"
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
