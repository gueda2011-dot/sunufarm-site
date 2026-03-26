const audiences = [
  {
    label: "Petits eleveurs",
    icon: "01",
    headline: "Commencez a structurer votre elevage sans compliquer le terrain",
    points: [
      "Suivez vos lots et vos depenses au meme endroit",
      "Gardez un historique plus fiable que les cahiers disperses",
      "Voyez rapidement ce qui entre, ce qui sort et ce qui manque",
      "Ideal pour demarrer avec Basic",
    ],
    cta: "Voir Basic",
    href: "#pricing",
  },
  {
    label: "Eleveurs serieux",
    icon: "02",
    headline: "Pilotez la rentabilite de chaque lot et reduisez les pertes plus tot",
    points: [
      "Analyse IA des lots avec recommandations standards",
      "Bilans de rentabilite et indicateurs de performance",
      "Meilleure visibilite sur les risques avant qu'ils coutent cher",
      "Le bon niveau pour progresser avec Pro",
    ],
    cta: "Decouvrir Pro",
    href: "#pricing",
  },
  {
    label: "Entreprises et grosses fermes",
    icon: "03",
    headline: "Pilotez plusieurs operations avec plus de controle, de comparaison et de reactivite",
    points: [
      "Centralisez les donnees de plusieurs sites et equipes",
      "Analyse IA plus poussee avec comparaisons plus profondes",
      "Traitement prioritaire pour les analyses et le support",
      "Pense pour les structures qui veulent professionnaliser l'exploitation",
    ],
    cta: "Decouvrir Business",
    href: "#pricing",
  },
];

export default function Audience() {
  return (
    <section className="bg-gray-50 px-5 py-14 md:py-20">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            {`SunuFarm s'adapte a votre niveau d'exploitation`}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-gray-500">
            {`Vous n'avez pas les memes besoins quand vous demarrez, quand vous`}
            {" "}
            pilotez deja serieusement vos lots, ou quand vous gerez plusieurs sites.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {audiences.map((a) => (
            <div
              key={a.label}
              className="flex flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-50 text-sm font-bold text-green-700">
                {a.icon}
              </span>
              <span className="mt-3 text-xs font-semibold uppercase tracking-wide text-green-700">
                {a.label}
              </span>
              <h3 className="mt-2 text-lg font-bold text-gray-900">{a.headline}</h3>
              <ul className="mt-4 flex-1 space-y-2">
                {a.points.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="mt-0.5 text-green-600">+</span>
                    {point}
                  </li>
                ))}
              </ul>
              <a
                href={a.href}
                className="mt-6 inline-block rounded-xl border border-green-700 px-5 py-2.5 text-center text-sm font-semibold text-green-700 transition-colors hover:bg-green-50"
              >
                {a.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
