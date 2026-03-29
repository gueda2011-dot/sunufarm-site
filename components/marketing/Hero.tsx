import AppMockup from "./AppMockup";
import { whatsappUrl } from "@/lib/whatsapp";

export default function Hero() {
  return (
    <section className="bg-white px-5 pb-12 pt-16 dark:bg-[#07110c] md:pb-20 md:pt-24">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col gap-12 md:flex-row md:items-center">
          <div className="flex-1 text-center md:text-left">
            <span className="mb-4 inline-block rounded-full bg-green-100 px-4 py-1 text-sm font-medium text-green-700 dark:bg-green-500/15 dark:text-green-300">
              Pilotage avicole mobile, concret et oriente resultat
            </span>

            <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white sm:text-5xl">
              Reduisez les pertes, suivez la rentabilite et pilotez votre exploitation avec plus de clarte
            </h1>

            <p className="mt-5 text-lg text-gray-600 dark:text-gray-300">
              SunuFarm vous aide a voir plus vite ce qui fait gagner ou perdre de
              l&apos;argent, a mieux suivre chaque lot et a prendre de meilleures
              decisions sur le terrain comme au niveau de l&apos;exploitation.
            </p>

            <div className="mt-6 grid gap-3 text-left sm:grid-cols-3">
              {[
                "Sachez si un lot est rentable avant la fin du cycle",
                "Reperez plus tot les pertes et les ecarts importants",
                "Centralisez lots, sante, stock et finances au meme endroit",
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
                Demander une demo
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
                "Concu pour les realites du terrain",
                "Adapte a l'Afrique francophone",
                "Simple a utiliser",
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
