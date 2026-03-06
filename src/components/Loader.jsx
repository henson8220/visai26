import { useEffect, useState } from "react";
import logo from "../assets/Jesus_The_Lord_Youth_Fellowship-removebg-preview.png";

export default function Loader({ onFinish }) {
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFade(true);
      setTimeout(() => {
        onFinish();
      }, 600);
    }, 2500);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-[#7c2d12] z-[9999] transition-opacity duration-700 ${
        fade ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="relative flex items-center justify-center">

        {/* Soft Glow Background */}
        <div className="absolute w-80 h-80 bg-yellow-500/20 rounded-full blur-3xl"></div>

        {/* Base Faint Circle */}
        <div className="absolute w-80 h-80 rounded-full border-4 border-yellow-400/20"></div>

        {/* Animated Gradient Arc Ring */}
        <div className="absolute w-80 h-80 rounded-full border-4 border-transparent border-t-yellow-400 border-r-orange-400 animate-spin"></div>

        {/* Inner Reverse Subtle Ring */}
        <div className="absolute w-64 h-64 rounded-full border-2 border-transparent border-b-yellow-300 animate-[spin_6s_linear_reverse_infinite]"></div>

        {/* Logo */}
        <img
          src={logo}
          alt="Logo"
          className="w-52 md:w-72 z-10 drop-shadow-[0_0_20px_rgba(255,200,0,0.5)]"
        />

      </div>
    </div>
  );
}