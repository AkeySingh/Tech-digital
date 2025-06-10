// src/components/About.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaBullseye, FaRocket, FaUsers } from "react-icons/fa";

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function About() {
  return (
    <section className="bg-white text-gray-800">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-100 to-white py-20 px-4 text-center">
        <motion.h1
          className="text-5xl font-bold mb-4"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          About Tech Digital Solutions
        </motion.h1>
        <motion.p
          className="text-lg max-w-2xl mx-auto text-gray-600"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
        >
          Empowering businesses with innovative digital solutions that deliver
          measurable growth and long-lasting results.
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
            At Tech Digital Solutions, we’re a team of creatives, developers,
            and strategists who are passionate about building your online
            presence. We specialize in web development, SEO, social media, and
            full-stack marketing tailored to your unique business needs.
          </p>
          <p className="mt-4 text-gray-700">
            Our mission is to simplify digital growth for startups, small
            businesses, and enterprises alike—by crafting clean, effective, and
            conversion-driven digital strategies.
          </p>
        </motion.div>
        <motion.img
          src="https://source.unsplash.com/600x400/?technology,team"
          alt="Team"
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
              To deliver innovative digital marketing and development solutions
              that empower businesses to grow faster and smarter.
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
              To become a trusted global digital partner known for transparency,
              creativity, and performance excellence.
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
                desc: "Experienced developers and digital marketers under one roof.",
              },
              {
                icon: <FaRocket className="text-pink-500 text-3xl mb-2" />,
                title: "Growth-Focused",
                desc: "We design every strategy to maximize ROI and conversions.",
              },
              {
                icon: <FaBullseye className="text-green-500 text-3xl mb-2" />,
                title: "Result-Driven",
                desc: "Transparent processes and measurable outcomes in every campaign.",
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
          Contact us today and take the first step towards digital growth.
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
