import { motion } from "framer-motion";
import { Search, Gamepad2 } from "lucide-react";
import { useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GameCard from "../components/GameCard";

const allGames = [
  { image: "/images/games/beatsaber.jpg", title: "Beat Saber", category: "Music", players: "1-2 Players", duration: "20 Minutes", difficulty: "Easy" },
  { image: "/images/games/superhot.jpg", title: "SUPERHOT VR", category: "Action", players: "1 Player", duration: "30 Minutes", difficulty: "Medium" },
  { image: "/images/games/half-life.jpg", title: "Half-Life: Alyx", category: "Adventure", players: "1 Player", duration: "45 Minutes", difficulty: "Hard" },
  { image: "/images/games/arizona.jpg", title: "Arizona Sunshine", category: "Horror", players: "1-4 Players", duration: "40 Minutes", difficulty: "Medium" },
  { image: "/images/games/pistol-whip.jpg", title: "Pistol Whip", category: "Action", players: "1 Player", duration: "25 Minutes", difficulty: "Medium" },
  { image: "/images/games/job-simulator.jpg", title: "Job Simulator", category: "Family", players: "1 Player", duration: "20 Minutes", difficulty: "Easy" },
  { image: "/images/games/blade.jpg", title: "Blade & Sorcery", category: "Adventure", players: "1 Player", duration: "35 Minutes", difficulty: "Hard" },
  { image: "/images/games/plank.jpg", title: "Richie's Plank Experience", category: "Experience", players: "1 Player", duration: "15 Minutes", difficulty: "Easy" },
];

const categories = ["All", "Action", "Adventure", "Horror", "Music", "Family", "Experience"];

const Games = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filteredGames = allGames.filter((game) => {
    const categoryMatch = selectedCategory === "All" || game.category === selectedCategory;
    const searchMatch = game.title.toLowerCase().includes(search.toLowerCase());
    return categoryMatch && searchMatch;
  });

  return (
    <div className="bg-[#0A0A0F] text-white">
      <Navbar />

      {/* Hero Header */}
      <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden sm:min-h-[60vh]">
        <div className="absolute inset-0 bg-linear-to-b from-[#E63946]/15 to-transparent" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 px-4 text-center sm:px-6"
        >
          <Gamepad2 size={40} className="mx-auto mb-4 text-[#E63946] sm:mb-6 sm:hidden" />
          <Gamepad2 size={60} className="mx-auto mb-6 hidden text-[#E63946] sm:block" />

          <h1 className="text-4xl font-black sm:text-5xl md:text-7xl">
            Explore Our
            <span className="block bg-linear-to-r from-[#E63946] to-[#A8DADC] bg-clip-text text-transparent">
              VR Games
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base text-gray-400 sm:mt-6 sm:text-lg">
            Choose from exciting adventures, competitive battles and immersive
            experiences designed for every gamer.
          </p>
        </motion.div>
      </section>

      {/* Games Section */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 sm:pb-24">
        {/* Search */}
        <div className="mb-6 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-center sm:justify-between sm:gap-5">
          <div className="flex w-full items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 sm:w-auto sm:max-w-xs sm:gap-3 sm:px-5 sm:py-3">
            <Search size={18} className="text-[#E63946] sm:hidden" />
            <Search size={20} className="hidden text-[#E63946] sm:block" />
            <input
              type="text"
              placeholder="Search games..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-transparent text-sm text-white outline-none placeholder:text-gray-500"
            />
          </div>
        </div>

        {/* Categories */}
        <div className="mb-8 flex justify-center gap-2 overflow-x-auto pb-2 sm:flex-wrap sm:pb-0 sm:gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full px-3 py-1.5 text-xs font-medium transition-all duration-300 sm:px-5 sm:py-2 sm:text-sm ${
                selectedCategory === category
                  ? "bg-[#E63946] text-white"
                  : "border border-white/10 bg-white/5 text-gray-400 hover:border-[#E63946]/40 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Games Grid */}
        <motion.div layout className="grid gap-5 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredGames.map((game) => (
            <GameCard key={game.title} {...game} />
          ))}
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default Games;
