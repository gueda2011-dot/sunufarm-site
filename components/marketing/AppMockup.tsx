export default function AppMockup() {
  return (
    <div className="mx-auto mt-12 w-full max-w-sm">
      <div className="relative rounded-3xl bg-gray-900 p-2 shadow-2xl ring-1 ring-gray-700 dark:bg-[#020806] dark:ring-white/10">
        <div className="overflow-hidden rounded-2xl bg-gray-50 dark:bg-[#0c1712]">
          <div className="flex items-center justify-between bg-green-700 px-4 py-3">
            <span className="text-xs font-semibold text-white">SunuFarm</span>
            <span className="text-xs text-green-200">Lots actifs : 3</span>
          </div>

          <div className="space-y-3 p-4">
            <div className="rounded-xl border border-gray-100 bg-white p-3 shadow-sm dark:border-white/10 dark:bg-[#101c16]">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-xs font-semibold text-gray-700 dark:text-gray-200">
                  Ferme Diale - Lot Chair #12
                </span>
                <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700">
                  En cours
                </span>
              </div>
              <div className="grid grid-cols-3 gap-2 text-center">
                <div>
                  <p className="text-base font-bold text-gray-900 dark:text-white">480</p>
                  <p className="text-xs text-gray-400 dark:text-gray-500">Sujets</p>
                </div>
                <div>
                  <p className="text-base font-bold text-sky-600">J+18</p>
                  <p className="text-xs text-gray-400 dark:text-gray-500">Age</p>
                </div>
                <div>
                  <p className="text-base font-bold text-red-500">1,2%</p>
                  <p className="text-xs text-gray-400 dark:text-gray-500">Mortalite</p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-gray-100 bg-white p-3 shadow-sm dark:border-white/10 dark:bg-[#101c16]">
              <p className="mb-2 text-xs font-semibold text-gray-700 dark:text-gray-200">
                Lecture economique du lot
              </p>
              <div className="grid grid-cols-2 gap-2">
                <div className="rounded-lg bg-gray-50 px-3 py-2 dark:bg-white/5">
                  <p className="text-[11px] text-gray-400 dark:text-gray-500">Rentabilite a date</p>
                  <p className="mt-1 text-sm font-bold text-gray-900 dark:text-white">+187 000 FCFA</p>
                </div>
                <div className="rounded-lg bg-gray-50 px-3 py-2 dark:bg-white/5">
                  <p className="text-[11px] text-gray-400 dark:text-gray-500">Prix minimum de vente</p>
                  <p className="mt-1 text-sm font-bold text-amber-700 dark:text-amber-300">
                    2 150 FCFA / tete
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-green-700 p-3">
              <p className="mb-1 text-xs text-green-200">Report du jour</p>
              <p className="text-xl font-bold text-white">3 alertes a traiter</p>
              <p className="mt-0.5 text-xs text-green-300">
                1 lot a surveiller, 1 prix a recalculer, 1 vente a confirmer
              </p>
            </div>

            <div className="rounded-xl border border-amber-200 bg-amber-50 p-3 dark:border-amber-400/25 dark:bg-amber-500/10">
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold text-amber-900 dark:text-amber-200">
                  Alerte intelligente
                </p>
                <span className="rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-amber-800">
                  Pro
                </span>
              </div>
              <p className="mt-2 text-sm font-semibold text-gray-900 dark:text-white">
                Prix minimum a recalculer avant la prochaine vente
              </p>
              <p className="mt-1 text-xs text-gray-600 dark:text-gray-300">
                Les charges du lot ont augmente. Mettez a jour le prix cible ou ouvrez le
                report pour verifier la marge.
              </p>
              <div className="mt-3 flex gap-2">
                <span className="rounded-lg bg-white px-2.5 py-1 text-[11px] font-semibold text-amber-900 shadow-sm">
                  Voir le lot
                </span>
                <span className="rounded-lg bg-amber-900 px-2.5 py-1 text-[11px] font-semibold text-white">
                  Ouvrir le report
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
