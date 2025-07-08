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
    mobilephone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [faqOpen, setFaqOpen] = useState(null);

  // Add `mobilephone` in state and validation

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format.";
    }
    if (!formData.mobilephone.trim()) {
      newErrors.mobilephone = "mobilephone number is required.";
    } else if (!/^\d{10}$/.test(formData.mobilephone)) {
      newErrors.mobilephone = "mobilephone must be 10 digits.";
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }

    const { name, email, mobilephone, message } = formData;

    const hubspotData = {
      fields: [
        { name: "firstname", value: name },
        { name: "email", value: email },
        { name: "mobilephone", value: mobilephone },
        { name: "message", value: message },
      ],
    };

    try {
      const response = await fetch(
        "https://api.hsforms.com/submissions/v3/integration/submit/242993880/9863d214-d0f1-4099-a621-66062c0591e3",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(hubspotData),
        }
      );

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", mobilephone: "", message: "" });
      } else {
        console.error("HubSpot submission failed");
      }
    } catch (err) {
      console.error("Error submitting form", err);
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
              name="mobilephone"
              className={`w-full mt-1 px-4 py-2 rounded border ${
                errors.mobilephone ? "border-red-500" : "border-gray-300"
              } focus:ring-2 focus:ring-blue-400`}
              placeholder="e.g. 9876543210"
              value={formData.mobilephone}
              onChange={handleChange}
            />
            {errors.mobilephone && (
              <p className="text-sm text-red-500">{errors.mobilephone}</p>
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
            <p className="text-gray-700">mobilephone: +91-9876543210</p>
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
            title="Our Location"
            src="https://www.google.com/maps?q=28.58519353969123, 77.31291634657582&hl=es;z=14&output=embed"
            className="w-full h-80 md:h-96 rounded-2xl shadow-lg border border-gray-200"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
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
