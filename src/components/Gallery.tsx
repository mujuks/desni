import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search } from "lucide-react";

type Category = "All" | "Action" | "Adventure" | "Horror" | "Family" | "Multiplayer";

interface GalleryItem {
  id: number;
  image: string;
  title: string;
  category: Exclude<Category, "All">;
}

const images: GalleryItem[] = [
  { id: 1, image: "/images/gallery/vr1.jpg", title: "Beat Saber", category: "Action" },
  { id: 2, image: "/images/gallery/vr2.jpg", title: "Arizona Sunshine", category: "Horror" },
  { id: 3, image: "/images/gallery/vr3.jpg", title: "Job Simulator", category: "Family" },
  { id: 4, image: "/images/gallery/vr4.jpg", title: "Superhot VR", category: "Action" },
  { id: 5, image: "/images/gallery/vr5.jpg", title: "Half-Life: Alyx", category: "Adventure" },
  { id: 6, image: "/images/gallery/vr6.jpg", title: "Richie's Plank", category: "Adventure" },
  { id: 7, image: "/images/gallery/vr7.jpg", title: "VR Party", category: "Multiplayer" },
  { id: 8, image: "/images/gallery/vr8.jpg", title: "Family Fun", category: "Family" },
];

const filters: Category[] = ["All", "Action", "Adventure", "Horror", "Family", "Multiplayer"];

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState<Category>("All");

  const filteredImages = useMemo(() => {
    if (activeFilter === "All") return images;
    return images.filter((image) => image.category === activeFilter);
  }, [activeFilter]);

  return (
    <section className="relative overflow-hidden bg-[#0A0A0F] py-16 text-white sm:py-20 lg:py-24">
      {/* Background Effects */}
      <div className="absolute left-0 top-20 h-[350px] w-[350px] rounded-full bg-[#A8DADC]/8 blur-[150px]" />
      <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-[#E63946]/8 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-10 max-w-3xl text-center sm:mb-14"
        >
          <span className="rounded-full border border-[#A8DADC]/30 bg-[#A8DADC]/10 px-4 py-1.5 text-xs font-medium text-[#A8DADC] sm:px-5 sm:py-2 sm:text-sm">
            Gallery
          </span>

          <h2 className="mt-5 text-3xl font-black sm:mt-6 sm:text-4xl md:text-5xl">
            Inside The
            <span className="bg-linear-to-r from-[#E63946] to-[#A8DADC] bg-clip-text text-transparent">
              {" "}VR Experience
            </span>
          </h2>

          <p className="mt-4 text-base text-gray-400 sm:mt-6 sm:text-lg">
            Take a look at some unforgettable moments from players enjoying
            immersive virtual reality adventures at DISNE VR.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="mb-8 flex justify-center gap-2 overflow-x-auto pb-2 sm:mb-12 sm:flex-wrap sm:pb-0 sm:gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-medium transition-all duration-300 sm:px-5 sm:py-2 sm:text-sm ${
                activeFilter === filter
                  ? "bg-[#E63946] text-white"
                  : "border border-white/10 bg-white/5 text-gray-400 hover:border-[#E63946]/40 hover:text-white"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div layout className="grid gap-3 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
          <AnimatePresence>
            {filteredImages.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="group relative overflow-hidden rounded-xl border border-white/5 sm:rounded-2xl"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-48 w-full object-cover transition duration-500 group-hover:scale-110 sm:h-72"
                />

                <div className="absolute inset-0 bg-linear-to-t from-[#0A0A0F] via-[#0A0A0F]/20 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 transition duration-300 group-hover:opacity-100">
                  <div className="rounded-full bg-[#E63946] p-2.5 sm:p-3">
                    <Search size={16} className="text-white sm:hidden" />
                    <Search size={20} className="hidden text-white sm:block" />
                  </div>
                  <h3 className="mt-2 text-base font-bold sm:mt-3 sm:text-lg">{item.title}</h3>
                  <span className="mt-1.5 rounded-full bg-[#E63946]/20 px-2.5 py-0.5 text-xs text-[#E63946] sm:mt-2 sm:px-3 sm:py-1 sm:text-sm">
                    {item.category}
                  </span>
                </div>

                <div className="pointer-events-none absolute inset-0 rounded-xl border border-transparent transition-all duration-500 group-hover:border-[#E63946]/30 group-hover:shadow-[0_0_25px_rgba(230,57,70,0.15)] sm:rounded-2xl" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-14 text-center sm:mt-20"
        >
          <h3 className="text-2xl font-bold sm:text-3xl">Your Adventure Starts Here</h3>

          <p className="mx-auto mt-3 max-w-2xl text-sm text-gray-400 sm:mt-4 sm:text-base">
            Gather your friends, challenge your family, or experience VR on
            your own. Every visit is packed with excitement.
          </p>

          <a
            href="/contact"
            className="mt-6 inline-block rounded-full bg-[#E63946] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-[#c62d39] hover:shadow-[0_0_30px_rgba(230,57,70,0.4)] sm:mt-8 sm:px-8 sm:py-4 sm:text-base"
          >
            Visit DISNE VR
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
