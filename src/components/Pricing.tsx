import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";

const plans = [
  {
    title: "Starter",
    price: "KES 500",
    duration: "30 Minutes",
    popular: false,
    features: [
      "Access to any VR game",
      "1 Player",
      "VR Headset Included",
      "Staff Assistance",
    ],
  },
  {
    title: "Most Popular",
    price: "KES 900",
    duration: "1 Hour",
    popular: true,
    features: [
      "Access to all VR games",
      "Up to 2 Players",
      "Premium VR Headset",
      "Multiplayer Games",
      "Priority Support",
    ],
  },
  {
    title: "VIP Experience",
    price: "KES 1,500",
    duration: "2 Hours",
    popular: false,
    features: [
      "Unlimited Game Switching",
      "Up to 4 Players",
      "Premium VR Headsets",
      "Priority Booking",
      "Complimentary Drinks",
      "VIP Lounge Access",
    ],
  },
];

const Pricing = () => {
  return (
    <section className="relative overflow-hidden bg-[#0F1923] py-24 text-white">
      {/* Background Effects */}
      <div className="absolute left-10 top-20 h-[350px] w-[350px] rounded-full bg-[#E63946]/8 blur-[150px]" />
      <div className="absolute bottom-0 right-10 h-[400px] w-[400px] rounded-full bg-[#A8DADC]/8 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="rounded-full border border-[#E63946]/30 bg-[#E63946]/10 px-5 py-2 text-sm font-medium text-[#E63946]">
            Pricing Plans
          </span>

          <h2 className="mt-6 text-4xl font-black md:text-5xl">
            Choose Your
            <span className="bg-linear-to-r from-[#E63946] to-[#A8DADC] bg-clip-text text-transparent">
              {" "}VR Adventure
            </span>
          </h2>

          <p className="mt-6 text-lg text-gray-400">
            Flexible pricing for solo players, friends, and families.
            Experience the future of gaming without breaking the bank.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-8 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className={`relative overflow-hidden rounded-3xl border backdrop-blur-xl transition-all duration-500 ${
                plan.popular
                  ? "border-[#E63946]/50 bg-[#E63946]/10 shadow-[0_0_50px_rgba(230,57,70,0.2)]"
                  : "border-white/5 bg-white/[0.03] hover:border-white/10"
              }`}
            >
              {plan.popular && (
                <div className="absolute right-5 top-5 flex items-center gap-1 rounded-full bg-[#E63946] px-3 py-1 text-xs font-bold text-white">
                  <Sparkles size={14} />
                  Popular
                </div>
              )}

              <div className="p-8">
                <h3 className="text-2xl font-bold">{plan.title}</h3>

                <div className="mt-6">
                  <h1 className="text-5xl font-black text-[#E63946]">
                    {plan.price}
                  </h1>
                  <p className="mt-2 text-gray-400">{plan.duration}</p>
                </div>

                <div className="my-8 h-px bg-white/10" />

                <div className="space-y-4">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <div className="rounded-full bg-[#E63946]/15 p-1">
                        <Check size={16} className="text-[#E63946]" />
                      </div>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <button
                  className={`mt-10 w-full rounded-xl py-4 font-semibold transition-all duration-300 ${
                    plan.popular
                      ? "bg-[#E63946] text-white hover:bg-[#c62d39]"
                      : "border border-[#E63946]/30 text-[#E63946] hover:bg-[#E63946]/10 hover:border-[#E63946]"
                  }`}
                >
                  Book Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center text-gray-400"
        >
          Need a birthday party, corporate event, or school package?
          <span className="font-semibold text-[#E63946]">
            {" "}Contact us for a custom quote.
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
