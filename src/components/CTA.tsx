import { motion } from "framer-motion";
import { ArrowRight, CalendarCheck, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="relative overflow-hidden bg-[#0A0A0F] py-16 text-white sm:py-20 lg:py-24">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E63946]/10 blur-[140px] sm:h-[500px] sm:w-[500px] sm:blur-[180px]" />
        <div className="absolute left-10 top-10 h-[200px] w-[200px] rounded-full bg-[#A8DADC]/10 blur-[100px]" />
        <div className="absolute bottom-10 right-10 h-[200px] w-[200px] rounded-full bg-[#2A9D8F]/10 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-2xl border border-[#E63946]/15 bg-white/[0.03] px-5 py-12 text-center backdrop-blur-xl sm:rounded-[40px] sm:px-8 sm:py-16 md:px-16"
        >
          {/* Rotating Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute left-1/2 top-1/2 hidden h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#E63946]/8 sm:block"
          />

          <div className="relative z-10">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#E63946]/30 bg-[#E63946]/10 px-3 py-1 text-xs font-medium text-[#E63946] sm:gap-2 sm:px-5 sm:py-2 sm:text-sm">
              <CalendarCheck size={14} className="sm:hidden" />
              <CalendarCheck size={16} className="hidden sm:block" />
              Book Your Session Today
            </span>

            <h2 className="mt-6 text-3xl font-black leading-tight sm:text-4xl md:text-6xl">
              READY TO ENTER
              <br />
              <span className="bg-linear-to-r from-[#E63946] to-[#A8DADC] bg-clip-text text-transparent">
                ANOTHER WORLD?
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-gray-300 sm:mt-6 sm:text-lg">
              Experience the next generation of entertainment at DESNI VR.
              Bring your friends, challenge yourself, and create unforgettable
              memories inside virtual reality.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:mt-10 sm:flex-row sm:gap-5">
              <Link
                to="/contact"
                className="flex items-center justify-center gap-2 rounded-full bg-[#E63946] px-6 py-3.5 font-bold text-white transition-all duration-300 hover:scale-105 hover:bg-[#c62d39] hover:shadow-[0_0_30px_rgba(230,57,70,0.4)] sm:px-8 sm:py-4"
              >
                Book Now
                <ArrowRight size={18} />
              </Link>

              <Link
                to="/contact"
                className="flex items-center justify-center gap-2 rounded-full border-2 border-[#A8DADC]/30 px-6 py-3.5 font-bold text-[#A8DADC] transition-all duration-300 hover:bg-[#A8DADC]/10 hover:border-[#A8DADC] sm:px-8 sm:py-4"
              >
                <MessageCircle size={18} />
                Contact Us
              </Link>
            </div>

            {/* Mini Features */}
            <div className="mt-10 grid gap-4 sm:mt-14 sm:gap-5 md:grid-cols-3">
              <div className="rounded-xl border border-white/5 bg-white/[0.03] p-4 sm:rounded-2xl sm:p-5">
                <h3 className="text-base font-bold text-[#E63946] sm:text-lg">40+ Games</h3>
                <p className="mt-1.5 text-xs text-gray-400 sm:mt-2 sm:text-sm">Endless worlds to explore.</p>
              </div>

              <div className="rounded-xl border border-white/5 bg-white/[0.03] p-4 sm:rounded-2xl sm:p-5">
                <h3 className="text-base font-bold text-[#A8DADC] sm:text-lg">Premium VR</h3>
                <p className="mt-1.5 text-xs text-gray-400 sm:mt-2 sm:text-sm">Immersive gaming technology.</p>
              </div>

              <div className="rounded-xl border border-white/5 bg-white/[0.03] p-4 sm:rounded-2xl sm:p-5">
                <h3 className="text-base font-bold text-[#2A9D8F] sm:text-lg">Parents Cafe</h3>
                <p className="mt-1.5 text-xs text-gray-400 sm:mt-2 sm:text-sm">Relax while kids play.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
