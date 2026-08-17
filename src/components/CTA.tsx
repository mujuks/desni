import { motion } from "framer-motion";
import { ArrowRight, CalendarCheck, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="relative overflow-hidden bg-[#0A0A0F] py-24 text-white">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E63946]/10 blur-[180px]" />
        <div className="absolute left-10 top-10 h-[200px] w-[200px] rounded-full bg-[#A8DADC]/10 blur-[100px]" />
        <div className="absolute bottom-10 right-10 h-[200px] w-[200px] rounded-full bg-[#2A9D8F]/10 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[40px] border border-[#E63946]/15 bg-white/[0.03] px-6 py-16 text-center backdrop-blur-xl md:px-16"
        >
          {/* Rotating Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#E63946]/8"
          />

          <div className="relative z-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#E63946]/30 bg-[#E63946]/10 px-5 py-2 text-sm font-medium text-[#E63946]">
              <CalendarCheck size={16} />
              Book Your Session Today
            </span>

            <h2 className="mt-8 text-4xl font-black leading-tight md:text-6xl">
              READY TO ENTER
              <br />
              <span className="bg-linear-to-r from-[#E63946] to-[#A8DADC] bg-clip-text text-transparent">
                ANOTHER WORLD?
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-300">
              Experience the next generation of entertainment at DESNI VR.
              Bring your friends, challenge yourself, and create unforgettable
              memories inside virtual reality.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-5">
              <Link
                to="/contact"
                className="flex items-center gap-2 rounded-full bg-[#E63946] px-8 py-4 font-bold text-white transition-all duration-300 hover:scale-105 hover:bg-[#c62d39] hover:shadow-[0_0_30px_rgba(230,57,70,0.4)]"
              >
                Book Now
                <ArrowRight size={20} />
              </Link>

              <Link
                to="/contact"
                className="flex items-center gap-2 rounded-full border-2 border-[#A8DADC]/30 px-8 py-4 font-bold text-[#A8DADC] transition-all duration-300 hover:bg-[#A8DADC]/10 hover:border-[#A8DADC]"
              >
                <MessageCircle size={20} />
                Contact Us
              </Link>
            </div>

            {/* Mini Features */}
            <div className="mt-14 grid gap-5 md:grid-cols-3">
              <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-5">
                <h3 className="text-lg font-bold text-[#E63946]">40+ Games</h3>
                <p className="mt-2 text-sm text-gray-400">Endless worlds to explore.</p>
              </div>

              <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-5">
                <h3 className="text-lg font-bold text-[#A8DADC]">Premium VR</h3>
                <p className="mt-2 text-sm text-gray-400">Immersive gaming technology.</p>
              </div>

              <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-5">
                <h3 className="text-lg font-bold text-[#2A9D8F]">Parents Cafe</h3>
                <p className="mt-2 text-sm text-gray-400">Relax while kids play.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
