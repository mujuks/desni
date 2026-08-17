import { motion } from "framer-motion";
import { Gamepad2, Headset, Users, Trophy, Sparkles, Target } from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const features = [
  { icon: Headset, title: "Immersive Technology", description: "Experience high-quality VR gaming with advanced equipment designed to transport you into another world." },
  { icon: Gamepad2, title: "Exciting Games", description: "From action and adventure to family experiences, we offer games suitable for every type of player." },
  { icon: Users, title: "Fun For Everyone", description: "Whether you come alone, with friends, family or colleagues, DESNI VR creates unforgettable moments." },
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
      <section className="relative flex min-h-[65vh] items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-b from-[#E63946]/15 to-transparent" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 px-6 text-center"
        >
          <Sparkles size={60} className="mx-auto mb-6 text-[#E63946]" />

          <h1 className="text-5xl font-black md:text-7xl">
            About
            <span className="block bg-linear-to-r from-[#E63946] to-[#A8DADC] bg-clip-text text-transparent">
              DESNI VR
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            Bringing next-generation virtual reality entertainment
            to gamers, families and communities at Runda Mall, Nairobi.
          </p>
        </motion.div>
      </section>

      {/* Story */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img
              src="/images/about-vr.jpg"
              alt="DESNI VR Experience"
              className="rounded-3xl border border-white/10 shadow-[0_0_40px_rgba(230,57,70,0.15)]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[#E63946] font-medium">Our Story</span>

            <h2 className="mt-5 text-4xl font-black">
              Redefining
              <span className="text-[#E63946]"> Gaming Experiences</span>
            </h2>

            <p className="mt-6 leading-relaxed text-gray-400">
              DESNI VR is a virtual reality gaming destination located in
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
      <section className="bg-[#0F1923] py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/5 bg-white/[0.03] p-8">
            <Target className="text-[#E63946]" size={40} />
            <h3 className="mt-5 text-3xl font-bold">Our Mission</h3>
            <p className="mt-4 text-gray-400">
              To create accessible and exciting VR experiences that bring
              people together through technology and entertainment.
            </p>
          </div>

          <div className="rounded-3xl border border-white/5 bg-white/[0.03] p-8">
            <Sparkles className="text-[#A8DADC]" size={40} />
            <h3 className="mt-5 text-3xl font-bold">Our Vision</h3>
            <p className="mt-4 text-gray-400">
              To become a leading VR entertainment hub where people discover
              new worlds, create memories and enjoy innovative gaming.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="mb-12 text-center text-4xl font-black">Why Choose DESNI VR?</h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <motion.div
              whileHover={{ y: -10 }}
              key={feature.title}
              className="rounded-3xl border border-white/5 bg-white/[0.03] p-6"
            >
              <feature.icon size={36} className="text-[#E63946]" />
              <h3 className="mt-5 text-xl font-bold">{feature.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid gap-6 rounded-3xl border border-[#E63946]/15 bg-[#E63946]/5 p-10 text-center sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <h3 className="text-5xl font-black text-[#E63946]">{stat.number}</h3>
              <p className="mt-2 text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
