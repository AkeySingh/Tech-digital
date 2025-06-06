// src/pages/StartJourney.jsx
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../utils/animationVariants";
import { Link } from "react-router-dom";

export default function StartJourney() {
  return (
    <motion.section
      className="bg-gradient-to-tr from-white to-indigo-50 py-20 px-6"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Hero */}
        <motion.div className="text-center mb-16" variants={fadeInUp}>
          <h1 className="text-5xl font-extrabold text-indigo-800 mb-4">
            Ready to Transform Your Business?
          </h1>
          <p className="text-lg text-indigo-600">
            Let’s understand your goals and build a roadmap for your success.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-4 gap-8 text-center mb-20">
          {[
            "Discovery Call",
            "Strategy Planning",
            "Execution",
            "Launch & Scale",
          ].map((step, i) => (
            <motion.div
              key={i}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
              variants={fadeInUp}
            >
              <div className="text-4xl font-bold text-indigo-700 mb-2">
                {i + 1}
              </div>
              <h3 className="text-xl font-semibold text-indigo-800 mb-1">
                {step}
              </h3>
              <p className="text-indigo-600 text-sm">
                {step === "Discovery Call"
                  ? "We get to know your business."
                  : step === "Strategy Planning"
                  ? "We create your custom roadmap."
                  : step === "Execution"
                  ? "We build and launch your assets."
                  : "We monitor, optimize, and grow."}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Quiz or Service Select */}
        <motion.div className="text-center mb-20" variants={fadeInUp}>
          <h2 className="text-3xl font-bold text-indigo-800 mb-4">
            What Do You Need Help With?
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {["Website Design", "SEO & Traffic", "Paid Advertising"].map(
              (service, i) => (
                <Link to="/services" key={i}>
                  <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 transition">
                    {service}
                  </button>
                </Link>
              )
            )}
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div className="text-center mb-20" variants={fadeInUp}>
          <h2 className="text-2xl font-bold text-indigo-800 mb-6">
            Trusted By Clients
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Helped us grow traffic 3x",
              "Superb branding team",
              "Fast, reliable & friendly",
            ].map((quote, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow text-indigo-700 italic"
              >
                “{quote}”
              </div>
            ))}
          </div>
        </motion.div>

        {/* Final Contact CTA */}
        <motion.div className="text-center" variants={fadeInUp}>
          <h3 className="text-3xl font-bold text-indigo-800 mb-4">
            Start Your Digital Journey Today
          </h3>
          <p className="text-indigo-600 mb-6">
            Book a free strategy session and let’s build your success story.
          </p>
          <Link to="/contact">
            <button className="px-8 py-3 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-300 transition">
              Book Free Strategy Call
            </button>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}
