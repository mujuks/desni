import { motion } from "framer-motion";
import { ArrowRight, Play, Users, Gamepad2, MapPin, Star, ChevronRight, Headset } from "lucide-react";
import { Link } from "react-router-dom";

const ease = [0.25, 0.46, 0.45, 0.94] as [number, number, number, number];

const wordVariants = {
  hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      delay: 0.3 + i * 0.15,
      ease,
    },
  }),
};

const statVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      delay: 1.2 + i * 0.15,
      ease,
    },
  }),
};

const stats = [
  { value: "40+", label: "VR Games", icon: Gamepad2, color: "#E63946" },
  { value: "1000+", label: "Happy Players", icon: Users, color: "#A8DADC" },
  { value: "4.9", label: "Star Rating", icon: Star, color: "#2A9D8F" },
];

const Hero = () => {
  return (
    <section className="relative min-h-[100dvh] overflow-hidden bg-[#0A0A0F] text-white">
      {/* Animated Gradient Mesh Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ x: [0, 30, -20, 0], y: [0, -20, 30, 0], scale: [1, 1.1, 0.95, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-20 -top-20 h-[400px] w-[400px] rounded-full bg-[#E63946]/12 blur-[150px] sm:h-[600px] sm:w-[600px] sm:blur-[180px]"
        />
        <motion.div
          animate={{ x: [0, -40, 20, 0], y: [0, 30, -25, 0], scale: [1, 0.9, 1.1, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-20 top-1/4 h-[300px] w-[300px] rounded-full bg-[#A8DADC]/10 blur-[150px] sm:h-[500px] sm:w-[500px] sm:blur-[180px]"
        />
        <motion.div
          animate={{ x: [0, 25, -30, 0], y: [0, -35, 15, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 left-1/3 h-[250px] w-[250px] rounded-full bg-[#2A9D8F]/8 blur-[130px] sm:h-[400px] sm:w-[400px] sm:blur-[180px]"
        />
      </div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(rgba(230,57,70,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(230,57,70,0.5) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Floating Particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          animate={{ y: [0, -30, 0], opacity: [0.1, 0.4, 0.1] }}
          transition={{ duration: 4 + i * 0.8, repeat: Infinity, delay: i * 0.5, ease: "easeInOut" }}
          className="absolute rounded-full bg-[#E63946]/30"
          style={{ width: 3 + i * 1.5, height: 3 + i * 1.5, left: `${15 + i * 14}%`, top: `${20 + (i % 3) * 25}%` }}
        />
      ))}

      {/* Horizontal Accent Line */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.8, ease }}
        className="absolute left-0 top-1/2 hidden h-px w-full origin-left bg-linear-to-r from-transparent via-[#E63946]/20 to-transparent lg:block"
      />

      <div className="relative mx-auto flex min-h-[100dvh] max-w-7xl flex-col items-center gap-8 px-4 pt-28 pb-12 sm:px-6 sm:pt-32 sm:pb-16 lg:flex-row lg:items-center lg:gap-10 lg:pt-32 lg:pb-20">
        {/* Left Content */}
        <div className="max-w-2xl lg:w-1/2">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="mb-6 sm:mb-8"
          >
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#E63946]/25 bg-[#E63946]/8 px-1 py-1 pr-4 backdrop-blur-sm sm:gap-2 sm:pr-5">
              <span className="rounded-full bg-[#E63946] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white sm:px-4 sm:py-1.5 sm:text-xs">
                Now Open
              </span>
              <MapPin size={12} className="text-[#E63946] sm:hidden" />
              <MapPin size={14} className="hidden text-[#E63946] sm:block" />
              <span className="text-xs font-medium text-gray-300 sm:text-sm">Runda Mall, Nairobi</span>
            </span>
          </motion.div>

          {/* Headline */}
          <h1 className="text-4xl font-black leading-[1.05] tracking-tight sm:text-[3.2rem] md:text-5xl lg:text-[5rem] xl:text-[5.5rem]">
            <motion.span custom={0} variants={wordVariants} initial="hidden" animate="visible" className="block">
              STEP INTO
            </motion.span>
            <motion.span custom={1} variants={wordVariants} initial="hidden" animate="visible" className="block">
              <span className="bg-linear-to-r from-[#E63946] via-[#A8DADC] to-[#2A9D8F] bg-clip-text text-transparent">
                THE FUTURE
              </span>
            </motion.span>
            <motion.span custom={2} variants={wordVariants} initial="hidden" animate="visible" className="block">
              OF GAMING
            </motion.span>
          </h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="mt-5 max-w-lg text-base leading-relaxed text-gray-400 sm:mt-7 sm:text-lg"
          >
            Explore incredible virtual worlds, challenge your friends,
            and experience immersive VR adventures at Nairobi's premier
            virtual reality destination.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.05 }}
            className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4"
          >
            <Link
              to="/contact"
              className="group relative flex items-center justify-center overflow-hidden rounded-full bg-[#E63946] px-6 py-3.5 font-bold text-white shadow-[0_0_30px_rgba(230,57,70,0.3)] transition-all duration-500 hover:shadow-[0_0_50px_rgba(230,57,70,0.5)] sm:px-8 sm:py-4"
            >
              <span className="relative z-10 flex items-center gap-2">
                Book Your Session
                <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
              </span>
              <span className="absolute inset-0 bg-linear-to-r from-[#c62d39] to-[#E63946] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </Link>

            <Link
              to="/games"
              className="group flex items-center justify-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3.5 font-semibold text-gray-300 backdrop-blur-sm transition-all duration-500 hover:border-white/20 hover:bg-white/[0.06] hover:text-white sm:px-7 sm:py-4"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E63946]/15 transition-all duration-300 group-hover:bg-[#E63946]/25 sm:h-10 sm:w-10">
                <Play size={14} className="ml-0.5 text-[#E63946] sm:ml-0.5 sm:text-[16px]" />
              </span>
              Watch How It Works
              <ChevronRight size={14} className="hidden opacity-50 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100 sm:block" />
            </Link>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="mt-10 flex items-center gap-4 sm:mt-16 sm:gap-6 lg:gap-8"
          >
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  custom={i}
                  variants={statVariants}
                  initial="hidden"
                  animate="visible"
                  className="group flex items-center gap-2 sm:gap-3"
                >
                  <div
                    className="flex h-9 w-9 items-center justify-center rounded-lg transition-all duration-300 group-hover:scale-110 sm:h-12 sm:w-12 sm:rounded-xl"
                    style={{ backgroundColor: `${stat.color}12` }}
                  >
                    <Icon size={16} className="sm:hidden" style={{ color: stat.color }} />
                    <Icon size={20} className="hidden sm:block" style={{ color: stat.color }} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold sm:text-xl">{stat.value}</h3>
                    <p className="text-[10px] font-medium uppercase tracking-wider text-gray-500 sm:text-xs">{stat.label}</p>
                  </div>
                  {i < stats.length - 1 && (
                    <div className="ml-2 h-6 w-px bg-white/10 sm:ml-4 sm:h-8" />
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Right Visual Area */}
        <motion.div
          className="relative flex flex-1 items-center justify-center lg:w-1/2"
          initial={{ opacity: 0, scale: 0.9, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4, ease }}
        >
          {/* Rotating Outer Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute hidden h-[300px] w-[300px] rounded-full border border-dashed border-[#E63946]/10 sm:block sm:h-[400px] sm:w-[400px] lg:h-[500px] lg:w-[500px]"
          />

          {/* Pulsing Ring */}
          <motion.div
            animate={{ scale: [1, 1.05, 1], opacity: [0.15, 0.25, 0.15] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute h-[260px] w-[260px] rounded-full border-2 border-[#E63946]/15 sm:h-[350px] sm:w-[350px] lg:h-[420px] lg:w-[420px]"
          />

          {/* Inner Ring */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute hidden h-[220px] w-[220px] rounded-full border border-[#A8DADC]/8 sm:block sm:h-[280px] sm:w-[280px] lg:h-[340px] lg:w-[340px]"
          />

          {/* Central Glow */}
          <div className="absolute h-[180px] w-[180px] rounded-full bg-[#E63946]/10 blur-[60px] sm:h-[250px] sm:w-[250px] sm:blur-[80px] lg:h-[280px] lg:w-[280px]" />

          {/* Hero Image */}
          <motion.img
            src="/vrHome.jpg"
            alt="VR Player at DESNI VR - Runda Mall Nairobi"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10 w-full max-w-[280px] drop-shadow-[0_0_50px_rgba(230,57,70,0.2)] sm:max-w-sm md:max-w-md lg:max-w-md"
          />

          {/* Floating Card - Top Left */}
          <motion.div
            animate={{ y: [0, -10, 0], rotate: [0, 1, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-2 top-4 z-20 overflow-hidden rounded-xl border border-white/10 bg-[#0A0A0F]/80 p-2.5 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] sm:-left-4 sm:top-8 sm:rounded-2xl sm:p-4"
          >
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#E63946]/15 sm:h-10 sm:w-10 sm:rounded-xl">
                <Headset size={14} className="text-[#E63946] sm:hidden" />
                <Headset size={18} className="hidden text-[#E63946] sm:block" />
              </div>
              <div>
                <p className="text-xs font-bold text-white sm:text-sm">Premium VR</p>
                <p className="text-[10px] text-gray-500">4K Headsets</p>
              </div>
            </div>
          </motion.div>

          {/* Floating Card - Right */}
          <motion.div
            animate={{ y: [0, 10, 0], rotate: [0, -1, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute -right-1 top-1/3 z-20 overflow-hidden rounded-xl border border-white/10 bg-[#0A0A0F]/80 p-2.5 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] sm:-right-2 sm:rounded-2xl sm:p-4"
          >
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#A8DADC]/15 sm:h-10 sm:w-10 sm:rounded-xl">
                <Gamepad2 size={14} className="text-[#A8DADC] sm:hidden" />
                <Gamepad2 size={18} className="hidden text-[#A8DADC] sm:block" />
              </div>
              <div>
                <p className="text-xs font-bold text-white sm:text-sm">40+ Games</p>
                <p className="text-[10px] text-gray-500">All Categories</p>
              </div>
            </div>
          </motion.div>

          {/* Floating Card - Bottom Left */}
          <motion.div
            animate={{ y: [0, -8, 0], rotate: [0, 0.5, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -left-2 bottom-12 z-20 overflow-hidden rounded-xl border border-white/10 bg-[#0A0A0F]/80 p-2.5 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] sm:-left-4 sm:bottom-16 sm:rounded-2xl sm:p-4"
          >
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#2A9D8F]/15 sm:h-10 sm:w-10 sm:rounded-xl">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2A9D8F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sm:hidden">
                  <path d="M18 8h1a4 4 0 0 1 0 8h-1" /><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" /><line x1="6" y1="1" x2="6" y2="4" /><line x1="10" y1="1" x2="10" y2="4" /><line x1="14" y1="1" x2="14" y2="4" />
                </svg>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2A9D8F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="hidden sm:block">
                  <path d="M18 8h1a4 4 0 0 1 0 8h-1" /><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" /><line x1="6" y1="1" x2="6" y2="4" /><line x1="10" y1="1" x2="10" y2="4" /><line x1="14" y1="1" x2="14" y2="4" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-bold text-white sm:text-sm">Parents Cafe</p>
                <p className="text-[10px] text-gray-500">Coffee & Snacks</p>
              </div>
            </div>
          </motion.div>

          {/* Floating Card - Bottom Right */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
            className="absolute -right-1 bottom-6 z-20 overflow-hidden rounded-xl border border-[#2A9D8F]/20 bg-[#0A0A0F]/80 p-2 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] sm:-right-4 sm:bottom-8 sm:rounded-2xl sm:p-3"
          >
            <div className="flex items-center gap-1.5 sm:gap-2">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={10} className="fill-[#2A9D8F] text-[#2A9D8F] sm:hidden" />
                ))}
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={12} className="hidden fill-[#2A9D8F] text-[#2A9D8F] sm:block" />
                ))}
              </div>
              <span className="text-[10px] font-bold text-[#2A9D8F] sm:text-xs">4.9/5</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 sm:bottom-8"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[10px] font-medium uppercase tracking-widest text-gray-600 sm:text-xs">Scroll to explore</span>
          <div className="h-8 w-5 rounded-full border-2 border-gray-700 p-1 sm:h-10 sm:w-6">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="mx-auto h-1.5 w-1 rounded-full bg-[#E63946] sm:h-2 sm:w-1.5"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
