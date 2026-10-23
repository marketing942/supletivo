import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Pains from "@/components/Pains";
import HowItWorks from "@/components/HowItWorks";
import Benefits from "@/components/Benefits";
import Dreams from "@/components/Dreams";
import Plans from "@/components/Plans";
import Subjects from "@/components/Subjects";
import Requirements from "@/components/Requirements";
import Faq from "@/components/Faq";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import OfferPopup from "@/components/OfferPopup";
import LeadProvider from "@/components/LeadCapture";
import { SITE_URL } from "@/lib/constants";

/** Dados estruturados: só identificam a página e quem atende. */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://cppem.com.br/#organization",
      name: "Cppem Concursos",
      url: "https://cppem.com.br/",
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: "Supletivo Cppem Concursos",
      inLanguage: "pt-BR",
      publisher: { "@id": "https://cppem.com.br/#organization" },
    },
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/#webpage`,
      url: `${SITE_URL}/`,
      name: "Supletivo Online EJA: Ensino Médio em 90 Dias | Cppem",
      description:
        "Supletivo EJA 100% online para concluir o Ensino Fundamental e Médio, com atendimento e matrícula pela Cppem Concursos, parceira filiada da Estação e Cursos.",
      inLanguage: "pt-BR",
      isPartOf: { "@id": `${SITE_URL}/#website` },
    },
  ],
};

export default function Home() {
  return (
    <LeadProvider>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="relative">
        <Hero />
        <Pains />
        <HowItWorks />
        <Benefits />
        <Dreams />
        <Plans />
        <Subjects />
        <Requirements />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <OfferPopup />
    </LeadProvider>
  );
}
