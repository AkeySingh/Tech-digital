// import React from "react";
// import { motion } from "framer-motion";
// import { fadeInUp, staggerContainer } from "../utils/animationVariants";

// const testimonials = [
//   {
//     name: "Ravi Sharma",
//     company: "StartupX",
//     feedback:
//       "Tech Digital Solutions helped us scale fast. Our traffic grew 4x in 3 months!",
//   },
//   {
//     name: "Priya Mehta",
//     company: "Design Craft",
//     feedback:
//       "They built a stunning website and handled SEO like pros. Highly recommended!",
//   },
//   {
//     name: "Arjun Desai",
//     company: "eCom Go",
//     feedback: "Loved their communication and performance-driven approach.",
//   },
// ];

// export default function Testimonials() {
//   return (
//     <motion.section
//       className="bg-gradient-to-tr from-white to-indigo-50 py-20 px-6"
//       variants={staggerContainer}
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true }}
//     >
//       <div className="max-w-6xl mx-auto text-center">
//         <motion.h2
//           className="text-4xl font-bold text-indigo-800 mb-10"
//           variants={fadeInUp}
//         >
//           What Our Clients Say
//         </motion.h2>

//         <div className="grid md:grid-cols-3 gap-8">
//           {testimonials.map((item, i) => (
//             <motion.div
//               key={i}
//               className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 text-left"
//               variants={fadeInUp}
//             >
//               <p className="text-gray-700 italic mb-4">“{item.feedback}”</p>
//               <h4 className="text-indigo-700 font-semibold text-lg">
//                 {item.name}
//               </h4>
//               <span className="text-indigo-500 text-sm">{item.company}</span>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </motion.section>
//   );
// }

import React from "react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../utils/animationVariants";
import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const testimonials = [
  {
    name: "Ravi Sharma",
    company: "StartupX",
    feedback:
      "Tech Digital Solutions helped us scale fast. Our traffic grew 4x in 3 months!",
    rating: 5,
  },
  {
    name: "Priya Mehta",
    company: "DesignCraft",
    feedback:
      "They built a stunning website and handled SEO like pros. Highly recommended!",
    rating: 5,
  },
  {
    name: "Arjun Desai",
    company: "eComGo",
    feedback: "Loved their communication and performance-driven approach.",
    rating: 4,
  },
];

export default function Testimonials() {
  return (
    <motion.section
      className="relative bg-gradient-to-tr from-white to-indigo-50 py-20 px-6"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Decorative background blobs */}
      <div className="absolute top-[-50px] left-[-50px] w-72 h-72 bg-indigo-200 rounded-full blur-3xl opacity-30 -z-10" />
      <div className="absolute bottom-[-60px] right-[-60px] w-96 h-96 bg-purple-300 rounded-full blur-3xl opacity-20 -z-10" />

      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-extrabold text-indigo-800 mb-10"
          variants={fadeInUp}
        >
          What Our Clients Say
        </motion.h2>

        {/* Mobile Swiper Slider */}
        <div className="block md:hidden">
          <Swiper
            spaceBetween={30}
            pagination={{ clickable: true }}
            modules={[Pagination]}
          >
            {testimonials.map((item, i) => (
              <SwiperSlide key={i}>
                <div className="bg-white p-8 rounded-2xl shadow-md text-left border-t-4 border-indigo-400 mx-4">
                  <p className="text-gray-600 italic mb-4 leading-relaxed">
                    “{item.feedback}”
                  </p>
                  <div className="flex items-center mb-2">
                    {[...Array(item.rating)].map((_, i) => (
                      <FaStar
                        key={i}
                        className="text-yellow-400 text-sm mr-1"
                      />
                    ))}
                  </div>
                  <h4 className="text-indigo-800 font-bold text-lg">
                    {item.name}
                  </h4>
                  <p className="text-indigo-500 text-sm">{item.company}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-10">
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 text-left border-t-4 border-indigo-400"
              variants={fadeInUp}
            >
              <p className="text-gray-600 italic mb-4 leading-relaxed">
                “{item.feedback}”
              </p>
              <div className="flex items-center mb-2">
                {[...Array(item.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-sm mr-1" />
                ))}
              </div>
              <h4 className="text-indigo-800 font-bold text-lg">{item.name}</h4>
              <p className="text-indigo-500 text-sm">{item.company}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
