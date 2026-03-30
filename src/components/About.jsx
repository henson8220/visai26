import { useEffect, useRef, useState } from "react";

const prizes = [
  {
    rank: "1st",
    stamp: "1ST",
    label: "First Prize",
    amount: 5000,
    icon: "🏆",
    color: "#a11d1d",
    border: "#a88d66",
    stampBg: "#a11d1d",
  },
  {
    rank: "2nd",
    stamp: "2ND",
    label: "Second Prize",
    amount: 2500,
    icon: "🥈",
    color: "#5a3e2b",
    border: "#a88d66",
    stampBg: "#5a3e2b",
  },
];

function AnimatedAmount({ target, visible, color }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!visible) return;
    const duration = 1800;
    const steps = 60;
    const increment = target / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const current = Math.min(Math.round(increment * step), target);
      setCount(current);
      if (step >= steps) clearInterval(timer);
    }, duration / steps);

    return () => clearInterval(timer);
  }, [visible, target]);

  return (
    <h3
      className="text-5xl md:text-6xl font-extrabold tracking-tight mb-1"
      style={{ color }}
    >
      Rs.{count.toLocaleString()}
    </h3>
  );
}

export default function Prizes() {
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
      id="prizes"
      ref={sectionRef}
      className="relative min-h-screen flex items-center px-6 py-24 overflow-hidden"
      style={{ background: "#cdb792" }}
    >
      {/* Subtle dot texture like old parchment */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: "radial-gradient(circle, #8b6b4f 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Warm center glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] pointer-events-none rounded-full"
        style={{
          background: "radial-gradient(ellipse, rgba(255,255,255,0.25) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="max-w-5xl mx-auto w-full relative z-10">
        <div
          className="transition-all duration-1000 ease-out"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(30px)",
          }}
        >

          {/* Heading */}
          <div className="text-center mb-16">
            <p className="uppercase tracking-[0.3em] text-sm text-[#7a5c42] mb-4">
              VISAI 26
            </p>
            <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-widest text-[#2f241f]">
              Cash Prizes
            </h2>
            <div className="w-24 h-[2px] bg-[#a11d1d] mx-auto mt-6 mb-4" />
            <p className="text-[#7a5c42] text-sm tracking-widest uppercase">
              Delivered with honour
            </p>
          </div>

          {/* Cards */}
          <div className="grid gap-10 md:grid-cols-2 max-w-4xl mx-auto">
            {prizes.map((prize, i) => (
              <div
                key={prize.rank}
                className="relative rounded-2xl overflow-hidden transition-all duration-700 hover:-translate-y-3"
                style={{
                  transitionDelay: visible ? `${i * 150}ms` : "0ms",
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(30px)",
                  background: "linear-gradient(135deg, #e6d3b1 0%, #f3e7cf 100%)",
                  border: "1px solid #a88d66",
                  boxShadow: "0 8px 32px rgba(80,50,20,0.18), 0 2px 8px rgba(80,50,20,0.10)",
                }}
              >
                {/* Top envelope flap stripe */}
                <div
                  className="w-full h-1"
                  style={{
                    background: "linear-gradient(90deg, #a88d66, #a11d1d, #a88d66)",
                  }}
                />

                <div className="p-8">

                  {/* Stamp */}
                  <div
                    className="absolute top-6 right-6 w-12 h-12 rotate-12 border border-[#f3e7cf]/60 flex items-center justify-center text-[8px] text-white font-bold tracking-wider shadow-md"
                    style={{ background: prize.stampBg }}
                  >
                    {prize.stamp}
                  </div>

                  {/* Postmark ring */}
                  <div
                    className="absolute bottom-6 right-6 w-14 h-14 rounded-full flex items-center justify-center"
                    style={{ border: "2px solid #a88d6660" }}
                  >
                    <div
                      className="w-8 h-8 rounded-full"
                      style={{ border: "1px solid #a88d6640" }}
                    />
                  </div>

                  {/* Vertical postcard divider */}
                  <div
                    className="absolute top-6 bottom-6 right-24 w-[1px]"
                    style={{ background: "#b89f7a60" }}
                  />

                  {/* Address lines */}
                  <div className="absolute right-7 top-20 space-y-3">
                    <div className="w-10 h-[1px]" style={{ background: "#b89f7a70" }} />
                    <div className="w-10 h-[1px]" style={{ background: "#b89f7a70" }} />
                    <div className="w-10 h-[1px]" style={{ background: "#b89f7a70" }} />
                  </div>

                  {/* Corner fold */}
                  <div className="absolute top-0 left-0 w-0 h-0 border-t-[40px] border-r-[40px] border-t-[#f3e7cf] border-r-transparent" />
                  <div className="absolute top-0 left-0 w-0 h-0 border-t-[20px] border-r-[20px] border-t-[#d8c3a0] border-r-transparent" />

                  {/* Content */}
                  <div className="pr-20 relative z-10">

                    {/* Trophy Icon */}
                    <div className="text-5xl mb-5 inline-block" style={{ animation: "bounce 2s infinite" }}>
                      {prize.icon}
                    </div>

                    {/* Rank label */}
                    <p className="text-xs uppercase tracking-[0.3em] mb-2 font-semibold text-[#7a5c42]">
                      {prize.label}
                    </p>

                    {/* Animated Amount */}
                    <AnimatedAmount
                      target={prize.amount}
                      visible={visible}
                      color={prize.color}
                    />

                    {/* Rule */}
                    <div
                      className="w-16 h-[2px] mb-4 mt-2"
                      style={{ background: "#a88d66" }}
                    />

                   

                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer note */}
          <div className="max-w-4xl mx-auto mt-12 px-4">
            <div className="border-t border-[#a88d66]/50 pt-6 text-center">
              <p className="text-[#7a5c42] text-xs tracking-[0.3em] uppercase">
                Judges decision will be final for all events
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}