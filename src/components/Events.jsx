import { useEffect, useRef, useState } from "react";

export default function Events() {
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

  const events = [
    {
      title: "Worship & Praise",
      desc: "A powerful time of worship bringing hearts together in praise and reflection."
    },
    {
      title: "Bible Quiz",
      desc: "Test your knowledge of Scripture through an engaging and competitive quiz."
    },
    {
      title: "Creative Arts",
      desc: "Express faith through music, dance, drama, and visual creativity."
    },
    {
      title: "Group Discussions",
      desc: "Interactive sessions encouraging dialogue, learning, and spiritual growth."
    },
    {
      title: "Message Sessions",
      desc: "Inspiring messages that challenge and equip youth to live out God’s Word."
    },
    {
      title: "Fun & Fellowship",
      desc: "Build friendships and unity through joyful activities and shared experiences."
    }
  ];

  return (
    <section
      id="events"
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
            What’s Happening
          </p>

          {/* Heading */}
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-widest text-center mb-16">
            Events
          </h2>

          {/* Events Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {events.map((event, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:-translate-y-2 hover:border-white/30 transition-all duration-500"
              >
                <h3 className="text-xl md:text-2xl font-semibold mb-4">
                  {event.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {event.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}