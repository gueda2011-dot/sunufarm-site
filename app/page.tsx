import Hero from "@/components/marketing/Hero";
import Problems from "@/components/marketing/Problems";
import Value from "@/components/marketing/Value";
import Audience from "@/components/marketing/Audience";
import Pricing from "@/components/marketing/Pricing";
import FAQ from "@/components/marketing/FAQ";
import CTA from "@/components/marketing/CTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <Problems />
      <Value />
      <Audience />
      <Pricing />
      <FAQ />
      <CTA />
    </main>
  );
}
