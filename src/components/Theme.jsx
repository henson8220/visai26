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

  const visibleClass = visible
    ? "transition-all duration-1000 ease-out opacity-100 translate-y-0"
    : "transition-all duration-1000 ease-out opacity-0 translate-y-10";

  return (
    <section
      id="theme"
      ref={sectionRef}
      className="relative min-h-screen flex items-center px-6 md:px-12 py-24 bg-[#3b2f2f] text-[#f3e7cf]"
    >
      <div className="max-w-6xl mx-auto w-full text-center">
        <div className={visibleClass}>

          {/* Section Label */}
          <p className="uppercase tracking-[0.3em] text-sm text-[#cdb792] mb-6">
            VISAI 26 Theme
          </p>

          {/* Theme Title with Postal Seal */}
          <div className="relative inline-block mb-8">

            {/* Circular Postal Seal */}
            <div className="absolute inset-0 flex items-center justify-center opacity-15 rotate-[-12deg] scale-125">
              <svg viewBox="0 0 220 220" className="w-44 h-44">
                <circle
                  cx="110"
                  cy="110"
                  r="85"
                  fill="none"
                  stroke="#f9a11c"
                  strokeWidth="4"
                />
                <circle
                  cx="110"
                  cy="110"
                  r="62"
                  fill="none"
                  stroke="#f9a11c"
                  strokeWidth="2"
                />
                <text
                  x="110"
                  y="55"
                  textAnchor="middle"
                  fontSize="12"
                  fill="#f9a11c"
                  fontWeight="bold"
                >
                  APR 2026
                </text>
                <text
                  x="110"
                  y="172"
                  textAnchor="middle"
                  fontSize="12"
                  fill="#f9a11c"
                  fontWeight="bold"
                >
                  VISAI POST
                </text>
                <circle
                  cx="110"
                  cy="110"
                  r="10"
                  fill="#f9a11c"
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
            Delivering God's Word
          </p>

          {/* Postcard Style Card */}
          <div className="relative max-w-3xl mx-auto p-8 rounded-2xl border border-[#8b6b4f] bg-[#2a211d] shadow-[0_10px_28px_rgba(0,0,0,0.25)] overflow-hidden">

            {/* Stamp Corner */}
            <div className="absolute top-3 right-3 w-5 h-6 bg-[#b91c1c] rotate-12 border border-[#d8c3a0] flex items-center justify-center text-[7px] text-[#f8f1e4] font-bold tracking-wider">
              MAIL
            </div>

            {/* Main Text */}
            <div
              className="w-full text-lg md:text-xl leading-[2.2rem] text-[#d8c3a0] text-justify"
              style={{
                backgroundImage:
                  "linear-gradient(to bottom, transparent 95%, rgba(139,107,79,0.35) 95%)",
                backgroundSize: "100% 2.2rem",
              }}
            >
              Just as a postman faithfully delivers messages to their destination,
              we are called to carry and deliver the Word of God with boldness,
              love, and purpose. This year's theme challenges every young believer
              to be a messenger — spreading truth, hope, and light wherever they go.
            </div>

          </div>

          {/* Bible Verse */}
          <p className="mt-10 text-[#cdb792] italic text-sm md:text-base px-4">
            "He said to them, Go into all the world and preach the gospel to all creation." – Mark 16:15
          </p>

        </div>
      </div>
    </section>
  );
}