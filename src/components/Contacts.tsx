import { MapPin, Phone, Clock } from "lucide-react";
import content from "@/data/content.json";

export default function Contacts() {
  return (
    <section id="contacts" className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Контакты</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Информация */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <MapPin size={24} className="text-blue-600 shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Адрес</h3>
                <p className="text-gray-600">
                  {content.contacts.address.street}<br />
                  {content.contacts.address.city}, {content.contacts.address.country}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone size={24} className="text-blue-600 shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Телефоны</h3>
                {content.contacts.phones.map((phone) => (
                  <a
                    key={phone.number}
                    href={`tel:${phone.number}`}
                    className="block text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    {phone.display}
                  </a>
                ))}
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock size={24} className="text-blue-600 shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Время работы</h3>
                <p className="text-gray-600">{content.contacts.workingHours}</p>
              </div>
            </div>
          </div>

        {/* Карта Google Maps */}
        <div className="rounded-xl overflow-hidden shadow-sm h-72 md:h-full min-h-[288px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2907.8!2d76.83672!3d43.22965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z0LzQutGA0L4uINCQ0LrRgdCw0LktNCwg0LTQvtC8IDMw!5e0!3m2!1sru!2skz!4v1"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Мастер+Шаке на карте"
          />
        </div>

        </div>
      </div>
    </section>
  );
}
