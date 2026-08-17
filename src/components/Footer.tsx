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

      <div className="relative mx-auto max-w-7xl px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid gap-12 md:grid-cols-2 lg:grid-cols-4"
        >
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 text-3xl font-black tracking-wide">
              <Gamepad2 size={30} className="text-[#E63946]" />
              <span className="text-[#E63946]">DESNI</span>
              <span className="text-[#A8DADC]">VR</span>
            </Link>

            <p className="mt-5 leading-relaxed text-gray-400">
              Nairobi's premier virtual reality gaming destination at Runda Mall.
              Experience immersive VR games while parents relax at our cafe.
            </p>

            <div className="mt-6 flex gap-3">
              {["Instagram", "Facebook", "Twitter"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xs font-bold text-gray-400 transition-all duration-300 hover:border-[#E63946]/40 hover:text-[#E63946]"
                >
                  {social[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul className="mt-5 space-y-3 text-gray-400">
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
            <h3 className="text-lg font-bold">Contact Us</h3>
            <div className="mt-5 space-y-4 text-gray-400">
              <p className="flex gap-3">
                <MapPin className="text-[#E63946]" size={18} />
                Runda Mall, Nairobi, Kenya
              </p>
              <p className="flex gap-3">
                <Phone className="text-[#E63946]" size={18} />
                +254 700 000 000
              </p>
              <p className="flex gap-3">
                <Mail className="text-[#E63946]" size={18} />
                info@desnivr.com
              </p>
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-lg font-bold">Opening Hours</h3>
            <div className="mt-5 space-y-4 text-gray-400">
              <p className="flex gap-3">
                <Clock className="text-[#E63946]" size={18} />
                Mon - Sun
              </p>
              <p>10:00 AM - 10:00 PM</p>
              <p className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[#2A9D8F]" />
                <span className="text-[#2A9D8F] font-medium">Cafe Open All Day</span>
              </p>
              <p className="text-sm text-gray-500">Walk-ins Welcome</p>
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="my-10 h-px bg-white/10" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-5 text-center text-sm text-gray-500 md:flex-row">
          <p>&copy; {new Date().getFullYear()} DESNI VR. All rights reserved.</p>
          <p>Runda Mall, Nairobi, Kenya | Built with passion for immersive gaming.</p>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="#"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#2A9D8F] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(42,157,143,0.4)]"
      >
        <MessageCircle size={28} />
      </a>
    </footer>
  );
};

export default Footer;
