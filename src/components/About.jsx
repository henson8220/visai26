import { useEffect, useRef, useState } from "react";

const cards = [
  {
    stamp: "SOAR",
    title: "Soar in Faith",
    text: "VISAI is a space where young hearts rise higher in their walk with God. Through worship, Word, and fellowship, we are strengthened to soar above challenges and grow deeper in faith.",
  },
  {
    stamp: "RUN",
    title: "Run with Purpose",
    text: "VISAI calls every young person to run their race with clarity and purpose. Using the gifts God has given, we move forward boldly — carrying His message into every space we step into.",
  },
  {
    stamp: "WALK",
    title: "Walk in Strength",
    text: "Beyond the event, VISAI encourages a steady and faithful walk with God. Even in ordinary moments, we live out His Word daily — strong, grounded, and unwavering.",
  },
];

export default function About() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="min-h-screen flex items-center px-6 py-24 bg-[#cdb792] text-[#2f241f]"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div
          className={`transition-all duration-1000 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-widest mb-6 text-[#2f241f]">
              About VISAI '26
            </h2>
            <p className="max-w-3xl mx-auto text-lg md:text-xl leading-relaxed text-[#4b3a2f] italic">
              "Those who hope in the Lord will renew their strength.
              They will soar on wings like eagles; they will run and not grow weary,
              they will walk and not be faint." – Isaiah 40:31
            </p>
          </div>

          {/* Cards */}
          <div className="grid gap-8 md:grid-cols-3">
            {cards.map((card) => (
              <div
                key={card.stamp}
                className="relative p-8 rounded-2xl border border-[#a88d66] bg-[#e6d3b1] shadow-[0_10px_28px_rgba(80,60,30,0.14)] hover:-translate-y-2 hover:border-[#8b6b4f] transition-all duration-500 overflow-hidden"
              >
                {/* Stamp */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-[#a11d1d] rotate-12 opacity-85 border border-[#f8f1e4] shadow-sm flex items-center justify-center text-[8px] text-white font-bold tracking-wider">
                  {card.stamp}
                </div>

                {/* Fold */}
                <div className="absolute top-0 left-0 w-0 h-0 border-t-[40px] border-r-[40px] border-t-[#f3e7cf] border-r-transparent"></div>
                <div className="absolute top-0 left-0 w-0 h-0 border-t-[20px] border-r-[20px] border-t-[#d8c3a0] border-r-transparent"></div>

                {/* Divider */}
                <div className="absolute top-4 bottom-4 right-20 w-[1px] bg-[#b89f7a]/50"></div>

                {/* Address Lines */}
                <div className="absolute right-5 top-16 space-y-3">
                  <div className="w-10 h-[1px] bg-[#b89f7a]/60"></div>
                  <div className="w-10 h-[1px] bg-[#b89f7a]/60"></div>
                  <div className="w-10 h-[1px] bg-[#b89f7a]/60"></div>
                </div>

                {/* Content */}
                <div className="pr-24">
                  <h4 className="text-xl font-semibold mb-4 text-[#2f241f]">
                    {card.title}
                  </h4>
                  <p className="text-[#5a4636] leading-relaxed">
                    {card.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}