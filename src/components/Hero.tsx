import { motion } from "framer-motion";
import { ArrowRight, PlayCircle, Users, Gamepad2, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0A0A0F] text-white">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute left-10 top-20 h-[400px] w-[400px] rounded-full bg-[#E63946]/15 blur-[150px]" />
        <div className="absolute right-20 top-40 h-[350px] w-[350px] rounded-full bg-[#A8DADC]/15 blur-[150px]" />
        <div className="absolute bottom-20 left-1/3 h-[300px] w-[300px] rounded-full bg-[#2A9D8F]/10 blur-[150px]" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(230,57,70,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(230,57,70,0.03)_1px,transparent_1px)] bg-size-[60px_60px]" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-between gap-16 px-6 pt-32 lg:flex-row">
        {/* Left Content */}
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#E63946]/30 bg-[#E63946]/10 px-5 py-2 text-sm font-medium text-[#E63946]">
            <MapPin size={14} />
            Located at Runda Mall, Nairobi
          </span>

          <h1 className="text-5xl font-black leading-[1.1] md:text-7xl">
            STEP INTO
            <br />
            <span className="bg-linear-to-r from-[#E63946] via-[#A8DADC] to-[#2A9D8F] bg-clip-text text-transparent">
              THE FUTURE
            </span>
            <br />
            OF GAMING
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-gray-400">
            Explore incredible virtual worlds, challenge your friends,
            and experience immersive VR adventures at Nairobi's premier
            virtual reality destination. Parents relax at our cafe while
            kids play!
          </p>

          <div className="mt-10 flex flex-wrap gap-5">
            <Link
              to="/contact"
              className="flex items-center gap-2 rounded-full bg-[#E63946] px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-[#c62d39] hover:shadow-[0_0_30px_rgba(230,57,70,0.4)]"
            >
              Book Now
              <ArrowRight size={20} />
            </Link>

            <Link
              to="/games"
              className="flex items-center gap-2 rounded-full border-2 border-[#A8DADC]/30 px-8 py-4 font-semibold text-[#A8DADC] transition-all duration-300 hover:border-[#A8DADC] hover:bg-[#A8DADC]/10"
            >
              <PlayCircle size={22} />
              View Games
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8">
            <div>
              <Gamepad2 className="mb-3 text-[#E63946]" size={28} />
              <h2 className="text-3xl font-bold">40+</h2>
              <p className="text-gray-500">VR Games</p>
            </div>
            <div>
              <Users className="mb-3 text-[#A8DADC]" size={28} />
              <h2 className="text-3xl font-bold">1000+</h2>
              <p className="text-gray-500">Happy Players</p>
            </div>
            <div>
              <svg className="mb-3 text-[#2A9D8F]" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <h2 className="text-3xl font-bold">4.9<span className="text-lg">/5</span></h2>
              <p className="text-gray-500">Top Rated</p>
            </div>
          </div>
        </motion.div>

        {/* Right Image Area */}
        <motion.div
          className="relative flex flex-1 items-center justify-center"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Glow Rings */}
          <div className="absolute h-[420px] w-[420px] rounded-full border border-[#E63946]/15" />
          <div className="absolute h-[340px] w-[340px] rounded-full border border-[#A8DADC]/10" />

          <motion.img
            src="/images/hero-vr.png"
            alt="VR Player at DESNI VR"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10 w-full max-w-lg drop-shadow-[0_0_60px_rgba(230,57,70,0.3)]"
          />

          {/* Floating Cards */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute left-0 top-20 rounded-2xl border border-[#A8DADC]/20 bg-[#0A0A0F]/80 p-4 backdrop-blur-lg"
          >
            <div className="flex items-center gap-2 text-sm font-medium text-[#A8DADC]">
              <Gamepad2 size={18} />
              Multiplayer
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 3.5, repeat: Infinity }}
            className="absolute bottom-10 right-0 rounded-2xl border border-[#2A9D8F]/20 bg-[#0A0A0F]/80 p-4 backdrop-blur-lg"
          >
            <div className="flex items-center gap-2 text-sm font-medium text-[#2A9D8F]">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
                <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
                <line x1="6" y1="1" x2="6" y2="4" />
                <line x1="10" y1="1" x2="10" y2="4" />
                <line x1="14" y1="1" x2="14" y2="4" />
              </svg>
              Parents Cafe
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
