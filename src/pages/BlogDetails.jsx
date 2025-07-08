// import React from "react";
// import { useParams, Link } from "react-router-dom";
// import { blogs } from "../data/blog";
// import { motion } from "framer-motion";
// import { FaCalendarAlt, FaUser, FaClock } from "react-icons/fa";

// const fadeIn = {
//   hidden: { opacity: 0, y: 30 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
// };

// export default function BlogDetails() {
//   const { slug } = useParams();
//   const blog = blogs.find((b) => b.slug === slug);

//   if (!blog) {
//     return (
//       <div className="text-center py-20 text-gray-600">
//         <h2 className="text-2xl font-bold">Blog not found</h2>
//         <Link to="/blogs" className="text-blue-600 mt-4 inline-block underline">
//           Back to Blog List
//         </Link>
//       </div>
//     );
//   }

//   return (
//     <section className="bg-white text-gray-800 px-4 py-10 md:py-20">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
//         {/* Sidebar (Desktop only) */}
//         <aside className="hidden md:flex flex-col gap-6 text-sm text-gray-500 col-span-1 sticky top-24 self-start">
//           <div className="flex items-center gap-2">
//             <FaUser className="text-blue-600" />
//             <span>{blog.author}</span>
//           </div>
//           <div className="flex items-center gap-2">
//             <FaCalendarAlt className="text-blue-600" />
//             <span>{blog.date}</span>
//           </div>
//           <div className="flex items-center gap-2">
//             <FaClock className="text-blue-600" />
//             <span>{blog.readingTime}</span>
//           </div>
//           <Link
//             to="/blog"
//             className="mt-4 text-blue-600 underline hover:text-blue-800 transition"
//           >
//             ← Back to All Blogs
//           </Link>
//         </aside>

//         {/* Main Content */}
//         <div className="col-span-1 md:col-span-3">
//           <motion.h1
//             className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight tracking-tight"
//             variants={fadeIn}
//             initial="hidden"
//             animate="visible"
//           >
//             {blog.title}
//           </motion.h1>

//           {/* Mobile Meta */}
//           <div className="md:hidden mb-6 space-y-2 text-sm text-gray-500">
//             <div className="flex items-center gap-2">
//               <FaUser className="text-blue-600" />
//               <span>{blog.author}</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <FaCalendarAlt className="text-blue-600" />
//               <span>{blog.date}</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <FaClock className="text-blue-600" />
//               <span>{blog.readingTime}</span>
//             </div>
//           </div>

//           {/* Image */}
//           <motion.div
//             className="overflow-hidden rounded-xl shadow-xl mb-10"
//             initial={{ opacity: 0, scale: 0.95 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.5 }}
//           >
//             <img
//               src={blog.image}
//               alt={blog.title}
//               className="w-full h-auto object-cover"
//             />
//           </motion.div>

//           {/* Content */}
//           <motion.article
//             className="space-y-10 text-lg leading-relaxed"
//             initial="hidden"
//             animate="visible"
//             variants={fadeIn}
//             transition={{ delay: 0.3 }}
//           >
//             {blog.content.map((section, i) => (
//               <div key={i}>
//                 <h2 className="text-2xl font-semibold text-blue-700 mb-2 border-b pb-2 border-blue-100">
//                   {section.title}
//                 </h2>
//                 <p className="text-gray-800">{section.description}</p>
//               </div>
//             ))}
//           </motion.article>

//           {/* Back button for mobile */}
//           <div className="md:hidden mt-10 text-center">
//             <Link
//               to="/blog"
//               className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium transition"
//             >
//               ← Back to All Blogs
//             </Link>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import React from "react";
import { useParams, Link } from "react-router-dom";
import { blogs } from "../data/blog";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaUser, FaClock } from "react-icons/fa";

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
    <section className="bg-white text-gray-900">
      {/* HERO SECTION */}
      <div className="relative w-full h-[380px] md:h-[500px] overflow-hidden">
        <img
          src={blog.image}
          alt={blog.title}
          className="absolute w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/60  z-10" />
        <div className="relative z-20 h-full flex flex-col justify-center items-center text-white text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight max-w-3xl"
          >
            {blog.title}
          </motion.h1>

          <motion.div
            className="flex flex-wrap justify-center gap-6 text-sm text-gray-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <span className="flex items-center gap-2">
              <FaUser /> {blog.author}
            </span>
            <span className="flex items-center gap-2">
              <FaCalendarAlt /> {blog.date}
            </span>
            <span className="flex items-center gap-2">
              <FaClock /> {blog.readingTime}
            </span>
          </motion.div>
        </div>
      </div>

      {/* CONTENT SECTION */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-10 px-4 py-20">
        {/* Sticky Sidebar (Desktop only) */}
        <aside className="hidden lg:block col-span-1">
          <div className="sticky top-32 space-y-5 text-sm text-gray-700 p-4 bg-gray-50 rounded-xl border shadow-sm">
            <div className="flex items-center gap-2">
              <FaUser className="text-blue-600" />
              <span>{blog.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCalendarAlt className="text-blue-600" />
              <span>{blog.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <FaClock className="text-blue-600" />
              <span>{blog.readingTime}</span>
            </div>
            <Link
              to="/blog"
              className="inline-block mt-6 bg-blue-600 text-white px-4 py-2 rounded-full text-center hover:bg-blue-700 transition"
            >
              ← All Blogs
            </Link>
          </div>
        </aside>

        {/* Main Article Content */}
        <motion.article
          className="col-span-1 lg:col-span-3 space-y-14 text-base leading-relaxed text-gray-800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          {blog.content.map((section, i) => (
            <div key={i}>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 border-b pb-2 border-blue-100">
                {section.title}
              </h2>
              <p className="text-gray-700 text-lg">{section.description}</p>
            </div>
          ))}

          {/* Back to Blogs Button (mobile only) */}
          <div className="lg:hidden text-center pt-10">
            <Link
              to="/blog"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium transition"
            >
              ← Back to All Blogs
            </Link>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
