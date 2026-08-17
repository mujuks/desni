import { motion } from "framer-motion";
import {
  Gamepad2,
  Headset,
  Users,
  Trophy,
  Cpu,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    icon: Gamepad2,
    title: "40+ VR Games",
    description:
      "Choose from action, adventure, horror, sports, racing, rhythm and family-friendly experiences.",
    color: "#E63946",
  },
  {
    icon: Headset,
    title: "Premium VR Headsets",
    description:
      "Enjoy crystal-clear visuals, precise tracking and immersive audio for every session.",
    color: "#A8DADC",
  },
  {
    icon: Users,
    title: "Multiplayer Fun",
    description:
      "Play with friends, family or teammates in exciting cooperative and competitive games.",
    color: "#E63946",
  },
  {
    icon: Trophy,
    title: "Events & Tournaments",
    description:
      "Perfect for birthdays, team building, school trips and gaming competitions.",
    color: "#A8DADC",
  },
  {
    icon: Cpu,
    title: "High Performance",
    description:
      "Powered by gaming PCs designed to deliver smooth and immersive VR experiences.",
    color: "#E63946",
  },
  {
    icon: ShieldCheck,
    title: "Safe & Guided",
    description:
      "Friendly staff help every player get started and enjoy VR safely and confidently.",
    color: "#A8DADC",
  },
];

const stats = [
  { number: "1000+", label: "Happy Players" },
  { number: "40+", label: "VR Games" },
  { number: "4.9/5", label: "Average Rating" },
  { number: "7 Days", label: "Open Weekly" },
];

const Experience = () => {
  return (
    <section className="relative overflow-hidden bg-[#0F1923] py-24 text-white">
      {/* Background Effects */}
      <div className="absolute left-0 top-20 h-[350px] w-[350px] rounded-full bg-[#E63946]/8 blur-[150px]" />
      <div className="absolute right-0 bottom-10 h-[400px] w-[400px] rounded-full bg-[#A8DADC]/8 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="rounded-full border border-[#E63946]/30 bg-[#E63946]/10 px-5 py-2 text-sm font-medium text-[#E63946]">
            Why Choose DESNI VR?
          </span>

          <h2 className="mt-6 text-4xl font-black md:text-5xl">
            Experience Gaming Like
            <span className="bg-linear-to-r from-[#E63946] to-[#A8DADC] bg-clip-text text-transparent">
              {" "}Never Before
            </span>
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-gray-400">
            Whether you're visiting with friends, family or colleagues,
            DESNI VR delivers unforgettable virtual reality adventures for
            players of every age and skill level.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group rounded-3xl border border-white/5 bg-white/[0.03] p-8 backdrop-blur-xl transition-all duration-500 hover:border-white/10 hover:bg-white/[0.06]"
                style={{
                  boxShadow: `0 0 0 rgba(0,0,0,0)`,
                }}
              >
                <div
                  className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl transition-all duration-300"
                  style={{ backgroundColor: `${feature.color}15` }}
                >
                  <Icon size={28} style={{ color: feature.color }} />
                </div>

                <h3 className="mb-3 text-xl font-bold">{feature.title}</h3>

                <p className="leading-relaxed text-gray-400">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-20 rounded-3xl border border-[#E63946]/15 bg-linear-to-r from-[#E63946]/5 to-[#A8DADC]/5 p-10 backdrop-blur-xl"
        >
          <div className="grid gap-10 text-center sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <h3 className="text-4xl font-black text-[#E63946]">
                  {stat.number}
                </h3>
                <p className="mt-2 text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-20 text-center"
        >
          <h3 className="text-3xl font-bold">Ready to Enter Another World?</h3>

          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            Book your session today and discover why DESNI VR is becoming one
            of Nairobi's favourite destinations for immersive entertainment.
          </p>

          <a
            href="/contact"
            className="mt-8 inline-block rounded-full bg-[#E63946] px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-[#c62d39] hover:shadow-[0_0_30px_rgba(230,57,70,0.4)]"
          >
            Book Your Experience
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
