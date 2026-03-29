const values = [
  {
    icon: "01",
    title: "Sachez rapidement si un lot est rentable",
    description:
      "Reliez lots, achats, ventes, charges et indicateurs pour voir plus clairement ce qui rapporte et ce qui doit être corrigé.",
  },
  {
    icon: "02",
    title: "Détectez plus vite les problèmes importants",
    description:
      "La plateforme aide à repérer les écarts sur la mortalité, la consommation, les traitements ou les coûts avant qu'ils ne pèsent trop lourd.",
  },
  {
    icon: "03",
    title: "Décidez avec plus de confiance",
    description:
      "Vous arbitrez mieux quand les informations terrain, les dépenses et les résultats sont enfin lisibles au même endroit.",
  },
  {
    icon: "04",
    title: "Centralisez les données utiles à l'exploitation",
    description:
      "Fermes, bâtiments, lots, stock, ventes, fournisseurs et finances restent reliés dans une même base simple à exploiter.",
  },
  {
    icon: "05",
    title: "Travaillez mieux avec votre équipe",
    description:
      "Le propriétaire garde la main, les accès sont mieux organisés et chacun voit ce qu'il doit saisir ou suivre.",
  },
  {
    icon: "06",
    title: "Ajoutez de l'analyse quand elle aide vraiment",
    description:
      "L'IA de SunuFarm sert à faire ressortir des points d'attention concrets pour accélérer la lecture, pas pour compliquer le pilotage.",
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
            Des bénéfices concrets pour mieux piloter, mieux réagir et mieux lire
            la performance de votre exploitation.
          </p>
        </div>

        <div className="mb-8 rounded-3xl border border-green-100 bg-gradient-to-br from-green-50 via-white to-amber-50 p-6 dark:border-white/10 dark:from-[#0f1b15] dark:via-[#0d1712] dark:to-[#19160f] md:p-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-green-700 dark:text-green-300">
              Pilotage plus clair
            </p>
            <h3 className="mt-2 text-2xl font-bold text-gray-900 dark:text-white">
              Moins de gestion dispersée, plus de visibilité sur ce qui compte vraiment.
            </h3>
            <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-300 md:text-base">
              SunuFarm ne sert pas seulement à saisir des données. La plateforme
              vous aide à transformer vos informations terrain en décisions plus
              rapides, plus fiables et plus utiles pour la rentabilité.
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
