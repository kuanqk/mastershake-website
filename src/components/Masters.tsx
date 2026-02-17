import content from "@/data/content.json";

const colors = ["#2563eb", "#1d4ed8", "#1e40af"];

function getInitials(name: string) {
  return name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase();
}

export default function Masters() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Наши мастера</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {content.masters.map((master, index) => (
            <div key={master.id} className="text-center">
              <div
                className="w-40 h-40 mx-auto mb-4 rounded-full flex items-center justify-center text-white text-4xl font-bold"
                style={{ backgroundColor: colors[index % colors.length] }}
              >
                {getInitials(master.name)}
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