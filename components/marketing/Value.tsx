const values = [
  {
    icon: "↗",
    title: "Reduisez les pertes plus tot",
    description:
      "Suivez les mortalites et la consommation en temps reel. Reperez les anomalies avant qu'elles ne deviennent des pertes difficiles a rattraper.",
  },
  {
    icon: "F",
    title: "Gardez le controle sur vos depenses",
    description:
      "Enregistrez chaque depense par lot. Sachez exactement ou part votre argent et ce qui peut etre optimise.",
  },
  {
    icon: "%",
    title: "Sachez rapidement si un lot est rentable",
    description:
      "A la cloture d'un lot, obtenez un bilan clair : couts, revenus, marge. Plus de flou, plus d'incertitude.",
  },
  {
    icon: "IA",
    title: "Analysez un lot en quelques secondes",
    description:
      "L'IA de SunuFarm analyse les donnees du lot pour faire ressortir les signaux de risque, la rentabilite probable et les points a corriger.",
  },
  {
    icon: "!",
    title: "Recevez des recommandations utiles",
    description:
      "Pas un chatbot. Une analyse metier qui vous aide a decider quoi verifier, quoi corriger et ou agir en priorite.",
  },
  {
    icon: "[]",
    title: "Centralisez les donnees de terrain",
    description:
      "Fini les cahiers eparpilles. Vos lots, couts, alertes et historiques restent accessibles depuis la meme application.",
  },
];

export default function Value() {
  return (
    <section id="value" className="bg-white px-5 py-14 md:py-20">
      <div className="mx-auto max-w-4xl">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            Ce que SunuFarm change pour vous
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-gray-500">
            Pas une technologie de plus. Une facon plus claire de piloter{" "}
            {`l'elevage, de corriger les pertes et d'ameliorer les decisions lot par lot.`}
          </p>
        </div>

        <div className="mb-8 rounded-3xl border border-green-100 bg-gradient-to-br from-green-50 via-white to-amber-50 p-6 md:p-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-green-700">
              Intelligence metier SunuFarm
            </p>
            <h3 className="mt-2 text-2xl font-bold text-gray-900">
              {`L'IA aide a decider sur un lot, pas a discuter pour remplir un ecran.`}
            </h3>
            <p className="mt-3 text-sm leading-6 text-gray-600 md:text-base">
              {`Elle lit les donnees deja saisies dans l'application, detecte les signaux`}
              {" "}
              faibles, met en evidence les ecarts qui menacent la marge et vous renvoie
              {` des recommandations concretes. L'objectif est simple : agir plus tot et avec`}
              {" "}
              plus de confiance.
            </p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((v) => (
            <div
              key={v.title}
              className="flex items-start gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm"
            >
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-green-50 text-sm font-bold text-green-700">
                {v.icon}
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">{v.title}</h3>
                <p className="mt-1 text-sm text-gray-500">{v.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
