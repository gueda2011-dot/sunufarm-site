export default function Footer() {
  return (
    <footer className="bg-gray-900 px-5 py-10 text-gray-400 text-sm">
      <div className="mx-auto max-w-5xl flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <p className="text-white font-bold text-base">SunuFarm</p>
          <p className="mt-1">Gestion avicole simplifiée — pensé pour le terrain.</p>
        </div>

        <nav className="flex gap-6">
          <a href="#pricing" className="hover:text-white transition-colors">
            Tarifs
          </a>
          <a href="#faq" className="hover:text-white transition-colors">
            FAQ
          </a>
          <a href="#contact" className="hover:text-white transition-colors">
            Contact
          </a>
        </nav>

        <p>© {new Date().getFullYear()} SunuFarm</p>
      </div>
    </footer>
  );
}
