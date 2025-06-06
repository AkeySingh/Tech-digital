// src/components/Services.jsx
import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Website Design & Development",
    description: "Responsive and SEO-friendly websites that drive conversions.",
  },
  {
    title: "Search Engine Optimization (SEO)",
    description: "Boost your visibility on Google and attract organic traffic.",
  },
  {
    title: "Google My Business (GMB)",
    description:
      "Rank locally and dominate your city searches with GMB optimization.",
  },
  {
    title: "Social Media Marketing",
    description: "Engage your audience with powerful content and campaigns.",
  },
  {
    title: "Paid Ads (Meta & Google)",
    description: "Run effective ad campaigns to get instant qualified leads.",
  },
];

export default function Services() {
  return (
    <section className="bg-white py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Our Digital Services
        </h2>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="p-6 bg-gradient-to-tr from-blue-100 to-purple-100 rounded-xl shadow-lg"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-blue-700 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-700">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
