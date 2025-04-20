import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaHeart,
  FaArrowUp,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-gray-800 text-white pt-4 pb-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="flex justify-between items-center p-1">
          {/* Quick Links */}
          <div className="py-2">
            <Link
              to="/" 
              className="hover:text-blue-300 transition-colors"
            >
              الرئيسية
            </Link>
            <div></div>
            <Link
              to="/about" 
              className="hover:text-blue-300 transition-colors"
            >
              عن الموقع
            </Link>
            {/* <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-blue-300 transition">
                  الرئيسية
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-300 transition">
                  عن الموقع
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-300 transition">
                  {" "}
                </a>
              </li>
            </ul> */}
          </div>

          {/* Back to Top Button*/}
          <div className="">
            <button
              onClick={scrollToTop}
              className="bg-blue-600 hover:bg-blue-700 text-white px-2 py-2 rounded-full flex items-center gap-1 mx-auto text-sm"
            >
              <FaArrowUp />
              العودة للأعلى
            </button>
          </div>
        </div>
      </div>

      {/* Copyright and Credits */}
      <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-around items-center">
        <div className="text-gray-400 text-sm mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} مبادرة التوعية الجنسية الآمنة. جميع
          الحقوق محفوظة.
        </div>
        <div className="text-gray-400 text-sm flex items-center">
          <span>تصميم وتطوير</span>
          <a href="#" className="text-blue-300 hover:text-blue-400 mx-1">
            {" "}
            Dreamer
          </a>
          <span>بكل</span>
          <FaHeart className="text-red-400 mx-1" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
