import { Wrench } from "lucide-react";
import content from "@/data/content.json";

export default function Services() {
  return (
    <section id="services" className="py-16 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Наши услуги</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {content.services.map((service) => (
            <div
              key={service}
              className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm"
            >
              <Wrench size={20} className="text-blue-600 shrink-0" />
              <span className="font-medium">{service}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
