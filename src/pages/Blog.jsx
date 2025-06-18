// Blog.jsx
import React from "react";
import { motion } from "framer-motion";
import { blogs } from "../data/blog";
import { Link } from "react-router-dom";

const fadeIn = {
  //   hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
};

export default function Blog() {
  return (
    <section className="bg-white text-gray-800 py-20 px-4">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <motion.h1
          className="text-4xl font-bold mb-4"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
        >
          Latest Insights & Articles
        </motion.h1>
        <motion.p
          className="text-lg text-gray-600"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
        >
          Stay updated with industry trends, tips, and strategies from our
          experts.
        </motion.p>
      </div>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {blogs.map((blog, index) => (
          <motion.div
            key={blog.id}
            className="bg-gray-50 rounded-xl shadow hover:shadow-md transition overflow-hidden"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-52 object-cover"
            />
            <div className="p-6">
              <span className="text-sm text-blue-600 font-semibold">
                {blog.category}
              </span>
              <h3 className="text-xl font-bold mt-2 mb-2">{blog.title}</h3>
              <p className="text-gray-600 text-sm">{blog.summary}</p>
              <div className="mt-4 text-xs text-gray-500">
                By {blog.author} · {new Date(blog.date).toLocaleDateString()}
              </div>
            </div>
            <div className="p-6 pt-0">
              <button className="mt-2 text-sm font-medium text-blue-600 hover:underline">
                <Link to={`/blog/${blog.slug}`}>Read More →</Link>
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
