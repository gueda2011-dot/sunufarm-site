export default function CTA() {
  return (
    <section id="contact" className="bg-green-700 px-5 py-14 md:py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">
          Pret a mieux gerer votre elevage ?
        </h2>
        <p className="mt-4 text-lg text-green-100">
          Demandez une demonstration gratuite. On vous montre comment SunuFarm
          {` fonctionne et on choisit ensemble l'offre qui vous convient.`}
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href="mailto:contact@sunufarm.com"
            className="rounded-xl bg-white px-6 py-3 text-base font-semibold text-green-700 shadow transition-colors hover:bg-green-50"
          >
            Demander une demo
          </a>
          <a
            href="#pricing"
            className="rounded-xl border border-white px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-green-600"
          >
            Voir les offres
          </a>
        </div>

        <p className="mt-6 text-sm text-green-200">{`Pas d'engagement. On repond rapidement.`}</p>
      </div>
    </section>
  );
}
