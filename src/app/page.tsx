import { Navbar } from "@/components/layout/Navbar";
import { FloatingContact } from "@/components/layout/FloatingContact";
import { Hero } from "@/components/sections/Hero";
import { DoctorProfile } from "@/components/sections/DoctorProfile";
import { Services } from "@/components/sections/Services";
import { TrustCore } from "@/components/sections/TrustCore";
import { BeforeAfter } from "@/components/sections/BeforeAfter";
import { Reviews } from "@/components/sections/Reviews";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="w-full flex-col flex overflow-x-hidden">
      <Navbar />
      <Hero />
      <DoctorProfile />
      <Services />
      <BeforeAfter />
      <TrustCore />
      <Reviews />
      <Contact />
      <Footer />
      <FloatingContact />
    </main>
  );
}
