import AppMockup from "./AppMockup";

export default function Hero() {
  return (
    <section className="bg-white px-5 pb-12 pt-16 dark:bg-[#07110c] md:pb-20 md:pt-24">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col gap-12 md:flex-row md:items-center">
          <div className="flex-1 text-center md:text-left">
            <span className="mb-4 inline-block rounded-full bg-green-100 px-4 py-1 text-sm font-medium text-green-700 dark:bg-green-500/15 dark:text-green-300">
              Gestion avicole complete, mobile et orientee terrain
            </span>

            <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white sm:text-5xl">
              Pilotez votre exploitation avicole avec des donnees claires, du lot au resultat
            </h1>

            <p className="mt-5 text-lg text-gray-600 dark:text-gray-300">
              SunuFarm centralise les fermes, les batiments, les lots, la saisie
              terrain, les achats, les ventes, le stock, les finances et les
              rapports dans une seule plateforme. Vous gardez une vision plus
              simple de l&apos;activite quotidienne et une meilleure maitrise de la
              rentabilite.
            </p>

            <div className="mt-6 grid gap-3 text-left sm:grid-cols-3">
              {[
                "Saisissez vite sur mobile, meme en contexte terrain",
                "Suivez vos lots, achats, ventes et stocks au meme endroit",
                "Gardez un vrai pilotage par equipe, ferme et exploitation",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-green-100 bg-green-50/70 px-4 py-3 text-sm font-medium text-gray-700 dark:border-white/10 dark:bg-white/5 dark:text-gray-200"
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
                Demander une demonstration
              </a>
              <a
                href="#pricing"
                className="rounded-xl border border-gray-300 px-6 py-3 text-base font-semibold text-gray-700 transition-colors hover:bg-gray-50 dark:border-white/15 dark:text-gray-100 dark:hover:bg-white/5"
              >
                Voir les formules
              </a>
            </div>

            <p className="mt-6 text-sm text-gray-400 dark:text-gray-500">
              Concu pour les eleveurs, responsables d&apos;exploitation et structures
              avicoles qui veulent un outil serieux, utilisable sur telephone
              comme sur ordinateur.
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
