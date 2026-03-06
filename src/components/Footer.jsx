import { useEffect, useRef, useState } from "react";

export default function Footer() {
  const footerRef = useRef(null);
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

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="px-6 py-12 text-white bg-yellow-950 border-t border-white/10"
    >
      <div
        className={`max-w-7xl mx-auto text-center transition-all duration-1000 ease-out ${
          visible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        {/* Event Name */}
        <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-widest mb-4">
          VISAI 2026
        </h3>

        {/* Hosted By */}
        <p className="text-gray-400 text-lg mb-4">
          Hosted by Jesus The Lord Youth Fellowship (JLYF)
        </p>

        {/* Divider */}
        <div className="w-16 h-[1px] bg-white/30 mx-auto my-6"></div>

        {/* Copyright */}
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} VISAI 2026. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}