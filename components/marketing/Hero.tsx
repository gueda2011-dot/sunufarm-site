import AppMockup from "./AppMockup";
import { whatsappUrl } from "@/lib/whatsapp";

export default function Hero() {
  return (
    <section className="bg-white px-5 pb-12 pt-16 dark:bg-[#07110c] md:pb-20 md:pt-24">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col gap-12 md:flex-row md:items-center">
          <div className="flex-1 text-center md:text-left">
            <div className="mb-4 flex flex-wrap justify-center gap-2 md:justify-start">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-green-100 px-4 py-1 text-sm font-medium text-green-700 dark:bg-green-500/15 dark:text-green-300">
                <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                Application disponible
              </span>
              <span className="inline-flex rounded-full border border-gray-200 bg-white px-4 py-1 text-sm font-medium text-gray-600 dark:border-white/10 dark:bg-white/5 dark:text-gray-300">
                Afrique francophone
              </span>
            </div>

            <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white sm:text-5xl">
              Passez de la saisie terrain à la décision économique
            </h1>

            <p className="mt-5 text-lg text-gray-600 dark:text-gray-300">
              SunuFarm aide les élevages avicoles à saisir simplement le quotidien, voir la
              rentabilité par lot, calculer le prix minimum de vente, recevoir des alertes
              intelligentes et agir tout de suite depuis l&apos;application.
            </p>

            <div className="mt-6 grid gap-3 text-left sm:grid-cols-3">
              {[
                "Saisie journalière simple pour chaque lot",
                "Rentabilité par lot et prix minimum de vente",
                "Alertes intelligentes avec actions immédiates",
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
                href="#pricing"
                className="rounded-xl bg-green-700 px-6 py-3 text-base font-semibold text-white shadow transition-colors hover:bg-green-800"
              >
                Voir les offres
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-green-700 px-6 py-3 text-base font-semibold text-green-700 transition-colors hover:bg-green-50 dark:border-green-400 dark:text-green-300 dark:hover:bg-white/5"
              >
                Parler avec nous sur WhatsApp
              </a>
            </div>

            <div className="mt-6 flex flex-wrap justify-center gap-2 md:justify-start">
              {[
                "Reports clairs pour suivre vos lots",
                "Multi-fermes et équipe selon votre formule",
                "Parcours simple sur mobile et ordinateur",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-gray-200 bg-white px-3 py-1.5 text-sm font-medium text-gray-600 dark:border-white/10 dark:bg-white/5 dark:text-gray-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="flex-1 md:max-w-xs lg:max-w-sm">
            <AppMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
