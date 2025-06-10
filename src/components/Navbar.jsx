// src/components/Navbar.jsx
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleDropdown = () => setDropdownOpen(true);
  const closeDropdown = () => setDropdownOpen(false);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const servicesData = [
    {
      category: "🔍 SEO Services",
      path: "seo",
      items: [
        { name: "Keyword Research", path: "/services/seo/keyword-research" },
        { name: "On-Page SEO", path: "/services/seo/on-page" },
        { name: "Off-Page SEO", path: "/services/seo/off-page" },
        { name: "Technical SEO", path: "/services/seo/technical" },
        { name: "Local SEO", path: "/services/seo/local" },
      ],
    },
    {
      category: "💰 PPC Advertising",
      path: "ppc-advertising",
      items: [
        { name: "Google Ads", path: "/services/ppc/google-ads" },
        { name: "Bing Ads", path: "/services/ppc/bing-ads" },
        { name: "Retargeting", path: "/services/ppc/retargeting" },
        { name: "Performance Analytics", path: "/services/ppc/analytics" },
      ],
    },
    {
      category: "🌐 App Development",
      path: "app-development",
      items: [
        { name: "React Native/ Flutter", path: "/services/web/wordpress" },
        { name: "UI/UX Optimization", path: "/services/web/uiux" },
        { name: "Landing Page Design", path: "/services/web/landing" },
      ],
    },
    {
      category: "📱 Social Media",
      path: "social-media",
      items: [
        { name: "Content Creation", path: "/services/social/content" },
        { name: "Paid Ad Management", path: "/services/social/ads" },
        { name: "Audience Growth", path: "/services/social/growth" },
        { name: "Analytics & Reporting", path: "/services/social/reporting" },
      ],
    },
    {
      category: "✍️ Content Marketing",
      path: "content-marketing",
      items: [
        { name: "SEO Articles", path: "/services/content/blogs" },
        { name: "Landing Page Copy", path: "/services/content/copywriting" },
        { name: "Infographics", path: "/services/content/infographics" },
        { name: "Video Production", path: "/services/content/video" },
      ],
    },
    {
      category: "🌐 Website Development",
      path: "website-development",

      items: [
        { name: "WordPress / Shopify", path: "/services/web/wordpress" },
        { name: "UI/UX Optimization", path: "/services/web/uiux" },
        { name: "Landing Page Design", path: "/services/web/landing" },
        { name: "Mobile Responsive", path: "/services/web/mobile" },
      ],
    },
    {
      category: "📧 Email Marketing",
      path: "email-marketing",

      items: [
        { name: "Campaign Setup", path: "/services/email/setup" },
        { name: "Drip Campaigns", path: "/services/email/drip" },
        { name: "List Segmentation", path: "/services/email/segmentation" },
        { name: "A/B Testing", path: "/services/email/testing" },
      ],
    },

    {
      category: "🎨 Branding & Strategy",
      path: "branding-strategy",
      items: [
        { name: "Brand Identity", path: "/services/branding/identity" },
        { name: "Competitive Analysis", path: "/services/branding/analysis" },
        { name: "Marketing Strategy", path: "/services/branding/strategy" },
        { name: "CRO", path: "/services/branding/cro" },
      ],
    },
    {
      category: "📊 Analytics",
      path: "analytics",
      items: [
        { name: "GA4 Setup", path: "/services/analytics/ga4" },
        { name: "Conversion Tracking", path: "/services/analytics/tracking" },
        { name: "Monthly Dashboards", path: "/services/analytics/dashboards" },
        { name: "ROI & KPI Reports", path: "/services/analytics/roi" },
      ],
    },
  ];

  return (
    <nav className="bg-[#f9f7f6] shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link
            to="/"
            className="flex items-center text-2xl font-bold text-[#00a2ad]"
          >
            Tech Digital
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="relative px-5 py-2 font-bold font-bold text-[#00a2ad] hover:text-white hover:bg-gradient-to-r from-[#00a2ad] to-[#f6a801] rounded transition duration-300"
            >
              Home
            </Link>

            <div className="relative">
              <Link to="/services">
                <button
                  onMouseOver={toggleDropdown}
                  className="relative px-5 py-2 font-bold text-[#00a2ad] hover:text-white hover:bg-gradient-to-r from-[#00a2ad] to-[#f6a801] rounded transition duration-300 flex items-center"
                >
                  Services
                  <svg
                    className={`ml-1 w-4 h-4 transition-transform duration-300 ${
                      dropdownOpen ? "rotate-180" : "rotate-0"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M5.25 7.5L10 12.25L14.75 7.5H5.25Z" />
                  </svg>
                </button>
              </Link>

              {/* Dropdown */}

              {dropdownOpen && (
                <div
                  ref={dropdownRef} // 👈 attach here
                  className="absolute top-full left-[-500px] w-[1050px] bg-white border border-gray-200 shadow-lg rounded-md mt-2 z-50 p-4"
                >
                  <div className="grid grid-cols-3 gap-4">
                    {servicesData.map((section, index) => (
                      <div key={index}>
                        <p
                          onClick={closeDropdown}
                          className="px-2 py-1 font-semibold text-[#00a2ad]"
                        >
                          <Link
                            to={`services/${section.path}`}
                            className="block   hover:text-[#f6a801] transition"
                          >
                            {" "}
                            {section.category}
                          </Link>
                        </p>
                        <ul className="pl-3 space-y-1">
                          {section.items.map((item, idx) => (
                            <li key={idx}>
                              {/* <Link
                                to={item.path}
                                className="block text-sm text-[#333] hover:text-[#f6a801] transition"
                              > */}
                              ✓ {item.name}
                              {/* </Link> */}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <Link
              to="/about"
              className="relative px-5 py-2 font-bold text-[#00a2ad] hover:text-white hover:bg-gradient-to-r from-[#00a2ad] to-[#f6a801] rounded transition duration-300"
            >
              About
            </Link>
            <Link
              to="/"
              className="relative px-5 py-2 font-bold text-[#00a2ad] hover:text-white hover:bg-gradient-to-r from-[#00a2ad] to-[#f6a801] rounded transition duration-300"
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className="relative px-5 py-2 font-bold text-[#00a2ad] hover:text-white hover:bg-gradient-to-r from-[#00a2ad] to-[#f6a801] rounded transition duration-300"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-[#00a2ad] text-2xl">
              {menuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden flex flex-col space-y-4 pb-4 animate-fadeIn">
            <Link
              to="/"
              className="text-[#00a2ad] hover:text-[#f6a801] transition"
            >
              Home
            </Link>
            <div className="space-y-2">
              <p className="text-[#00a2ad] font-medium">Services</p>
              <Link
                to="/services/web"
                className="pl-4 text-sm hover:text-[#f6a801]"
              >
                Web Development
              </Link>
              <Link
                to="/services/app"
                className="pl-4 text-sm hover:text-[#f6a801]"
              >
                App Development
              </Link>
              <Link
                to="/services/seo"
                className="pl-4 text-sm hover:text-[#f6a801]"
              >
                SEO Services
              </Link>
            </div>
            <Link
              to="/about"
              className="text-[#00a2ad] hover:text-[#f6a801] transition"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-[#00a2ad] hover:text-[#f6a801] transition"
            >
              Contact Us
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
