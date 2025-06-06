import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function CallToAction() {
  return (
    <motion.section
      className="relative bg-gradient-to-br from-indigo-800 via-purple-800 to-indigo-900 text-white py-20 px-6 text-center overflow-hidden"
      initial={{ scale: 0.95, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Background Blobs */}
      <div className="absolute top-[-50px] left-[-50px] w-72 h-72 bg-indigo-600 opacity-20 rounded-full blur-3xl animate-pulse -z-10" />
      <div className="absolute bottom-[-60px] right-[-60px] w-96 h-96 bg-purple-700 opacity-20 rounded-full blur-3xl animate-pulse -z-10" />

      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight tracking-tight">
          Let’s Elevate Your Digital Presence
        </h2>
        <p className="text-lg md:text-xl text-indigo-100 mb-8 font-medium">
          Ready to launch campaigns that actually convert? Partner with Tech
          Digital Solutions and grow smarter.
        </p>
        <Link to="/contact">
          <button className="px-8 py-3 bg-yellow-400 text-black font-semibold text-lg rounded-full shadow-lg hover:bg-yellow-300 transition duration-300">
            Schedule Free Consultation
          </button>
        </Link>
      </div>
    </motion.section>
  );
}
