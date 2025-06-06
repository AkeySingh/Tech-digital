// import React, { useState } from "react";
// import { motion } from "framer-motion";

// export default function Contact() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });
//   const [errors, setErrors] = useState({});
//   const [submitted, setSubmitted] = useState(false);

//   const validate = () => {
//     const newErrors = {};
//     if (!formData.name.trim()) newErrors.name = "Name is required.";
//     if (!formData.email.trim()) {
//       newErrors.email = "Email is required.";
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = "Enter a valid email address.";
//     }
//     if (!formData.message.trim()) newErrors.message = "Message is required.";
//     return newErrors;
//   };

//   const handleChange = (e) => {
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//     setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const validationErrors = validate();
//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//     } else {
//       console.log("Form Submitted:", formData);
//       setSubmitted(true);
//       setFormData({ name: "", email: "", message: "" });
//     }
//   };

//   return (
//     <section className="bg-white relative py-20 px-6">
//       <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
//         {/* Left Side */}
//         <motion.div
//           initial={{ opacity: 0, x: -40 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//         >
//           <h2 className="text-4xl font-bold text-blue-800 mb-6">Let’s Talk</h2>
//           <p className="text-lg text-blue-700 mb-6">
//             Have a project or partnership in mind? Share your details and our
//             team will get back to you shortly.
//           </p>

//           <ul className="text-blue-600 mb-8 space-y-3">
//             <li>
//               <strong>📍 Address:</strong> 123 Startup Lane, Delhi, India
//             </li>
//             <li>
//               <strong>📞 Phone:</strong> +91-9876543210
//             </li>
//             <li>
//               <strong>✉️ Email:</strong> hello@yourcompany.com
//             </li>
//           </ul>

//           <div className="rounded-lg overflow-hidden shadow-lg">
//             <iframe
//               title="Google Map"
//               className="w-full h-64 border-0"
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14014.998254410762!2d77.20513405!3d28.6139396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2f320c7f859%3A0x593c0eb30c6c01d3!2sConnaught%20Place%2C%20New%20Delhi!5e0!3m2!1sen!2sin!4v1660000000000"
//               allowFullScreen=""
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//             ></iframe>
//           </div>
//         </motion.div>

//         {/* Right Side Form */}
//         <motion.div
//           initial={{ opacity: 0, x: 40 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="bg-white p-8 rounded-xl shadow-xl"
//         >
//           {submitted && (
//             <div className="mb-6 bg-green-100 text-green-800 p-4 rounded">
//               ✅ Thank you! We’ll respond within 24 hours.
//             </div>
//           )}
//           <form className="space-y-6" onSubmit={handleSubmit} noValidate>
//             <div>
//               <label className="block text-blue-700 font-semibold">
//                 Full Name
//               </label>
//               <input
//                 type="text"
//                 name="name"
//                 className={`w-full px-4 py-3 border ${
//                   errors.name ? "border-red-500" : "border-gray-300"
//                 } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400`}
//                 placeholder="Your name"
//                 value={formData.name}
//                 onChange={handleChange}
//               />
//               {errors.name && (
//                 <p className="text-red-500 text-sm mt-1">{errors.name}</p>
//               )}
//             </div>

//             <div>
//               <label className="block text-blue-700 font-semibold">
//                 Email Address
//               </label>
//               <input
//                 type="email"
//                 name="email"
//                 className={`w-full px-4 py-3 border ${
//                   errors.email ? "border-red-500" : "border-gray-300"
//                 } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400`}
//                 placeholder="your@email.com"
//                 value={formData.email}
//                 onChange={handleChange}
//               />
//               {errors.email && (
//                 <p className="text-red-500 text-sm mt-1">{errors.email}</p>
//               )}
//             </div>

//             <div>
//               <label className="block text-blue-700 font-semibold">
//                 Your Message
//               </label>
//               <textarea
//                 name="message"
//                 rows="5"
//                 className={`w-full px-4 py-3 border ${
//                   errors.message ? "border-red-500" : "border-gray-300"
//                 } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400`}
//                 placeholder="Let us know how we can help..."
//                 value={formData.message}
//                 onChange={handleChange}
//               ></textarea>
//               {errors.message && (
//                 <p className="text-red-500 text-sm mt-1">{errors.message}</p>
//               )}
//             </div>

//             <button
//               type="submit"
//               className="w-full bg-blue-700 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition"
//             >
//               📤 Send Message
//             </button>
//           </form>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

import React, { useState } from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa6";

const FAQ_DATA = [
  {
    question: "How quickly can I expect a reply?",
    answer: "Usually within 24 hours (Mon–Fri).",
  },
  {
    question: "Do you offer custom packages?",
    answer: "Yes, all solutions are tailored based on your needs and goals.",
  },
  {
    question: "Is the consultation free?",
    answer: "Yes! You can request a free 30-minute consultation via this form.",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [faqOpen, setFaqOpen] = useState(null);

  // Add `phone` in state and validation

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format.";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone must be 10 digits.";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
    } else {
      console.log("Form submitted", formData);
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <section className="bg-gradient-to-br from-white to-blue-50 py-20 px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-blue-800 mb-2">Let’s Talk!</h2>
        <p className="text-blue-600">
          Have a project in mind? Let’s connect and chat.
        </p>
      </div>

      {/* Form + Info Grid */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* FORM */}
        <form
          className="space-y-6 bg-white p-6 rounded-xl shadow-md"
          onSubmit={handleSubmit}
        >
          {submitted && (
            <div className="bg-green-100 text-green-700 px-4 py-3 rounded">
              🎉 Thank you! We’ll get back to you soon.
            </div>
          )}
          <div>
            <label className="block font-medium text-blue-700">Name</label>
            <input
              type="text"
              name="name"
              className={`w-full mt-1 px-4 py-2 rounded border ${
                errors.name ? "border-red-500" : "border-gray-300"
              } focus:ring-2 focus:ring-blue-400`}
              placeholder="Your full name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && (
              <p className="text-sm text-red-500">{errors.name}</p>
            )}
          </div>
          <div>
            <label className="block font-medium text-blue-700">Email</label>
            <input
              type="email"
              name="email"
              className={`w-full mt-1 px-4 py-2 rounded border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } focus:ring-2 focus:ring-blue-400`}
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email}</p>
            )}
          </div>
          <div>
            <label className="block font-medium text-blue-700">Phone</label>
            <input
              type="tel"
              name="phone"
              className={`w-full mt-1 px-4 py-2 rounded border ${
                errors.phone ? "border-red-500" : "border-gray-300"
              } focus:ring-2 focus:ring-blue-400`}
              placeholder="e.g. 9876543210"
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && (
              <p className="text-sm text-red-500">{errors.phone}</p>
            )}
          </div>
          <div>
            <label className="block font-medium text-blue-700">Message</label>
            <textarea
              name="message"
              rows="5"
              className={`w-full mt-1 px-4 py-2 rounded border ${
                errors.message ? "border-red-500" : "border-gray-300"
              } focus:ring-2 focus:ring-blue-400`}
              placeholder="Tell us how we can help"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            {errors.message && (
              <p className="text-sm text-red-500">{errors.message}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-700 text-white py-3 rounded font-semibold hover:bg-blue-600 transition"
          >
            Send Message
          </button>
        </form>

        {/* CONTACT INFO */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold text-blue-800 mb-4">
              Contact Info
            </h3>
            <p className="flex items-center gap-2 text-gray-700 mb-2">
              <FaMapMarkerAlt className="text-blue-600" /> New Delhi, India
            </p>
            <p className="text-gray-700">Phone: +91-9876543210</p>
            <p className="text-gray-700">Email: hello@yourcompany.com</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold text-blue-800 mb-4">Follow Us</h3>
            <div className="flex space-x-4 text-white">
              <a
                href="#"
                className="p-2 rounded-full bg-blue-600 hover:bg-blue-700"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-blue-600 hover:bg-blue-700"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-blue-600 hover:bg-blue-700"
              >
                <FaTwitter />
              </a>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold text-blue-800 mb-4">
              Working Hours
            </h3>
            <p className="text-gray-700">Mon – Fri: 10:00 AM – 6:00 PM</p>
            <p className="text-gray-700">Sat – Sun: Closed</p>
          </div>

          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14000!2d77.216721!3d28.644800"
            className="w-full h-60 rounded-xl border"
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* FAQ SECTION */}
      <div className="mt-20 max-w-4xl mx-auto">
        <h3 className="text-3xl font-bold text-center text-blue-800 mb-8">
          Frequently Asked Questions
        </h3>
        <div className="space-y-4">
          {FAQ_DATA.map((item, i) => (
            <div
              key={i}
              className="bg-white shadow-sm rounded-lg border border-gray-200"
            >
              <button
                className="w-full flex justify-between items-center px-4 py-3 text-left font-medium text-blue-700 focus:outline-none"
                onClick={() => setFaqOpen(faqOpen === i ? null : i)}
              >
                <span>{item.question}</span>
                <FaChevronDown
                  className={`transition-transform ${
                    faqOpen === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {faqOpen === i && (
                <div className="px-4 pb-4 text-gray-600">{item.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
