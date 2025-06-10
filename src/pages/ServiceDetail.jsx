import { useParams, Link } from "react-router-dom";
import { services } from "../data/services";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import * as SiIcons from "react-icons/si";
import CoreServices from "../components/CoreServices";

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);
  const [openFAQ, setOpenFAQ] = useState(null);

  if (!service) {
    return (
      <div className="py-24 text-center text-red-500">
        <h1 className="text-3xl font-bold">Service Not Found</h1>
        <Link to="/services" className="text-blue-600 mt-4 block">
          ← Back to Services
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Hero */}
      <motion.section
        className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white py-20 text-center px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{service.title}</h1>
        <p className="text-lg max-w-2xl mx-auto">{service.description}</p>
      </motion.section>

      {/* Content */}
      <motion.section
        className="max-w-6xl mx-auto px-4 py-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {/* Description */}
        <p className="text-lg text-gray-700 mb-12 leading-relaxed">
          {service.fullContent}
        </p>

        {/* Features & Benefits */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">
              Key Features
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-800">
              {service.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-green-600 mb-4">
              Benefits
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-800">
              {service.benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Core services */}
        {service.coreServices && (
          <CoreServices services={service.coreServices} />
        )}

        {/* Tools Used */}
        {/* {service.toolsUsed && (
          <div className="mb-16">
            <h2 className="text-2xl font-semibold text-yellow-600 mb-4">
              Tools We Use
            </h2>
            <div className="flex flex-wrap gap-3">
              {service.toolsUsed.map((tool, i) => (
                <span
                  key={i}
                  className="bg-yellow-100 text-yellow-800 text-sm font-medium px-3 py-1 rounded-full"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        )} */}

        {/* Target Industries */}
        {/* {service.targetIndustries && (
          <div className="mb-16">
            <h2 className="text-2xl font-semibold text-cyan-700 mb-4">
              Industries We Serve
            </h2>
            <div className="flex flex-wrap gap-3">
              {service.targetIndustries.map((industry, i) => (
                <span
                  key={i}
                  className="bg-cyan-100 text-cyan-800 text-sm font-medium px-3 py-1 rounded-full"
                >
                  {industry}
                </span>
              ))}
            </div>
          </div>
        )} */}

        {/* Tools Used */}
        {service.toolsUsed && (
          <div className="mb-16">
            <h2 className="text-2xl font-semibold text-yellow-600 mb-4">
              Tools We Use
            </h2>
            <div className="flex flex-wrap gap-3">
              {service.toolsUsed.map(({ name, icon }, i) => {
                const Icon = SiIcons[icon];
                return (
                  <span
                    key={i}
                    className="flex items-center gap-2 bg-yellow-100 text-yellow-800  font-medium px-3 py-1 rounded-full"
                  >
                    {Icon && <Icon className="text-lg" />}
                    {name}
                  </span>
                );
              })}
            </div>
          </div>
        )}

        {/* Target Industries */}
        {service.targetIndustries && (
          <div className="mb-16">
            <h2 className="text-2xl font-semibold text-cyan-700 mb-4">
              Industries We Serve
            </h2>
            <div className="flex flex-wrap gap-3">
              {service.targetIndustries.map(({ name, icon }, i) => {
                const Icon = SiIcons[icon];
                return (
                  <span
                    key={i}
                    className="flex items-center gap-2 bg-cyan-100 text-cyan-800  font-medium px-3 py-1 rounded-full"
                  >
                    {Icon && <Icon className="text-lg" />}
                    {name}
                  </span>
                );
              })}
            </div>
          </div>
        )}

        {/* Pricing Note */}
        {service.pricingNote && (
          <div className="mb-16 bg-blue-50 border-l-4 border-blue-400 p-4">
            <p className="text-blue-700 font-medium">{service.pricingNote}</p>
          </div>
        )}

        {/* FAQ Section */}
        <div className="mb-20">
          <h2 className="text-2xl font-semibold text-purple-700 mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {service.faqs.map((faq, index) => (
              <div key={index} className="border rounded-md overflow-hidden">
                <button
                  className="w-full px-4 py-3 text-left bg-gray-100 hover:bg-gray-200 transition font-medium"
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                >
                  Q: {faq.question}
                </button>
                <AnimatePresence>
                  {openFAQ === index && (
                    <motion.div
                      className="px-4 py-3 text-gray-700 bg-white"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                    >
                      A: {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            to="/contact"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full shadow hover:bg-blue-500 transition"
          >
            Get Started With This Service
          </Link>
          <div className="mt-6">
            <Link to="/services" className="text-blue-600 hover:underline">
              ← Back to All Services
            </Link>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
