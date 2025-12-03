import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleSectionNavigation = (sectionId) => {
    if (location.pathname === '/') {
      // If on home page, scroll to section
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    } else {
      // If on other page, navigate to home with hash
      navigate(`/#${sectionId}`);
    }
  };
  return (
    <footer className="bg-black text-white py-6 px-3 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 md:gap-0">
          {/* Logo and Location Section */}
          <div className="col-span-3">
            {/* Logo */}
            <div className="mb-3">
              <div className="flex items-center">
                <img
                  src={`${import.meta.env.BASE_URL}images/logo-header.webp`}
                  alt="Logo"
                  className="h-15"
                />
              </div>
            </div>

            {/* Location */}
            <div className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                <div className="text-gray-300 text-sm leading-tight">
                  <h1 className="font-bold">KSA</h1>
                  <p>lorem ipsum dolor sit amet</p>
                  <p>205, ipsum dolor, met,</p>
                  <p>Saudia Arabia</p>
                </div>
              </div>
            </div>
          </div>

          {/* Company Section */}
          <div className="col-span-3 flex justify-start md:justify-end items-center">
            <div className="w-full pt-8">
              <ul className="flex flex-inline flex-wrap space-x-2 sm:space-x-1 md:space-x-1 space-y-2 md:space-y-0 lg:space-x-5 text-gray-300 text-[12px] md:text-[14px] justify-center md:justify-end mb-2 md:mb-3">
                <li>
                  <button
                    onClick={() => handleSectionNavigation("home")}
                    className="hover:text-white transition-colors text-center md:text-left cursor-pointer focus:outline-none focus:ring-0 focus:border-none"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleSectionNavigation("about")}
                    className="hover:text-white transition-colors text-left cursor-pointer focus:outline-none focus:ring-0 focus:border-none"
                  >
                    About
                  </button>
                </li>

                <li>
                  <button
                    onClick={() => handleSectionNavigation("opportunity")}
                    className="hover:text-white transition-colors text-left cursor-pointer focus:outline-none focus:ring-0 focus:border-none"
                  >
                    Opportunity
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleSectionNavigation("divisions")}
                    className="hover:text-white transition-colors text-left cursor-pointer focus:outline-none focus:ring-0 focus:border-none"
                  >
                    Divisions
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigate("/leaders")}
                    className="hover:text-white transition-colors text-left cursor-pointer focus:outline-none focus:ring-0 focus:border-none"
                  >
                    Leaders
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigate("/contact")}
                    className="hover:text-white transition-colors text-left cursor-pointer focus:outline-none focus:ring-0 focus:border-none"
                  >
                    Contact
                  </button>
                </li>
              </ul>
              {/* Social Media Icons */}
              <div className="flex flex-inline flex-wrap space-x-4 justify-center md:justify-end hidden">
                <span className="text-sm">Social Links</span>
                <a
                  href=""
                  className="text-white hover:text-gray-300 transition-colors flex"
                  target="_blank"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href=""
                  className="text-white hover:text-gray-300 transition-colors flex"
                  target="_blank"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    title="X (Twitter)"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href=""
                  className="text-white hover:text-gray-300 transition-colors flex"
                  target="_blank"
                  title="YouTube"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright and Legal Links */}
        <div className="border-t border-[#666666] mt-6 pt-4">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <div className="flex flex-row space-x-4 md:space-x-6 mb-2 md:mb-0">
              <button className="text-[#666666] hover:text-white text-sm transition-colors">
                Privacy Policy
              </button>
              <button className="text-[#666666] hover:text-white text-sm transition-colors">
                Terms & Conditions
              </button>
            </div>
            <p className="text-[#666666] text-sm mb-4 md:mb-0 ms-0 md:ms-5 text-center">
              Copyright © 2025 Buraq – All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
