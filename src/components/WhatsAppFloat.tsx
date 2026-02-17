"use client";
import { Link, MessageCircle } from "lucide-react";
import content from "@/data/content.json";

export default function WhatsAppFloat() {
  const link = `https://wa.me/${content.contacts.whatsapp}`;

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      title="Написать в WhatsApp"
      style={{
        position: "fixed",
        bottom: "24px",
        right: "24px",
        backgroundColor: "#25d366",
        color: "white",
        borderRadius: "50%",
        width: "56px",
        height: "56px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
        zIndex: 1000,
      }}
    >
      <MessageCircle size={28} />
    </a>
  );
}