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
                  <p className="text-base font-bold text-red-500">1,2%</p>
                  <p className="text-xs text-gray-400 dark:text-gray-500">Mortalite</p>
                </div>
                <div>
                  <p className="text-base font-bold text-green-600">J+18</p>
                  <p className="text-xs text-gray-400 dark:text-gray-500">Age</p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-gray-100 bg-white p-3 shadow-sm dark:border-white/10 dark:bg-[#101c16]">
              <p className="mb-2 text-xs font-semibold text-gray-700 dark:text-gray-200">
                Resume achats et charges
              </p>
              <div className="space-y-1.5">
                {[
                  { label: "Aliments", value: "142 000", color: "bg-amber-400", width: "w-4/5" },
                  { label: "Medicaments", value: "28 000", color: "bg-blue-400", width: "w-2/5" },
                  { label: "Main-d'oeuvre", value: "35 000", color: "bg-orange-400", width: "w-1/2" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-2">
                    <span className="w-24 shrink-0 text-xs text-gray-500 dark:text-gray-400">
                      {item.label}
                    </span>
                    <div className="h-1.5 flex-1 rounded-full bg-gray-100 dark:bg-white/10">
                      <div className={`${item.color} ${item.width} h-1.5 rounded-full`} />
                    </div>
                    <span className="shrink-0 text-xs font-medium text-gray-700 dark:text-gray-200">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl bg-green-700 p-3">
              <p className="mb-1 text-xs text-green-200">Tableau de bord exploitation</p>
              <p className="text-xl font-bold text-white">
                +187 000 <span className="text-sm font-normal text-green-200">FCFA</span>
              </p>
              <p className="mt-0.5 text-xs text-green-300">
                Marge estimee a date sur l&apos;activite suivie
              </p>
            </div>

            <div className="rounded-xl border border-amber-200 bg-amber-50 p-3 dark:border-amber-400/25 dark:bg-amber-500/10">
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold text-amber-900 dark:text-amber-200">
                  Analyse IA du lot
                </p>
                <span className="rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-amber-800">
                  Pro
                </span>
              </div>
              <p className="mt-2 text-sm font-semibold text-gray-900 dark:text-white">
                Consommation a surveiller cette semaine
              </p>
              <p className="mt-1 text-xs text-gray-600 dark:text-gray-300">
                La consommation progresse plus vite que prevu. Verifiez l&apos;indice,
                le cout aliment et l&apos;evolution de la mortalite sur les prochains jours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
