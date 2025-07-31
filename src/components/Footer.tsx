// components/Footer.tsx
"use client";
import { FaGithub, FaLinkedin, FaArrowUp,FaInstagram,FaFacebook } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 text-center py-6 border-t border-gray-300 dark:border-gray-700">
      <div className="max-w-4xl mx-auto px-4">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} Ganesan P. All rights reserved.
        </p>

        <div className="flex justify-center gap-4 mt-4 text-xl text-gray-600 dark:text-gray-300">
          <Link href="https://github.com/yourusername" target="_blank">
            <FaGithub />
          </Link>
          <Link href="https://linkedin.com/in/yourusername" target="_blank">
            <FaLinkedin />
          </Link>
          <Link href="https://linkedin.com/in/yourusername" target="_blank">
            <FaInstagram />
          </Link>
          <Link href="https://linkedin.com/in/yourusername" target="_blank">
            <FaFacebook />
          </Link>
          <a href="#" aria-label="Back to top">
            <FaArrowUp />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
