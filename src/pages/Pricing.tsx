import { motion } from "framer-motion";
import { Check, Users, Cake, Briefcase, HelpCircle } from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const plans = [
  {
    title: "Starter Experience",
    price: "KES 500",
    time: "30 Minutes",
    description: "Perfect for first-time VR players.",
    features: ["Access to selected VR games", "1 Player", "VR headset included", "Basic guidance"],
  },
  {
    title: "Premium Experience",
    price: "KES 900",
    time: "1 Hour",
    description: "The best choice for most players.",
    popular: true,
    features: ["Unlimited game selection", "1-2 Players", "Multiplayer games", "Premium VR setup", "Priority assistance"],
  },
  {
    title: "VIP Experience",
    price: "KES 1,500",
    time: "2 Hours",
    description: "Maximum entertainment.",
    features: ["Unlimited VR gaming", "Up to 4 Players", "VIP booking priority", "Premium support", "Refreshments included"],
  },
];

const extraPackages = [
  { icon: Cake, title: "Birthday Parties", description: "Celebrate your special day with exciting VR games, challenges and unforgettable memories." },
  { icon: Users, title: "Group Packages", description: "Perfect for friends, schools and social groups looking for a unique experience." },
  { icon: Briefcase, title: "Corporate Events", description: "Build teamwork and connection through immersive VR team experiences." },
];

const faqs = [
  { question: "Do I need gaming experience?", answer: "No. Our staff will guide beginners and help everyone enjoy the VR experience." },
  { question: "Can we play with friends?", answer: "Yes. We have multiplayer games designed for groups." },
  { question: "Do I need to book before visiting?", answer: "Booking is recommended to guarantee your preferred time slot." },
];

const Pricing = () => {
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
            Simple Pricing,
            <span className="block bg-linear-to-r from-[#E63946] to-[#A8DADC] bg-clip-text text-transparent">
              Unlimited Fun
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            Choose a package that fits your adventure. Whether you're gaming solo,
            with friends, or planning an event.
          </p>
        </motion.div>
      </section>

      {/* Pricing Cards */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-8 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className={`rounded-3xl border p-8 backdrop-blur-xl ${
                plan.popular
                  ? "border-[#E63946]/50 bg-[#E63946]/10 shadow-[0_0_50px_rgba(230,57,70,0.2)]"
                  : "border-white/5 bg-white/[0.03]"
              }`}
            >
              {plan.popular && (
                <span className="rounded-full bg-[#E63946] px-4 py-1 text-sm font-bold text-white">
                  Most Popular
                </span>
              )}

              <h2 className="mt-5 text-3xl font-bold">{plan.title}</h2>
              <h3 className="mt-6 text-5xl font-black text-[#E63946]">{plan.price}</h3>
              <p className="mt-2 text-gray-400">{plan.time}</p>
              <p className="mt-5 text-gray-300">{plan.description}</p>

              <div className="my-8 h-px bg-white/10" />

              <div className="space-y-4">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex gap-3">
                    <Check className="text-[#E63946]" size={20} />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              <button className="mt-10 w-full rounded-full bg-[#E63946] py-4 font-bold text-white transition-all duration-300 hover:bg-[#c62d39]">
                Book Now
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Extra Packages */}
      <section className="bg-[#0F1923] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-12 text-center text-4xl font-black">Special Packages</h2>

          <div className="grid gap-8 md:grid-cols-3">
            {extraPackages.map((item) => (
              <div key={item.title} className="rounded-3xl border border-white/5 bg-white/[0.03] p-8">
                <item.icon size={40} className="text-[#E63946]" />
                <h3 className="mt-5 text-2xl font-bold">{item.title}</h3>
                <p className="mt-3 text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="mb-12 text-center text-4xl font-black">Frequently Asked Questions</h2>

        <div className="space-y-6">
          {faqs.map((faq) => (
            <div key={faq.question} className="rounded-2xl border border-white/5 bg-white/[0.03] p-6">
              <div className="flex gap-3">
                <HelpCircle className="text-[#E63946]" />
                <h3 className="text-lg font-bold">{faq.question}</h3>
              </div>
              <p className="mt-3 text-gray-400">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
