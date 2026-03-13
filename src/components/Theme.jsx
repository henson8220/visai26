import { useEffect, useRef, useState } from "react";

export default function Theme() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="theme"
      ref={sectionRef}
      className="relative min-h-screen flex items-center px-6 md:px-12 py-24 bg-[#3b2f2f] text-[#f3e7cf]"
    >
      <div className="max-w-6xl mx-auto w-full text-center">
        <div
          className={`transition-all duration-1000 ease-out ${
            visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          {/* Section Label */}
          <p className="uppercase tracking-[0.3em] text-sm text-[#cdb792] mb-6">
            VISAI '26 Theme
          </p>

          {/* Theme Title */}
<div className="relative inline-block mb-8">

  {/* Circular Postal Seal */}
  <div className="absolute inset-0 flex items-center justify-center opacity-15 rotate-[-12deg] scale-125">

    <svg viewBox="0 0 220 220" className="w-44 h-44">

      {/* Outer Circle */}
      <circle
        cx="110"
        cy="110"
        r="85"
        fill="none"
        stroke="#f9a11cff"
        strokeWidth="4"
      />

      {/* Inner Circle */}
      <circle
        cx="110"
        cy="110"
        r="62"
        fill="none"
        stroke="#f9a11cff"
        strokeWidth="2"
      />

      {/* Date Ring */}
      <text
        x="110"
        y="55"
        textAnchor="middle"
        fontSize="12"
        fill="#f9a11cff"
        fontWeight="bold"
      >
        APR 2026
      </text>

      <text
        x="110"
        y="172"
        textAnchor="middle"
        fontSize="12"
        fill="#f9a11cff"
        fontWeight="bold"
      >
        VISAI POST
      </text>

      {/* Center Dot */}
      <circle
        cx="110"
        cy="110"
        r="10"
        fill="#f9a11cff"
      />

    </svg>
  </div>

  {/* Title */}
  <h2 className="relative text-5xl md:text-7xl font-extrabold uppercase tracking-widest text-[#f8f1e4]">
    POSTMAN
  </h2>
</div>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-[#d8c3a0] mb-10">
            Delivering God’s Word
          </p>

<div className="relative max-w-3xl mx-auto p-8 rounded-2xl border border-[#8b6b4f] bg-[#2a211d] shadow-[0_10px_28px_rgba(0,0,0,0.25)] overflow-hidden">

  {/* Stamp Corner */}
  <div className="absolute top-4 right-4 w-12 h-12 bg-[#b91c1c] rotate-12 border border-[#d8c3a0] shadow-sm flex items-center justify-center text-[8px] text-[#f8f1e4] font-bold tracking-wider">
    MAIL
  </div>

  {/* Vertical Postcard Divider */}
  <div className="absolute top-4 bottom-4 right-20 w-[1px] bg-[#8b6b4f]/40"></div>

  {/* Address Lines */}
  <div className="absolute right-5 top-16 space-y-3">
    <div className="w-10 h-[1px] bg-[#8b6b4f]/50"></div>
    <div className="w-10 h-[1px] bg-[#8b6b4f]/50"></div>
    <div className="w-10 h-[1px] bg-[#8b6b4f]/50"></div>
  </div>

  {/* Main Text */}
  <div
    className="relative pr-9 text-lg md:text-xl leading-[2.2rem] text-gold-300 text-justify"
    style={{
      backgroundImage:
        "linear-gradient(to bottom, transparent 95%, rgba(139,107,79,0.35) 95%)",
      backgroundSize: "100% 2.2rem",
    }}
  >
    Just as a postman faithfully delivers messages to their destination,
    we are called to carry and deliver the Word of God with boldness,
    love, and purpose. This year’s theme challenges every young believer
    to be a messenger — spreading truth, hope, and light wherever they go.
  </div>
</div>

          {/* Optional Verse */}
          <p className="mt-10 text-[#cdb792] italic">
            “He said to them, 'Go into all the world and preach the gospel to all creation.” – Mark 16:15
          </p>
        </div>
      </div>
    </section>
  );
}