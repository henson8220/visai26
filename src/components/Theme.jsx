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
      className="relative min-h-screen flex items-center px-6 md:px-12 py-24 text-white"
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
          <p className="uppercase tracking-[0.3em] text-sm text-gray-400 mb-6">
            2026 Theme
          </p>

          {/* Theme Title */}
          <h2 className="text-5xl md:text-7xl font-extrabold uppercase tracking-widest mb-8">
            POSTMAN
          </h2>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-gray-300 mb-10">
            Delivering God’s Word
          </p>

          {/* Description Card */}
          <div className="max-w-3xl mx-auto p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
            <p className="text-lg md:text-xl leading-relaxed text-gray-300">
              Just as a postman faithfully delivers messages to their destination,
              we are called to carry and deliver the Word of God with boldness,
              love, and purpose. This year’s theme challenges every young believer
              to be a messenger — spreading truth, hope, and light wherever they go.
            </p>
          </div>

          {/* Optional Verse */}
          <p className="mt-10 text-gray-400 italic">
            “How beautiful are the feet of those who bring good news.” – Romans 10:15
          </p>
        </div>
      </div>
    </section>
  );
}