export default function AppMockup() {
  return (
    <div className="mx-auto mt-12 max-w-sm w-full">
      {/* Phone frame */}
      <div className="relative rounded-3xl bg-gray-900 p-2 shadow-2xl ring-1 ring-gray-700">
        {/* Screen */}
        <div className="rounded-2xl bg-gray-50 overflow-hidden">
          {/* Status bar */}
          <div className="bg-green-700 px-4 py-3 flex items-center justify-between">
            <span className="text-white text-xs font-semibold">SunuFarm</span>
            <span className="text-green-200 text-xs">Lot actif : 3</span>
          </div>

          {/* Content */}
          <div className="p-4 space-y-3">
            {/* Batch card */}
            <div className="bg-white rounded-xl p-3 shadow-sm border border-gray-100">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-semibold text-gray-700">Lot #12 — Poulets de chair</span>
                <span className="text-xs bg-green-100 text-green-700 rounded-full px-2 py-0.5 font-medium">En cours</span>
              </div>
              <div className="grid grid-cols-3 gap-2 text-center">
                <div>
                  <p className="text-base font-bold text-gray-900">480</p>
                  <p className="text-xs text-gray-400">Sujets</p>
                </div>
                <div>
                  <p className="text-base font-bold text-red-500">1,2%</p>
                  <p className="text-xs text-gray-400">Mortalité</p>
                </div>
                <div>
                  <p className="text-base font-bold text-green-600">J+18</p>
                  <p className="text-xs text-gray-400">Âge</p>
                </div>
              </div>
            </div>

            {/* Expense summary */}
            <div className="bg-white rounded-xl p-3 shadow-sm border border-gray-100">
              <p className="text-xs font-semibold text-gray-700 mb-2">Dépenses du lot</p>
              <div className="space-y-1.5">
                {[
                  { label: "Aliments", value: "142 000", color: "bg-amber-400", width: "w-4/5" },
                  { label: "Médicaments", value: "28 000", color: "bg-blue-400", width: "w-2/5" },
                  { label: "Main-d'œuvre", value: "35 000", color: "bg-purple-400", width: "w-1/2" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-2">
                    <span className="text-xs text-gray-500 w-24 shrink-0">{item.label}</span>
                    <div className="flex-1 bg-gray-100 rounded-full h-1.5">
                      <div className={`${item.color} ${item.width} h-1.5 rounded-full`} />
                    </div>
                    <span className="text-xs font-medium text-gray-700 shrink-0">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Profitability */}
            <div className="bg-green-700 rounded-xl p-3">
              <p className="text-xs text-green-200 mb-1">Rentabilité estimée</p>
              <p className="text-xl font-bold text-white">+187 000 <span className="text-sm font-normal text-green-200">FCFA</span></p>
              <p className="text-xs text-green-300 mt-0.5">Basé sur les données actuelles du lot</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
