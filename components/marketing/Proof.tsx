const stats = [
  { value: "-", label: "Eleveurs accompagnes", note: "bientot disponible" },
  { value: "-", label: "Lots suivis", note: "bientot disponible" },
  { value: "-", label: "Reduction moyenne des pertes", note: "bientot disponible" },
];

const testimonials = [
  {
    quote:
      "SunuFarm m'a aide a voir enfin ce que mes lots me coutaient vraiment. Maintenant je sais ou agir.",
    author: "Eleveur - Dakar",
    initials: "A.D.",
  },
  {
    quote:
      "Avant, je gerais tout dans un cahier. Aujourd'hui tout est dans l'appli et je perds moins de temps.",
    author: "Gerant de ferme - Thies",
    initials: "M.F.",
  },
];

export default function Proof() {
  return (
    <section className="bg-gray-50 px-5 py-14 md:py-20">
      <div className="mx-auto max-w-4xl">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            Des resultats concrets pour les eleveurs
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-gray-500">
            SunuFarm se construit avec les eleveurs, pour les eleveurs.
          </p>
        </div>

        <div className="mb-12 grid grid-cols-3 gap-4 text-center">
          {stats.map((s) => (
            <div key={s.label} className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
              <p className="text-2xl font-bold text-green-700">{s.value}</p>
              <p className="mt-1 text-sm font-medium text-gray-800">{s.label}</p>
              <p className="mt-0.5 text-xs text-gray-400">{s.note}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((t) => (
            <div
              key={t.author}
              className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
            >
              <p className="text-gray-700 italic">{`"${t.quote}"`}</p>
              <div className="mt-4 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-100 text-sm font-bold text-green-700">
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
