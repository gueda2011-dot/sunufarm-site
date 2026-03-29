import { whatsappUrl } from "@/lib/whatsapp";

export default function WhatsAppFloat() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Parler avec nous sur WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full border border-green-200 bg-white px-4 py-3 text-sm font-semibold text-green-700 shadow-lg shadow-green-950/10 transition-transform hover:-translate-y-0.5 hover:bg-green-50 dark:border-white/10 dark:bg-[#0d1712] dark:text-green-300 dark:hover:bg-[#132019]"
    >
      <span
        aria-hidden="true"
        className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-green-600 text-xs font-bold text-white"
      >
        WA
      </span>
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
