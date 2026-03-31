const groups = [
  {
    category: "Terrain",
    items: [
      { name: "Lots d'élevage", desc: "Suivi complet du cycle, de l'entrée à la clôture" },
      { name: "Saisie journalière", desc: "Mortalité, alimentation, eau, observations" },
      { name: "Santé animale", desc: "Vaccinations, traitements, alertes de retard" },
    ],
  },
  {
    category: "Stock & Achats",
    items: [
      { name: "Stock aliments & médicaments", desc: "Articles, mouvements et soldes en temps réel" },
      { name: "Achats fournisseurs", desc: "Commandes, paiements partiels, envoi au stock" },
      { name: "Dépenses", desc: "Toutes les sorties d'argent hors achats fournisseur" },
    ],
  },
  {
    category: "Finance & Rapports",
    items: [
      { name: "Ventes & clients", desc: "Encaissements, créances, historique par client" },
      { name: "Dashboard & KPI", desc: "Synthèse lots, alertes de saisie et indicateurs clés" },
      { name: "Rapports mensuels", desc: "Vue financière complète, exports PDF, Excel et CSV" },
    ],
  },
  {
    category: "Pilotage & Équipes",
    items: [
      { name: "Analyse IA des lots", desc: "Points d'attention concrets par lot (Pro & Business)" },
      { name: "Gestion des équipes", desc: "Rôles, modules et droits d'accès par ferme" },
      { name: "Alertes push & PWA", desc: "Notifications mobiles en temps réel, app installable" },
    ],
  },
];

export default function Modules() {
  return (
    <section className="bg-gray-50 px-5 py-14 dark:bg-[#0a1410] md:py-20">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 text-center">
          <span className="inline-flex rounded-full bg-green-100 px-4 py-1 text-sm font-semibold text-green-700 dark:bg-green-500/15 dark:text-green-300">
            Plateforme déjà opérationnelle
          </span>
          <h2 className="mt-4 text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
            Tout ce qu'il faut pour piloter une exploitation avicole
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-gray-500 dark:text-gray-400">
            SunuFarm n'est pas un prototype. L'ensemble des modules essentiels est déjà
            en place et utilisable : terrain, stock, finances, rapports, équipes et mobile.
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
            "Accès mobile et ordinateur",
            "Multi-sites et multi-utilisateurs",
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
