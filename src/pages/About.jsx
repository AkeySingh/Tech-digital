import React from "react";
import { motion } from "framer-motion";
import { FaRocket, FaUsers, FaChartLine, FaCogs } from "react-icons/fa";

export default function About() {
  return (
    <div className="bg-white">
      {/* 🔹 Hero Banner */}
      <div
        className="bg-cover bg-center h-[400px] flex items-center justify-center text-white"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1531496651587-1c1a6b1b68d5?auto=format&fit=crop&w=1650&q=80')",
        }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold bg-black bg-opacity-50 px-4 py-2 rounded"
        >
          About Tech Digital Solutions
        </motion.h1>
      </div>

      {/* 🔹 Who We Are */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">
            Who We Are
          </h2>
          <p className="text-lg text-gray-600 leading-8 text-center max-w-3xl mx-auto">
            We are a passionate team of designers, developers, and marketers
            helping businesses make an impact online. With a focus on strategy,
            innovation, and results—we bring your digital ideas to life.
          </p>
        </motion.div>
      </section>

      {/* 🔹 Mission and Vision */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1603381447937-6ccfcf4a2cf5?auto=format&fit=crop&w=800&q=80"
              alt="Mission"
              className="rounded-xl shadow-md"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-semibold text-gray-800 mb-4">
              Our Mission & Vision
            </h3>
            <p className="text-gray-700 leading-7">
              Our mission is to help businesses thrive through digital
              transformation. We envision a world where every business, big or
              small, has access to powerful tools that drive growth and
              visibility in the online world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 🔹 Why Choose Us */}
      <section className="py-20 px-6 max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold text-gray-800 mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Why Choose Tech Digital Solutions?
        </motion.h2>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            {
              icon: <FaRocket size={40} className="text-blue-600 mb-3" />,
              title: "Result Driven",
              desc: "Everything we do is aimed at getting you measurable results.",
            },
            {
              icon: <FaUsers size={40} className="text-green-600 mb-3" />,
              title: "Client-Centric",
              desc: "We build lasting relationships with honesty and transparency.",
            },
            {
              icon: <FaChartLine size={40} className="text-purple-600 mb-3" />,
              title: "Marketing Experts",
              desc: "From SEO to paid ads—we bring full-stack digital expertise.",
            },
            {
              icon: <FaCogs size={40} className="text-red-500 mb-3" />,
              title: "Tech-Savvy",
              desc: "We use modern tools and trends to stay ahead of the curve.",
            },
          ].map((card, idx) => (
            <motion.div
              key={idx}
              className="p-6 bg-white rounded-xl shadow hover:shadow-xl transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              {card.icon}
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                {card.title}
              </h4>
              <p className="text-gray-600">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🔹 Optional Team Section */}
      {/* <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h2
            className="text-4xl font-bold mb-6 text-gray-800"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Meet Our Team
          </motion.h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-10">
            We're a crew of creators, thinkers, problem-solvers, and doers—
            united by a passion for digital excellence.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {["dev", "seo", "design", "ads"].map((role, i) => (
              <motion.div
                key={i}
                className="bg-white p-4 rounded-lg shadow-md"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.2, duration: 0.4 }}
                viewport={{ once: true }}
              >
                <img
                  src={`https://randomuser.me/api/portraits/${
                    i % 2 === 0 ? "men" : "women"
                  }/${20 + i}.jpg`}
                  alt={role}
                  className="w-20 h-20 mx-auto rounded-full mb-3"
                />
                <h4 className="text-lg font-semibold text-gray-800">
                  {role.toUpperCase()} Lead
                </h4>
                <p className="text-sm text-gray-500">Creative & Dedicated</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
}
