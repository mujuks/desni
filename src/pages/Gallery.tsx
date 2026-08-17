import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Image as ImageIcon, X } from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const galleryItems = [
  { id: 1, image: "/images/gallery/setup.jpg", title: "VR Gaming Setup", category: "Setup" },
  { id: 2, image: "/images/gallery/player.jpg", title: "Immersive Gaming", category: "Players" },
  { id: 3, image: "/images/gallery/multiplayer.jpg", title: "Multiplayer Battles", category: "Events" },
  { id: 4, image: "/images/gallery/headset.jpg", title: "Premium VR Headsets", category: "Equipment" },
  { id: 5, image: "/images/gallery/tournament.jpg", title: "VR Tournament", category: "Events" },
  { id: 6, image: "/images/gallery/friends.jpg", title: "Gaming With Friends", category: "Players" },
  { id: 7, image: "/images/gallery/room.jpg", title: "VR Arena", category: "Setup" },
  { id: 8, image: "/images/gallery/action.jpg", title: "Action Experience", category: "Games" },
];

const categories = ["All", "Setup", "Players", "Events", "Equipment", "Games"];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredGallery =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <div className="bg-[#0A0A0F] text-white">
      <Navbar />

      {/* Hero */}
      <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden sm:min-h-[60vh]">
        <div className="absolute inset-0 bg-linear-to-b from-[#E63946]/15 to-transparent" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 px-4 text-center sm:px-6"
        >
          <ImageIcon size={40} className="mx-auto mb-4 text-[#E63946] sm:mb-6 sm:hidden" />
          <ImageIcon size={60} className="mx-auto mb-6 hidden text-[#E63946] sm:block" />

          <h1 className="text-4xl font-black sm:text-5xl md:text-7xl">
            Experience
            <span className="block bg-linear-to-r from-[#E63946] to-[#A8DADC] bg-clip-text text-transparent">
              DESNI VR
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base text-gray-400 sm:mt-6 sm:text-lg">
            Explore our gaming arena, immersive setups, exciting events and
            unforgettable VR moments at Runda Mall.
          </p>
        </motion.div>
      </section>

      {/* Gallery */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
        {/* Filters */}
        <div className="mb-8 flex flex-wrap justify-center gap-2 sm:mb-12 sm:gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-3 py-1.5 text-xs font-medium transition-all duration-300 sm:px-6 sm:py-2 sm:text-sm ${
                activeCategory === category
                  ? "bg-[#E63946] text-white"
                  : "border border-white/10 bg-white/5 text-gray-400 hover:border-[#E63946]/40 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Images */}
        <motion.div layout className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          <AnimatePresence>
            {filteredGallery.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-xl border border-white/5 sm:rounded-3xl"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  onClick={() => setSelectedImage(item.image)}
                  className="h-56 w-full cursor-pointer object-cover transition duration-500 group-hover:scale-110 sm:h-[350px]"
                />

                <div className="absolute inset-0 bg-linear-to-t from-[#0A0A0F] via-transparent opacity-0 transition group-hover:opacity-100" />

                <div className="absolute bottom-4 left-4 opacity-0 transition group-hover:opacity-100 sm:bottom-6 sm:left-6">
                  <h3 className="text-base font-bold sm:text-xl">{item.title}</h3>
                  <span className="text-xs text-[#E63946] sm:text-sm">{item.category}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-6"
            onClick={() => setSelectedImage(null)}
          >
            <button className="absolute right-4 top-4 rounded-full bg-white/10 p-2 sm:right-8 sm:top-8 sm:p-3">
              <X size={20} className="sm:hidden" />
              <X size={30} className="hidden sm:block" />
            </button>

            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              src={selectedImage}
              className="max-h-[80vh] max-w-full rounded-xl sm:max-h-[85vh] sm:max-w-5xl sm:rounded-3xl"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default Gallery;
