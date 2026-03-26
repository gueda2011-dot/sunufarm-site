import AppMockup from "./AppMockup";

export default function Hero() {
  return (
    <section className="bg-white px-5 pt-16 pb-12 md:pt-24 md:pb-20">
      <div className="mx-auto max-w-5xl">
        {/* Two-column on desktop, stacked on mobile */}
        <div className="flex flex-col md:flex-row md:items-center md:gap-12">
          {/* Text */}
          <div className="flex-1 text-center md:text-left">
            <span className="inline-block mb-4 rounded-full bg-green-100 px-4 py-1 text-sm font-medium text-green-700">
              Gestion avicole simple et efficace
            </span>

            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl leading-tight">
              Prenez le contrôle de votre élevage et réduisez vos pertes
            </h1>

            <p className="mt-5 text-lg text-gray-600">
              Suivez vos lots, vos dépenses et votre rentabilité en temps réel.
              Avec SunuFarm, vous savez enfin si votre élevage vous rapporte vraiment.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <a
                href="#contact"
                className="rounded-xl bg-green-700 px-6 py-3 text-base font-semibold text-white shadow hover:bg-green-800 transition-colors"
              >
                Demander une démo
              </a>
              <a
                href="#pricing"
                className="rounded-xl border border-gray-300 px-6 py-3 text-base font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Voir les offres
              </a>
            </div>

            <p className="mt-6 text-sm text-gray-400">
              Adapté aux éleveurs et aux entreprises avicoles — simple à utiliser, même sans expérience technique
            </p>
          </div>

          {/* Mockup */}
          <div className="flex-1 md:max-w-xs lg:max-w-sm">
            <AppMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
