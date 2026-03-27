"use client";

import { useActionState } from "react";
import { submitContact, type FormState } from "@/app/actions";

export default function Contact() {
  const [state, action, pending] = useActionState<FormState, FormData>(
    submitContact,
    null
  );

  return (
    <section id="contact" className="bg-green-700 px-5 py-14 dark:bg-[#0d5f2f] md:py-20">
      <div className="mx-auto max-w-2xl">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Pret a structurer votre gestion avicole ?
          </h2>
          <p className="mt-3 text-green-100">
            Laissez-nous un message. Nous vous aidons a choisir la formule la plus
            adaptee selon votre exploitation, votre equipe et votre niveau de pilotage.
          </p>
        </div>

        {state?.success ? (
          <div className="rounded-2xl bg-white p-6 text-center dark:bg-[#101914]">
            <p className="mb-2 text-2xl">OK</p>
            <p className="font-semibold text-gray-900 dark:text-white">{state.message}</p>
          </div>
        ) : (
          <form action={action} className="space-y-4 rounded-2xl bg-white p-6 dark:bg-[#101914]">
            {state && !state.success ? (
              <p className="rounded-lg bg-red-50 px-4 py-2 text-sm text-red-600 dark:bg-red-500/10 dark:text-red-300">
                {state.message}
              </p>
            ) : null}

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-200">Nom</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Votre nom"
                  className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-600 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder-gray-500"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-200">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="votre@email.com"
                  className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-600 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder-gray-500"
                />
              </div>
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-200">Message</label>
              <textarea
                name="message"
                required
                rows={4}
                placeholder="Parlez-nous de votre exploitation, du nombre de sites, de votre equipe ou de vos objectifs"
                className="w-full resize-none rounded-xl border border-gray-200 px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-600 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder-gray-500"
              />
            </div>

            <button
              type="submit"
              disabled={pending}
              className="w-full rounded-xl bg-green-700 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-green-800 disabled:opacity-60"
            >
              {pending ? "Envoi en cours..." : "Envoyer le message"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
