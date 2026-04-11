const values = [
  {
    icon: "01",
    title: "Saisissez vite ce qui se passe sur le terrain",
    description:
      "Le suivi journalier reste simple a tenir, pour ne pas ajouter de friction aux operations quotidiennes.",
  },
  {
    icon: "02",
    title: "Voyez si un lot gagne ou perd de l'argent",
    description:
      "La rentabilite par lot donne une lecture concrete de la performance, pas juste une accumulation de chiffres.",
  },
  {
    icon: "03",
    title: "Vendez avec un prix minimum plus clair",
    description:
      "Le seuil de vente vous aide a arbitrer avec plus de securite quand il faut negocier ou planifier une sortie.",
  },
  {
    icon: "04",
    title: "Reperez plus vite une derive importante",
    description:
      "Les alertes intelligentes font remonter les points de vigilance qui meritent une reaction rapide.",
  },
  {
    icon: "05",
    title: "Passez a l'action depuis l'alerte",
    description:
      "Ouvrez directement le lot, le report ou l'ecran utile pour corriger la situation sans perdre de temps.",
  },
  {
    icon: "06",
    title: "Gardez une organisation nette quand vous grandissez",
    description:
      "Multi-fermes, equipe et roles permettent d'etendre le pilotage sans casser la simplicite d'usage.",
  },
];

export default function Value() {
  return (
    <section id="value" className="bg-gray-50 px-5 py-14 dark:bg-[#0a1410] md:py-20">
      <div className="mx-auto max-w-4xl">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
            Les vraies forces a mettre en avant
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-gray-500 dark:text-gray-400">
            SunuFarm n&apos;est pas un simple outil de saisie. Sa valeur est d&apos;aider a
            decider, detecter une derive et agir avec des chiffres lisibles.
          </p>
        </div>

        <div className="mb-8 rounded-3xl border border-green-100 bg-gradient-to-br from-green-50 via-white to-amber-50 p-6 dark:border-white/10 dark:from-[#0f1b15] dark:via-[#0d1712] dark:to-[#19160f] md:p-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-green-700 dark:text-green-300">
              Decision economique
            </p>
            <h3 className="mt-2 text-2xl font-bold text-gray-900 dark:text-white">
              Moins de saisie pour la saisie. Plus de lecture utile pour agir.
            </h3>
            <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-300 md:text-base">
              La plateforme transforme les informations du terrain en decisions economiques
              plus rapides: savoir si un lot reste rentable, detecter une derive, ajuster le
              prix de vente et partager la bonne information a la bonne personne.
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
