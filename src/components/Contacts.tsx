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

          {/* Карта 2GIS */}
          <div className="rounded-xl overflow-hidden shadow-sm h-72 md:h-full min-h-[288px]">
            <iframe
              src="https://widgets.2gis.com/widget?type=firmsonmap&options=%7B%22pos%22%3A%7B%22lat%22%3A43.2133%2C%22lon%22%3A76.8631%2C%22zoom%22%3A16%7D%2C%22table%22%3A%7B%22id%22%3A%2270000001044471776%22%7D%2C%22opt%22%3A%7B%22city%22%3A%22almaty%22%7D%7D"
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
