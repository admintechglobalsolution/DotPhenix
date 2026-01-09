import Hero from "../components/Hero";
import Services from "@/components/Services";
import Solutions from "@/components/Solutions";
import WhyChoose from "@/components/WhyChoose";
import Process from "../components/Process";
function page() {
  return (
    <div>
      <Hero />
      <Services />
      <Process />
      <Solutions />
      <WhyChoose />
    </div>
  );
}

export default page;
