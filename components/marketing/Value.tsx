const values = [
  {
    icon: "01",
    title: "Structurez l'exploitation de la ferme au lot",
    description:
      "Organisez fermes, batiments, lots et historiques dans une meme application. Vous partez enfin d'une base claire et exploitable.",
  },
  {
    icon: "02",
    title: "Saisissez vite sur le terrain",
    description:
      "La saisie quotidienne, les achats et plusieurs formulaires sont penses pour le mobile, avec brouillons et reprise plus simple.",
  },
  {
    icon: "03",
    title: "Reliez operations et finances",
    description:
      "Achats, ventes, stock, fournisseurs, clients et charges restent relies a l'activite au lieu d'etre geres separement.",
  },
  {
    icon: "04",
    title: "Pilotez avec des rapports utiles",
    description:
      "Suivez les indicateurs, comparez les periodes et gardez une lecture plus nette de ce qui marche, de ce qui derape et de ce qu'il faut corriger.",
  },
  {
    icon: "05",
    title: "Travaillez en equipe avec les bons acces",
    description:
      "Le proprietaire garde la main, chaque membre voit les bons modules, et l'organisation reste plus propre quand l'equipe grandit.",
  },
  {
    icon: "06",
    title: "Ajoutez de l'analyse quand elle apporte vraiment",
    description:
      "L'IA de SunuFarm sert a analyser les lots et a faire ressortir des points d'attention concrets, sans remplacer le pilotage metier.",
  },
];

export default function Value() {
  return (
    <section id="value" className="bg-white px-5 py-14 dark:bg-[#07110c] md:py-20">
      <div className="mx-auto max-w-4xl">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
            Ce que SunuFarm change pour vous
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-gray-500 dark:text-gray-400">
            Une plateforme de gestion avicole vraiment exploitable au quotidien,
            pas juste un tableau de bord de plus.
          </p>
        </div>

        <div className="mb-8 rounded-3xl border border-green-100 bg-gradient-to-br from-green-50 via-white to-amber-50 p-6 dark:border-white/10 dark:from-[#0f1b15] dark:via-[#0d1712] dark:to-[#19160f] md:p-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-green-700 dark:text-green-300">
              Produit complet
            </p>
            <h3 className="mt-2 text-2xl font-bold text-gray-900 dark:text-white">
              SunuFarm couvre deja le coeur du pilotage operationnel d&apos;une exploitation avicole.
            </h3>
            <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-300 md:text-base">
              L&apos;application va bien au-dela du suivi des lots : elle integre aussi
              la gestion des fermes, des batiments, des achats, des ventes, du
              stock, des finances, des equipes, des acces et des rapports. L&apos;IA
              vient en appui, comme une couche d&apos;analyse supplementaire.
            </p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value) => (
            <div
              key={value.title}
              className="flex items-start gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-[#101914] dark:shadow-none"
            >
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-green-50 text-sm font-bold text-green-700 dark:bg-green-500/15 dark:text-green-300">
                {value.icon}
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-white">{value.title}</h3>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
