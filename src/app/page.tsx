import Hero from "@/components/Hero";
import Advantages from "@/components/Advantages";
import Masters from "@/components/Masters";
import Services from "@/components/Services";
import CTA from "@/components/CTA";
import Contacts from "@/components/Contacts";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Advantages />
      <Masters />
      <Services />
      <CTA />
      <Contacts />
      <Footer />
      <WhatsAppFloat />      
    </>
  );
}


