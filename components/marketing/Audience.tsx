const audiences = [
  {
    label: "Exploitations en lancement",
    icon: "01",
    headline: "Mettez de l'ordre dans la gestion sans alourdir le terrain",
    points: [
      "Lots, fermes, bâtiments et charges au même endroit",
      "Une prise en main simple sur téléphone ou ordinateur",
      "Un historique plus fiable que les cahiers éparpillés",
      "Idéal pour démarrer avec Basic",
    ],
    cta: "Voir Basic",
    href: "#pricing",
  },
  {
    label: "Exploitations en croissance",
    icon: "02",
    headline: "Pilotez les opérations, la marge et les décisions au quotidien",
    points: [
      "Bilans de rentabilité, rapports et indicateurs utiles",
      "Gestion plus structurée des achats, ventes et stocks",
      "Analyse IA des lots pour aller plus vite sur certains arbitrages",
      "Le bon niveau pour progresser avec Pro",
    ],
    cta: "Découvrir Pro",
    href: "#pricing",
  },
  {
    label: "Structures organisées",
    icon: "03",
    headline: "Coordonnez plusieurs sites, plusieurs rôles et plus de contrôle",
    points: [
      "Gestion d'équipe et accès par module",
      "Vision plus globale des exploitations et des responsabilités",
      "PWA installable et organisation plus adaptée au travail terrain",
      "Pensé pour les fermes structurées et les opérations multi-sites",
    ],
    cta: "Découvrir Business",
    href: "#pricing",
  },
];

export default function Audience() {
  return (
    <section className="bg-gray-50 px-5 py-14 dark:bg-[#0a1410] md:py-20">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
            {`SunuFarm s'adapte à votre niveau d'exploitation`}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-gray-500 dark:text-gray-400">
            Vos besoins ne sont pas les mêmes selon la taille de l&apos;exploitation,
            le niveau d&apos;organisation de l&apos;equipe et la profondeur de pilotage attendue.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {audiences.map((audience) => (
            <div
              key={audience.label}
              className="flex flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-[#101914] dark:shadow-none"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-50 text-sm font-bold text-green-700 dark:bg-green-500/15 dark:text-green-300">
                {audience.icon}
              </span>
              <span className="mt-3 text-xs font-semibold uppercase tracking-wide text-green-700 dark:text-green-300">
                {audience.label}
              </span>
              <h3 className="mt-2 text-lg font-bold text-gray-900 dark:text-white">{audience.headline}</h3>
              <ul className="mt-4 flex-1 space-y-2">
                {audience.points.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <span className="mt-0.5 text-green-600">+</span>
                    {point}
                  </li>
                ))}
              </ul>
              <a
                href={audience.href}
                className="mt-6 inline-block rounded-xl border border-green-700 px-5 py-2.5 text-center text-sm font-semibold text-green-700 transition-colors hover:bg-green-50 dark:border-green-400 dark:text-green-300 dark:hover:bg-white/5"
              >
                {audience.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
