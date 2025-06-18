// // src/pages/BlogDetail.jsx
// import React from "react";
// import { useParams, Link } from "react-router-dom";
// import { blogs } from "../data/blog";
// import { motion } from "framer-motion";

// const fadeIn = {
//   hidden: { opacity: 0, y: 30 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
// };

// export default function BlogDetails() {
//   const { slug } = useParams();
//   const blog = blogs.find((b) => b.slug === slug);

//   if (!blog) {
//     return (
//       <div className="text-center py-20">
//         <h2 className="text-2xl font-bold text-red-600">Blog not found</h2>
//         <Link to="/blog" className="text-blue-500 underline mt-4 block">
//           Go Back to Blog
//         </Link>
//       </div>
//     );
//   }

//   return (
//     <section className="bg-white text-gray-800 py-16 px-6 max-w-5xl mx-auto">
//       <motion.img
//         src={blog.image}
//         alt={blog.title}
//         className="w-full h-72 object-cover rounded-xl mb-8"
//         initial="hidden"
//         animate="visible"
//         variants={fadeIn}
//       />
//       <motion.h1
//         className="text-4xl font-bold mb-4"
//         initial="hidden"
//         animate="visible"
//         variants={fadeIn}
//       >
//         {blog.title}
//       </motion.h1>
//       <motion.div
//         className="text-sm text-gray-500 mb-6"
//         initial="hidden"
//         animate="visible"
//         transition={{ delay: 0.2 }}
//       >
//         By {blog.author} · {new Date(blog.date).toLocaleDateString()} ·{" "}
//         <span className="text-blue-600">{blog.category}</span>
//       </motion.div>
//       <motion.p
//         className="text-lg leading-7 whitespace-pre-line text-gray-700"
//         initial="hidden"
//         animate="visible"
//         transition={{ delay: 0.3 }}
//       >
//         {blog.content}
//       </motion.p>

//       <Link
//         to="/blog"
//         className="mt-8 inline-block text-blue-600 font-medium underline hover:text-blue-800"
//       >
//         ← Back to Blog
//       </Link>
//     </section>
//   );
// }

// src/pages/BlogDetails.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import { blogs } from "../data/blog";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaUser, FaClock } from "react-icons/fa";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function BlogDetails() {
  const { slug } = useParams();
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <div className="text-center py-20 text-gray-600">
        <h2 className="text-2xl font-bold">Blog not found</h2>
        <Link to="/blogs" className="text-blue-600 mt-4 inline-block underline">
          Back to Blog List
        </Link>
      </div>
    );
  }

  return (
    <section className="bg-white text-gray-800 px-4 py-16">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <motion.h1
          className="text-4xl font-bold mb-4 text-center"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
        >
          {blog.title}
        </motion.h1>

        {/* Meta */}
        <motion.div
          className="flex justify-center gap-6 text-sm text-gray-500 mb-6"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center gap-2">
            <FaUser /> {blog.author}
          </div>
          <div className="flex items-center gap-2">
            <FaCalendarAlt /> {blog.date}
          </div>
          <div className="flex items-center gap-2">
            <FaClock /> {blog.readingTime}
          </div>
        </motion.div>

        {/* Image */}
        <motion.img
          src={blog.image}
          alt={blog.title}
          className="w-full h-auto rounded-xl mb-8 shadow-md"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        />

        {/* Content */}
        <motion.article
          className="prose max-w-none prose-lg text-gray-700"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ delay: 0.3 }}
        >
          {blog.content.split("\n").map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </motion.article>

        {/* Back to blogs */}
        <motion.div
          className="mt-12 text-center"
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4 }}
        >
          <Link
            to="/blog   "
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition"
          >
            ← Back to All Blogs
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
