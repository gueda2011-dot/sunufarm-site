const plans = [
  {
    name: "FREE",
    price: "0",
    tagline: "Découvrez SunuFarm et lancez un premier suivi",
    description:
      "Pour tester le mode de travail SunuFarm et sortir du suivi trop dispersé.",
    features: [
      "1 ferme de démarrage",
      "Lots et saisie journalière simple",
      "Accès mobile et ordinateur",
      "Lecture de base pour découvrir l'app",
    ],
    cta: "Commencer en Free",
    audience: "Pour découvrir le produit",
    label: "Base simple",
    highlighted: false,
  },
  {
    name: "STARTER",
    price: "3 000",
    tagline: "Structurez une ferme avec des chiffres propres",
    description:
      "Pour passer d'une gestion approximative à une base claire, exploitable et suivie dans le temps.",
    features: [
      "Tout ce qui est dans FREE",
      "Charges, ventes et dépenses",
      "Reports essentiels",
      "Historique plus fiable",
      "Première organisation de l'exploitation",
    ],
    cta: "Passer en Starter",
    audience: "Pour poser la base",
    label: "Organisation simple",
    highlighted: false,
  },
  {
    name: "PRO",
    price: "10 000",
    tagline: "Pilotez la rentabilité lot par lot",
    description:
      "Pour les exploitations qui veulent décider avec des chiffres économiques clairs et réagir plus vite.",
    features: [
      "Tout ce qui est dans STARTER",
      "Bilans de rentabilité par lot",
      "Prix minimum de vente",
      "Alertes intelligentes",
      "Actions immédiates depuis les alertes",
      "Reports de pilotage",
    ],
    cta: "Choisir Pro",
    audience: "Le plan central",
    label: "Décision économique",
    highlighted: true,
    badge: "Recommandé",
  },
  {
    name: "BUSINESS",
    price: "25 000",
    tagline: "Coordonnez plusieurs fermes et plusieurs rôles",
    description:
      "Pour les structures qui ont besoin d'un pilotage transverse, d'une équipe organisée et d'une lecture consolidée.",
    features: [
      "Tout ce qui est dans PRO",
      "Multi-fermes",
      "Équipe et rôles",
      "Lecture consolidée de l'activité",
      "Reports adaptés aux structures organisées",
    ],
    cta: "Choisir Business",
    audience: "Pour les opérations plus structurées",
    label: "Pilotage multi-fermes",
    highlighted: false,
  },
];

function cardClasses(highlighted: boolean) {
  if (!highlighted) {
    return "border-gray-100 bg-white shadow-sm dark:border-white/10 dark:bg-[#101914] dark:shadow-none";
  }

  return "border-green-500 bg-green-700 text-white shadow-xl ring-4 ring-green-200/70";
}

function textTone(slot: "eyebrow" | "priceSub" | "body" | "pill" | "bullet") {
  switch (slot) {
    case "eyebrow":
      return "text-green-200";
    case "priceSub":
      return "text-green-200";
    case "body":
      return "text-green-100";
    case "pill":
      return "bg-white/15 text-white";
    case "bullet":
      return "text-green-300";
  }
}

export default function Pricing() {
  return (
    <section id="pricing" className="bg-white px-5 py-14 dark:bg-[#07110c] md:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
            Une progression simple: FREE, STARTER, PRO, BUSINESS
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-gray-500 dark:text-gray-400">
            Vous pouvez commencer gratuitement, structurer une ferme, passer au pilotage
            économique par lot, puis organiser plusieurs fermes et plusieurs rôles.
          </p>
        </div>

        <div className="mb-8 rounded-3xl border border-amber-100 bg-amber-50 px-5 py-4 text-sm text-amber-900 dark:border-amber-400/25 dark:bg-amber-500/10 dark:text-amber-200">
          Le cœur de la valeur se situe dans PRO: rentabilité par lot, prix minimum de vente,
          alertes intelligentes et actions immédiates. BUSINESS étend ensuite ce pilotage à
          une organisation plus large.
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl border p-6 ${cardClasses(plan.highlighted)}`}
            >
              {plan.highlighted ? (
                <div className="absolute -top-4 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full bg-emerald-300 px-4 py-1 text-xs font-bold text-gray-900 shadow-sm">
                  <span>{plan.badge}</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-current" />
                  <span>{plan.name}</span>
                </div>
              ) : null}

              <div>
                <p
                  className={`text-xs font-semibold uppercase tracking-[0.16em] ${
                    plan.highlighted ? textTone("eyebrow") : "text-gray-500 dark:text-gray-400"
                  }`}
                >
                  {plan.audience}
                </p>
                <p
                  className={`text-sm font-semibold uppercase tracking-wide ${
                    plan.highlighted ? textTone("eyebrow") : "text-green-700 dark:text-green-300"
                  }`}
                >
                  {plan.name}
                </p>
                <p
                  className={`mt-1 text-3xl font-bold ${
                    plan.highlighted ? "text-white" : "text-gray-900 dark:text-white"
                  }`}
                >
                  {plan.price}{" "}
                  <span
                    className={`text-base font-normal ${
                      plan.highlighted ? textTone("priceSub") : "text-gray-400 dark:text-gray-500"
                    }`}
                  >
                    FCFA / mois
                  </span>
                </p>
                <p
                  className={`mt-2 font-semibold ${
                    plan.highlighted ? "text-white" : "text-gray-800 dark:text-gray-100"
                  }`}
                >
                  {plan.tagline}
                </p>
                <p
                  className={`mt-1 text-sm ${
                    plan.highlighted ? textTone("body") : "text-gray-500 dark:text-gray-400"
                  }`}
                >
                  {plan.description}
                </p>
                <div
                  className={`mt-4 inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                    plan.highlighted
                      ? textTone("pill")
                      : "bg-green-50 text-green-700 dark:bg-green-500/15 dark:text-green-300"
                  }`}
                >
                  {plan.label}
                </div>
              </div>

              <ul className="mt-5 flex-1 space-y-2">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className={`flex items-start gap-2 text-sm ${
                      plan.highlighted ? textTone("body") : "text-gray-600 dark:text-gray-300"
                    }`}
                  >
                    <span className={`mt-0.5 ${plan.highlighted ? textTone("bullet") : "text-green-600"}`}>
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
