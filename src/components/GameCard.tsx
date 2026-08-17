import { motion } from "framer-motion";
import { Users, Clock, Star, ArrowRight } from "lucide-react";

export interface GameCardProps {
  image: string;
  title: string;
  category: string;
  players: string;
  duration: string;
  difficulty: string;
}

const GameCard = ({ image, title, category, players, duration, difficulty }: GameCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.03] backdrop-blur-lg sm:rounded-3xl"
    >
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-48 w-full object-cover transition duration-500 group-hover:scale-110 sm:h-56 md:h-64"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#0A0A0F] via-transparent to-transparent" />
        <span className="absolute left-3 top-3 rounded-full bg-[#E63946] px-2.5 py-0.5 text-[10px] font-semibold text-white sm:left-4 sm:top-4 sm:px-3 sm:py-1 sm:text-xs">
          {category}
        </span>
      </div>

      <div className="space-y-3 p-4 sm:space-y-4 sm:p-5 lg:p-6">
        <h3 className="text-lg font-bold text-white transition group-hover:text-[#E63946] sm:text-xl">
          {title}
        </h3>
        <div className="space-y-1.5 text-xs text-gray-400 sm:space-y-2 sm:text-sm">
          <div className="flex items-center gap-2">
            <Users size={14} className="text-[#A8DADC] sm:hidden" />
            <Users size={16} className="hidden text-[#A8DADC] sm:block" />
            <span>{players}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={14} className="text-[#A8DADC] sm:hidden" />
            <Clock size={16} className="hidden text-[#A8DADC] sm:block" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <Star size={14} className="text-[#A8DADC] sm:hidden" />
            <Star size={16} className="hidden text-[#A8DADC] sm:block" />
            <span>{difficulty}</span>
          </div>
        </div>
        <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#E63946] py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#c62d39] sm:py-3">
          Play Now
          <ArrowRight size={16} />
        </button>
      </div>

      <div className="pointer-events-none absolute inset-0 rounded-2xl border border-transparent transition-all duration-500 group-hover:border-[#E63946]/30 group-hover:shadow-[0_0_30px_rgba(230,57,70,0.15)] sm:rounded-3xl" />
    </motion.div>
  );
};

export default GameCard;
