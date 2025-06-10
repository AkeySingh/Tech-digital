import { motion } from "framer-motion";
import * as FaIcons from "react-icons/fa";

export default function CoreServices({ services }) {
  return (
    <section className="mb-20 bg-[#f9f7f6] py-16 px-4">
      <h2 className="text-3xl font-bold text-center text-[#f6a801] mb-10">
        Core SEO Services
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((item, index) => {
          const IconComponent = FaIcons[item.icon] || FaIcons.FaCogs;

          return (
            <motion.div
              key={index + "services_data"}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 250 }}
              className="bg-white border border-[#f6a80133] shadow hover:shadow-lg rounded-2xl p-6 transition duration-300"
            >
              <div className="flex items-start gap-4">
                <IconComponent
                  className="text-[#00a2ad]"
                  style={{ fontSize: "2.5rem", minWidth: "28px" }}
                  aria-hidden="true"
                />

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
