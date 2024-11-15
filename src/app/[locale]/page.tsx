import Aside from "@/components/Aside";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Sections from "@/components/Sections";
import { HeaderContextProvider } from "@/contexts/HeaderContext";
import { SectionsContextProvider } from "@/contexts/SectionsContext";

export default function Home() {
  const secIds = [
    "home",
    "about",
    "science",
    "testimonials",
    "marketplace",
    "bonus",
  ];

  return (
    <HeaderContextProvider>
      <SectionsContextProvider secIds={secIds}>
        <Aside elemId={secIds} />
        <Header elemId={secIds} />
        <main>
          <Sections elemId={secIds} />
        </main>
        <Footer />
      </SectionsContextProvider>
    </HeaderContextProvider>
  );
}
