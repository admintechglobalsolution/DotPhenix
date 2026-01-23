import Hero from "../components/Hero";
import Services from "@/components/Services";
import WhyChoose from "@/components/WhyChoose";
import Process from "../components/Process";
import Digital from "@/components/Digital";

export default function Page() {
  return (
    <div>
      <Hero />
      <Services />
      <Process />
      <Digital />
      <WhyChoose />
    </div>
  );
}
