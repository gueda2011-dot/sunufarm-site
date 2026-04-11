import Hero from "@/components/marketing/Hero";
import Modules from "@/components/marketing/Modules";
import Problems from "@/components/marketing/Problems";
import Value from "@/components/marketing/Value";
import Pricing from "@/components/marketing/Pricing";
import FAQ from "@/components/marketing/FAQ";
import Contact from "@/components/marketing/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Problems />
      <Modules />
      <Value />
      <Pricing />
      <FAQ />
      <Contact />
    </main>
  );
}
