const stats = [
  { value: "—", label: "Éleveurs accompagnés", note: "bientôt disponible" },
  { value: "—", label: "Lots suivis", note: "bientôt disponible" },
  { value: "—", label: "Réduction moyenne des pertes", note: "bientôt disponible" },
];

const testimonials = [
  {
    quote:
      "SunuFarm m'a aidé à voir enfin ce que mes lots me coûtaient vraiment. Maintenant je sais où agir.",
    author: "Éleveur — Dakar",
    initials: "A.D.",
  },
  {
    quote:
      "Avant, je gérais tout dans un cahier. Aujourd'hui tout est dans l'appli et je perds moins de temps.",
    author: "Gérant de ferme — Thiès",
    initials: "M.F.",
  },
];

export default function Proof() {
  return (
    <section className="bg-gray-50 px-5 py-14 md:py-20">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            Des résultats concrets pour les éleveurs
          </h2>
          <p className="mt-3 text-gray-500 max-w-xl mx-auto">
            SunuFarm se construit avec les éleveurs, pour les éleveurs.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-12 text-center">
          {stats.map((s) => (
            <div key={s.label} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
              <p className="text-2xl font-bold text-green-700">{s.value}</p>
              <p className="mt-1 text-sm font-medium text-gray-800">{s.label}</p>
              <p className="mt-0.5 text-xs text-gray-400">{s.note}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((t) => (
            <div
              key={t.author}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm"
            >
              <p className="text-gray-700 italic">"{t.quote}"</p>
              <div className="mt-4 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-green-100 flex items-center justify-center text-sm font-bold text-green-700">
                  {t.initials}
                </div>
                <p className="text-sm text-gray-500">{t.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
