const plans = [
  {
    name: "Basic",
    price: "3 000",
    tagline: "Posez une base propre pour votre exploitation",
    description:
      "Pour les exploitations qui veulent sortir de la gestion approximative et centraliser les donnees essentielles.",
    features: [
      "Fermes, batiments et lots",
      "Saisie quotidienne de base",
      "Achats, ventes et depenses essentielles",
      "Acces mobile et ordinateur",
      "Historique d'exploitation",
      "Sans analyse predictive avancee",
    ],
    cta: "Commencer avec Basic",
    audience: "Pour demarrer proprement",
    aiLabel: "Pilotage de base",
    accent: "basic" as const,
  },
  {
    name: "Pro",
    price: "10 000",
    tagline: "Passez de la gestion a un vrai pilotage lot par lot",
    description:
      "Pour les exploitations qui veulent suivre la performance, mieux arbitrer et commencer a anticiper les risques.",
    features: [
      "Tout ce qui est dans Basic",
      "Rapports et tableaux de bord",
      "Bilans de rentabilite par lot",
      "Prediction rupture stock",
      "Prediction risque mortalite",
      "Projection marge finale",
      "Analyse IA des lots",
    ],
    cta: "Choisir Pro",
    audience: "Plan le plus choisi",
    aiLabel: "Pilotage predictif par lot",
    accent: "pro" as const,
    highlighted: true,
    badge: "Recommandee",
  },
  {
    name: "Business",
    price: "25 000",
    tagline: "Passez au pilotage global de l'exploitation",
    description:
      "Pour les structures qui veulent coordonner plusieurs sites ou plusieurs responsables avec une vraie lecture dirigeant.",
    features: [
      "Tout ce qui est dans Pro",
      "Vue globale exploitation",
      "Signaux prioritaires et recommandations dirigeant",
      "Export Business consolide",
      "Gestion des equipes et acces",
      "Organisation multi-fermes",
      "Exports avances",
    ],
    cta: "Choisir Business",
    audience: "Pour fermes structurees et entreprises",
    aiLabel: "Pilotage global et consolidations",
    accent: "business" as const,
    highlighted: true,
    badge: "Vue dirigeant",
  },
];

function cardClasses(accent: "basic" | "pro" | "business", highlighted?: boolean) {
  if (!highlighted) {
    return "border-gray-100 bg-white shadow-sm dark:border-white/10 dark:bg-[#101914] dark:shadow-none";
  }

  if (accent === "business") {
    return "border-amber-400 bg-slate-900 text-white shadow-xl ring-4 ring-amber-200/60";
  }

  return "border-green-500 bg-green-700 text-white shadow-xl ring-4 ring-green-200/70";
}

function textTone(accent: "basic" | "pro" | "business", slot: "eyebrow" | "priceSub" | "body" | "pill" | "bullet") {
  if (accent === "business") {
    switch (slot) {
      case "eyebrow":
        return "text-amber-200";
      case "priceSub":
        return "text-slate-300";
      case "body":
        return "text-slate-200";
      case "pill":
        return "bg-white/10 text-amber-100";
      case "bullet":
        return "text-amber-300";
    }
  }

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
            Des formules claires selon votre niveau de pilotage
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-gray-500 dark:text-gray-400">
            Basic sert a structurer la base. Pro aide a piloter chaque lot avec plus
            d&apos;anticipation. Business donne une lecture globale pour diriger l&apos;exploitation.
          </p>
        </div>

        <div className="mb-8 rounded-3xl border border-amber-100 bg-amber-50 px-5 py-4 text-sm text-amber-900 dark:border-amber-400/25 dark:bg-amber-500/10 dark:text-amber-200">
          L&apos;essai permet de decouvrir la plateforme. Le predictif et la lecture dirigeant
          ne remplacent pas le terrain : ils aident a prioriser plus vite les decisions.
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl border p-6 ${cardClasses(plan.accent, plan.highlighted)}`}
            >
              {plan.highlighted ? (
                <div
                  className={`absolute -top-4 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full px-4 py-1 text-xs font-bold shadow-sm ${
                    plan.accent === "business"
                      ? "bg-amber-400 text-slate-950"
                      : "bg-emerald-300 text-gray-900"
                  }`}
                >
                  <span>{plan.badge}</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-current" />
                  <span>{plan.name}</span>
                </div>
              ) : null}

              <div>
                <p
                  className={`text-xs font-semibold uppercase tracking-[0.16em] ${
                    plan.highlighted ? textTone(plan.accent, "eyebrow") : "text-gray-500 dark:text-gray-400"
                  }`}
                >
                  {plan.audience}
                </p>
                <p
                  className={`text-sm font-semibold uppercase tracking-wide ${
                    plan.highlighted
                      ? textTone(plan.accent, "eyebrow")
                      : "text-green-700 dark:text-green-300"
                  }`}
                >
                  {plan.name}
                </p>
                <p className={`mt-1 text-3xl font-bold ${plan.highlighted ? "text-white" : "text-gray-900 dark:text-white"}`}>
                  {plan.price}{" "}
                  <span
                    className={`text-base font-normal ${
                      plan.highlighted ? textTone(plan.accent, "priceSub") : "text-gray-400 dark:text-gray-500"
                    }`}
                  >
                    FCFA / mois
                  </span>
                </p>
                <p className={`mt-2 font-semibold ${plan.highlighted ? "text-white" : "text-gray-800 dark:text-gray-100"}`}>
                  {plan.tagline}
                </p>
                <p className={`mt-1 text-sm ${plan.highlighted ? textTone(plan.accent, "body") : "text-gray-500 dark:text-gray-400"}`}>
                  {plan.description}
                </p>
                <div
                  className={`mt-4 inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                    plan.highlighted
                      ? textTone(plan.accent, "pill")
                      : "bg-green-50 text-green-700 dark:bg-green-500/15 dark:text-green-300"
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
                      plan.highlighted ? textTone(plan.accent, "body") : "text-gray-600 dark:text-gray-300"
                    }`}
                  >
                    <span className={`mt-0.5 ${plan.highlighted ? textTone(plan.accent, "bullet") : "text-green-600"}`}>
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
                    ? plan.accent === "business"
                      ? "bg-amber-400 text-slate-950 hover:bg-amber-300"
                      : "bg-white text-green-700 hover:bg-green-50"
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
