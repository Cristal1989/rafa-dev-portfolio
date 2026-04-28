import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import CaseStudy from "./components/CaseStudy";
import Benefits from "./components/Benefits";
import Process from "./components/Process";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <CaseStudy />
        <Benefits />
        <Process />
        <CTA />
      </main>
      <Footer />
    </>
  );
}