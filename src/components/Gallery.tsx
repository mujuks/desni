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
    <section className="relative overflow-hidden bg-[#0A0A0F] py-24 text-white">
      {/* Background Effects */}
      <div className="absolute left-0 top-20 h-[350px] w-[350px] rounded-full bg-[#A8DADC]/8 blur-[150px]" />
      <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-[#E63946]/8 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <span className="rounded-full border border-[#A8DADC]/30 bg-[#A8DADC]/10 px-5 py-2 text-sm font-medium text-[#A8DADC]">
            Gallery
          </span>

          <h2 className="mt-6 text-4xl font-black md:text-5xl">
            Inside The
            <span className="bg-linear-to-r from-[#E63946] to-[#A8DADC] bg-clip-text text-transparent">
              {" "}VR Experience
            </span>
          </h2>

          <p className="mt-6 text-lg text-gray-400">
            Take a look at some unforgettable moments from players enjoying
            immersive virtual reality adventures at DESNI VR.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
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
        <motion.div layout className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
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
                className="group relative overflow-hidden rounded-2xl border border-white/5"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-linear-to-t from-[#0A0A0F] via-[#0A0A0F]/20 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 transition duration-300 group-hover:opacity-100">
                  <div className="rounded-full bg-[#E63946] p-3">
                    <Search size={20} className="text-white" />
                  </div>
                  <h3 className="mt-3 text-lg font-bold">{item.title}</h3>
                  <span className="mt-2 rounded-full bg-[#E63946]/20 px-3 py-1 text-sm text-[#E63946]">
                    {item.category}
                  </span>
                </div>

                <div className="pointer-events-none absolute inset-0 rounded-2xl border border-transparent transition-all duration-500 group-hover:border-[#E63946]/30 group-hover:shadow-[0_0_25px_rgba(230,57,70,0.15)]" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h3 className="text-3xl font-bold">Your Adventure Starts Here</h3>

          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            Gather your friends, challenge your family, or experience VR on
            your own. Every visit is packed with excitement.
          </p>

          <a
            href="/contact"
            className="mt-8 inline-block rounded-full bg-[#E63946] px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-[#c62d39] hover:shadow-[0_0_30px_rgba(230,57,70,0.4)]"
          >
            Visit DESNI VR
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
