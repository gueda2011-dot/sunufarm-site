"use client";

import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const links = [
  { label: "Problemes", href: "#problems" },
  { label: "Valeur", href: "#value" },
  { label: "Tarifs", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur dark:border-white/10 dark:bg-[#07110c]/90">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5">
        <Link href="/" className="text-lg font-bold tracking-tight text-green-700 dark:text-green-400">
          SunuFarm
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-gray-600 dark:text-gray-300 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-gray-900 dark:hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden md:block">
            <ThemeToggle />
          </div>

          <a
            href="#contact"
            className="hidden rounded-xl bg-green-700 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-green-800 md:inline-block"
          >
            Demander une demonstration
          </a>

          <button
            onClick={() => setOpen((value) => !value)}
            aria-label="Menu"
            className="flex flex-col gap-1.5 p-2 md:hidden"
          >
            <span
              className={`block h-0.5 w-5 bg-gray-700 transition-transform duration-200 ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-gray-700 transition-opacity duration-200 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-gray-700 transition-transform duration-200 ${
                open ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-gray-100 bg-white px-5 pb-5 dark:border-white/10 dark:bg-[#07110c] md:hidden">
          <nav className="mt-3 flex flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-2.5 text-sm font-medium text-gray-700 transition-colors hover:text-green-700 dark:text-gray-200 dark:hover:text-green-400"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-3">
            <ThemeToggle />
          </div>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-3 block rounded-xl bg-green-700 px-4 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-green-800"
          >
            Demander une demonstration
          </a>
        </div>
      ) : null}
    </header>
  );
}
