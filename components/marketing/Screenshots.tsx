const navItems = [
  "Tableau de bord",
  "Saisie journaliere",
  "Lots d'elevage",
  "Sante animale",
  "Finances",
];

function ScreenshotShell({
  active,
  title,
  subtitle,
  children,
}: {
  active: string;
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <div className="overflow-hidden rounded-[26px] border border-gray-200 bg-white shadow-[0_18px_60px_rgba(15,23,42,0.08)] dark:border-white/10 dark:bg-[#0e1712] dark:shadow-none">
      <div className="border-b border-gray-200 bg-white px-4 py-3 dark:border-white/10 dark:bg-[#0f1a14]">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-green-500 to-amber-500 text-xs font-bold text-white">
              SF
            </div>
            <div>
              <p className="text-sm font-bold text-gray-900 dark:text-white">SunuFarm</p>
              <p className="text-[11px] text-gray-400 dark:text-gray-500">PLAN BUSINESS</p>
            </div>
          </div>
          <div className="hidden rounded-full border border-green-200 bg-green-50 px-3 py-1 text-[11px] font-semibold text-green-700 sm:inline-flex dark:border-green-400/20 dark:bg-green-500/10 dark:text-green-300">
            PLAN BUSINESS
          </div>
        </div>
      </div>

      <div className="grid min-h-[320px] md:grid-cols-[188px_1fr]">
        <aside className="border-r border-gray-200 bg-gray-50 p-4 dark:border-white/10 dark:bg-[#101914]">
          <div className="space-y-2">
            {navItems.map((item) => {
              const isActive = item === active;

              return (
                <div
                  key={item}
                  className={`rounded-2xl px-3 py-2.5 text-sm font-medium ${
                    isActive
                      ? "bg-green-50 text-green-700 dark:bg-green-500/15 dark:text-green-300"
                      : "text-gray-500 dark:text-gray-400"
                  }`}
                >
                  {item}
                </div>
              );
            })}
          </div>
        </aside>

        <div className="bg-[#f8fafc] p-5 dark:bg-[#0b130f]">
          <div className="mb-5">
            <h4 className="text-2xl font-bold text-slate-900 dark:text-white">{title}</h4>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{subtitle}</p>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}

function DashboardPreview() {
  return (
    <ScreenshotShell
      active="Tableau de bord"
      title="Tableau de bord"
      subtitle="Vue d'ensemble de votre exploitation avicole."
    >
      <div className="rounded-[22px] border border-amber-200 bg-amber-50 px-5 py-4 text-amber-900 dark:border-amber-400/20 dark:bg-amber-500/10 dark:text-amber-200">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-xl font-semibold">2 lots sans saisie depuis plus de 2 jours</p>
            <p className="mt-1 text-sm opacity-80">SF-2026-002, SF-2026-001</p>
          </div>
          <div className="rounded-2xl bg-orange-500 px-4 py-2 text-sm font-semibold text-white">
            Saisir
          </div>
        </div>
      </div>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        {[
          { label: "Lots actifs", value: "4", note: "8 800 sujets", accent: "text-slate-900 dark:text-white" },
          { label: "Charges globales", value: "11,2M FCFA", note: "Achats + depenses operat.", accent: "text-slate-900 dark:text-white" },
          { label: "Mortalite cumulee", value: "17", note: "0,2% des sujets", accent: "text-green-600" },
          { label: "Alertes saisie", value: "2", note: "lots en retard", accent: "text-orange-500" },
        ].map((card) => (
          <div
            key={card.label}
            className="rounded-[22px] border border-gray-200 bg-white p-5 dark:border-white/10 dark:bg-[#101914]"
          >
            <p className="text-sm text-slate-400 dark:text-slate-500">{card.label}</p>
            <p className={`mt-2 text-3xl font-bold ${card.accent}`}>{card.value}</p>
            <p className="mt-1 text-sm text-slate-400 dark:text-slate-500">{card.note}</p>
          </div>
        ))}
      </div>
    </ScreenshotShell>
  );
}

function LotsPreview() {
  return (
    <ScreenshotShell
      active="Lots d'elevage"
      title="Type d'elevage"
      subtitle="Creer et structurer un lot avec des champs simples a remplir."
    >
      <div className="space-y-5">
        <div className="rounded-[24px] border border-gray-200 bg-white p-5 dark:border-white/10 dark:bg-[#101914]">
          <h5 className="text-xl font-semibold text-slate-900 dark:text-white">Localisation</h5>
          <div className="mt-5 grid gap-4">
            {[
              { label: "Ferme", value: "Selectionner une ferme" },
              { label: "Batiment", value: "Selectionner d'abord une ferme" },
            ].map((field) => (
              <div key={field.label}>
                <p className="mb-2 text-sm font-medium text-slate-700 dark:text-slate-200">{field.label}</p>
                <div className="rounded-[20px] border border-gray-200 bg-white px-4 py-3 text-slate-500 dark:border-white/10 dark:bg-[#0d1712] dark:text-slate-400">
                  {field.value}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[24px] border border-gray-200 bg-white p-5 dark:border-white/10 dark:bg-[#101914]">
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { label: "Type", value: "Poulet de chair" },
              { label: "Espece", value: "Poulet" },
              { label: "Race / souche", value: "Selectionner une race", full: true },
            ].map((field) => (
              <div key={field.label} className={field.full ? "sm:col-span-2" : ""}>
                <p className="mb-2 text-sm font-medium text-slate-700 dark:text-slate-200">{field.label}</p>
                <div className="rounded-[20px] border border-gray-200 bg-white px-4 py-3 text-slate-800 dark:border-white/10 dark:bg-[#0d1712] dark:text-slate-200">
                  {field.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ScreenshotShell>
  );
}

function HealthPreview() {
  return (
    <ScreenshotShell
      active="Sante animale"
      title="Sante animale"
      subtitle="Pilotage des vaccinations, traitements et lots a surveiller."
    >
      <div className="grid gap-3 sm:grid-cols-3 xl:grid-cols-6">
        {[
          { label: "Vaccinations (7j)", value: "0", note: "7 derniers jours", accent: "text-green-600" },
          { label: "Traitements actifs", value: "0", note: "en cours", accent: "text-slate-900 dark:text-white" },
          { label: "Total vaccinations", value: "0", note: "historique", accent: "text-blue-600" },
          { label: "Total traitements", value: "0", note: "historique", accent: "text-slate-900 dark:text-white" },
          { label: "Lots a surveiller", value: "4", note: "vaccinations dues", accent: "text-orange-500" },
          { label: "Plans vaccinaux", value: "0", note: "templates actifs", accent: "text-blue-600" },
        ].map((item) => (
          <div
            key={item.label}
            className="rounded-[20px] border border-gray-200 bg-white p-4 dark:border-white/10 dark:bg-[#101914]"
          >
            <p className="text-sm text-slate-400 dark:text-slate-500">{item.label}</p>
            <p className={`mt-2 text-2xl font-bold ${item.accent}`}>{item.value}</p>
            <p className="mt-1 text-sm text-slate-400 dark:text-slate-500">{item.note}</p>
          </div>
        ))}
      </div>

      <div className="mt-5 rounded-[24px] border border-amber-200 bg-[#fff8e6] p-5 dark:border-amber-400/20 dark:bg-amber-500/10">
        <h5 className="text-2xl font-semibold text-amber-900 dark:text-amber-200">Lots a surveiller</h5>
        <p className="mt-2 text-sm text-amber-800 dark:text-amber-100/80">
          Ces lots ont des vaccinations a faire maintenant ou deja en retard.
        </p>

        <div className="mt-4 space-y-4">
          {[
            { lot: "SF-2026-002", day: "Jour 65", late: "5 en retard", todo: "1 a faire" },
            { lot: "SF-2026-001", day: "Jour 33", late: "5 en retard", todo: null },
          ].map((row) => (
            <div
              key={row.lot}
              className="rounded-[22px] border border-white bg-white p-5 dark:border-white/10 dark:bg-[#101914]"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="text-2xl font-semibold text-slate-900 dark:text-white">{row.lot}</p>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{row.day}</p>
                  <div className="mt-3 space-y-1 text-sm text-slate-600 dark:text-slate-300">
                    <p>Marek - J0 a J2 - en retard</p>
                    <p>Newcastle HB1 - J7 a J14 - en retard</p>
                    <p>Gumboro - 1ere dose - J7 a J14 - en retard</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <span className="rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-700">
                    {row.late}
                  </span>
                  {row.todo ? (
                    <span className="rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-700">
                      {row.todo}
                    </span>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ScreenshotShell>
  );
}

function FinancePreview() {
  return (
    <ScreenshotShell
      active="Finances"
      title="Finances"
      subtitle="Suivi des depenses de l'organisation."
    >
      <div className="grid gap-4 lg:grid-cols-3">
        {[
          { label: "Total depenses", value: "5 315 000 FCFA", accent: "text-slate-900 dark:text-white" },
          { label: "Total ventes", value: "5 828 360 FCFA", accent: "text-slate-900 dark:text-white" },
          { label: "Resultat net", value: "513 360 FCFA", accent: "text-green-600" },
        ].map((item) => (
          <div
            key={item.label}
            className="rounded-[22px] border border-gray-200 bg-white p-5 dark:border-white/10 dark:bg-[#101914]"
          >
            <p className="text-sm text-slate-400 dark:text-slate-500">{item.label}</p>
            <p className={`mt-4 text-3xl font-bold ${item.accent}`}>{item.value}</p>
          </div>
        ))}
      </div>

      <div className="mt-5 grid gap-4 lg:grid-cols-[0.9fr_1.35fr]">
        <div className="rounded-[22px] border border-gray-200 bg-white p-5 dark:border-white/10 dark:bg-[#101914]">
          <h5 className="text-2xl font-semibold text-slate-900 dark:text-white">Nouvelle depense</h5>
          <div className="mt-5 space-y-4">
            {[
              { label: "Description", value: "Ex : Achat d'aliment" },
              { label: "Montant (FCFA)", value: "50000" },
              { label: "Date", value: "26 fevr. 2026" },
            ].map((field) => (
              <div key={field.label}>
                <p className="mb-2 text-sm font-medium text-slate-700 dark:text-slate-200">{field.label}</p>
                <div className="rounded-[18px] border border-gray-200 bg-white px-4 py-3 text-slate-400 dark:border-white/10 dark:bg-[#0d1712]">
                  {field.value}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[22px] border border-gray-200 bg-white p-5 dark:border-white/10 dark:bg-[#101914]">
          <h5 className="text-2xl font-semibold text-slate-900 dark:text-white">Liste des depenses</h5>
          <div className="mt-5 space-y-4">
            {[
              {
                title: "Achat 2000 poussins Cobb 500 - AVISEN",
                date: "24 fevr. 2026",
                amount: "1 500 000 FCFA",
              },
              {
                title: "Achat aliment croissance Avicoop No 2 - 4 tonnes",
                date: "22 fevr. 2026 - Aliment - Ref. BL-2026-089",
                amount: "1 700 000 FCFA",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-[20px] border border-gray-200 bg-white px-5 py-4 dark:border-white/10 dark:bg-[#0d1712]"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-xl font-semibold text-slate-900 dark:text-white">{item.title}</p>
                    <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{item.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-semibold text-slate-900 dark:text-white">{item.amount}</p>
                    <p className="mt-2 text-sm font-medium text-blue-600">Details</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ScreenshotShell>
  );
}

function ReportsPreview() {
  return (
    <ScreenshotShell
      active="Finances"
      title="Rapport mensuel"
      subtitle="Lecture simple des revenus, achats et indicateurs du mois."
    >
      <div className="flex flex-wrap items-center gap-3">
        <div className="rounded-[18px] border border-gray-200 bg-white px-4 py-3 text-sm font-semibold text-slate-800 dark:border-white/10 dark:bg-[#101914] dark:text-slate-200">
          Mars 2026
        </div>
        <div className="rounded-[18px] border border-green-200 bg-green-50 px-4 py-3 text-sm font-semibold text-green-700 dark:border-green-400/20 dark:bg-green-500/10 dark:text-green-300">
          Export Excel
        </div>
        <div className="rounded-[18px] border border-gray-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 dark:border-white/10 dark:bg-[#101914] dark:text-slate-300">
          Export PDF
        </div>
        <div className="rounded-[18px] border border-gray-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 dark:border-white/10 dark:bg-[#101914] dark:text-slate-300">
          CSV
        </div>
      </div>

      <div className="mt-5 rounded-[24px] border border-gray-200 bg-white p-5 dark:border-white/10 dark:bg-[#101914]">
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">
          Vue financiere du mois
        </p>

        <div className="mt-5">
          <div className="mb-2 flex justify-between text-xs text-slate-400 dark:text-slate-500">
            <span>0</span>
            <span>650K</span>
            <span>1.3M</span>
            <span>1.9M</span>
            <span>2.6M</span>
          </div>

          <div className="flex h-64 items-end justify-around gap-8 rounded-[20px] bg-[linear-gradient(to_top,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[length:100%_52px] px-6 py-4 dark:bg-[linear-gradient(to_top,rgba(255,255,255,0.06)_1px,transparent_1px)] dark:bg-[length:100%_52px]">
            <div className="flex flex-col items-center">
              <div className="h-44 w-24 rounded-t-2xl bg-green-600 shadow-sm" />
              <p className="mt-3 text-sm font-medium text-slate-600 dark:text-slate-300">Revenus</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-24 w-24 rounded-t-2xl bg-blue-600 shadow-sm" />
              <p className="mt-3 text-sm font-medium text-slate-600 dark:text-slate-300">Achats</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5 grid gap-4 md:grid-cols-3">
        {[
          {
            label: "Ventes",
            title: "Attention : 23.6% vs mois precedent",
            note: "Mois precedent : 3 303 360 FCFA",
          },
          {
            label: "Depenses",
            title: "Evolution favorable : 100.0% vs mois precedent",
            note: "Mois precedent : 3 200 000 FCFA",
          },
          {
            label: "Mortalite",
            title: "Stable par rapport au mois precedent",
            note: "Mois precedent : 9 sujets",
          },
        ].map((item) => (
          <div
            key={item.label}
            className="rounded-[22px] border border-gray-200 bg-white p-5 dark:border-white/10 dark:bg-[#101914]"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">
              {item.label}
            </p>
            <p className="mt-4 text-xl font-semibold text-slate-900 dark:text-white">{item.title}</p>
            <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">{item.note}</p>
          </div>
        ))}
      </div>
    </ScreenshotShell>
  );
}

function SalesPreview() {
  return (
    <ScreenshotShell
      active="Ventes"
      title="Liste des ventes"
      subtitle="Historique des ventes enregistrees et suivi des encaissements."
    >
      <div className="grid gap-4 lg:grid-cols-3">
        {[
          { label: "Chiffre d'affaires", value: "5 828 360 FCFA", accent: "text-slate-900 dark:text-white" },
          { label: "Montant encaisse", value: "3 690 860 FCFA", accent: "text-green-600" },
          { label: "Reste a encaisser", value: "2 137 500 FCFA", accent: "text-orange-500" },
        ].map((item) => (
          <div
            key={item.label}
            className="rounded-[22px] border border-gray-200 bg-white p-5 dark:border-white/10 dark:bg-[#101914]"
          >
            <p className="text-sm text-slate-400 dark:text-slate-500">{item.label}</p>
            <p className={`mt-4 text-3xl font-bold ${item.accent}`}>{item.value}</p>
          </div>
        ))}
      </div>

      <div className="mt-5 rounded-[22px] border border-gray-200 bg-white dark:border-white/10 dark:bg-[#101914]">
        <div className="border-b border-gray-200 px-5 py-4 dark:border-white/10">
          <h5 className="text-2xl font-semibold text-slate-900 dark:text-white">Liste des ventes</h5>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Historique des ventes enregistrees.
          </p>
        </div>

        <div className="divide-y divide-gray-200 dark:divide-white/10">
          {[
            {
              client: "Client divers",
              type: "Poulet vif",
              date: "26 mars 2026",
              total: "1 750 000 FCFA",
              paid: "0 FCFA",
              rest: "1 750 000 FCFA",
            },
            {
              client: "Marche Sandaga",
              type: "Poulet vif",
              date: "23 mars 2026",
              total: "775 000 FCFA",
              paid: "387 500 FCFA",
              rest: "387 500 FCFA",
            },
          ].map((sale) => (
            <div key={`${sale.client}-${sale.date}`} className="px-5 py-5">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <p className="text-2xl font-semibold text-slate-900 dark:text-white">{sale.client}</p>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-600 dark:bg-white/10 dark:text-slate-300">
                      {sale.type}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{sale.date}</p>
                </div>
                <div className="rounded-[18px] bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700 dark:bg-white/5 dark:text-slate-300">
                  Voir detail
                </div>
              </div>

              <div className="mt-4 grid gap-3 md:grid-cols-3">
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Total : <span className="font-semibold text-slate-900 dark:text-white">{sale.total}</span>
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Paye : <span className="font-semibold text-green-600">{sale.paid}</span>
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Reste : <span className="font-semibold text-orange-500">{sale.rest}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ScreenshotShell>
  );
}

function ClientsPreview() {
  return (
    <ScreenshotShell
      active="Clients"
      title="Clients"
      subtitle="Carnet clients et suivi des creances."
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h5 className="text-2xl font-semibold text-slate-900 dark:text-white">Clients</h5>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Carnet clients et suivi des creances
          </p>
        </div>
        <div className="rounded-[18px] bg-green-600 px-5 py-3 text-sm font-semibold text-white">
          + Nouveau client
        </div>
      </div>

      <div className="mt-5 grid gap-4 md:grid-cols-3">
        {[
          { label: "Clients", value: "3", note: "enregistres", accent: "text-blue-600" },
          { label: "CA total", value: "4.1M FCFA", note: "toutes ventes", accent: "text-green-600" },
          { label: "Creances", value: "388K FCFA", note: "reste a encaisser", accent: "text-red-600" },
        ].map((item) => (
          <div
            key={item.label}
            className="rounded-[22px] border border-gray-200 bg-white p-5 dark:border-white/10 dark:bg-[#101914]"
          >
            <p className="text-sm text-slate-400 dark:text-slate-500">{item.label}</p>
            <p className={`mt-3 text-3xl font-bold ${item.accent}`}>{item.value}</p>
            <p className="mt-1 text-sm text-slate-400 dark:text-slate-500">{item.note}</p>
          </div>
        ))}
      </div>

      <div className="mt-5 grid gap-4 md:grid-cols-[1fr_190px]">
        <div className="rounded-[20px] border border-gray-200 bg-white px-4 py-3 text-slate-400 dark:border-white/10 dark:bg-[#101914] dark:text-slate-500">
          Rechercher un client...
        </div>
        <div className="rounded-[20px] border border-gray-200 bg-white px-4 py-3 text-slate-700 dark:border-white/10 dark:bg-[#101914] dark:text-slate-300">
          Tous les types
        </div>
      </div>

      <div className="mt-5 space-y-4">
        {[
          {
            name: "Marche Sandaga",
            type: "Revendeur",
            phone: "+221 77 234 56 78",
            place: "Marche Sandaga, Dakar",
            since: "Depuis 26 mars 2026",
            amount: "4.1M FCFA",
            sales: "2 ventes",
            rest: "Reste 387 500 FCFA",
          },
          {
            name: "Mbaye Diop",
            type: "Particulier",
            phone: "+221 77 456 78 90",
            place: "Dakar",
            since: "Depuis 12 mars 2026",
            amount: "0 FCFA",
            sales: "0 ventes",
            rest: null,
          },
        ].map((client) => (
          <div
            key={client.name}
            className="rounded-[22px] border border-gray-200 bg-white px-5 py-5 dark:border-white/10 dark:bg-[#101914]"
          >
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <p className="text-2xl font-semibold text-slate-900 dark:text-white">{client.name}</p>
                  <span className="rounded-full bg-violet-100 px-3 py-1 text-sm font-medium text-violet-700 dark:bg-violet-500/15 dark:text-violet-300">
                    {client.type}
                  </span>
                </div>
                <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                  {client.phone} - {client.place}
                </p>
                <p className="mt-6 text-sm text-slate-300 dark:text-slate-500">{client.since}</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-semibold text-slate-900 dark:text-white">{client.amount}</p>
                <p className="mt-1 text-sm text-slate-400 dark:text-slate-500">{client.sales}</p>
                {client.rest ? (
                  <p className="mt-2 text-sm font-semibold text-red-600">{client.rest}</p>
                ) : null}
              </div>
            </div>
          </div>
        ))}
      </div>
    </ScreenshotShell>
  );
}

export default function Screenshots() {
  return (
    <section className="bg-white px-5 py-14 dark:bg-[#07110c] md:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <span className="inline-flex rounded-full bg-green-100 px-4 py-1 text-sm font-semibold text-green-700 dark:bg-green-500/15 dark:text-green-300">
            Captures de la plateforme
          </span>
          <h2 className="mt-4 text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
            Voyez concretement les ecrans utilises pour piloter l&apos;exploitation
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-gray-500 dark:text-gray-400">
            Une interface claire pour lire vos performances, creer vos lots,
            suivre la sante animale et garder une vision precise de vos finances.
          </p>
        </div>

        <div className="grid gap-8">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-green-700 dark:text-green-300">
              Dashboard
            </p>
            <p className="mb-5 text-xl font-bold text-gray-900 dark:text-white">
              Visualisez vos performances en un coup d&apos;oeil
            </p>
            <DashboardPreview />
          </div>

          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-green-700 dark:text-green-300">
              Lots
            </p>
            <p className="mb-5 text-xl font-bold text-gray-900 dark:text-white">
              Suivez chaque lot du debut a la fin
            </p>
            <LotsPreview />
          </div>

          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-green-700 dark:text-green-300">
              Sante
            </p>
            <p className="mb-5 text-xl font-bold text-gray-900 dark:text-white">
              Ne ratez plus les traitements
            </p>
            <HealthPreview />
          </div>

          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-green-700 dark:text-green-300">
              Finances
            </p>
            <p className="mb-5 text-xl font-bold text-gray-900 dark:text-white">
              Gardez une vision claire de vos resultats
            </p>
            <FinancePreview />
          </div>

          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-green-700 dark:text-green-300">
              Rapports
            </p>
            <p className="mb-5 text-xl font-bold text-gray-900 dark:text-white">
              Suivez vos indicateurs mensuels et exportez vos donnees
            </p>
            <ReportsPreview />
          </div>

          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-green-700 dark:text-green-300">
              Ventes
            </p>
            <p className="mb-5 text-xl font-bold text-gray-900 dark:text-white">
              Suivez vos ventes, vos encaissements et ce qu&apos;il reste a recuperer
            </p>
            <SalesPreview />
          </div>

          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-green-700 dark:text-green-300">
              Clients
            </p>
            <p className="mb-5 text-xl font-bold text-gray-900 dark:text-white">
              Gardez un carnet client clair avec vos creances sous controle
            </p>
            <ClientsPreview />
          </div>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {[
            "Concu pour les realites du terrain",
            "Adapte a l'Afrique francophone",
            "Simple a utiliser par les equipes",
          ].map((item) => (
            <span
              key={item}
              className="rounded-full border border-green-100 bg-green-50 px-4 py-2 text-sm font-medium text-green-800 dark:border-white/10 dark:bg-white/5 dark:text-green-200"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
