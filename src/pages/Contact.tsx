import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const contactDetails = [
  { icon: MapPin, title: "Location", info: "Runda Mall, Nairobi, Kenya" },
  { icon: Phone, title: "Phone", info: "+254 700 000 000" },
  { icon: Mail, title: "Email", info: "info@desnivr.com" },
  { icon: Clock, title: "Opening Hours", info: "10:00 AM - 10:00 PM Daily" },
];

const Contact = () => {
  return (
    <div className="bg-[#0A0A0F] text-white">
      <Navbar />

      {/* Hero */}
      <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-b from-[#E63946]/15 to-transparent" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 px-6 text-center"
        >
          <h1 className="text-5xl font-black md:text-7xl">
            Let's Create
            <span className="block bg-linear-to-r from-[#E63946] to-[#A8DADC] bg-clip-text text-transparent">
              Your VR Experience
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            Have questions, want to book a session, or plan an event?
            Our team is ready to help.
          </p>
        </motion.div>
      </section>

      {/* Contact Content */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Details */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-black">Contact DESNI VR</h2>

            <p className="mt-5 leading-relaxed text-gray-400">
              Reach out to us for bookings, private events, birthday parties,
              corporate experiences or any questions.
            </p>

            <div className="mt-10 space-y-5">
              {contactDetails.map((item) => (
                <div
                  key={item.title}
                  className="flex items-center gap-5 rounded-2xl border border-white/5 bg-white/[0.03] p-5"
                >
                  <div className="rounded-xl bg-[#E63946]/10 p-3">
                    <item.icon className="text-[#E63946]" />
                  </div>
                  <div>
                    <h3 className="font-bold">{item.title}</h3>
                    <p className="text-gray-400">{item.info}</p>
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
            className="rounded-3xl border border-white/5 bg-white/[0.03] p-8 backdrop-blur-xl"
          >
            <h2 className="text-3xl font-bold">Send A Message</h2>

            <form className="mt-8 space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-xl border border-white/10 bg-black/20 px-5 py-4 text-white outline-none transition-colors duration-300 focus:border-[#E63946]"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-xl border border-white/10 bg-black/20 px-5 py-4 text-white outline-none transition-colors duration-300 focus:border-[#E63946]"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full rounded-xl border border-white/10 bg-black/20 px-5 py-4 text-white outline-none transition-colors duration-300 focus:border-[#E63946]"
              />
              <textarea
                rows={5}
                placeholder="Your Message"
                className="w-full rounded-xl border border-white/10 bg-black/20 px-5 py-4 text-white outline-none transition-colors duration-300 focus:border-[#E63946]"
              />

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-[#E63946] py-4 font-bold text-white transition-all duration-300 hover:bg-[#c62d39]"
              >
                Send Message
                <Send size={20} />
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="rounded-3xl border border-[#2A9D8F]/20 bg-[#2A9D8F]/10 p-10 text-center">
          <MessageCircle size={45} className="mx-auto text-[#2A9D8F]" />

          <h2 className="mt-5 text-3xl font-bold">Need Quick Assistance?</h2>

          <p className="mt-3 text-gray-400">
            Chat with us directly on WhatsApp and book your VR session instantly.
          </p>

          <button className="mt-6 rounded-full bg-[#2A9D8F] px-8 py-3 font-bold text-white transition-all duration-300 hover:bg-[#238b7e] hover:shadow-[0_0_20px_rgba(42,157,143,0.4)]">
            WhatsApp Us
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
