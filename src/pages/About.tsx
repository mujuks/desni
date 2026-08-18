import { motion } from "framer-motion";
import { Gamepad2, Headset, Users, Trophy, Sparkles, Target } from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const features = [
  { icon: Headset, title: "Immersive Technology", description: "Experience high-quality VR gaming with advanced equipment designed to transport you into another world." },
  { icon: Gamepad2, title: "Exciting Games", description: "From action and adventure to family experiences, we offer games suitable for every type of player." },
  { icon: Users, title: "Fun For Everyone", description: "Whether you come alone, with friends, family or colleagues, DISNE VR creates unforgettable moments." },
  { icon: Trophy, title: "Competitive Experiences", description: "Challenge your friends through tournaments, multiplayer games and exciting VR competitions." },
];

const stats = [
  { number: "1000+", label: "Players Served" },
  { number: "40+", label: "VR Games" },
  { number: "100%", label: "Fun Experience" },
  { number: "7", label: "Days Open Weekly" },
];

const About = () => {
  return (
    <div className="bg-[#0A0A0F] text-white">
      <Navbar />

      {/* Hero */}
      <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden sm:min-h-[65vh]">
        <div className="absolute inset-0 bg-linear-to-b from-[#E63946]/15 to-transparent" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 px-4 text-center sm:px-6"
        >
          <Sparkles size={40} className="mx-auto mb-4 text-[#E63946] sm:mb-6 sm:hidden" />
          <Sparkles size={60} className="mx-auto mb-6 hidden text-[#E63946] sm:block" />

          <h1 className="text-4xl font-black sm:text-5xl md:text-7xl">
            About
            <span className="block bg-linear-to-r from-[#E63946] to-[#A8DADC] bg-clip-text text-transparent">
              DISNE VR
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base text-gray-400 sm:mt-6 sm:text-lg">
            Bringing next-generation virtual reality entertainment
            to gamers, families and communities at Runda Mall, Nairobi.
          </p>
        </motion.div>
      </section>

      {/* Story */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="grid items-center gap-8 sm:gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img
              src="/images/about-vr.jpg"
              alt="DISNE VR Experience"
              className="rounded-2xl border border-white/10 shadow-[0_0_40px_rgba(230,57,70,0.15)] sm:rounded-3xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="font-medium text-[#E63946]">Our Story</span>

            <h2 className="mt-4 text-3xl font-black sm:mt-5 sm:text-4xl">
              Redefining
              <span className="text-[#E63946]"> Gaming Experiences</span>
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-gray-400 sm:mt-6 sm:text-base">
              DISNE VR is a virtual reality gaming destination located in
              Runda Mall, Nairobi, created to give players access to immersive
              worlds, exciting challenges and unforgettable entertainment experiences.
              <br /><br />
              We combine advanced VR technology, amazing games and a welcoming
              environment where everyone can experience the future of gaming.
              While the kids play, parents can unwind at our cafe with coffee,
              snacks and free WiFi.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Vision */}
      <section className="bg-[#0F1923] py-14 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 sm:gap-8 sm:px-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-6 sm:rounded-3xl sm:p-8">
            <Target className="text-[#E63946]" size={32} />
            <h3 className="mt-4 text-2xl font-bold sm:mt-5 sm:text-3xl">Our Mission</h3>
            <p className="mt-3 text-sm text-gray-400 sm:mt-4">
              To create accessible and exciting VR experiences that bring
              people together through technology and entertainment.
            </p>
          </div>

          <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-6 sm:rounded-3xl sm:p-8">
            <Sparkles className="text-[#A8DADC]" size={32} />
            <h3 className="mt-4 text-2xl font-bold sm:mt-5 sm:text-3xl">Our Vision</h3>
            <p className="mt-3 text-sm text-gray-400 sm:mt-4">
              To become a leading VR entertainment hub where people discover
              new worlds, create memories and enjoy innovative gaming.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
        <h2 className="mb-8 text-center text-3xl font-black sm:mb-12 sm:text-4xl">Why Choose DISNE VR?</h2>

        <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <motion.div
              whileHover={{ y: -10 }}
              key={feature.title}
              className="rounded-2xl border border-white/5 bg-white/[0.03] p-5 sm:rounded-3xl sm:p-6"
            >
              <feature.icon size={28} className="text-[#E63946] sm:hidden" />
              <feature.icon size={36} className="hidden text-[#E63946] sm:block" />
              <h3 className="mt-4 text-base font-bold sm:mt-5 sm:text-xl">{feature.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-gray-400 sm:mt-3 sm:text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 sm:pb-20">
        <div className="grid gap-4 rounded-2xl border border-[#E63946]/15 bg-[#E63946]/5 p-6 text-center sm:gap-6 sm:rounded-3xl sm:p-10 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <h3 className="text-4xl font-black text-[#E63946] sm:text-5xl">{stat.number}</h3>
              <p className="mt-1 text-sm text-gray-400 sm:mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
