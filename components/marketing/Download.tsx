"use client";

import { useActionState } from "react";
import { submitWaitlist, type FormState } from "@/app/actions";
import { appUrl } from "@/lib/site";

export default function Download() {
  const [state, action, pending] = useActionState<FormState, FormData>(
    submitWaitlist,
    null
  );

  return (
    <section className="bg-gray-900 px-5 py-14 dark:bg-[#020806] md:py-20">
      <div className="mx-auto max-w-4xl">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Accéder à SunuFarm
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-gray-400">
            Démarrez sur navigateur, installez l&apos;application sur votre téléphone
            et commencez à piloter votre exploitation dès aujourd&apos;hui.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="flex flex-col rounded-2xl border border-gray-700 bg-gray-800 p-6 dark:border-white/10 dark:bg-[#0f1b15]">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-700 text-xl font-semibold text-white">
                W
              </div>
              <div>
                <p className="font-semibold text-white">Application web</p>
                <span className="rounded-full bg-green-700 px-2 py-0.5 text-xs font-medium text-green-100">
                  Disponible maintenant
                </span>
              </div>
            </div>
            <p className="flex-1 text-sm text-gray-400">
              Ouvrez SunuFarm depuis n&apos;importe quel navigateur sur téléphone ou
              ordinateur. Aucune installation requise pour commencer.
            </p>
            <a
              href={appUrl}
              className="mt-5 block rounded-xl bg-green-700 px-5 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-green-600"
            >
              Ouvrir l&apos;application
            </a>
          </div>

          <div className="flex flex-col rounded-2xl border border-gray-700 bg-gray-800 p-6 dark:border-white/10 dark:bg-[#0f1b15]">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-700 text-xl font-semibold text-white dark:bg-white/10">
                +
              </div>
              <div>
                <p className="font-semibold text-white">Installation PWA</p>
                <span className="rounded-full bg-green-700 px-2 py-0.5 text-xs font-medium text-green-100">
                  Android & iOS
                </span>
              </div>
            </div>
            <p className="flex-1 text-sm text-gray-400">
              Sur Android et iPhone, ajoutez SunuFarm à votre écran d&apos;accueil
              pour une expérience proche d&apos;une application native, avec des alertes
              push en temps réel.
            </p>

            <div className="mt-5 flex gap-2">
              <div className="flex flex-1 items-center rounded-xl border border-gray-600 bg-gray-700 px-3 py-2 dark:border-white/10 dark:bg-white/5">
                <div>
                  <p className="text-xs text-gray-400">Ajout rapide sur</p>
                  <p className="text-xs font-semibold text-white">Android</p>
                </div>
              </div>
              <div className="flex flex-1 items-center rounded-xl border border-gray-600 bg-gray-700 px-3 py-2 dark:border-white/10 dark:bg-white/5">
                <div>
                  <p className="text-xs text-gray-400">Ajout à l&apos;écran</p>
                  <p className="text-xs font-semibold text-white">iPhone / iPad</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-gray-700 bg-gray-800 p-6 dark:border-white/10 dark:bg-[#0f1b15]">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-semibold text-white">Rester informé des nouveautés</p>
              <p className="mt-1 text-sm text-gray-400">
                Laissez votre email pour recevoir les mises à jour produit et les nouvelles fonctionnalités.
              </p>
            </div>

            {state?.success ? (
              <p className="text-sm font-medium text-green-400 sm:shrink-0">{state.message}</p>
            ) : (
              <form action={action} className="flex w-full gap-2 sm:w-auto sm:shrink-0">
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="votre@email.com"
                  className="min-w-0 flex-1 rounded-xl border border-gray-600 bg-gray-700 px-3 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 dark:border-white/10 dark:bg-white/5 sm:w-56 sm:flex-none"
                />
                <button
                  type="submit"
                  disabled={pending}
                  className="whitespace-nowrap rounded-xl bg-gray-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-gray-500 disabled:opacity-60 dark:bg-white/10 dark:hover:bg-white/15"
                >
                  {pending ? "..." : "S'inscrire"}
                </button>
              </form>
            )}
          </div>
          {state && !state.success ? (
            <p className="mt-2 text-xs text-red-400">{state.message}</p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
