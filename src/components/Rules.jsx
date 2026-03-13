import { useEffect, useRef, useState } from "react";

export default function Rules() {
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

  const rulesList = [
    "On the day of the Event, the registration will be open from 8:30 AM to 9:30 AM.",
    "All participants must be between 18 and 35 years of age.",
    "The registration fee is Rs. - per church",
    "Please confirm your participation on or before April 15th through online registration form.",
    "All Online event submissions must be completed on or before April 20th.",
    "Please adhere to the schedule, follow volunteer instructions and respect the church campus.",
    "No abusive language or disruptive behavior will be encouraged.",
    "Any act of misconduct or malpractices results in disqualification",
    "The verdict of the organizers will be final"
  ];

  return (
    <section
      id="rules"
      ref={sectionRef}
       className="min-h-screen flex items-center px-6 py-24 text-white bg-yellow-900"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div
          className={`transition-all duration-1000 ease-out ${
            visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          {/* Section Label */}
          <p className="uppercase tracking-[0.3em] text-sm text-gray-400 mb-6 text-center">
            Guidelines & Expectations
          </p>

          {/* Heading */}
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-widest text-center mb-16">
            General Rules
          </h2>

          {/* Rules Items */}
          <ul className="space-y-6">
            {rulesList.map((rule, i) => (
              <li
                key={i}
                className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:-translate-y-1 hover:border-white/30 transition-all duration-500"
              >
                <span className="font-semibold text-xl mr-4 text-yellow-400">
                  {i + 1}.
                </span>
                <span className="text-gray-300 text-lg leading-relaxed">
                  {rule}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}