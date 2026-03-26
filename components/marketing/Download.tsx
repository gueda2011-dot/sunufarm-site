"use client";

import { useActionState } from "react";
import { submitWaitlist, type FormState } from "@/app/actions";

export default function Download() {
  const [state, action, pending] = useActionState<FormState, FormData>(
    submitWaitlist,
    null
  );

  return (
    <section className="bg-gray-900 px-5 py-14 md:py-20">
      <div className="mx-auto max-w-4xl">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Accedez a SunuFarm sans attendre une installation
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-gray-400">
            {`SunuFarm est deja disponible comme application web. Vous pouvez l'utiliser`}
            {" "}
            depuis un telephone ou un ordinateur via navigateur. Les formats installables
            pourront venir plus tard, sans promesse prematuree.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="flex flex-col rounded-2xl border border-gray-700 bg-gray-800 p-6">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-700 text-xl font-semibold text-white">
                W
              </div>
              <div>
                <p className="font-semibold text-white">Application web</p>
                <span className="rounded-full bg-green-700 px-2 py-0.5 text-xs font-medium text-green-100">
                  Disponible
                </span>
              </div>
            </div>
            <p className="flex-1 text-sm text-gray-400">
              Accedez a SunuFarm depuis votre ordinateur ou votre telephone via
              un navigateur. Aucune installation requise pour suivre vos lots,
              vos couts et vos analyses.
            </p>
            <a
              href="https://app.sunufarm.com"
              className="mt-5 block rounded-xl bg-green-700 px-5 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-green-600"
            >
              {`Acceder a l'application`}
            </a>
          </div>

          <div className="flex flex-col rounded-2xl border border-gray-700 bg-gray-800 p-6">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-700 text-xl font-semibold text-white">
                +
              </div>
              <div>
                <p className="font-semibold text-white">Android, iOS et desktop</p>
                <span className="rounded-full bg-gray-700 px-2 py-0.5 text-xs font-medium text-gray-300">
                  Plus tard
                </span>
              </div>
            </div>
            <p className="flex-1 text-sm text-gray-400">
              {`Si des versions installables arrivent, vous pourrez etre informe en`}
              {" "}
              {`priorite. En attendant, l'application web couvre deja l'usage quotidien.`}
            </p>

            <div className="mb-4 mt-5 flex gap-2 opacity-50">
              <div className="flex flex-1 items-center rounded-xl border border-gray-600 bg-gray-700 px-3 py-2">
                <div>
                  <p className="text-xs text-gray-400">Eventuellement sur</p>
                  <p className="text-xs font-semibold text-white">Google Play</p>
                </div>
              </div>
              <div className="flex flex-1 items-center rounded-xl border border-gray-600 bg-gray-700 px-3 py-2">
                <div>
                  <p className="text-xs text-gray-400">Eventuellement sur</p>
                  <p className="text-xs font-semibold text-white">App Store</p>
                </div>
              </div>
            </div>

            {state?.success ? (
              <p className="text-sm font-medium text-green-400">OK {state.message}</p>
            ) : (
              <form action={action} className="flex gap-2">
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="votre@email.com"
                  className="flex-1 rounded-xl border border-gray-600 bg-gray-700 px-3 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <button
                  type="submit"
                  disabled={pending}
                  className="whitespace-nowrap rounded-xl bg-gray-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-gray-500 disabled:opacity-60"
                >
                  {pending ? "..." : "Me notifier"}
                </button>
              </form>
            )}
            {state && !state.success && (
              <p className="mt-1 text-xs text-red-400">{state.message}</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
