import { motion } from "framer-motion";
import { Gamepad2, Headset, Users, Trophy, Cpu, ShieldCheck } from "lucide-react";

const features = [
  { icon: Gamepad2, title: "40+ VR Games", description: "Choose from action, adventure, horror, sports, racing, rhythm and family-friendly experiences.", color: "#E63946" },
  { icon: Headset, title: "Premium VR Headsets", description: "Enjoy crystal-clear visuals, precise tracking and immersive audio for every session.", color: "#A8DADC" },
  { icon: Users, title: "Multiplayer Fun", description: "Play with friends, family or teammates in exciting cooperative and competitive games.", color: "#E63946" },
  { icon: Trophy, title: "Events & Tournaments", description: "Perfect for birthdays, team building, school trips and gaming competitions.", color: "#A8DADC" },
  { icon: Cpu, title: "High Performance", description: "Powered by gaming PCs designed to deliver smooth and immersive VR experiences.", color: "#E63946" },
  { icon: ShieldCheck, title: "Safe & Guided", description: "Friendly staff help every player get started and enjoy VR safely and confidently.", color: "#A8DADC" },
];

const stats = [
  { number: "1000+", label: "Happy Players" },
  { number: "40+", label: "VR Games" },
  { number: "4.9/5", label: "Average Rating" },
  { number: "7 Days", label: "Open Weekly" },
];

const Experience = () => {
  return (
    <section className="relative overflow-hidden bg-[#0F1923] py-16 text-white sm:py-20 lg:py-24">
      <div className="absolute left-0 top-20 h-[300px] w-[300px] rounded-full bg-[#E63946]/8 blur-[130px] sm:h-[350px] sm:w-[350px] sm:blur-[150px]" />
      <div className="absolute bottom-10 right-0 h-[300px] w-[300px] rounded-full bg-[#A8DADC]/8 blur-[130px] sm:h-[400px] sm:w-[400px] sm:blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-12 max-w-3xl text-center sm:mb-16"
        >
          <span className="rounded-full border border-[#E63946]/30 bg-[#E63946]/10 px-4 py-1.5 text-xs font-medium text-[#E63946] sm:px-5 sm:py-2 sm:text-sm">
            Why Choose DESNI VR?
          </span>

          <h2 className="mt-5 text-3xl font-black sm:mt-6 sm:text-4xl md:text-5xl">
            Experience Gaming Like
            <span className="bg-linear-to-r from-[#E63946] to-[#A8DADC] bg-clip-text text-transparent"> Never Before</span>
          </h2>

          <p className="mt-4 text-base leading-relaxed text-gray-400 sm:mt-6 sm:text-lg">
            Whether you're visiting with friends, family or colleagues,
            DESNI VR delivers unforgettable virtual reality adventures for
            players of every age and skill level.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
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
                className="group rounded-2xl border border-white/5 bg-white/[0.03] p-5 backdrop-blur-xl transition-all duration-500 hover:border-white/10 hover:bg-white/[0.06] sm:rounded-3xl sm:p-6 lg:p-8"
              >
                <div
                  className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl transition-all duration-300 sm:mb-6 sm:h-14 sm:w-14 sm:rounded-2xl"
                  style={{ backgroundColor: `${feature.color}15` }}
                >
                  <Icon size={22} className="sm:hidden" style={{ color: feature.color }} />
                  <Icon size={28} className="hidden sm:block" style={{ color: feature.color }} />
                </div>
                <h3 className="mb-2 text-lg font-bold sm:mb-3 sm:text-xl">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-gray-400">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 rounded-2xl border border-[#E63946]/15 bg-linear-to-r from-[#E63946]/5 to-[#A8DADC]/5 p-6 backdrop-blur-xl sm:mt-16 sm:rounded-3xl sm:p-8 lg:mt-20 lg:p-10"
        >
          <div className="grid grid-cols-2 gap-6 text-center sm:gap-8 md:grid-cols-4 lg:gap-10">
            {stats.map((stat) => (
              <div key={stat.label}>
                <h3 className="text-2xl font-black text-[#E63946] sm:text-3xl lg:text-4xl">{stat.number}</h3>
                <p className="mt-1 text-xs text-gray-400 sm:mt-2 sm:text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-12 text-center sm:mt-16 lg:mt-20"
        >
          <h3 className="text-2xl font-bold sm:text-3xl">Ready to Enter Another World?</h3>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-gray-400 sm:mt-4 sm:text-base">
            Book your session today and discover why DESNI VR is becoming one
            of Nairobi's favourite destinations for immersive entertainment.
          </p>
          <a
            href="/contact"
            className="mt-6 inline-block rounded-full bg-[#E63946] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-[#c62d39] hover:shadow-[0_0_30px_rgba(230,57,70,0.4)] sm:mt-8 sm:px-8 sm:py-4 sm:text-base"
          >
            Book Your Experience
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
