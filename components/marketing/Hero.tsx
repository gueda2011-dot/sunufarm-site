import AppMockup from "./AppMockup";

export default function Hero() {
  return (
    <section className="bg-white px-5 pt-16 pb-12 md:pt-24 md:pb-20">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col gap-12 md:flex-row md:items-center">
          <div className="flex-1 text-center md:text-left">
            <span className="mb-4 inline-block rounded-full bg-green-100 px-4 py-1 text-sm font-medium text-green-700">
              Pilotage avicole, rentabilite et analyse metier
            </span>

            <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl">
              Reduisez les pertes, comprenez vos lots, prenez de meilleures decisions
            </h1>

            <p className="mt-5 text-lg text-gray-600">
              SunuFarm vous aide a suivre vos lots, maitriser vos depenses et voir
              rapidement si un lot est rentable. {`L'application`} integre desormais une
              intelligence metier qui analyse vos donnees pour detecter les risques et
              vous orienter vers les bonnes actions.
            </p>

            <div className="mt-6 grid gap-3 text-left sm:grid-cols-3">
              {[
                "Detectez les signaux de risque plus tot",
                "Analysez la rentabilite d'un lot en quelques secondes",
                "Recevez des recommandations concretes pour corriger les pertes",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-green-100 bg-green-50/70 px-4 py-3 text-sm font-medium text-gray-700"
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row md:justify-start">
              <a
                href="#contact"
                className="rounded-xl bg-green-700 px-6 py-3 text-base font-semibold text-white shadow transition-colors hover:bg-green-800"
              >
                Demander une demo
              </a>
              <a
                href="#pricing"
                className="rounded-xl border border-gray-300 px-6 py-3 text-base font-semibold text-gray-700 transition-colors hover:bg-gray-50"
              >
                Voir les offres
              </a>
            </div>

            <p className="mt-6 text-sm text-gray-400">
              Pense pour les eleveurs, fermes structurees et entreprises avicoles qui
              veulent piloter avec des chiffres fiables, sans complexite inutile.
            </p>
          </div>

          <div className="flex-1 md:max-w-xs lg:max-w-sm">
            <AppMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
