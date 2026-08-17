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

const GameCard = ({
  image,
  title,
  category,
  players,
  duration,
  difficulty,
}: GameCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className="group relative overflow-hidden rounded-3xl border border-white/5 bg-white/[0.03] backdrop-blur-lg"
    >
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-64 w-full object-cover transition duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-linear-to-t from-[#0A0A0F] via-transparent to-transparent" />

        <span className="absolute left-4 top-4 rounded-full bg-[#E63946] px-3 py-1 text-xs font-semibold text-white">
          {category}
        </span>
      </div>

      {/* Content */}
      <div className="space-y-4 p-6">
        <h3 className="text-xl font-bold text-white transition group-hover:text-[#E63946]">
          {title}
        </h3>

        <div className="space-y-2 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <Users size={16} className="text-[#A8DADC]" />
            <span>{players}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={16} className="text-[#A8DADC]" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <Star size={16} className="text-[#A8DADC]" />
            <span>{difficulty}</span>
          </div>
        </div>

        <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#E63946] py-3 font-semibold text-white transition-all duration-300 hover:bg-[#c62d39]">
          Play Now
          <ArrowRight size={18} />
        </button>
      </div>

      {/* Hover Border */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl border border-transparent transition-all duration-500 group-hover:border-[#E63946]/30 group-hover:shadow-[0_0_30px_rgba(230,57,70,0.15)]" />
    </motion.div>
  );
};

export default GameCard;
