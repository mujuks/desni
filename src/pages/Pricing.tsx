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
      <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden sm:min-h-[60vh]">
        <div className="absolute inset-0 bg-linear-to-b from-[#E63946]/15 to-transparent" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 px-4 text-center sm:px-6"
        >
          <h1 className="text-4xl font-black sm:text-5xl md:text-7xl">
            Simple Pricing,
            <span className="block bg-linear-to-r from-[#E63946] to-[#A8DADC] bg-clip-text text-transparent">
              Unlimited Fun
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base text-gray-400 sm:mt-6 sm:text-lg">
            Choose a package that fits your adventure. Whether you're gaming solo,
            with friends, or planning an event.
          </p>
        </motion.div>
      </section>

      {/* Pricing Cards */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className={`rounded-2xl border p-6 backdrop-blur-xl sm:rounded-3xl sm:p-8 ${
                plan.popular
                  ? "border-[#E63946]/50 bg-[#E63946]/10 shadow-[0_0_50px_rgba(230,57,70,0.2)]"
                  : "border-white/5 bg-white/[0.03]"
              }`}
            >
              {plan.popular && (
                <span className="rounded-full bg-[#E63946] px-3 py-0.5 text-xs font-bold text-white sm:px-4 sm:py-1 sm:text-sm">
                  Most Popular
                </span>
              )}

              <h2 className="mt-4 text-xl font-bold sm:mt-5 sm:text-3xl">{plan.title}</h2>
              <h3 className="mt-4 text-4xl font-black text-[#E63946] sm:mt-6 sm:text-5xl">{plan.price}</h3>
              <p className="mt-1.5 text-sm text-gray-400 sm:mt-2">{plan.time}</p>
              <p className="mt-3 text-sm text-gray-300 sm:mt-5">{plan.description}</p>

              <div className="my-6 h-px bg-white/10 sm:my-8" />

              <div className="space-y-3">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex gap-2 sm:gap-3">
                    <Check className="mt-0.5 text-[#E63946]" size={16} />
                    <span className="text-sm text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              <button className="mt-8 w-full rounded-full bg-[#E63946] py-3 font-bold text-white transition-all duration-300 hover:bg-[#c62d39] sm:mt-10 sm:py-4">
                Book Now
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Extra Packages */}
      <section className="bg-[#0F1923] py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-8 text-center text-3xl font-black sm:mb-12 sm:text-4xl">Special Packages</h2>

          <div className="grid gap-5 sm:gap-8 md:grid-cols-3">
            {extraPackages.map((item) => (
              <div key={item.title} className="rounded-2xl border border-white/5 bg-white/[0.03] p-5 sm:rounded-3xl sm:p-8">
                <item.icon size={32} className="text-[#E63946] sm:hidden" />
                <item.icon size={40} className="hidden text-[#E63946] sm:block" />
                <h3 className="mt-4 text-xl font-bold sm:mt-5 sm:text-2xl">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-400 sm:mt-3">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-20">
        <h2 className="mb-8 text-center text-3xl font-black sm:mb-12 sm:text-4xl">Frequently Asked Questions</h2>

        <div className="space-y-4 sm:space-y-6">
          {faqs.map((faq) => (
            <div key={faq.question} className="rounded-xl border border-white/5 bg-white/[0.03] p-4 sm:rounded-2xl sm:p-6">
              <div className="flex gap-2 sm:gap-3">
                <HelpCircle className="mt-0.5 text-[#E63946]" size={18} />
                <h3 className="text-sm font-bold sm:text-lg">{faq.question}</h3>
              </div>
              <p className="mt-2 ml-7 text-xs text-gray-400 sm:ml-8 sm:mt-3 sm:text-sm">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
