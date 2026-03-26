export default function CTA() {
  return (
    <section id="contact" className="bg-green-700 px-5 py-14 md:py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">
          Prêt à mieux gérer votre élevage ?
        </h2>
        <p className="mt-4 text-green-100 text-lg">
          Demandez une démonstration gratuite. On vous montre comment SunuFarm
          fonctionne et on choisit ensemble l'offre qui vous convient.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="mailto:contact@sunufarm.com"
            className="rounded-xl bg-white px-6 py-3 text-base font-semibold text-green-700 shadow hover:bg-green-50 transition-colors"
          >
            Demander une démo
          </a>
          <a
            href="#pricing"
            className="rounded-xl border border-white px-6 py-3 text-base font-semibold text-white hover:bg-green-600 transition-colors"
          >
            Voir les offres
          </a>
        </div>

        <p className="mt-6 text-sm text-green-200">
          Pas d'engagement. On répond rapidement.
        </p>
      </div>
    </section>
  );
}
