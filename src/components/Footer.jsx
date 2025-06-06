// src/components/Footer.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaArrowUp,
} from "react-icons/fa";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      alert("Thank you for subscribing!");
      setEmail("");
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gray-900 text-gray-300 pt-12 pb-6 px-6 mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Logo + About */}
        <div>
          <h2 className="text-white text-2xl font-bold mb-4">Tech Digital</h2>
          <p className="text-sm leading-6">
            Empowering businesses with world-class digital solutions since 2020.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white">
                About
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-white">
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/privacy-policy" className="hover:text-white">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-white">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">
            Our Services
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/services/web-design" className="hover:text-white">
                Website Design
              </Link>
            </li>
            <li>
              <Link to="/services/seo" className="hover:text-white">
                SEO
              </Link>
            </li>
            <li>
              <Link to="/services/ads" className="hover:text-white">
                Google & Meta Ads
              </Link>
            </li>
            <li>
              <Link to="/services/ecommerce" className="hover:text-white">
                eCommerce
              </Link>
            </li>
          </ul>
        </div>

        {/* Connect + Newsletter */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">
            Stay Connected
          </h3>
          <div className="flex space-x-4 mb-4">
            <a href="#" className="hover:text-white">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-white">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-white">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-white">
              <FaLinkedin />
            </a>
          </div>
          <p className="text-sm mb-2">📧 support@techdigital.com</p>
          <p className="text-sm mb-4">📍 New Delhi, India</p>

          <form
            onSubmit={handleNewsletterSubmit}
            className="flex items-center space-x-2"
          >
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-3 py-2 text-sm rounded bg-gray-800 text-white placeholder-gray-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
        <p>
          &copy; {new Date().getFullYear()} Tech Digital. All rights reserved.
        </p>
        <p className="mt-1">
          🛡 Certified Partner | SSL Secured | Google Partner
        </p>
        <p className="mt-1">
          💬 <Link to="/support" className="hover:text-white underline"></Link>
        </p>
      </div>

      {/* Back to Top */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-500 text-white p-3 rounded-full shadow-md transition"
        aria-label="Back to top"
      >
        <FaArrowUp />
      </button>
    </footer>
  );
}
