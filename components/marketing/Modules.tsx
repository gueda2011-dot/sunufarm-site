const groups = [
  {
    category: "Terrain",
    items: [
      { name: "Lots d'elevage", desc: "Suivi complet du cycle, de l'entree a la cloture" },
      { name: "Saisie journaliere", desc: "Mortalite, alimentation, eau, observations et alertes de saisie" },
      { name: "Sante animale", desc: "Vaccinations, traitements et suivi sanitaire plus lisible" },
    ],
  },
  {
    category: "Stock & Finances",
    items: [
      { name: "Stock aliments & medicaments", desc: "Articles, mouvements, sorties terrain et soldes en temps reel" },
      { name: "Achats fournisseurs", desc: "Commandes, paiements partiels, dette fournisseur et envoi au stock" },
      { name: "Ventes & depenses", desc: "Flux financiers relies aux lots pour mieux lire la rentabilite" },
    ],
  },
  {
    category: "Predictif",
    items: [
      { name: "Prediction rupture stock", desc: "Anticipez les articles qui approchent d'une rupture" },
      { name: "Prediction risque mortalite", desc: "Reperez plus vite les lots qui se degradent" },
      { name: "Projection marge finale", desc: "Voyez quels lots menacent la rentabilite avant la fin du cycle" },
    ],
  },
  {
    category: "Pilotage Business",
    items: [
      { name: "Vue exploitation consolidee", desc: "Lecture dirigeant des marges, risques et stocks critiques" },
      { name: "Gestion des equipes", desc: "Roles, modules et droits d'acces adaptes a l'organisation" },
      { name: "Offline, PWA & push", desc: "Travail terrain plus robuste sur mobile, meme quand le reseau tombe" },
    ],
  },
];

export default function Modules() {
  return (
    <section className="bg-gray-50 px-5 py-14 dark:bg-[#0a1410] md:py-20">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 text-center">
          <span className="inline-flex rounded-full bg-green-100 px-4 py-1 text-sm font-semibold text-green-700 dark:bg-green-500/15 dark:text-green-300">
            Plateforme deja operationnelle
          </span>
          <h2 className="mt-4 text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
            Une application qui va du terrain jusqu&apos;au pilotage global
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-gray-500 dark:text-gray-400">
            SunuFarm ne s&apos;arrete pas a la saisie. La plateforme relie operations terrain,
            stock, finances, predictions et lecture dirigeant pour aider a mieux piloter
            l&apos;exploitation.
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
            "Acces mobile et ordinateur",
            "Mode hors ligne sur flux terrain critiques",
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
