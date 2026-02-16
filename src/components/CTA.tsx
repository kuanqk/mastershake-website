import { Phone, MessageCircle } from "lucide-react";
import content from "@/data/content.json";

export default function CTA() {
  const primaryPhone = content.contacts.phones.find((p) => p.primary)!;
  const whatsappLink = `https://wa.me/${content.contacts.whatsapp}?text=${encodeURIComponent("Здравствуйте! Хочу записаться на диагностику.")}`;

  return (
    <section className="py-16 px-4 bg-blue-600 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Диагностика от 1000 тг</h2>
        <p className="text-lg mb-2 opacity-90">
          Выезд мастера на дом по Алматы
        </p>
        <p className="text-base mb-8 opacity-80">
          Позвоните или напишите — и мы приедем в удобное для вас время
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href={`tel:${primaryPhone.number}`} className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-6 py-3 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2">
            <Phone size={20} />
            Позвонить
          </a>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-secondary flex items-center justify-center gap-2">
            <MessageCircle size={20} />
            Написать в WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
