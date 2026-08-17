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
      <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-b from-[#E63946]/15 to-transparent" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 px-6 text-center"
        >
          <Gamepad2 size={60} className="mx-auto mb-6 text-[#E63946]" />

          <h1 className="text-5xl font-black md:text-7xl">
            Explore Our
            <span className="block bg-linear-to-r from-[#E63946] to-[#A8DADC] bg-clip-text text-transparent">
              VR Games
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            Choose from exciting adventures, competitive battles and immersive
            experiences designed for every gamer.
          </p>
        </motion.div>
      </section>

      {/* Games Section */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        {/* Search */}
        <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-3">
            <Search className="text-[#E63946]" />
            <input
              type="text"
              placeholder="Search games..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-transparent text-white outline-none placeholder:text-gray-500"
            />
          </div>
        </div>

        {/* Categories */}
        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
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
        <motion.div layout className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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
