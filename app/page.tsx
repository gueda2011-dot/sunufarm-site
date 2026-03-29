import Hero from "@/components/marketing/Hero";
import Screenshots from "@/components/marketing/Screenshots";
import Problems from "@/components/marketing/Problems";
import Value from "@/components/marketing/Value";
import Audience from "@/components/marketing/Audience";
import Pricing from "@/components/marketing/Pricing";
import FAQ from "@/components/marketing/FAQ";
import Download from "@/components/marketing/Download";
import Contact from "@/components/marketing/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Screenshots />
      <Problems />
      <Value />
      <Audience />
      <Pricing />
      <FAQ />
      <Download />
      <Contact />
    </main>
  );
}
