// src/components/Plans.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../utils/animationVariants";
import { FaLaptopCode, FaSearch, FaBullseye } from "react-icons/fa";
//
import GetStartedModal from "./GetStartedModal";

const plans = [
  {
    icon: <FaLaptopCode className="text-4xl text-blue-600 mb-4" />,
    title: "Website Design",
    desc: "Stunning, responsive websites built to convert visitors into customers.",
    price: "Starting at ₹9,999",
    features: [
      "Mobile Responsive",
      "SEO Optimized",
      "Fast Loading Speed",
      "Custom Design",
    ],
  },
  {
    icon: <FaSearch className="text-4xl text-green-600 mb-4" />,
    title: "Search Engine Optimization (SEO)",
    desc: "Boost your visibility on Google and drive organic traffic that matters.",
    price: "Starting at ₹6,999/month",
    features: [
      "Keyword Research",
      "On-Page SEO",
      "Technical SEO",
      "Monthly Reports",
    ],
  },
  {
    icon: <FaBullseye className="text-4xl text-pink-600 mb-4" />,
    title: "Google & Meta Ads",
    desc: "Targeted campaigns that deliver leads and scale your revenue quickly.",
    price: "Starting at ₹4,999/month + Ad Spend",
    features: [
      "Google & Facebook Ads",
      "Custom Landing Pages",
      "Conversion Tracking",
      "Performance Optimization",
    ],
  },
];

export default function Plans() {
  const [isModel, setIsModel] = useState(false);

  const handleGetstart = () => {
    setIsModel(true);
  };

  const onClose = () => {
    setIsModel(false);
  };
  return (
    <motion.section
      className="bg-gray-50 py-20 px-6"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold text-gray-800 mb-4"
          variants={fadeInUp}
        >
          Plans That Fit Your Goals
        </motion.h2>
        <motion.p className="text-lg text-gray-600 mb-12" variants={fadeInUp}>
          Simple, transparent pricing. Results-driven services.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8 text-left">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition duration-300"
              variants={fadeInUp}
            >
              {plan.icon}
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                {plan.title}
              </h3>
              <p className="text-gray-600 mb-4">{plan.desc}</p>
              <p className="font-semibold text-blue-600 mb-4">{plan.price}</p>
              <ul className="text-sm text-gray-700 space-y-1 mb-4">
                {plan.features.map((feature, i) => (
                  <li key={i}>✔ {feature}</li>
                ))}
              </ul>
              <button
                onClick={handleGetstart}
                className="mt-2 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-500 transition"
              >
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* <div>
        {isModel && <GetStartedModal isOpen={true} onClose={onClose} />}
      </div> */}
    </motion.section>
  );
}
