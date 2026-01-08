import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "@/components/Services";
import Solutions from "@/components/Solutions";
import WhyChoose from "@/components/WhyChoose";
import Footer from "../components/Footer";
import Process from "../components/Process";
function page() {
  return (
    <div>
      <Header />
      <Hero />
      <Services />
      <Process />
      <Solutions />
      <WhyChoose />
      <Footer />
    </div>
  );
}

export default page;
