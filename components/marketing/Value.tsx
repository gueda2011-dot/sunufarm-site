const values = [
  {
    icon: "📉",
    title: "Réduisez les pertes plus tôt",
    description:
      "Suivez les mortalités et la consommation en temps réel. Repérez les anomalies avant qu'elles ne coûtent cher.",
  },
  {
    icon: "💰",
    title: "Gardez le contrôle sur vos dépenses",
    description:
      "Enregistrez chaque dépense par lot. Sachez exactement où part votre argent et ce qui peut être optimisé.",
  },
  {
    icon: "✅",
    title: "Sachez rapidement si un lot est rentable",
    description:
      "À la clôture d'un lot, obtenez un bilan clair : coûts, revenus, marge. Plus de flou, plus d'incertitude.",
  },
  {
    icon: "📁",
    title: "Centralisez toutes les informations importantes",
    description:
      "Fini les cahiers éparpillés. Tout est dans l'application, accessible à tout moment depuis votre téléphone.",
  },
  {
    icon: "🧭",
    title: "Prenez des décisions avec plus de confiance",
    description:
      "Des chiffres clairs vous permettent d'agir au bon moment — pas de l'intuition, des données fiables.",
  },
];

export default function Value() {
  return (
    <section className="bg-white px-5 py-14 md:py-20">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            Ce que SunuFarm change pour vous
          </h2>
          <p className="mt-3 text-gray-500 max-w-xl mx-auto">
            Pas une liste de fonctions. Une façon différente de gérer votre
            élevage — plus claire, plus rentable, plus sereine.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((v) => (
            <div key={v.title} className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-green-50 flex items-center justify-center text-xl">
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
