const groups = [
  {
    category: "Terrain",
    items: [
      { name: "Saisie journalière simple", desc: "Mortalité, alimentation, eau et observations en quelques gestes" },
      { name: "Lots et fermes", desc: "Chaque lot reste rattaché à la bonne ferme et à son historique" },
      { name: "Usage terrain", desc: "Parcours conçu pour mobile et ordinateur, sans complexité inutile" },
    ],
  },
  {
    category: "Décision économique",
    items: [
      { name: "Rentabilité par lot", desc: "Voyez ce que chaque lot rapporte vraiment" },
      { name: "Prix minimum de vente", desc: "Calculez un seuil de vente cohérent avec vos charges" },
      { name: "Reports", desc: "Suivez vos chiffres sans reconstruire vos tableaux à la main" },
    ],
  },
  {
    category: "Alertes utiles",
    items: [
      { name: "Alertes intelligentes", desc: "Repérez plus vite une dérive qui mérite une action" },
      { name: "Actions immédiates", desc: "Depuis l'alerte, ouvrez le lot ou le report utile sans détour" },
      { name: "Priorisation simple", desc: "L'application aide à savoir quoi traiter d'abord" },
    ],
  },
  {
    category: "Organisation",
    items: [
      { name: "Multi-fermes", desc: "Gardez une structure claire quand l'activité grandit" },
      { name: "Équipe et rôles", desc: "Chaque membre voit ce qu'il doit saisir ou suivre" },
      { name: "FREE à BUSINESS", desc: "Une progression simple selon votre niveau de pilotage" },
    ],
  },
];

export default function Modules() {
  return (
    <section id="features" className="bg-gray-50 px-5 py-14 dark:bg-[#0a1410] md:py-20">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 text-center">
          <span className="inline-flex rounded-full bg-green-100 px-4 py-1 text-sm font-semibold text-green-700 dark:bg-green-500/15 dark:text-green-300">
            Disponible aujourd&apos;hui
          </span>
          <h2 className="mt-4 text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
            Ce que SunuFarm permet vraiment aujourd&apos;hui
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-gray-500 dark:text-gray-400">
            Le produit ne se limite pas à enregistrer des données. Il aide à lire vos chiffres,
            détecter une dérive et passer à l&apos;action sans compliquer le travail terrain.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {groups.map((group) => (
            <div
              key={group.category}
              className="rounded-2xl border border-gray-100 bg-white p-5 dark:border-white/10 dark:bg-[#101914]"
            >
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-green-700 dark:text-green-300">
                {group.category}
              </p>
              <ul className="space-y-4">
                {group.items.map((item) => (
                  <li key={item.name}>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">
                      {item.name}
                    </p>
                    <p className="mt-0.5 text-xs leading-relaxed text-gray-500 dark:text-gray-400">
                      {item.desc}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {[
            "Application disponible maintenant",
            "WhatsApp pour parler pricing ou démo",
            "Plans clairs selon la maturité de l'exploitation",
          ].map((item) => (
            <span
              key={item}
              className="rounded-full border border-green-100 bg-white px-4 py-2 text-sm font-medium text-green-800 dark:border-white/10 dark:bg-white/5 dark:text-green-200"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
