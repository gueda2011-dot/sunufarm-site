"use client";

import { useActionState } from "react";
import { submitContact, type FormState } from "@/app/actions";

const demoHighlights = [
  "Présentation guidée de 20 à 30 minutes selon votre exploitation",
  "Écrans réels de SunuFarm sur mobile et ordinateur",
  "Recommandation de formule selon vos sites, votre équipe et vos objectifs",
];

const demoAgenda = [
  {
    title: "Comprendre votre fonctionnement",
    body: "On part de votre réalité terrain : nombre de lots, organisation, équipe et besoins de pilotage.",
  },
  {
    title: "Montrer les flux essentiels",
    body: "On vous fait voir concrètement le suivi des lots, des stocks, des ventes, des dépenses et des rapports.",
  },
  {
    title: "Repartir avec une vision claire",
    body: "Vous savez si SunuFarm est adapté, comment le déployer et quelle formule choisir.",
  },
];

export default function Contact() {
  const [state, action, pending] = useActionState<FormState, FormData>(
    submitContact,
    null
  );

  return (
    <section
      id="contact"
      className="bg-[radial-gradient(circle_at_top_left,_rgba(190,242,100,0.24),_transparent_34%),linear-gradient(135deg,_#0f4d2b,_#082d19_62%,_#04160d)] px-5 py-14 md:py-24"
    >
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <div className="text-white">
          <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-1 text-sm font-semibold tracking-wide text-green-100">
            Démo personnalisée SunuFarm
          </span>

          <h2 className="mt-5 max-w-xl text-3xl font-bold leading-tight sm:text-4xl">
            Voyez concretement comment SunuFarm s&apos;integre dans votre exploitation
          </h2>

          <p className="mt-4 max-w-2xl text-base leading-7 text-green-50/90 sm:text-lg">
            Cette démo n&apos;est pas une simple vidéo marketing. Nous vous montrons des
            écrans réels de la plateforme, le parcours terrain sur mobile et les vues
            de pilotage qui aident à mieux suivre les lots, le stock, les ventes et la
            rentabilité.
          </p>

          <div className="mt-8 grid gap-3">
            {demoHighlights.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/12 bg-white/8 px-4 py-4 text-sm font-medium text-green-50 backdrop-blur-sm"
              >
                {item}
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-[28px] border border-white/12 bg-black/10 p-6 backdrop-blur-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-green-100/80">
              Ce que l&apos;on couvre pendant la démo
            </p>
            <div className="mt-5 space-y-5">
              {demoAgenda.map((item, index) => (
                <div key={item.title} className="grid gap-3 sm:grid-cols-[auto_1fr] sm:items-start">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-lime-300 text-sm font-bold text-green-950">
                    0{index + 1}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white">{item.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-green-50/80">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {state?.success ? (
          <div className="rounded-[32px] border border-white/15 bg-white p-8 text-center shadow-2xl shadow-black/15 dark:bg-[#101914]">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-green-700 dark:text-green-300">
              Demande envoyée
            </p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              Nous revenons vers vous rapidement.
            </p>
            <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-300">
              {state.message}
            </p>
          </div>
        ) : (
          <form
            action={action}
            className="space-y-5 rounded-[32px] border border-white/15 bg-white p-6 shadow-2xl shadow-black/15 dark:bg-[#101914] sm:p-8"
          >
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-green-700 dark:text-green-300">
                Planifier une démo
              </p>
              <h3 className="mt-3 text-2xl font-bold text-gray-900 dark:text-white">
                Dites-nous en quelques mots ce que vous voulez voir
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-300">
                Nous adaptons la présentation à votre niveau de maturité, à votre
                taille d&apos;exploitation et à vos priorités du moment.
              </p>
            </div>

            {state && !state.success ? (
              <p className="rounded-lg bg-red-50 px-4 py-2 text-sm text-red-600 dark:bg-red-500/10 dark:text-red-300">
                {state.message}
              </p>
            ) : null}

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-200">Nom complet</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Votre nom"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-600 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder-gray-500"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-200">Email professionnel</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="vous@entreprise.com"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-600 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder-gray-500"
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-200">Téléphone ou WhatsApp</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+221 ..."
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-600 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder-gray-500"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-200">Votre profil</label>
                <select
                  name="role"
                  defaultValue=""
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-600 dark:border-white/10 dark:bg-white/5 dark:text-white"
                >
                  <option value="" disabled>
                    Sélectionnez votre profil
                  </option>
                  <option value="Eleveur">Éleveur</option>
                  <option value="Responsable d'exploitation">Responsable d&apos;exploitation</option>
                  <option value="Gestionnaire ou administratif">Gestionnaire ou administratif</option>
                  <option value="Entreprise avicole">Entreprise avicole</option>
                </select>
              </div>
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-200">
                Taille approximative de l&apos;exploitation
              </label>
              <input
                type="text"
                name="farmSize"
                placeholder="Ex. 3 sites, 12 bâtiments, 18 000 têtes"
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-600 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder-gray-500"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-200">Ce que vous voulez voir pendant la démo</label>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Parlez-nous de vos priorités : suivi des lots, saisie mobile, stock, ventes, finances, rapports..."
                className="w-full resize-none rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-600 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder-gray-500"
              />
            </div>

            <div className="rounded-2xl bg-green-50 px-4 py-3 text-sm text-green-900 dark:bg-green-500/10 dark:text-green-100">
              Réponse rapide, sans engagement. Nous vous recontactons pour caler une démonstration adaptée à votre contexte.
            </div>

            <button
              type="submit"
              disabled={pending}
              className="w-full rounded-xl bg-green-700 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-green-800 disabled:opacity-60"
            >
              {pending ? "Envoi en cours..." : "Demander ma démonstration"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
