import { useEffect, useRef, useState } from "react";

export default function Schedule() {
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

  const scheduleItems = [
    {
      time: "09:00 AM",
      title: "Opening Ceremony",
      desc: "Welcome and introductions to kick off NEOBLAZE 2026."
    },
    {
      time: "10:30 AM",
      title: "Worship Session",
      desc: "Uplifting session of praise and worship."
    },
    {
      time: "12:00 PM",
      title: "Workshops",
      desc: "Interactive workshops and group activities."
    },
    {
      time: "02:00 PM",
      title: "Break / Fellowship",
      desc: "Lunch and fellowship time among attendees."
    },
    {
      time: "03:30 PM",
      title: "Competitions",
      desc: "Inter-group creative and fun competitions."
    },
    {
      time: "06:00 PM",
      title: "Evening Message",
      desc: "Inspiration and teaching from invited speakers."
    }
  ];

  return (
    <section
      id="schedule"
      ref={sectionRef}
      className="min-h-screen flex items-center px-6 py-24 text-white bg-amber-900"
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
            Event Flow
          </p>

          {/* Heading */}
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-widest text-center mb-16">
            Schedule
          </h2>

          {/* Timeline */}
          <div className="relative border-l border-gray-600 ml-4">
            {scheduleItems.map((item, i) => (
              <div
                key={i}
                className="mb-12 ml-6 flex items-start"
              >
                {/* Dot */}
                <div className="absolute -left-2 top-1 w-4 h-4 bg-white rounded-full border border-gray-500"></div>

                {/* Card */}
                <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:-translate-y-1 hover:border-white/30 transition-all duration-500 w-full">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-yellow-400 font-bold text-lg">
                      {item.time}
                    </span>
                    <h3 className="text-xl md:text-2xl font-semibold">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-gray-300">
                    {item.desc}
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