///---------------------------------------------------
// src/components/About.jsx
import React from "react";
import { motion } from "framer-motion";
import teamImg from "../utils/team03.svg";
import {
  FaBullseye,
  FaRocket,
  FaUsers,
  FaAward,
  FaHandshake,
  FaStar,
} from "react-icons/fa";

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function About() {
  return (
    <section className="bg-white text-gray-800">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-400 to-white py-20 px-4 text-center">
        <motion.h1
          className="text-5xl font-bold mb-4"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          About Tech Digital
        </motion.h1>
        <motion.p
          className="text-lg max-w-2xl mx-auto text-gray-600"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
        >
          Trusted by businesses across industries, we deliver results-driven
          digital solutions with honesty, creativity, and measurable impact.
        </motion.p>
      </div>

      {/* Who We Are */}
      <div className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
          <p className="text-gray-700 leading-7">
            Tech Digital is a passionate team of strategists, developers, and
            marketers dedicated to crafting tailored digital solutions. From
            startups to enterprises, we simplify your path to digital success.
          </p>
          <p className="mt-4 text-gray-700">
            With a focus on transparency and long-term partnerships, we turn
            your ideas into scalable, data-backed digital experiences.
          </p>
        </motion.div>

        <motion.img
          src={teamImg}
          alt="Teamwork Illustration"
          className="rounded-xl shadow-md"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        />
      </div>

      {/* Mission & Vision */}
      <div className="bg-gray-50 py-16 px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          <motion.div variants={fadeIn} initial="hidden" whileInView="visible">
            <FaRocket className="text-blue-600 text-4xl mb-2" />
            <h3 className="text-2xl font-semibold mb-2">Our Mission</h3>
            <p className="text-gray-700">
              To empower businesses through innovative, ethical, and data-driven
              digital marketing & development solutions.
            </p>
          </motion.div>
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            transition={{ delay: 0.2 }}
          >
            <FaBullseye className="text-green-600 text-4xl mb-2" />
            <h3 className="text-2xl font-semibold mb-2">Our Vision</h3>
            <p className="text-gray-700">
              To become the most trusted digital partner for businesses
              worldwide, known for results, relationships, and reliability.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-10">Why Choose Us?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaUsers className="text-blue-500 text-3xl mb-2" />,
                title: "Expert Team",
                desc: "Experienced developers, designers & marketers under one roof.",
              },
              {
                icon: <FaRocket className="text-pink-500 text-3xl mb-2" />,
                title: "Growth-Focused",
                desc: "ROI-first approach tailored for measurable outcomes.",
              },
              {
                icon: <FaHandshake className="text-green-500 text-3xl mb-2" />,
                title: "Client-Centric",
                desc: "We listen, adapt, and deliver with transparency and dedication.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="p-6 rounded-xl shadow hover:shadow-lg bg-gray-50"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                variants={fadeIn}
              >
                {item.icon}
                <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-blue-50 py-16">
        <div className="max-w-5xl mx-auto text-center grid sm:grid-cols-3 gap-6">
          {[
            {
              icon: <FaAward />,
              label: "Projects Delivered",
              value: "150+",
              color: "text-yellow-500",
            },
            {
              icon: <FaUsers />,
              label: "Happy Clients",
              value: "100+",
              color: "text-green-500",
            },
            {
              icon: <FaStar />,
              label: "Client Rating",
              value: "4.4/5",
              color: "text-purple-500",
            },
          ].map((stat, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center"
              initial="hidden"
              whileInView="visible"
              variants={fadeIn}
              transition={{ delay: i * 0.2 }}
            >
              <div className={`text-4xl mb-2 ${stat.color}`}>{stat.icon}</div>
              <h3 className="text-2xl font-bold">{stat.value}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Partners Section */}
      <div className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            className="text-3xl font-bold mb-6"
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
          >
            Our Trusted Partners
          </motion.h2>
          <motion.p
            className="text-gray-600 mb-10"
            initial="hidden"
            whileInView="visible"
            transition={{ delay: 0.2 }}
          >
            We're proud to collaborate with 16+ industry-leading partners who
            trust our expertise and innovation.
          </motion.p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="opacity-80 hover:opacity-100 transition"
                initial="hidden"
                whileInView="visible"
                transition={{ delay: i * 0.2 }}
                variants={fadeIn}
              >
                <img
                  src={`https://via.placeholder.com/120x60?text=Logo+${i + 1}`}
                  alt={`Partner ${i + 1}`}
                  className="mx-auto"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">What Our Clients Say</h2>
          <p className="text-gray-600 italic">
            “Tech Digital Solutions helped us grow our online presence 3x in
            just a few months. Professional, proactive, and results-driven
            team!” —{" "}
            <strong>
              Ravi Shankar Das, CEO, Freedom Solutions Associates.
            </strong>
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-blue-600 text-white text-center py-16 px-4">
        <motion.h2
          className="text-3xl font-bold mb-4"
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
        >
          Let’s Build Something Amazing Together
        </motion.h2>
        <motion.p
          className="mb-6 text-lg"
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 0.2 }}
        >
          Contact us today and take the first step toward digital growth.
        </motion.p>
        <motion.a
          href="/contact"
          className="inline-block bg-white text-blue-600 font-semibold py-3 px-6 rounded-full hover:bg-gray-100 transition"
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 0.3 }}
        >
          Get in Touch
        </motion.a>
      </div>
    </section>
  );
}
