import content from "@/data/content.json";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <p className="font-semibold text-white mb-2">{content.businessName}</p>
        <p className="text-sm mb-4">{content.tagline}</p>
        <div className="flex justify-center gap-6 text-sm mb-4">
          <a href="#services" className="hover:text-white transition-colors">Услуги</a>
          <a href="#contacts" className="hover:text-white transition-colors">Контакты</a>
          <a href={`tel:${content.contacts.phones[0].number}`} className="hover:text-white transition-colors">
            {content.contacts.phones[0].display}
          </a>
        </div>
        <p className="text-xs text-gray-500">
          &copy; {new Date().getFullYear()} {content.businessName}. Все права защищены.
        </p>
      </div>
    </footer>
  );
}
