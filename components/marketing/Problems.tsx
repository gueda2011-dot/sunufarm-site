const problems = [
  {
    icon: "!",
    title: "Des pertes non visibles assez tôt",
    description:
      "Mortalité, consommation, santé ou coût aliment dérapent parfois sans signal clair, jusqu'à ce que la marge soit déjà abîmée.",
  },
  {
    icon: "%",
    title: "Une rentabilité que l'on découvre trop tard",
    description:
      "Sans lecture par lot ou par période, il devient difficile de savoir ce qui rapporte vraiment et ce qui vous fait perdre.",
  },
  {
    icon: "[]",
    title: "Une gestion dispersée entre plusieurs supports",
    description:
      "Cahiers, messages, feuilles Excel et mémoire des équipes finissent par ralentir le suivi et faire perdre des informations utiles.",
  },
  {
    icon: "F",
    title: "Des décisions prises trop tard",
    description:
      "Quand les données arrivent en retard ou restent floues, il est plus dur d'agir vite sur un lot, un stock ou une dépense.",
  },
  {
    icon: "+",
    title: "Une équipe sans cadre commun",
    description:
      "Quand plusieurs personnes interviennent, chacun travaille à sa façon et les accès sont rarement bien organisés.",
  },
];

export default function Problems() {
  return (
    <section id="problems" className="bg-gray-50 px-5 py-14 dark:bg-[#0a1410] md:py-20">
      <div className="mx-auto max-w-4xl">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
            Les freins qui coûtent cher à une exploitation avicole
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-gray-500 dark:text-gray-400">
            Quand les pertes, les coûts et les informations restent flous, il
            devient difficile de piloter sereinement. SunuFarm aide à remettre de
            la visibilité là où les décisions se jouent.
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
