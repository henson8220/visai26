import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Theme", href: "#theme" },
    { name: "Events", href: "#events" },
    { name: "Rules", href: "#rules" },
    { name: "Schedule", href: "#schedule" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed w-full top-0 left-0 z-50 px-4 pt-4">
      {/* Navbar Box */}
      <nav
        className={`flex justify-between items-center px-5 py-3 rounded-2xl transition-all duration-300 ${
          scrolled
            ? "bg-[#7c2d12]/90 backdrop-blur-md shadow-lg"
            : "bg-[#7c2d12]/60 backdrop-blur-sm"
        } text-white`}
      >
        <a href="#home" className="text-xl font-bold tracking-wide ">
          VISAI '26
        </a>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-2xl"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Dropdown Menu */}
      <div
        className={`mt-3 overflow-hidden transition-all duration-400 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-[#7c2d12]/95 backdrop-blur-md rounded-2xl shadow-lg py-6 flex flex-col items-center space-y-6 text-lg text-white">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="hover:text-yellow-400 transition"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}