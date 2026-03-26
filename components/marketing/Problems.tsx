const problems = [
  {
    icon: "⚠️",
    title: "Des pertes que vous n'arrivez pas à expliquer",
    description:
      "Les mortalités arrivent, mais sans données précises, impossible de comprendre pourquoi ni d'y remédier.",
  },
  {
    icon: "💸",
    title: "Des dépenses mal suivies",
    description:
      "Aliments, médicaments, main-d'œuvre… Les coûts s'accumulent et vous ne savez pas ce qui pèse le plus.",
  },
  {
    icon: "📊",
    title: "Impossible de savoir si vous êtes rentable",
    description:
      "À la fin d'un lot, vous ne savez pas vraiment si vous avez gagné ou perdu de l'argent.",
  },
  {
    icon: "📋",
    title: "Une gestion désorganisée des lots",
    description:
      "Les informations sont dans des cahiers ou dans la tête — difficile à retrouver, facile à oublier.",
  },
  {
    icon: "🔭",
    title: "Pas de visibilité sur la performance",
    description:
      "Vous gérez au quotidien sans recul sur ce qui fonctionne vraiment dans votre élevage.",
  },
];

export default function Problems() {
  return (
    <section className="bg-gray-50 px-5 py-14 md:py-20">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            Vous vous reconnaissez dans ces situations ?
          </h2>
          <p className="mt-3 text-gray-500 max-w-xl mx-auto">
            Ce sont les défis que vivent la plupart des éleveurs chaque jour.
            SunuFarm a été conçu pour y répondre.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((p) => (
            <div
              key={p.title}
              className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm"
            >
              <span className="text-2xl">{p.icon}</span>
              <h3 className="mt-3 font-semibold text-gray-800">{p.title}</h3>
              <p className="mt-1 text-sm text-gray-500">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
