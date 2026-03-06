import { useEffect, useRef, useState } from "react";

export default function About() {
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
      id="about"
      ref={sectionRef}
      className="min-h-screen flex items-center px-6 py-24 text-white bg-amber-800"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div
          className={`transition-all duration-1000 ease-out ${
            visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-widest mb-6">
              About VISAI '26
            </h2>

            <p className="max-w-3xl mx-auto text-lg md:text-xl leading-relaxed text-gray-300">
              VISAI 2026 is a dynamic interchurch youth gathering designed to
              ignite passion, inspire purpose, and celebrate talent. It brings
              together young individuals for powerful experiences, creative
              competitions, and meaningful fellowship.
            </p>
          </div>

          {/* What You Can Expect */}
          <h3 className="text-3xl md:text-4xl font-semibold text-center uppercase tracking-wide mb-12">
            What You Can Expect
          </h3>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:-translate-y-2 hover:border-white/30 transition-all duration-500">
              <h4 className="text-xl font-semibold mb-4">
                Exciting Competitions
              </h4>
              <p className="text-gray-300">
                Participate in energetic events that challenge creativity and teamwork.
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:-translate-y-2 hover:border-white/30 transition-all duration-500">
              <h4 className="text-xl font-semibold mb-4">
                Meaningful Connections
              </h4>
              <p className="text-gray-300">
                Build friendships and strengthen unity across churches.
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:-translate-y-2 hover:border-white/30 transition-all duration-500">
              <h4 className="text-xl font-semibold mb-4">
                Inspiring Experiences
              </h4>
              <p className="text-gray-300">
                Encounter moments that spark purpose and lasting impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}