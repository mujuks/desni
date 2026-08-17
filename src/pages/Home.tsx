import { motion } from "framer-motion";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Experience from "../components/Experience";
import Pricing from "../components/Pricing";
import Gallery from "../components/Gallery";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import GameCard from "../components/GameCard";
import { Coffee, Wifi, Music } from "lucide-react";

const games = [
  {
    image: "/images/games/beatsaber.jpg",
    title: "Beat Saber",
    category: "Music",
    players: "1-2 Players",
    duration: "20 Minutes",
    difficulty: "Easy",
  },
  {
    image: "/images/games/superhot.jpg",
    title: "SUPERHOT VR",
    category: "Action",
    players: "1 Player",
    duration: "30 Minutes",
    difficulty: "Medium",
  },
  {
    image: "/images/games/half-life.jpg",
    title: "Half-Life: Alyx",
    category: "Adventure",
    players: "1 Player",
    duration: "45 Minutes",
    difficulty: "Hard",
  },
];

const Home = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-[#0A0A0F]"
    >
      <Navbar />
      <Hero />
      <Experience />

      {/* Featured Games */}
      <section className="bg-[#0A0A0F] py-16 text-white sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto mb-10 max-w-3xl text-center sm:mb-14"
          >
            <span className="rounded-full border border-[#E63946]/30 bg-[#E63946]/10 px-4 py-1.5 text-xs font-medium text-[#E63946] sm:px-5 sm:py-2 sm:text-sm">
              Featured Games
            </span>

            <h2 className="mt-5 text-3xl font-black sm:mt-6 sm:text-4xl md:text-5xl">
              Explore Our
              <span className="bg-linear-to-r from-[#E63946] to-[#A8DADC] bg-clip-text text-transparent">
                {" "}VR Worlds
              </span>
            </h2>

            <p className="mt-4 text-base text-gray-400 sm:mt-6 sm:text-lg">
              From action-packed battles to relaxing adventures,
              discover exciting virtual reality games for everyone.
            </p>
          </motion.div>

          <div className="grid gap-5 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {games.map((game) => (
              <GameCard key={game.title} {...game} />
            ))}
          </div>
        </div>
      </section>

      {/* Cafe Section */}
      <section className="relative overflow-hidden bg-[#0F1923] py-16 text-white sm:py-20 lg:py-24">
        <div className="absolute left-0 top-0 h-[300px] w-[300px] rounded-full bg-[#2A9D8F]/10 blur-[150px]" />
        <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-[#E63946]/8 blur-[150px]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid items-center gap-8 sm:gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="rounded-full border border-[#2A9D8F]/30 bg-[#2A9D8F]/10 px-4 py-1.5 text-xs font-medium text-[#2A9D8F] sm:px-5 sm:py-2 sm:text-sm">
                Parents Cafe
              </span>

              <h2 className="mt-5 text-3xl font-black sm:mt-6 sm:text-4xl md:text-5xl">
                Relax While They
                <span className="bg-linear-to-r from-[#2A9D8F] to-[#A8DADC] bg-clip-text text-transparent">
                  {" "}Play & Explore
                </span>
              </h2>

              <p className="mt-4 text-base leading-relaxed text-gray-400 sm:mt-6 sm:text-lg">
                While your children dive into exciting VR adventures, unwind at our
                fully-equipped cafe. Enjoy freshly brewed coffee, delicious snacks,
                and light meals in a comfortable, modern setting with free WiFi.
              </p>

              <div className="mt-6 grid grid-cols-3 gap-3 sm:mt-8 sm:gap-6">
                <div className="rounded-xl border border-[#2A9D8F]/20 bg-[#2A9D8F]/5 p-3 text-center sm:rounded-2xl sm:p-4">
                  <Coffee className="mx-auto mb-1.5 text-[#2A9D8F] sm:hidden" size={22} />
                  <Coffee className="mx-auto mb-2 hidden text-[#2A9D8F] sm:block" size={28} />
                  <p className="text-[10px] font-semibold text-[#2A9D8F] sm:text-sm">Fresh Coffee</p>
                </div>
                <div className="rounded-xl border border-[#A8DADC]/20 bg-[#A8DADC]/5 p-3 text-center sm:rounded-2xl sm:p-4">
                  <Music className="mx-auto mb-1.5 text-[#A8DADC] sm:hidden" size={22} />
                  <Music className="mx-auto mb-2 hidden text-[#A8DADC] sm:block" size={28} />
                  <p className="text-[10px] font-semibold text-[#A8DADC] sm:text-sm">Live Music</p>
                </div>
                <div className="rounded-xl border border-[#E63946]/20 bg-[#E63946]/5 p-3 text-center sm:rounded-2xl sm:p-4">
                  <Wifi className="mx-auto mb-1.5 text-[#E63946] sm:hidden" size={22} />
                  <Wifi className="mx-auto mb-2 hidden text-[#E63946] sm:block" size={28} />
                  <p className="text-[10px] font-semibold text-[#E63946] sm:text-sm">Free WiFi</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="rounded-2xl border border-[#2A9D8F]/20 bg-gradient-to-br from-[#2A9D8F]/10 to-[#A8DADC]/5 p-5 backdrop-blur-xl sm:rounded-3xl sm:p-8 lg:p-10">
                <div className="space-y-3 sm:space-y-6">
                  <div className="flex items-start gap-3 rounded-xl bg-white/5 p-3.5 sm:gap-4 sm:rounded-2xl sm:p-5">
                    <div className="rounded-lg bg-[#2A9D8F]/15 p-2 sm:rounded-xl sm:p-3">
                      <Coffee size={18} className="text-[#2A9D8F] sm:hidden" />
                      <Coffee size={24} className="hidden text-[#2A9D8F] sm:block" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold sm:text-base">Artisan Coffee & Tea</h4>
                      <p className="mt-0.5 text-xs text-gray-400 sm:mt-0.5 sm:text-sm">Premium blends and specialty teas served all day</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 rounded-xl bg-white/5 p-3.5 sm:gap-4 sm:rounded-2xl sm:p-5">
                    <div className="rounded-lg bg-[#E63946]/15 p-2 sm:rounded-xl sm:p-3">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E63946" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sm:hidden">
                        <path d="M18 8h1a4 4 0 0 1 0 8h-1" /><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
                        <line x1="6" y1="1" x2="6" y2="4" /><line x1="10" y1="1" x2="10" y2="4" /><line x1="14" y1="1" x2="14" y2="4" />
                      </svg>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#E63946" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="hidden sm:block">
                        <path d="M18 8h1a4 4 0 0 1 0 8h-1" /><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
                        <line x1="6" y1="1" x2="6" y2="4" /><line x1="10" y1="1" x2="10" y2="4" /><line x1="14" y1="1" x2="14" y2="4" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold sm:text-base">Fresh Snacks & Meals</h4>
                      <p className="mt-0.5 text-xs text-gray-400 sm:mt-0.5 sm:text-sm">Light bites, pastries, and full meals available</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 rounded-xl bg-white/5 p-3.5 sm:gap-4 sm:rounded-2xl sm:p-5">
                    <div className="rounded-lg bg-[#A8DADC]/15 p-2 sm:rounded-xl sm:p-3">
                      <Wifi size={18} className="text-[#A8DADC] sm:hidden" />
                      <Wifi size={24} className="hidden text-[#A8DADC] sm:block" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold sm:text-base">Free High-Speed WiFi</h4>
                      <p className="mt-0.5 text-xs text-gray-400 sm:mt-0.5 sm:text-sm">Stay connected while you wait</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Pricing />
      <Gallery />
      <CTA />
      <Footer />
    </motion.main>
  );
};

export default Home;
