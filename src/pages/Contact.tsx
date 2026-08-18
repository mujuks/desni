import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const contactDetails = [
  { icon: MapPin, title: "Location", info: "Runda Mall, Nairobi, Kenya" },
  { icon: Phone, title: "Phone", info: "+254 700 000 000" },
  { icon: Mail, title: "Email", info: "info@disnevr.com" },
  { icon: Clock, title: "Opening Hours", info: "10:00 AM - 10:00 PM Daily" },
];

const Contact = () => {
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
          <h1 className="text-4xl font-black sm:text-5xl md:text-7xl">
            Let's Create
            <span className="block bg-linear-to-r from-[#E63946] to-[#A8DADC] bg-clip-text text-transparent">
              Your VR Experience
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base text-gray-400 sm:mt-6 sm:text-lg">
            Have questions, want to book a session, or plan an event?
            Our team is ready to help.
          </p>
        </motion.div>
      </section>

      {/* Contact Content */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="grid gap-8 sm:gap-12 lg:grid-cols-2">
          {/* Details */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-black sm:text-4xl">Contact DISNE VR</h2>

            <p className="mt-4 text-sm leading-relaxed text-gray-400 sm:mt-5">
              Reach out to us for bookings, private events, birthday parties,
              corporate experiences or any questions.
            </p>

            <div className="mt-6 space-y-3 sm:mt-10 sm:space-y-5">
              {contactDetails.map((item) => (
                <div
                  key={item.title}
                  className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.03] p-3.5 sm:gap-5 sm:rounded-2xl sm:p-5"
                >
                  <div className="rounded-lg bg-[#E63946]/10 p-2 sm:rounded-xl sm:p-3">
                    <item.icon size={18} className="text-[#E63946] sm:hidden" />
                    <item.icon className="hidden text-[#E63946] sm:block" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold sm:text-base">{item.title}</h3>
                    <p className="text-xs text-gray-400 sm:text-sm">{item.info}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-white/5 bg-white/[0.03] p-5 backdrop-blur-xl sm:rounded-3xl sm:p-8"
          >
            <h2 className="text-2xl font-bold sm:text-3xl">Send A Message</h2>

            <form className="mt-6 space-y-4 sm:mt-8 sm:space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none transition-colors duration-300 focus:border-[#E63946] sm:px-5 sm:py-4"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none transition-colors duration-300 focus:border-[#E63946] sm:px-5 sm:py-4"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none transition-colors duration-300 focus:border-[#E63946] sm:px-5 sm:py-4"
              />
              <textarea
                rows={5}
                placeholder="Your Message"
                className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none transition-colors duration-300 focus:border-[#E63946] sm:px-5 sm:py-4"
              />

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#E63946] py-3.5 font-bold text-white transition-all duration-300 hover:bg-[#c62d39] sm:gap-3 sm:py-4"
              >
                Send Message
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 sm:pb-20">
        <div className="rounded-2xl border border-[#2A9D8F]/20 bg-[#2A9D8F]/10 p-6 text-center sm:rounded-3xl sm:p-10">
          <MessageCircle size={36} className="mx-auto text-[#2A9D8F] sm:hidden" />
          <MessageCircle size={45} className="mx-auto hidden text-[#2A9D8F] sm:block" />

          <h2 className="mt-4 text-2xl font-bold sm:mt-5 sm:text-3xl">Need Quick Assistance?</h2>

          <p className="mt-2 text-sm text-gray-400 sm:mt-3">
            Chat with us directly on WhatsApp and book your VR session instantly.
          </p>

          <button className="mt-5 rounded-full bg-[#2A9D8F] px-6 py-2.5 text-sm font-bold text-white transition-all duration-300 hover:bg-[#238b7e] hover:shadow-[0_0_20px_rgba(42,157,143,0.4)] sm:mt-6 sm:px-8 sm:py-3">
            WhatsApp Us
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
