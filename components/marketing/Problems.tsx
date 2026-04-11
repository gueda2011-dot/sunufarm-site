const problems = [
  {
    icon: "01",
    title: "On saisit beaucoup, mais on decide encore a l'aveugle",
    description:
      "Quand les chiffres restent disperses, la saisie seule ne suffit pas a dire si un lot va bien ou si l'argent part dans la mauvaise direction.",
  },
  {
    icon: "02",
    title: "Les derives sont souvent vues trop tard",
    description:
      "Une hausse de charges, une baisse de performance ou un ecart de mortalite peuvent grignoter la marge avant meme d'etre traites.",
  },
  {
    icon: "03",
    title: "Le prix minimum de vente reste flou",
    description:
      "Sans lecture economique par lot, il est difficile de savoir a quel prix vendre pour proteger la rentabilite.",
  },
  {
    icon: "04",
    title: "Les reports prennent du temps a reconstruire",
    description:
      "Quand il faut recroiser cahiers, messages et fichiers, la vue d'ensemble arrive trop tard pour arbitrer sereinement.",
  },
  {
    icon: "05",
    title: "La croissance complique l'organisation",
    description:
      "Desormais il faut coordonner plusieurs fermes, plusieurs responsables et des droits differents, sans perdre la simplicite terrain.",
  },
];

export default function Problems() {
  return (
    <section id="problems" className="bg-white px-5 py-14 dark:bg-[#07110c] md:py-20">
      <div className="mx-auto max-w-4xl">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
            Le vrai probleme n&apos;est pas la saisie. C&apos;est la lecture economique au bon moment.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-gray-500 dark:text-gray-400">
            Une exploitation avicole perd du temps et de l&apos;argent quand les chiffres
            existent mais ne debouchent pas sur une decision claire, rapide et partagee.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((problem) => (
            <div
              key={problem.title}
              className="rounded-2xl border border-gray-100 bg-gray-50 p-5 shadow-sm dark:border-white/10 dark:bg-[#101914] dark:shadow-none"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-green-50 text-xs font-bold text-green-700 dark:bg-green-500/15 dark:text-green-300">
                {problem.icon}
              </span>
              <h3 className="mt-3 font-semibold text-gray-800 dark:text-white">{problem.title}</h3>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
