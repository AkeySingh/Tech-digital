import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../utils/animationVariants";

const services = [
  {
    icon: "🌐",
    title: "Website Design",
    desc: "Stunning, responsive websites built to convert visitors into customers.",
  },
  {
    icon: "🔍",
    title: "Search Engine Optimization (SEO)",
    desc: "Boost your visibility on Google and drive organic traffic that matters.",
  },
  {
    icon: "🎯",
    title: "Google & Meta Ads",
    desc: "Targeted campaigns that deliver leads and scale your revenue quickly.",
  },
];

export default function HomeServicesPreview() {
  return (
    <motion.section
      className="bg-gradient-to-br from-indigo-50 via-sky-100 to-white py-20 px-6"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="container mx-auto max-w-6xl text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-indigo-800 mb-4"
          variants={fadeInUp}
        >
          Our Core Services
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl text-indigo-600 mb-12 max-w-2xl mx-auto"
          variants={fadeInUp}
        >
          One agency. Infinite possibilities — from digital branding to
          performance marketing.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8 text-left">
          {services.map(({ icon, title, desc }, i) => (
            <motion.div
              key={i}
              className="bg-white p-8 rounded-xl shadow-md border border-indigo-100 hover:shadow-xl hover:border-indigo-300 transition"
              variants={fadeInUp}
              whileHover={{ y: -6 }}
            >
              <div className="text-3xl mb-4">{icon}</div>
              <h3 className="text-2xl font-bold text-indigo-700 mb-2">
                {title}
              </h3>
              <p className="text-indigo-600 leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div variants={fadeInUp} className="mt-12">
          <Link to="/services">
            <button className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-8 py-3 rounded-full shadow-md transition">
              View All Services →
            </button>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}
