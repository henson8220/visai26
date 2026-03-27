import { useEffect, useRef, useState } from "react";
import VisaiLogo from "../assets/Visai_Color-1.svg";

export default function Hero() {
  const heroRef = useRef(null);
  const [visible, setVisible] = useState(false);

  // ---------------------------
  // Countdown Logic
  // ---------------------------
  const calculateTimeLeft = () => {
    const targetDate = new Date("April 25, 2026 00:00:00").getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) return null;

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [celebrate, setCelebrate] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // ---------------------------
  // Scroll Fade
  // ---------------------------
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 }
    );

    if (heroRef.current) observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  // ---------------------------
  // Typewriter
  // ---------------------------
  const fullText =
    "Delivering God's Word. Carrying the Message. April 25, 2026.";
  const themeText = "POSTMAN";

  const [typedText, setTypedText] = useState("");
  const [typeThemeText, setThemeText] = useState("");

  useEffect(() => {
    let i = 0;
    const t = setInterval(() => {
      setTypedText(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) clearInterval(t);
    }, 60);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    let i = 0;
    const t = setInterval(() => {
      setThemeText(themeText.slice(0, i + 1));
      i++;
      if (i === themeText.length) clearInterval(t);
    }, 70);
    return () => clearInterval(t);
  }, []);

  // ---------------------------
  // Celebration
  // ---------------------------
  useEffect(() => {
    if (!timeLeft) {
      setCelebrate(true);
      setTimeout(() => setCelebrate(false), 3000);
    }
  }, [timeLeft]);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center text-center px-6 bg-[#e8dcc3] text-[#2f241f] overflow-hidden"
    >

      {/* ================= FLYING SYSTEM ================= */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-20">

        {/* Sparks */}
        <span className="absolute top-10 left-10 w-3 h-3 bg-[#b68b1e] rounded-full animate-[sparkOnce_3s_ease-out_forwards]"></span>
        <span className="absolute bottom-20 right-20 w-3 h-3 bg-[#92400e] rounded-full animate-[sparkOnce_4s_ease-out_forwards]"></span>

        {/* Envelope */}
        <div className="absolute top-1/3 -left-20 w-16 h-10 bg-[#f8f1e4] border border-[#8b6b4f] rounded-sm animate-[flyAcross_4s_linear_forwards] rotate-6 shadow-lg">
          <div className="absolute inset-x-0 top-0 h-1/2 bg-[#ead7b8] border-b border-[#8b6b4f] animate-[envelopeOpen_2s_1s_forwards]"></div>
          <div className="absolute left-2 top-1 w-12 h-6 bg-white border border-[#b89f7a] animate-[letterSlide_2s_1.2s_forwards]"></div>
        </div>

        {/* Stamp */}
        <div className="absolute bottom-10 left-1/4 w-10 h-10 bg-[#a11d1d] border-2 border-[#ead7b8] rounded-sm animate-[flyUpStampRotate_4.5s_linear_forwards]"></div>

        {/* Postcard */}
        <div className="absolute top-10 -right-20 w-20 h-12 bg-[#e6d3b1] border border-[#7c5a3c] rounded-sm animate-[flyDiagonalLeft_5s_linear_forwards] -rotate-12 shadow-lg flex items-center justify-center text-[8px] font-bold">
          POSTMAN
        </div>

      </div>

      {/* ================= MAIN ================= */}
      <div className={`relative z-10 transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>

        {/* LOGO */}
        <div className="mb-2 flex justify-center">
 <img
  src={VisaiLogo}
  style={{ width: "290px" }}
  className={`${visible ? "animate-logoFade" : "opacity-0"}`}
/>
</div>

        {/* POSTMAN */}
        <div className="relative inline-block mb-8">
          <div className="absolute inset-0 flex items-center justify-center opacity-15 scale-125 rotate-[-12deg]">
            <svg viewBox="0 0 200 200" className="w-56 h-56">
              <circle cx="100" cy="100" r="80" fill="none" stroke="#dc2626" strokeWidth="4"/>
              <circle cx="100" cy="100" r="58" fill="none" stroke="#b91c1c" strokeWidth="2"/>
              <line x1="30" y1="100" x2="170" y2="100" stroke="#b91c1c" strokeWidth="3"/>
            </svg>
          </div>

          <h1 className="relative text-5xl md:text-8xl lg:text-9xl font-extrabold tracking-[0.25em]">
            {typeThemeText}
          </h1>
        </div>

        {/* SUBTITLE */}
        <p className="text-lg md:text-2xl mb-12 text-[#4b3a2f]">
          {typedText}
          <span className="animate-pulse">|</span>
        </p>

        {/* COUNTDOWN / LIVE */}
        <div className="flex flex-col items-center gap-6">

          {timeLeft ? (
            <div className="bg-[#7c2d12]/80 text-white rounded-2xl px-6 py-4 shadow-lg">
              <div className="flex gap-6 text-center font-bold">
                <div><p>{timeLeft.days}</p><span>Days</span></div>
                <div><p>{timeLeft.hours}</p><span>Hours</span></div>
                <div><p>{timeLeft.minutes}</p><span>Min</span></div>
                <div><p>{timeLeft.seconds}</p><span>Sec</span></div>
              </div>
            </div>
          ) : (
            <div className="relative bg-[#7c2d12]/80 text-white px-6 py-4 rounded-2xl shadow-lg">

              {celebrate && (
                <div className="absolute inset-0">
                  <span className="absolute top-2 left-4 w-2 h-2 bg-yellow-300 rounded-full animate-ping"></span>
                  <span className="absolute bottom-2 right-4 w-2 h-2 bg-orange-300 rounded-full animate-ping"></span>
                </div>
              )}

              <p className="text-yellow-300 text-sm uppercase mb-1">
                The Message Has Arrived
              </p>

              <p className="text-white text-lg font-bold 
  drop-shadow-[0_0_12px_rgba(202,162,7,0.7)]">
  Delivery Is Live
</p>
            </div>
          )}

          {/* CTA */}
          <a
            href="#events"
            className="px-8 py-3 bg-yellow-400 text-black rounded-full font-semibold hover:scale-105 transition"
          >
            View Events
          </a>
        </div>
      </div>
    </section>
  );
}