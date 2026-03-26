const audiences = [
  {
    label: "Pour les éleveurs",
    icon: "🧑‍🌾",
    headline: "Gérez votre ferme au quotidien, sans vous perdre dans les chiffres",
    points: [
      "Suivez chaque lot de la mise en place à la vente",
      "Enregistrez vos dépenses en quelques secondes",
      "Voyez immédiatement si un lot est dans le bon",
      "Recevez des alertes si quelque chose cloche",
    ],
    cta: "Commencer avec Basic ou Pro",
    href: "#pricing",
  },
  {
    label: "Pour les entreprises avicoles",
    icon: "🏭",
    headline: "Pilotez plusieurs sites, structurez vos équipes, gardez le contrôle",
    points: [
      "Centralisez les données de toutes vos fermes",
      "Suivez les performances par site ou par équipe",
      "Comparez les lots et identifiez les meilleures pratiques",
      "Prenez des décisions stratégiques avec des données fiables",
    ],
    cta: "Découvrir l'offre Business",
    href: "#pricing",
  },
];

export default function Audience() {
  return (
    <section className="bg-gray-50 px-5 py-14 md:py-20">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            SunuFarm s'adapte à votre situation
          </h2>
          <p className="mt-3 text-gray-500 max-w-xl mx-auto">
            Que vous ayez une petite ferme ou plusieurs sites à gérer, il y a
            une offre faite pour vous.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {audiences.map((a) => (
            <div
              key={a.label}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col"
            >
              <span className="text-3xl">{a.icon}</span>
              <span className="mt-3 text-xs font-semibold uppercase tracking-wide text-green-700">
                {a.label}
              </span>
              <h3 className="mt-2 text-lg font-bold text-gray-900">
                {a.headline}
              </h3>
              <ul className="mt-4 space-y-2 flex-1">
                {a.points.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="mt-0.5 text-green-600">✓</span>
                    {point}
                  </li>
                ))}
              </ul>
              <a
                href={a.href}
                className="mt-6 inline-block rounded-xl border border-green-700 px-5 py-2.5 text-sm font-semibold text-green-700 hover:bg-green-50 transition-colors text-center"
              >
                {a.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
