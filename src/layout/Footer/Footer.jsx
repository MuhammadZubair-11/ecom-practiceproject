import { FaFacebook, FaInstagram, FaLinkedin, FaPinterest } from "react-icons/fa6";
import { IoCall, IoLocationOutline } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { IoMdSend } from "react-icons/io";
import { Link } from "react-router-dom";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");

  return (
    <footer className="bg-black text-white pt-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* About */}
        <div>
          <h2 className="text-2xl font-bold mb-4">MyShop</h2>
          <p className="text-gray-400 text-sm leading-6">
            Your one-stop shop for quality products at the best prices.
            We focus on fast delivery and customer satisfaction.
          </p>

          <div className="flex gap-4 mt-5 text-xl">
            <FaFacebook className="cursor-pointer hover:text-blue-500" />
            <FaInstagram className="cursor-pointer hover:text-pink-500" />
            <FaLinkedin className="cursor-pointer hover:text-blue-400" />
            <FaPinterest className="cursor-pointer hover:text-red-500" />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2 text-gray-400">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Contact</h2>

          <div className="flex items-center gap-2 text-gray-400 mb-2">
            <IoLocationOutline /> Shahodi Garhi, Pakistan
          </div>

          <div className="flex items-center gap-2 text-gray-400 mb-2">
            <IoCall /> +92 300 0000000
          </div>

          <div className="flex items-center gap-2 text-gray-400">
            <MdEmail /> support@myshop.com
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Newsletter</h2>
          <p className="text-gray-400 text-sm mb-3">
            Subscribe for latest offers
          </p>

          <div className="flex">
            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 text-black rounded-l-md outline-none"
            />
            <button className="bg-blue-500 px-4 rounded-r-md flex items-center">
              <IoMdSend />
            </button>
          </div>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="text-center text-gray-500 border-t border-gray-700 mt-10 py-4 text-sm">
        © {new Date().getFullYear()} MyShop. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;