import Image from "next/image";
import content from "@/data/content.json";

export default function Masters() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Наши мастера</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {content.masters.map((master) => (
            <div key={master.id} className="text-center">
              <div className="relative w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200">
                <Image
                  src={master.image}
                  alt={master.name}
                  fill
                  className="object-cover"
                  sizes="160px"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{master.name}</h3>
              <p className="text-gray-600 text-sm">{master.specialization}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
