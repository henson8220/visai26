import { useEffect, useRef, useState } from "react";

export default function Contact() {
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
      id="contact"
      ref={sectionRef}
      className="relative min-h-screen flex items-center px-6 md:px-12 py-24 text-white"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div
          className={`transition-all duration-1000 ease-out ${
            visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          {/* Section Label */}
          <p className="uppercase tracking-[0.3em] text-sm text-gray-400 mb-6 text-center">
            
          </p>

          {/* Heading */}
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-widest text-center mb-16">
            Contact
          </h2>

          <div className="grid md:grid-cols-2 gap-12">

            {/* Left Side - Venue & Map */}
            <div className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
              <h3 className="text-2xl font-semibold mb-6">
                Venue
              </h3>

              <p className="text-lg text-gray-300 mb-6">
                C.S.I Church of Jesus The Lord , Grand Southern Trunk Rd, West Tambaram, Chennai 600045
              </p>

              {/* Map Placeholder Box */}
              <div className="w-full h-56 rounded-xl overflow-hidden border border-white/10 mb-6">
  <iframe
    src="https://maps.google.com/maps?q=CSI%20Church%20of%20Jesus%20The%20Lord%20West%20Tambaram&t=&z=15&ie=UTF8&iwloc=&output=embed"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>

              {/* Google Maps Button */}
              <a
  href="https://share.google/mFGxDvTPoI1917IXi"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block px-6 py-3 border border-white rounded-full hover:bg-white hover:text-black transition-all duration-300"
>
  Open in Google Maps
</a>
            </div>

            {/* Right Side - Contact Details */}
            <div className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
              <h3 className="text-2xl font-semibold mb-6">
                Contact Details
              </h3>

              <div className="space-y-4 text-gray-300 text-lg">
                <p>
                  📞 +91 98765 43210
                </p>
                <p>
                  📞 +91 91234 56789
                </p>
                <p>
                  ✉ neoblaze2026@email.com
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}