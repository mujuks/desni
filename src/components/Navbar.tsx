import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Gamepad2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Games", path: "/games" },
  { name: "Pricing", path: "/pricing" },
  { name: "Gallery", path: "/gallery" },
  { name: "Cafe", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "bg-[#0A0A0F]/95 backdrop-blur-xl shadow-[0_4px_30px_rgba(230,57,70,0.1)] border-b border-[#E63946]/10"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2 text-2xl font-extrabold tracking-wide">
          <Gamepad2 size={28} className="text-[#E63946]" />
          <span className="text-[#E63946]">DESNI</span>
          <span className="text-[#A8DADC]">VR</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `relative font-medium transition-colors duration-300 ${
                  isActive ? "text-[#E63946]" : "text-gray-300 hover:text-[#A8DADC]"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="activeLink"
                      className="absolute -bottom-2 left-0 h-[2px] w-full rounded-full bg-[#E63946]"
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            to="/contact"
            className="rounded-full bg-[#E63946] px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-[#c62d39] hover:shadow-[0_0_25px_rgba(230,57,70,0.4)]"
          >
            Book Now
          </Link>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="text-white md:hidden">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-[#E63946]/10 bg-[#0A0A0F]/98 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-4 px-6 py-6">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `text-lg transition-colors duration-300 ${
                      isActive ? "text-[#E63946]" : "text-gray-300 hover:text-[#A8DADC]"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}

              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="mt-4 rounded-full bg-[#E63946] py-3 text-center font-semibold text-white transition-all hover:bg-[#c62d39]"
              >
                Book Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
