import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Gamepad2 } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#050508] text-white">
      {/* Background Effects */}
      <div className="absolute left-0 top-0 h-[300px] w-[300px] rounded-full bg-[#E63946]/5 blur-[150px]" />
      <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-[#A8DADC]/5 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid gap-8 sm:grid-cols-2 sm:gap-8 md:gap-12 lg:grid-cols-4"
        >
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 text-2xl font-black tracking-wide sm:text-3xl">
              <Gamepad2 size={26} className="text-[#E63946] sm:hidden" />
              <Gamepad2 size={30} className="hidden text-[#E63946] sm:block" />
              <span className="text-[#E63946]">DISNE</span>
              <span className="text-[#A8DADC]">VR</span>
            </Link>

            <p className="mt-4 text-sm leading-relaxed text-gray-400 sm:mt-5">
              Nairobi's premier virtual reality gaming destination at Runda Mall.
              Experience immersive VR games while parents relax at our cafe.
            </p>

            <div className="mt-5 flex gap-2.5 sm:mt-6 sm:gap-3">
              {["Instagram", "Facebook", "Twitter"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[10px] font-bold text-gray-400 transition-all duration-300 hover:border-[#E63946]/40 hover:text-[#E63946] sm:h-10 sm:w-10 sm:text-xs"
                >
                  {social[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-bold sm:text-lg">Quick Links</h3>
            <ul className="mt-3.5 space-y-2.5 text-sm text-gray-400 sm:mt-5 sm:space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "Games", path: "/games" },
                { name: "Pricing", path: "/pricing" },
                { name: "Gallery", path: "/gallery" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link className="transition-colors duration-300 hover:text-[#E63946]" to={link.path}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-base font-bold sm:text-lg">Contact Us</h3>
            <div className="mt-3.5 space-y-3 text-sm text-gray-400 sm:mt-5 sm:space-y-4">
              <p className="flex gap-2.5 sm:gap-3">
                <MapPin className="mt-0.5 text-[#E63946]" size={16} />
                Runda Mall, Nairobi, Kenya
              </p>
              <p className="flex gap-2.5 sm:gap-3">
                <Phone className="text-[#E63946]" size={16} />
                +254 700 000 000
              </p>
              <p className="flex gap-2.5 sm:gap-3">
                <Mail className="text-[#E63946]" size={16} />
                info@disnevr.com
              </p>
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-base font-bold sm:text-lg">Opening Hours</h3>
            <div className="mt-3.5 space-y-3 text-sm text-gray-400 sm:mt-5 sm:space-y-4">
              <p className="flex gap-2.5 sm:gap-3">
                <Clock className="text-[#E63946]" size={16} />
                Mon - Sun
              </p>
              <p>10:00 AM - 10:00 PM</p>
              <p className="flex items-center gap-2.5 sm:gap-3">
                <span className="h-2 w-2 rounded-full bg-[#2A9D8F]" />
                <span className="font-medium text-[#2A9D8F]">Cafe Open All Day</span>
              </p>
              <p className="text-xs text-gray-500">Walk-ins Welcome</p>
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="my-8 h-px bg-white/10 sm:my-10" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 text-center text-xs text-gray-500 sm:text-sm md:flex-row">
          <p>&copy; {new Date().getFullYear()} DISNE VR. All rights reserved.</p>
          <p>Runda Mall, Nairobi, Kenya | Built with passion for immersive gaming.</p>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="#"
        className="fixed bottom-4 right-4 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#2A9D8F] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(42,157,143,0.4)] sm:bottom-6 sm:right-6 sm:h-14 sm:w-14"
      >
        <MessageCircle size={22} className="sm:hidden" />
        <MessageCircle size={28} className="hidden sm:block" />
      </a>
    </footer>
  );
};

export default Footer;
