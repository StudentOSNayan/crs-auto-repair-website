import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Why } from "@/components/sections/Why";
import { Process } from "@/components/sections/Process";
import { Reviews } from "@/components/sections/Reviews";
import { Gallery } from "@/components/sections/Gallery";
import { Faq } from "@/components/sections/Faq";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <About />
      <Services />
      <Why />
      <Process />
      <Reviews />
      <Gallery />
      <Faq />
      <Contact />
    </>
  );
}
