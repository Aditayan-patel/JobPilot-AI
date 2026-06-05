import { CheckCircle2, Star } from "lucide-react";
import { Features as features } from "../utils";

function Features() {
  return (
    <section
      id="features"
      className="max-w-7xl mx-auto px-6 md:px-12 py-16"
    >
      {/* Heading */}
      <div className="text-center mb-16">
        <span className="feature-pill inline-flex items-center gap-1 mb-4">
          <Star size={11} className="text-indigo-400" />
          Everything you need
        </span>

        <h2
          className="text-3xl md:text-5xl font-extrabold tracking-tight"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          Four tools․ One{" "}
          <span className="text-gradient">
            career leap.
          </span>
        </h2>

        <p className="max-w-xl mx-auto mt-4 text-white/40">
          From your resume to the offer letter, we've got every
          step covered.
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 gap-6 cursor-pointer">
        {features.map(
          ({ icon: Icon, color, glow, title, desc, bullets }) => (
            <div
              key={title}
              className="
                glass-card
                group
                flex
                flex-col
                gap-5
                p-8
                border
                border-cyan-500/20
                hover:border-cyan-400/50
                
                hover:-translate-y-2
                transition-all
                duration-300
              "
            >
              {/* Icon */}
              <div
                className={`
                  w-12
                  h-12
                  rounded-xl
                  flex
                  items-center
                  justify-center
                  shadow-xl
                  bg-gradient-to-br
                  ${color}
                  ${glow}
                `}
              >
                <Icon size={20} className="text-white" />
              </div>

              {/* Content */}
              <div>
                <h3
                  className="mb-2 text-xl font-bold"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  {title}
                </h3>

                <p className="text-sm leading-relaxed text-white/45">
                  {desc}
                </p>
              </div>

              {/* Bullets */}
              <ul className="flex flex-col gap-2">
                {bullets.map((b) => (
                  <li
                    key={b}
                    className="
                      flex
                      items-center
                      gap-2
                      text-sm
                      text-white/60
                    "
                  >
                    <CheckCircle2
                      size={14}
                      className="text-emerald-400 shrink-0"
                    />

                    {b}
                  </li>
                ))}
              </ul>
            </div>
          )
        )}
      </div>
    </section>
  );
}

export default Features;