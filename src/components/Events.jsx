import { useEffect, useRef, useState } from "react";

const events = [
  {
    type: "On-site",
    emoji: "🎤",
    title: "Block & Tackle",
    desc: "Speak for & against a Bible character • 5 mins total (2 prep + 3 performance) • Individual event",
    rules: [
      "Each participant will be assigned a Bible character by the organizers.",
      "Participants must speak alternately in favor (Block) and against (Tackle) the given character.",
      "Every point must begin clearly with the words \"Block\" or \"Tackle\", without repetition.",
      "Total time: 5 minutes — 2 mins preparation & 3 mins performance.",
      "Maintain clarity, relevance, and biblical accuracy in all points.",
      "Judges' decision will be final.",
    ],
  },
  {
    type: "On-site",
    emoji: "🗺️",
    title: "Treasure Hunt",
    desc: "Team of 3 • One female participant mandatory • Clue-based game",
    rules: [
      "Team event — 3 members per team.",
      "One female participant is mandatory per team.",
      "Rules will be disclosed on the spot.",
      "Any malpractice leads to immediate disqualification.",
      "Judges' decision will be final.",
    ],
  },
  {
    type: "On-site",
    emoji: "🎨",
    title: "Face Painting",
    desc: "Team of 3 • Theme given on spot • 60 minute time limit",
    rules: [
      "Team event — 3 members per team.",
      "Theme will be given on the spot.",
      "Time limit: 60 minutes.",
      "Participants must bring their own materials. No harmful or unsafe materials allowed.",
      "Original ideas without plagiarism will be appreciated.",
      "Judges' decision will be final.",
    ],
  },
  {
    type: "On-site",
    emoji: "📸",
    title: "Photography",
    desc: "Individual event • Theme given on spot • DSLR/mobile allowed",
    rules: [
      "Theme will be given on the spot and rules will be disclosed on spot.",
      "Photos must be original — plagiarism leads to disqualification.",
      "Submission must include a title and short description in JPG or PNG format.",
      "Use of DSLR or mobile is allowed.",
      "Judges' decision will be final.",
    ],
  },
  {
    type: "On-site",
    emoji: "🎶",
    title: "Singing",
    desc: "Min 5 members • Own composition based on theme • 7 min limit",
    rules: [
      "Team event — minimum 5 members per team.",
      "Songs must be in own composition based on the theme.",
      "Time limit: 7 minutes including instrument setup.",
      "Use of claps, hums, snaps and similar effects may enhance the overall performance.",
      "Keyboard and Drums will be provided.",
      "Judges' decision will be final.",
    ],
  },
  {
    type: "On-site",
    emoji: "📢",
    title: "Adzap",
    desc: "Team of 4–6 • 7 mins total (4 prep + 3 performance) • Props allowed",
    rules: [
      "Team event — 4 to 6 members.",
      "Total time: 7 minutes — 4 mins preparation & 3 mins performance.",      
      "Content must be respectful, original, humorous, and spiritual.",
      "Judges' decision will be final.",
    ],
  },
  {
    type: "On-site",
    emoji: "🧠",
    title: "Quiz",
    desc: "Team of 2–3 • Bible-based • Prelims + Finals rounds",
    rules: [
      "Team event — 2 to 3 members.",
      "Prelims: Written test — Portions: Acts and Gospel of Mark (44 Chapters).",
      "Finals: Multiple rounds — Portions: Full Bible.",
      "Language: English (NIV) or Tamil (Standard Version).",
      "Judges' decision will be final.",
    ],
  },
  {
    type: "On-site",
    emoji: "🎁",
    title: "Surprise Event",
    desc: "Details revealed on the spot • Expect the unexpected!",
    rules: [
      "Details will be revealed on the day of the event.",
      "Be prepared for anything!",
      "Judges' decision will be final.",
    ],
  },
  {
    type: "Online",
    emoji: "📷",
    title: "Street Photography",
    desc: "Online • Theme: POSTMAN • Submit before 22nd April 2026",
    rules: [
      "Theme: \"POSTMAN\" — Sharing the Gospel / Service / Humanity / Real-life impact.",
      "Photos must be captured by the participant — no copied or downloaded images.",
      "Editing strictly limited to basic corrections (brightness, contrast, cropping). No heavy editing or filters.",
      "Submit in JPEG/PNG format with a title and short description (2–3 lines connecting to theme).",
      "File name format: Name_ChurchName_StreetPhotography",
      "Submission deadline: 22nd April 2026.",
      "No offensive, inappropriate, or non-Christian content.",
      "Judges' decision will be final.",
    ],
  },
  {
    type: "Online",
    emoji: "🎬",
    title: "Reels Making",
    desc: "Online • 30–60 sec reel • Theme: POSTMAN • Submit before 22nd April 2026",
    rules: [
      "Theme: \"POSTMAN\" — Spreading the Gospel Message creatively.",
      "Duration: 30 to 60 seconds only.",
      "Video must be original and created by the participant/team.",
      "Language: Tamil / English (or both).",
      "Mobile or camera allowed. Basic editing permitted.",
      "No vulgar, copyrighted, or inappropriate music/content.",
      "Reel must clearly convey a Christian message / Gospel truth.",
      "Submit via Google Drive link with title & short description.",
      "File name format: Name_ChurchName_Reels",
      "Submission deadline: 22nd April 2026. Late entries will not be accepted.",
      "Judges' decision will be final.",
    ],
  },
];

function EventCard({ event, index, visible }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Card Header */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left p-6 flex items-start justify-between gap-4 hover:bg-white/5 transition-colors duration-200 group"
      >
        <div className="flex items-start gap-4">
          <span className="text-3xl">{event.emoji}</span>
          <div>
            <span
              className={`text-xs font-semibold tracking-widest uppercase px-2 py-0.5 rounded-full mb-2 inline-block ${
                event.type === "Online"
                  ? "bg-blue-500/20 text-blue-300"
                  : "bg-amber-500/20 text-amber-300"
              }`}
            >
              {event.type}
            </span>
            <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
              {event.title}
            </h3>
            <p className="text-sm text-gray-400 mt-1 leading-relaxed">
              {event.desc}
            </p>
          </div>
        </div>

        {/* Chevron Icon */}
        <span
          className={`text-amber-400 text-xl mt-1 flex-shrink-0 transition-transform duration-300 ${
            open ? "rotate-180" : "rotate-0"
          }`}
        >
          ▾
        </span>
      </button>

      {/* Slide Down Rules */}
      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          open ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-6 border-t border-white/10 pt-4">
          <p className="text-xs uppercase tracking-widest text-amber-400 mb-3 font-semibold">
            Rules & Regulations
          </p>
          <ul className="space-y-2">
            {event.rules.map((rule, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-300 leading-relaxed">
                <span className="text-amber-400 mt-0.5 flex-shrink-0">•</span>
                {rule}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function Events() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="events"
      ref={sectionRef}
      className="relative min-h-screen flex items-center px-6 md:px-12 py-24 text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className={`transition-all duration-1000 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>

         

          {/* Heading */}
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-widest text-center mb-4">
            Events
          </h2>

          

          {/* On-site Events */}
          <h3 className="text-xs uppercase tracking-[0.3em] text-amber-400 mb-4 font-semibold">
            On-site Events
          </h3>
          <div className="grid gap-4 md:grid-cols-2 mb-12">
            {events
              .filter((e) => e.type === "On-site")
              .map((event, index) => (
                <EventCard key={index} event={event} index={index} visible={visible} />
              ))}
          </div>

          {/* Online Events */}
          <h3 className="text-xs uppercase tracking-[0.3em] text-blue-400 mb-4 font-semibold">
            Online Events
          </h3>
          <div className="grid gap-4 md:grid-cols-2">
            {events
              .filter((e) => e.type === "Online")
              .map((event, index) => (
                <EventCard key={index} event={event} index={index} visible={visible} />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}