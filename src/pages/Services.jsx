// src/components/Services.jsx
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const services = [
  {
    title: "Search Engine Optimization (SEO)",
    slug: "seo",
    description:
      "Improve your website’s visibility on search engines with expert keyword research, technical fixes, and high-quality backlinks.",
  },
  {
    title: "Pay-Per-Click (PPC) Advertising",
    slug: "ppc-advertising",
    description:
      "Drive targeted traffic instantly with Google Ads, Bing Ads, and retargeting campaigns tailored to your business goals.",
  },
  {
    title: "Social Media Marketing",
    slug: "social-media-marketing",
    description:
      "Build your brand and connect with your audience through strategic content, paid ads, and performance-driven campaigns.",
  },
  {
    title: "Website Design & Development",
    slug: "website-design-development",
    description:
      "We design stunning, responsive websites that load fast, look great, and are optimized to convert visitors into customers.",
    subservices: [
      {
        title: "WordPress Development",
        description:
          "Flexible and SEO-friendly websites built with the most popular CMS in the world.",
      },
      {
        title: "Shopify Development",
        description:
          "E-commerce solutions that are fast, scalable, and easy to manage using Shopify.",
      },
      {
        title: "Custom Web Development",
        description:
          "Tailored websites built from scratch using modern frameworks like React.js or Next.js.",
      },
      {
        title: "Landing Page Design",
        description:
          "High-converting landing pages designed to capture leads and drive sales.",
      },
      {
        title: "UI/UX Design",
        description:
          "Clean, intuitive user interface designs that enhance user experience and increase engagement.",
      },
      {
        title: "Website Redesign",
        description:
          "Revamp your existing site with a fresh look, better speed, and improved responsiveness.",
      },
    ],
  },
  {
    title: "App Design & Development",
    slug: "app-design-development",
    description:
      "Design and develop intuitive mobile apps using React Native or Flutter, with a focus on performance and great UI/UX.",
  },
  {
    title: "Email Marketing",
    slug: "email-marketing",
    description:
      "Automate campaigns, segment your audience, and optimize open rates with powerful email marketing strategies.",
  },
  {
    title: "Branding & Strategy",
    slug: "branding-strategy",
    description:
      "Craft a strong brand identity and strategic marketing roadmap to stand out and convert more leads into customers.",
  },
];

export default function Services() {
  const [openIndex, setOpenIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const filteredServices = services.filter((service) =>
    service.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <>
      <motion.section
        className="bg-white py-20 px-4"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="container mx-auto max-w-7xl">
          <motion.h2
            className="text-4xl font-bold text-center text-gray-800 mb-12"
            variants={fadeInUp}
          >
            Our Digital Services
          </motion.h2>

          <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-24 px-6 text-center">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold mb-4"
            >
              Power Your Business with Digital Growth
            </motion.h1>
            <p className="text-lg max-w-2xl mx-auto">
              From SEO to full-stack web development, we craft digital
              experiences that convert.
            </p>
          </section>

          <input
            type="text"
            placeholder="Search services..."
            className="w-full p-2 border border-gray-300 rounded mb-4"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {/* {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-xl shadow p-6 hover:shadow-lg transition duration-300"
                variants={fadeInUp}
              >
                <h3 className="text-xl font-semibold text-blue-700 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-700 text-sm mb-3">
                  {service.description}
                </p>

                {service.subservices && (
                  <div className="mt-3">
                    <h4 className="text-md font-semibold text-gray-800 mb-1">
                      Subservices:
                    </h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                      {service.subservices.map((sub, i) => (
                        <li key={i}>
                          <span className="font-medium">{sub.title}:</span>{" "}
                          {sub.description}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </motion.div>
            ))} */}

            {services.map((service, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-xl shadow hover:shadow-lg"
              >
                <h3
                  onClick={() =>
                    setOpenIndex(index === openIndex ? null : index)
                  }
                  className="cursor-pointer text-xl font-semibold text-blue-700"
                >
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 mt-2">
                  {service.description}
                </p>

                <AnimatePresence>
                  {openIndex === index && service.subservices && (
                    <motion.ul
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden mt-3 pl-4 text-sm text-gray-600 space-y-2"
                    >
                      {service.subservices.map((sub, i) => (
                        <li key={i}>
                          <strong>{sub.title}:</strong> {sub.description}
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </motion.section>
      <section className="py-20 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-10">Our 4-Step Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {["Plan", "Design", "Develop", "Deliver"].map((step, index) => (
            <motion.div
              key={step}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-xl shadow"
            >
              <div className="text-blue-600 text-2xl font-bold mb-2">
                {index + 1}
              </div>
              <h4 className="font-semibold text-gray-700">{step}</h4>
            </motion.div>
          ))}
        </div>
      </section>
      <div className="bg-gradient-to-br from-white to-blue-50 hover:from-blue-100 hover:to-blue-200 transition rounded-xl p-6 shadow">
        <h3 className="text-xl font-bold text-blue-700 mb-2">
          PPC Advertising
        </h3>
        <p className="text-sm text-gray-700">
          Launch paid campaigns that drive results.
        </p>
      </div>
      // Sticky CTA Button (bottom-right)
      <div className="fixed bottom-6 right-6 z-50">
        <button className="bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-500 transition">
          Get in Touch
        </button>
      </div>
    </>
  );
}
