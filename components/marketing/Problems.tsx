const problems = [
  {
    icon: "!",
    title: "Des pertes non visibles assez tot",
    description:
      "Mortalite, consommation, sante ou cout aliment derapent parfois sans signal clair, jusqu'a ce que la marge soit deja abimee.",
  },
  {
    icon: "%",
    title: "Une rentabilite que l'on decouvre trop tard",
    description:
      "Sans lecture par lot ou par periode, il devient difficile de savoir ce qui rapporte vraiment et ce qui vous fait perdre.",
  },
  {
    icon: "[]",
    title: "Une gestion dispersee entre plusieurs supports",
    description:
      "Cahiers, messages, feuilles Excel et memoire des equipes finissent par ralentir le suivi et faire perdre des informations utiles.",
  },
  {
    icon: "F",
    title: "Des decisions prises trop tard",
    description:
      "Quand les donnees arrivent en retard ou restent floues, il est plus dur d'agir vite sur un lot, un stock ou une depense.",
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
            Les freins qui coutent cher a une exploitation avicole
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-gray-500 dark:text-gray-400">
            Quand les pertes, les couts et les informations restent flous, il
            devient difficile de piloter sereinement. SunuFarm aide a remettre de
            la visibilite la ou les decisions se jouent.
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
