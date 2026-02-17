"use client";
import { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav style={{
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 999,
      backgroundColor: scrolled ? "rgba(255,255,255,0.97)" : "transparent",
      boxShadow: scrolled ? "0 2px 10px rgba(0,0,0,0.1)" : "none",
      transition: "all 0.3s",
      padding: "12px 24px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    }}>
      {/* Лого */}
      <a href="#" style={{
        fontWeight: 700,
        fontSize: "18px",
        color: scrolled ? "#1d4ed8" : "white",
        textDecoration: "none",
      }}>
        Мастер+Шаке
      </a>

      {/* Десктоп меню */}
      <div style={{ display: "flex", gap: "24px", alignItems: "center" }} className="hide-mobile">
        <a href="#services" style={{ color: scrolled ? "#374151" : "white", textDecoration: "none", fontWeight: 500 }}>Услуги</a>
        <a href="#contacts" style={{ color: scrolled ? "#374151" : "white", textDecoration: "none", fontWeight: 500 }}>Контакты</a>
        <a href="tel:+77073231884" style={{
          backgroundColor: "#2563eb",
          color: "white",
          padding: "8px 16px",
          borderRadius: "8px",
          textDecoration: "none",
          fontWeight: 600,
          display: "flex",
          alignItems: "center",
          gap: "6px",
        }}>
          <Phone size={16} />
          +7 707 323 1884
        </a>
      </div>

      {/* Мобильное меню */}
      <button onClick={() => setIsOpen(!isOpen)} style={{
        background: "none",
        border: "none",
        cursor: "pointer",
        color: scrolled ? "#374151" : "white",
        display: "none",
      }} className="show-mobile">
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Мобильное меню открытое */}
      {isOpen && (
        <div style={{
          position: "absolute",
          top: "100%",
          left: 0,
          right: 0,
          backgroundColor: "white",
          padding: "16px 24px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}>
          <a href="#services" onClick={() => setIsOpen(false)} style={{ color: "#374151", textDecoration: "none", fontWeight: 500 }}>Услуги</a>
          <a href="#contacts" onClick={() => setIsOpen(false)} style={{ color: "#374151", textDecoration: "none", fontWeight: 500 }}>Контакты</a>
          <a href="tel:+77073231884" style={{ color: "#2563eb", fontWeight: 600, textDecoration: "none" }}>+7 707 323 1884</a>
        </div>
      )}
    </nav>
  );
}