import { Award, Truck, BadgeRussianRuble } from "lucide-react";
import content from "@/data/content.json";

const icons = [Award, Truck, BadgeRussianRuble];

export default function Advantages() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Почему выбирают нас</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {content.advantages.map((item, index) => {
            const Icon = icons[index];
            return (
              <div key={item.id} className="text-center p-6 bg-white rounded-xl shadow-sm">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-100 text-blue-600 rounded-full mb-4">
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
