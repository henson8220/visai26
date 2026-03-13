import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const heroRef = useRef(null);
  const [visible, setVisible] = useState(false);

  // ---------------------------
  // Countdown Logic
  // ---------------------------
  const calculateTimeLeft = () => {
    const targetDate = new Date("April 24, 2026 00:00:00").getTime();
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
  // Typewriter Animation
  // ---------------------------
  const TitleText =
    "VISAI '26";
  const fullText =
    "Delivering God's Word. Carrying the Message. April 24, 2026.";
    const themeText="POSTMAN";
  const [typedText, setTypedText] = useState("");
const [typeTitleText, setTitleText] = useState("");
const [typeThemeText, setThemeText] = useState("");

const [celebrate, setCelebrate] = useState(false);

  useEffect(() => {
    let index = 0;
    const typing = setInterval(() => {
      setTypedText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) clearInterval(typing);
    }, 50);

    return () => clearInterval(typing);
  }, []);

  
  useEffect(() => {
    let index = 0;
    const typingTitle = setInterval(() => {
      setTitleText(TitleText.slice(0, index + 1));
      index++;
      if (index === TitleText.length) clearInterval(typingTitle);
    }, 50);

    return () => clearInterval(typingTitle);
  }, []);

    useEffect(() => {
    let index = 0;
    const typingTheme = setInterval(() => {
      setThemeText(themeText.slice(0, index + 1));
      index++;
      if (index === themeText.length) clearInterval(typingTheme);
    }, 50);

    return () => clearInterval(typingTheme);
  }, []);

  useEffect(() => {
  if (!timeLeft) {
    setCelebrate(true);

    setTimeout(() => {
      setCelebrate(false);
    }, 3000);
  }
}, [timeLeft]);


  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center text-center px-6 bg-[#e8dcc3] text-[#2f241f]"
    >

  <div className="absolute inset-0 pointer-events-none overflow-hidden z-20">

    
{/* Core Spark Particles */}
<span className="absolute top-10 left-10 w-3 h-3 bg-[#b68b1e] rounded-full animate-[sparkOnce_3s_ease-out_forwards]"></span>
<span className="absolute top-20 right-16 w-3 h-3 bg-[#a16207] rounded-full animate-[sparkOnce_3.2s_ease-out_forwards]"></span>
<span className="absolute bottom-24 left-20 w-3 h-3 bg-[#92400e] rounded-full animate-[sparkOnce_3.5s_ease-out_forwards]"></span>
<span className="absolute bottom-32 right-10 w-3 h-3 bg-[#b45309] rounded-full animate-[sparkOnce_3.8s_ease-out_forwards]"></span>

<span className="absolute top-1/4 left-1/3 w-2 h-2 bg-[#b68b1e] rounded-full animate-[sparkOnce_3s_ease-out_forwards]"></span>
<span className="absolute top-1/2 right-1/4 w-2 h-2 bg-[#a16207] rounded-full animate-[sparkOnce_3.4s_ease-out_forwards]"></span>
<span className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-[#92400e] rounded-full animate-[sparkOnce_3.6s_ease-out_forwards]"></span>
<span className="absolute top-3/4 right-1/3 w-2 h-2 bg-[#b45309] rounded-full animate-[sparkOnce_4s_ease-out_forwards]"></span>

{/* Tiny Glowing Streaks */}
<span className="absolute top-16 left-1/4 w-8 h-[2px] bg-[#8b5e34]/60 rotate-12 blur-[1px] animate-[sparkOnce_3.2s_ease-out_forwards]"></span>
<span className="absolute bottom-24 right-1/3 w-6 h-[2px] bg-[#a16207]/60 -rotate-12 blur-[1px] animate-[sparkOnce_3.5s_ease-out_forwards]"></span>
<span className="absolute top-1/2 left-10 w-10 h-[2px] bg-[#7c2d12]/50 rotate-6 blur-[1px] animate-[sparkOnce_3.8s_ease-out_forwards]"></span>

{/* Small Blurred Sparks */}
<span className="absolute top-1/3 right-10 w-5 h-5 bg-[#b68b1e]/20 rounded-full blur-md animate-[sparkOnce_3.4s_ease-out_forwards]"></span>
<span className="absolute bottom-20 left-1/4 w-6 h-6 bg-[#a16207]/20 rounded-full blur-md animate-[sparkOnce_3.7s_ease-out_forwards]"></span>
<span className="absolute top-2/3 right-1/2 w-4 h-4 bg-[#92400e]/20 rounded-full blur-sm animate-[sparkOnce_4s_ease-out_forwards]"></span>

{/* Ink Dust Particles */}
<span className="absolute top-12 left-1/2 w-1 h-1 bg-[#3b2f2f]/30 rounded-full animate-[sparkOnce_3s_ease-out_forwards]"></span>
<span className="absolute bottom-16 right-1/4 w-1 h-1 bg-[#3b2f2f]/20 rounded-full animate-[sparkOnce_3.3s_ease-out_forwards]"></span>
<span className="absolute top-2/3 left-20 w-1 h-1 bg-[#3b2f2f]/30 rounded-full animate-[sparkOnce_3.6s_ease-out_forwards]"></span>
<span className="absolute bottom-1/3 right-8 w-1 h-1 bg-[#3b2f2f]/20 rounded-full animate-[sparkOnce_4s_ease-out_forwards]"></span>

{/* Envelope with Letter */}
<div className="absolute top-1/3 -left-20 w-16 h-10 bg-[#f8f1e4] border border-[#8b6b4f] rounded-sm animate-[flyAcross_4s_linear_forwards] rotate-6 shadow-[0_10px_28px_rgba(60,40,20,0.35)] overflow-visible">

  {/* Envelope flap */}
  <div className="absolute inset-x-0 top-0 h-1/2 bg-[#ead7b8] border-b border-[#8b6b4f] animate-[envelopeOpen_2s_ease-in-out_2s_forwards] origin-top"></div>

  {/* Letter slipping out */}
  <div className="absolute left-2 top-1 w-12 h-6 bg-white border border-[#b89f7a] animate-[letterSlide_2s_ease-in-out_2.2s_forwards]"></div>
</div>

{/* Rotating Stamp */}
<div className="absolute bottom-10 left-1/4 w-10 h-10 bg-[#a11d1d] border-2 border-[#ead7b8] rounded-sm animate-[flyUpStampRotate_4.5s_linear_forwards] shadow-[0_10px_28px_rgba(60,40,20,0.35)]">
  <div className="absolute inset-1 border border-dashed border-[#f8f1e4]"></div>
</div>

{/* Postcard */}
<div className="absolute top-10 -right-20 w-20 h-12 bg-[#e6d3b1] border border-[#7c5a3c] rounded-sm animate-[flyDiagonalLeft_5s_linear_forwards] -rotate-12 shadow-[0_10px_28px_rgba(60,40,20,0.35)] flex items-center justify-center text-[8px] text-[#2f241f] font-bold">
  POSTMAN
</div>

{/* Extra Stamp from Right */}
<div className="absolute top-1/2 right-0 w-9 h-9 bg-[#c2410c] border border-[#ead7b8] rounded-sm animate-[flyReverse_4s_linear_forwards] rotate-12 shadow-[0_10px_28px_rgba(60,40,20,0.3)]"></div>
  </div>

      <div
        className={`transition-all duration-1000 ease-out ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Ink Fade Title */}
        <h1
          className={`text-5xl md:text-7xl font-bold uppercase tracking-[0.2em] mb-8 transition-all duration-1500 ${
            visible ? "opacity-100 blur-0" : "opacity-0 blur-sm"
          }`} 
        >
          {typeTitleText}
        </h1>

        <div className="relative inline-block mb-8">

  {/* Postal Seal */}
  <div className="relative inline-block mb-8">

  {/* Real Red Postal Seal */}
  <div className="absolute inset-0 flex items-center justify-center opacity-15 scale-125 rotate-[-12deg] translate-x-1 translate-y-1">

    <svg
      viewBox="0 0 200 200"
      className="w-44 h-44"
    >
      {/* Outer Circle */}
      <circle
        cx="100"
        cy="100"
        r="80"
        fill="none"
        stroke="#dc2626"
        strokeWidth="4"
      />

      {/* Inner Circle */}
      <circle
        cx="100"
        cy="100"
        r="58"
        fill="none"
        stroke="#b91c1c"
        strokeWidth="2"
      />

      {/* Cancellation Lines */}
      <line
        x1="30"
        y1="85"
        x2="170"
        y2="85"
        stroke="#b91c1c"
        strokeWidth="3"
      />
      <line
        x1="25"
        y1="100"
        x2="175"
        y2="100"
        stroke="#b91c1c"
        strokeWidth="3"
      />
      <line
        x1="30"
        y1="115"
        x2="170"
        y2="115"
        stroke="#b91c1c"
        strokeWidth="3"
      />

      {/* Center Seal */}
      <circle
        cx="100"
        cy="100"
        r="10"
        fill="#dc2626"
      />
    </svg>

  </div>

  {/* POSTMAN Title */}
  <h1
    className={`relative text-4xl md:text-7xl font uppercase tracking-[0.2em] transition-all duration-1500 ${
      visible ? "opacity-100 blur-0" : "opacity-0 blur-sm"
    }`}
  >
    {typeThemeText}
  </h1>

</div>

</div>

        {/* Typewriter Subtitle */}
        <p className="text-lg md:text-2xl max-w-2xl mx-auto mb-12 tracking-wider leading-relaxed text-[#4b3a2f]">
          {typedText}
          <span className="animate-pulse">|</span>
        </p>

        {/* Countdown + CTA */}
        <div className="flex flex-col items-center gap-6">

          {timeLeft ? (
  <div className="bg-[#7c2d12]/80 backdrop-blur-md border border-yellow-400/40 rounded-2xl px-6 py-4 shadow-lg">
    <p className="text-yellow-300 uppercase text-xs tracking-[0.3em] mb-3">
      Delivery Begins In
    </p>

    <div className="flex gap-6 text-center text-white font-bold tracking-widest">
      <div>
        <p className="text-2xl">{timeLeft.days}</p>
        <span className="text-xs text-gray-300">Days</span>
      </div>
      <div>
        <p className="text-2xl">{timeLeft.hours}</p>
        <span className="text-xs text-gray-300">Hours</span>
      </div>
      <div>
        <p className="text-2xl">{timeLeft.minutes}</p>
        <span className="text-xs text-gray-300">Min</span>
      </div>
      <div>
        <p className="text-2xl">{timeLeft.seconds}</p>
        <span className="text-xs text-gray-300">Sec</span>
      </div>
    </div>
  </div>
) : (
 <div className="relative bg-[#7c2d12]/80 backdrop-blur-md border border-yellow-400/40 rounded-2xl px-6 py-4 shadow-lg overflow-hidden animate-[pulse_1s_ease-in-out]">

  {/* Golden Spark Burst */}
  {celebrate && (
    <div className="absolute inset-0 pointer-events-none">
      <span className="absolute top-2 left-4 w-2 h-2 bg-yellow-300 rounded-full animate-ping"></span>
      <span className="absolute top-4 right-6 w-2 h-2 bg-orange-300 rounded-full animate-ping delay-200"></span>
      <span className="absolute bottom-3 left-8 w-2 h-2 bg-yellow-400 rounded-full animate-ping delay-500"></span>
      <span className="absolute bottom-4 right-10 w-2 h-2 bg-amber-200 rounded-full animate-ping delay-700"></span>
    </div>
  )}

  {/* Floating Envelope Left */}
  <span className="absolute -left-3 top-2 text-lg animate-bounce">
    📨
  </span>

  {/* Floating Envelope Right */}
  <span className="absolute -right-3 bottom-2 text-lg animate-bounce delay-300">
    📮
  </span>

  {/* Text */}
  <p className="text-yellow-300 uppercase text-sm tracking-[0.3em] mb-2 relative z-10">
    The Message Has Arrived
  </p>

  <p className="text-white text-lg font-bold drop-shadow-[0_0_12px_rgba(255,200,0,0.5)] relative z-10">
    Delivery Is Live
  </p>
</div>
)}

          <a
            href="#events"
            className="px-8 py-3 bg-yellow-400 text-black rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-lg tracking-wide "
          >
            View Events
          </a>
        </div>
      </div>
    </section>
  );
}