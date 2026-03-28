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
  "On the day of the event, registration will be open between 8:30 AM and 9:30 AM.",
  "All participants should be between 18 and 35 years of age.",
  "The registration fee is Rs.1500 per church and Rs.100 for individual participants. Cheque in favour of CSI WEST TAMBARAM PASTORATE - GENERAL FUND A/C.",
  "Confirm your participation on or before April 15 by completing the Online registration form.",
  "All online event submissions must be completed on or before April 22nd.",
  "Participants are requested to adhere to the event schedule, follow the instructions and respect the church campus property at all times.",
  "No abusive language or disruptive behavior will be encouraged.",
  "Any act of misconduct or malpractice will results in disqualification.",
  "Please note that the decision of the judges will be final and binding."
];

  return (
    <section
      id="rules"
      ref={sectionRef}
       className="min-h-screen flex items-center px-6 py-24 bg-[#bfa77f] text-[#2f241f]"
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
         <p className="uppercase tracking-[0.3em] text-sm text-[#7c5a3c] mb-6 text-center drop-shadow-[0_1px_0_rgba(255,255,255,0.2)]">
  Guidelines & Expectations
</p>

          {/* Heading */}
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-widest text-center mb-16">
            General Rules
          </h2>

          {/* Rules Items */}
          <ul className="space-y-4 max-w-3xl mx-auto">
            {rulesList.map((rule, i) => (
     <li
  key={i}
  className="relative p-6 pl-12 rounded-xl border border-[#a88d66] bg-[#e6d3b1] shadow-[0_6px_18px_rgba(80,60,30,0.12)] transition-all duration-300 hover:-translate-y-1 overflow-hidden border-b border-dashed border-[#b89f7a]/40"
>
  {/* Left vertical rule line */}
  <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#a11d1d]/70"></div>

  {/* Index */}
  <span className="absolute left-4 top-6 text-[#a11d1d] font-bold text-lg tracking-wider">
    {String(i + 1).padStart(2, "0")}
  </span>

  {/* Content */}
  <p className="text-[#5a4636] text-lg leading-relaxed text-justify">
    {rule}
  </p>
</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}