import { useEffect, useRef, useState } from "react";

const contacts = [
  { name: "REV. S. Suresh Thilak Kumar", role: "Presbyter In-Charge", phone: "9444068626" },
  { name: "Mr. Andrew Vimalraj", role: "Youth Secretary", phone: "9444363297" },
  { name: "Mr. Samuel Yuvaraj", role: "Youth Treasurer", phone: "9790703460" },
  { name: "Ms. Merlin Shalina", role: "Youth Convenor", phone: "9840632607" },
];

export default function Contact() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const visibleClass = visible
    ? "transition-all duration-1000 ease-out opacity-100 translate-y-0"
    : "transition-all duration-1000 ease-out opacity-0 translate-y-10";

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="w-full px-4 sm:px-6 md:px-12 py-24 text-white overflow-x-hidden"
    >
      <div className="max-w-5xl mx-auto w-full">
        <div className={visibleClass}>

          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-widest text-center mb-16">
            Contact
          </h2>

          <div className="flex flex-col gap-8">

            {/* Venue Card */}
            <div className="w-full p-6 sm:p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
              <h3 className="text-2xl font-semibold mb-4">Venue</h3>
              <p className="text-base sm:text-lg text-gray-300 mb-6 leading-relaxed">
                C.S.I Church of Jesus The Lord,
                <br />
                Grand Southern Trunk Rd,
                <br />
                West Tambaram, Chennai 600045
              </p>

              <div
                className="w-full rounded-xl overflow-hidden border border-white/10 mb-6"
                style={{ height: "220px" }}
              >
                <iframe
                  src="https://maps.google.com/maps?q=CSI+Church+of+Jesus+The+Lord+West+Tambaram&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, display: "block" }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Venue Map"
                />
              </div>

              <a
                href="https://share.google/mFGxDvTPoI1917IXi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 border border-amber-400 text-amber-400 rounded-full hover:bg-amber-400 hover:text-black transition-all duration-300 text-sm font-semibold"
              >
                Open in Google Maps
              </a>
            </div>

            {/* Contact Card */}
            <div className="w-full p-6 sm:p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
              <h3 className="text-2xl font-semibold mb-6">Contact</h3>

              <div className="space-y-5">
                {contacts.map((person, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between flex-wrap gap-2 border-b border-white/10 pb-4 last:border-0 last:pb-0"
                  >
                    <div>
                      <p className="text-white font-semibold">{person.name}</p>
                      <p className="text-gray-400 text-sm">{person.role}</p>
                    </div>
                    <a
                      href={"tel:" + person.phone}
                      className="text-amber-400 font-mono text-sm hover:text-amber-300 transition-colors"
                    >
                      {person.phone}
                    </a>
                  </div>
                ))}

                <div className="pt-2">
                  <p className="text-gray-400 text-sm mb-1">Email</p>
                  <a
                    href="mailto:csichurchofjesusthelord@email.com"
                    className="text-amber-400 hover:text-amber-300 transition-colors text-sm break-all"
                  >
                    jlyfvisai@gmail.com
                  </a>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}