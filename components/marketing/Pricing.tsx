const plans = [
  {
    name: "FREE",
    price: "0",
    tagline: "Decouvrez SunuFarm et lancez un premier suivi",
    description:
      "Pour tester le mode de travail SunuFarm et sortir du suivi trop disperse.",
    features: [
      "1 ferme de demarrage",
      "Lots et saisie journaliere simple",
      "Acces mobile et ordinateur",
      "Lecture de base pour decouvrir l'app",
    ],
    cta: "Commencer en Free",
    audience: "Pour decouvrir le produit",
    label: "Base simple",
    highlighted: false,
  },
  {
    name: "STARTER",
    price: "3 000",
    tagline: "Structurez une ferme avec des chiffres propres",
    description:
      "Pour passer d'une gestion approximative a une base claire, exploitable et suivie dans le temps.",
    features: [
      "Tout ce qui est dans FREE",
      "Charges, ventes et depenses",
      "Reports essentiels",
      "Historique plus fiable",
      "Premiere organisation de l'exploitation",
    ],
    cta: "Passer en Starter",
    audience: "Pour poser la base",
    label: "Organisation simple",
    highlighted: false,
  },
  {
    name: "PRO",
    price: "10 000",
    tagline: "Pilotez la rentabilite lot par lot",
    description:
      "Pour les exploitations qui veulent decider avec des chiffres economiques clairs et reagir plus vite.",
    features: [
      "Tout ce qui est dans STARTER",
      "Bilans de rentabilite par lot",
      "Prix minimum de vente",
      "Alertes intelligentes",
      "Actions immediates depuis les alertes",
      "Reports de pilotage",
    ],
    cta: "Choisir Pro",
    audience: "Le plan central",
    label: "Decision economique",
    highlighted: true,
    badge: "Recommande",
  },
  {
    name: "BUSINESS",
    price: "25 000",
    tagline: "Coordonnez plusieurs fermes et plusieurs roles",
    description:
      "Pour les structures qui ont besoin d'un pilotage transverse, d'une equipe organisee et d'une lecture consolidee.",
    features: [
      "Tout ce qui est dans PRO",
      "Multi-fermes",
      "Equipe et roles",
      "Lecture consolidee de l'activite",
      "Reports adaptes aux structures organisees",
    ],
    cta: "Choisir Business",
    audience: "Pour les operations plus structurees",
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
            economique par lot, puis organiser plusieurs fermes et plusieurs roles.
          </p>
        </div>

        <div className="mb-8 rounded-3xl border border-amber-100 bg-amber-50 px-5 py-4 text-sm text-amber-900 dark:border-amber-400/25 dark:bg-amber-500/10 dark:text-amber-200">
          Le coeur de la valeur se situe dans PRO: rentabilite par lot, prix minimum de vente,
          alertes intelligentes et actions immediates. BUSINESS etend ensuite ce pilotage a
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
