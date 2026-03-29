import BrandLogo from "./BrandLogo";

export default function Footer() {
  return (
    <footer className="bg-gray-900 px-5 py-10 text-sm text-gray-400 dark:border-t dark:border-white/10 dark:bg-[#020806]">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 md:flex-row">
        <div>
          <BrandLogo dark />
          <p className="mt-1">Gestion avicole mobile, claire et orientee terrain.</p>
        </div>

        <nav className="flex gap-6">
          <a href="#problems" className="transition-colors hover:text-white">
            Problemes
          </a>
          <a href="#value" className="transition-colors hover:text-white">
            Valeur
          </a>
          <a href="#pricing" className="transition-colors hover:text-white">
            Tarifs
          </a>
          <a href="#faq" className="transition-colors hover:text-white">
            FAQ
          </a>
          <a href="#contact" className="transition-colors hover:text-white">
            Contact
          </a>
        </nav>

        <p>© {new Date().getFullYear()} SunuFarm</p>
      </div>
    </footer>
  );
}
