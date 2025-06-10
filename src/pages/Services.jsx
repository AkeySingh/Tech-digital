import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaSearch,
  FaGoogle,
  FaFacebookF,
  FaLaptopCode,
  FaMobileAlt,
  FaEnvelope,
  FaLightbulb,
} from "react-icons/fa";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// const services = [
//   {
//     title: "Search Engine Optimization (SEO)",
//     description:
//       "Boost your website visibility and rankings with expert keyword research, on-page optimization, and link building.",
//   },
//   {
//     title: "PPC Advertising",
//     description:
//       "Launch high-converting Google Ads and retargeting campaigns to drive instant traffic and results.",
//   },
//   {
//     title: "Social Media Marketing",
//     description:
//       "Create brand awareness and engagement with strategic content and paid promotions across all platforms.",
//   },
//   {
//     title: "Website Design & Development",
//     description:
//       "Design responsive, high-performing websites using modern tech like React.js and Next.js.",
//   },
//   {
//     title: "Mobile App Development",
//     description:
//       "Build stunning, scalable mobile apps using React Native and Flutter tailored to your business goals.",
//   },
//   {
//     title: "Email Marketing",
//     description:
//       "Reach your audience with personalized emails, automated flows, and campaign analytics.",
//   },
//   {
//     title: "Branding & Strategy",
//     description:
//       "Develop a compelling brand identity and strategy to establish credibility and boost conversions.",
//   },
// ];

const services = [
  {
    title: "Search Engine Optimization (SEO)",
    description:
      "Boost your website visibility and rankings with expert keyword research, on-page optimization, and link building.",
    icon: <FaSearch className="text-blue-600 text-3xl mb-4" />,
  },
  {
    title: "PPC Advertising",
    description:
      "Launch high-converting Google Ads and retargeting campaigns to drive instant traffic and results.",
    icon: <FaGoogle className="text-blue-600 text-3xl mb-4" />,
  },
  {
    title: "Social Media Marketing",
    description:
      "Create brand awareness and engagement with strategic content and paid promotions across all platforms.",
    icon: <FaFacebookF className="text-blue-600 text-3xl mb-4" />,
  },
  {
    title: "Website Design & Development",
    description:
      "Design responsive, high-performing websites using modern tech like React.js and Next.js.",
    icon: <FaLaptopCode className="text-blue-600 text-3xl mb-4" />,
  },
  {
    title: "Mobile App Development",
    description:
      "Build stunning, scalable mobile apps using React Native and Flutter tailored to your business goals.",
    icon: <FaMobileAlt className="text-blue-600 text-3xl mb-4" />,
  },
  {
    title: "Email Marketing",
    description:
      "Reach your audience with personalized emails, automated flows, and campaign analytics.",
    icon: <FaEnvelope className="text-blue-600 text-3xl mb-4" />,
  },
  {
    title: "Branding & Strategy",
    description:
      "Develop a compelling brand identity and strategy to establish credibility and boost conversions.",
    icon: <FaLightbulb className="text-blue-600 text-3xl mb-4" />,
  },
];

export default function Services() {
  const [searchTerm, setSearchTerm] = useState("");

  const filtered = services.filter((service) =>
    service.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-28 px-6 text-center">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Digital Services That Deliver Results
        </motion.h1>
        <p className="text-lg max-w-3xl mx-auto mb-8">
          Elevate your business with our comprehensive suite of
          performance-driven digital solutions.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="bg-white text-blue-700 px-6 py-3 rounded-full font-semibold shadow-md"
        >
          Let's Work Together
        </motion.button>
      </section>

      {/* Services Section */}
      <motion.section
        className="bg-white py-20 px-6"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto text-center mb-12">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
            variants={fadeInUp}
          >
            Explore Our Services
          </motion.h2>
          <p className="text-gray-600 text-lg">
            We combine creativity, data, and <techn></techn>ology to build
            powerful digital experiences.
          </p>
        </div>

        {/* Search Input */}
        <div className="max-w-xl mx-auto mb-10">
          <input
            type="text"
            placeholder="Search services..."
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Service Cards */}
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {filtered.map((service, index) => (
              <motion.div
                key={index + "filtered_services"}
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0 }}
                className="bg-gray-50 border border-gray-100 rounded-xl shadow-sm hover:shadow-lg transition p-6"
              >
                <div className="flex flex-col items-center text-center">
                  {service.icon}
                  <h3 className="text-xl font-semibold text-blue-700 mb-2">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </motion.section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-t from-gray-100 to-white text-center">
        <h2 className="text-3xl font-bold mb-10">Our 4-Step Process</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {["Discover", "Design", "Develop", "Deploy"].map((step, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-xl shadow text-center"
            >
              <div className="text-blue-600 text-2xl font-bold mb-1">
                {i + 1}
                {/* -Step */}
              </div>
              <h4 className="font-semibold text-gray-800">{step}</h4>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Sticky CTA */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <a
          href="/contact"
          className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-full shadow-xl hover:scale-105 transition-all"
        >
          Get a Free Consultation
        </a>
      </motion.div>
    </>
  );
}
