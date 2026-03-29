const values = [
  {
    icon: "01",
    title: "Sachez rapidement si un lot est rentable",
    description:
      "Reliez lots, achats, ventes, charges et indicateurs pour voir plus clairement ce qui rapporte et ce qui doit etre corrige.",
  },
  {
    icon: "02",
    title: "Detectez plus vite les problemes importants",
    description:
      "La plateforme aide a reperer les ecarts sur la mortalite, la consommation, les traitements ou les couts avant qu'ils ne pesent trop lourd.",
  },
  {
    icon: "03",
    title: "Decidez avec plus de confiance",
    description:
      "Vous arbitrez mieux quand les informations terrain, les depenses et les resultats sont enfin lisibles au meme endroit.",
  },
  {
    icon: "04",
    title: "Centralisez les donnees utiles a l'exploitation",
    description:
      "Fermes, batiments, lots, stock, ventes, fournisseurs et finances restent relies dans une meme base simple a exploiter.",
  },
  {
    icon: "05",
    title: "Travaillez mieux avec votre equipe",
    description:
      "Le proprietaire garde la main, les acces sont mieux organises et chacun voit ce qu'il doit saisir ou suivre.",
  },
  {
    icon: "06",
    title: "Ajoutez de l'analyse quand elle aide vraiment",
    description:
      "L'IA de SunuFarm sert a faire ressortir des points d'attention concrets pour accelerer la lecture, pas pour compliquer le pilotage.",
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
            Des benefices concrets pour mieux piloter, mieux reagir et mieux lire
            la performance de votre exploitation.
          </p>
        </div>

        <div className="mb-8 rounded-3xl border border-green-100 bg-gradient-to-br from-green-50 via-white to-amber-50 p-6 dark:border-white/10 dark:from-[#0f1b15] dark:via-[#0d1712] dark:to-[#19160f] md:p-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-green-700 dark:text-green-300">
              Pilotage plus clair
            </p>
            <h3 className="mt-2 text-2xl font-bold text-gray-900 dark:text-white">
              Moins de gestion dispersee, plus de visibilite sur ce qui compte vraiment.
            </h3>
            <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-300 md:text-base">
              SunuFarm ne sert pas seulement a saisir des donnees. La plateforme
              vous aide a transformer vos informations terrain en decisions plus
              rapides, plus fiables et plus utiles pour la rentabilite.
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
