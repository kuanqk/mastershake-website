import { Phone, MessageCircle } from "lucide-react";
import content from "@/data/content.json";

export default function Hero() {
  const primaryPhone = content.contacts.phones.find((p) => p.primary)!;
  const whatsappLink = `https://wa.me/${content.contacts.whatsapp}?text=${encodeURIComponent("Здравствуйте! Хочу записаться на ремонт.")}`;

  return (
    <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          {content.businessName}
        </h1>
        <p className="text-xl md:text-2xl mb-2 opacity-90">
          {content.tagline}
        </p>
        <p className="text-lg mb-2 opacity-80">
          {content.description}
        </p>
        <p className="text-base mb-8 opacity-70">
          {content.subdescription}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a href={`tel:${primaryPhone.number}`} className="btn-blue">
            <Phone size={20} />
            {primaryPhone.display}
          </a>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-green">
            <MessageCircle size={20} />
            Написать в WhatsApp
          </a>
        </div>

        <p className="mt-6 text-sm opacity-70">
          {content.contacts.workingHours} • {content.contacts.address.city}
        </p>
      </div>
    </section>
  );
}
