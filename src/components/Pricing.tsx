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
    <section className="relative overflow-hidden bg-[#0F1923] py-16 text-white sm:py-20 lg:py-24">
      {/* Background Effects */}
      <div className="absolute left-10 top-20 h-[350px] w-[350px] rounded-full bg-[#E63946]/8 blur-[150px]" />
      <div className="absolute bottom-0 right-10 h-[400px] w-[400px] rounded-full bg-[#A8DADC]/8 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto mb-12 max-w-3xl text-center sm:mb-16"
        >
          <span className="rounded-full border border-[#E63946]/30 bg-[#E63946]/10 px-4 py-1.5 text-xs font-medium text-[#E63946] sm:px-5 sm:py-2 sm:text-sm">
            Pricing Plans
          </span>

          <h2 className="mt-5 text-3xl font-black sm:mt-6 sm:text-4xl md:text-5xl">
            Choose Your
            <span className="bg-linear-to-r from-[#E63946] to-[#A8DADC] bg-clip-text text-transparent">
              {" "}VR Adventure
            </span>
          </h2>

          <p className="mt-4 text-base text-gray-400 sm:mt-6 sm:text-lg">
            Flexible pricing for solo players, friends, and families.
            Experience the future of gaming without breaking the bank.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className={`relative overflow-hidden rounded-2xl border backdrop-blur-xl transition-all duration-500 sm:rounded-3xl ${
                plan.popular
                  ? "border-[#E63946]/50 bg-[#E63946]/10 shadow-[0_0_50px_rgba(230,57,70,0.2)]"
                  : "border-white/5 bg-white/[0.03] hover:border-white/10"
              }`}
            >
              {plan.popular && (
                <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-[#E63946] px-2.5 py-0.5 text-[10px] font-bold text-white sm:right-5 sm:top-5 sm:px-3 sm:py-1 sm:text-xs">
                  <Sparkles size={12} className="sm:hidden" />
                  <Sparkles size={14} className="hidden sm:block" />
                  Popular
                </div>
              )}

              <div className="p-5 sm:p-8">
                <h3 className="text-xl font-bold sm:text-2xl">{plan.title}</h3>

                <div className="mt-4 sm:mt-6">
                  <h1 className="text-4xl font-black text-[#E63946] sm:text-5xl">
                    {plan.price}
                  </h1>
                  <p className="mt-2 text-sm text-gray-400">{plan.duration}</p>
                </div>

                <div className="my-6 h-px bg-white/10 sm:my-8" />

                <div className="space-y-3 sm:space-y-4">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 sm:gap-3">
                      <div className="rounded-full bg-[#E63946]/15 p-0.5 sm:p-1">
                        <Check size={14} className="text-[#E63946] sm:hidden" />
                        <Check size={16} className="hidden text-[#E63946] sm:block" />
                      </div>
                      <span className="text-sm text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <button
                  className={`mt-8 w-full rounded-xl py-3 font-semibold transition-all duration-300 sm:mt-10 sm:py-4 ${
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
          className="mt-12 text-center text-sm text-gray-400 sm:mt-16"
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
