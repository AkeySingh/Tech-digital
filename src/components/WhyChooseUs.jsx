// src/components/WhyChooseUs.jsx
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../utils/animationVariants";
import { Link } from "react-router-dom";

const features = [
  {
    icon: "🚀",
    title: "Performance First",
    desc: "Our results-driven mindset ensures your business gets real growth and visibility.",
  },
  {
    icon: "🎯",
    title: "Precision Strategy",
    desc: "Customized marketing strategies built to align with your unique business goals.",
  },
  {
    icon: "🤖",
    title: "Smart Technology",
    desc: "We integrate automation, AI tools, and analytics to streamline your success.",
  },
  {
    icon: "💼",
    title: "Experienced Team",
    desc: "10+ years of proven experience across design, development, and marketing.",
  },
  {
    icon: "📊",
    title: "Transparent Reporting",
    desc: "Get regular updates and performance reports so you’re always in control.",
  },
  {
    icon: "💬",
    title: "Dedicated Support",
    desc: "Quick turnaround, personal attention, and real-time help whenever you need.",
  },
];

export default function WhyChooseUs() {
  return (
    <motion.section
      className="bg-gradient-to-br from-indigo-900 via-sky-900 to-blue-900 py-20 px-6 text-white"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold mb-6"
          variants={fadeInUp}
        >
          Why Choose{" "}
          <span className="text-cyan-400">Tech Digital Solutions?</span>
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl text-sky-200 mb-12 max-w-3xl mx-auto"
          variants={fadeInUp}
        >
          At Tech Digital, we do more than offer services — we build growth
          engines for modern businesses. Here's why we're the team you can
          trust.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map(({ icon, title, desc }, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20 shadow-xl hover:shadow-cyan-400/30 transition-all hover:scale-[1.03]"
              variants={fadeInUp}
              whileHover={{ y: -5 }}
            >
              <div className="text-4xl mb-4">{icon}</div>
              <h3 className="text-xl font-semibold text-cyan-300 mb-2">
                {title}
              </h3>
              <p className="text-sky-100 leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div className="mt-16" variants={fadeInUp}>
          <Link
            to="/plans"
            className="inline-block bg-cyan-500 hover:bg-cyan-400 text-white font-bold px-8 py-3 rounded-full transition"
          >
            Let's Work Together →
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}
