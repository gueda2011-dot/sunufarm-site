const problems = [
  {
    icon: "!",
    title: "Des pertes difficiles a expliquer",
    description:
      "Les mortalites augmentent, mais sans historique fiable il devient difficile de comprendre ce qui s'est passe et quand agir.",
  },
  {
    icon: "F",
    title: "Des depenses mal reliees a l'activite",
    description:
      "Aliments, medicaments, achats et charges s'accumulent sans vision claire sur ce qui pese vraiment sur la marge.",
  },
  {
    icon: "%",
    title: "Une rentabilite difficile a lire",
    description:
      "En fin de lot ou de periode, il reste trop de zones floues pour savoir ce qui rapporte et ce qui fait perdre.",
  },
  {
    icon: "[]",
    title: "Des informations dispersees",
    description:
      "Les informations vivent dans des cahiers, des messages ou dans la tete des equipes. Elles sont donc difficiles a retrouver et a partager.",
  },
  {
    icon: "+",
    title: "Une equipe sans cadre commun",
    description:
      "Quand plusieurs personnes interviennent, chacun travaille a sa facon et les acces sont rarement bien organises.",
  },
];

export default function Problems() {
  return (
    <section id="problems" className="bg-gray-50 px-5 py-14 dark:bg-[#0a1410] md:py-20">
      <div className="mx-auto max-w-4xl">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
            Vous vous reconnaissez dans ces situations ?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-gray-500 dark:text-gray-400">
            Ce sont les blocages les plus frequents sur le terrain. SunuFarm a
            ete pense pour remettre de l&apos;ordre, de la visibilite et de la rigueur
            dans le pilotage quotidien.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((problem) => (
            <div
              key={problem.title}
              className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-[#101914] dark:shadow-none"
            >
              <span className="text-2xl font-bold text-green-700">{problem.icon}</span>
              <h3 className="mt-3 font-semibold text-gray-800 dark:text-white">{problem.title}</h3>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
