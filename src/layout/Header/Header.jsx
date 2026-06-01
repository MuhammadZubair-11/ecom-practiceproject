import { useState } from "react";
import { BiCross } from "react-icons/bi";
import { IoMenu, IoHeartOutline, IoCartOutline } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const [opensidear, setopensidebar] = useState(false);
  const wishlistitems = useSelector((state) => state.wishlist.items.length);
  const cartitems = useSelector((state) => state.cart.cartitems.length);

  const handlewishlist = () => {
    navigate("/wishlist");
  };

  const handlecart = () => {
    navigate("/cart");
  };

  return (
    <div className=" bg-gradient-to-br from-slate-100 via-gray-100 to-slate-200">
      <header className="backdrop-blur-md bg-white/80 border-b border-gray-200  px-6 py-4 flex items-center justify-between sticky top-0 z-40">
        {/* Menu Button */}
        <button
          onClick={() => setopensidebar(true)}
          className="text-gray-700 hover:text-white hover:bg-black p-2 rounded-xl transition-all duration-300"
        >
          <IoMenu size={28} />
        </button>

        {/* Sidebar */}
        <div
          className={`fixed top-0 left-0 min-h-screen w-72 transform transition-all duration-300 bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white p-6 z-50 shadow-2xl border-r border-gray-700 ${
            opensidear ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Close Button */}
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold tracking-wide text-white">
              ZubairShop
            </h2>

            <button
              onClick={() => setopensidebar(false)}
              className="text-white hover:bg-white/10 p-2 rounded-lg transition duration-300"
            >
              <RxCross1 size={24} />
            </button>
          </div>

          {/* Logo */}
          <div className="py-10 flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-2xl font-bold shadow-lg">
              Z
            </div>

            <div>
              <h1 className="text-2xl font-bold">ZubairShop</h1>
              <p className="text-gray-400 text-sm">Modern Shopping Store</p>
            </div>
          </div>

          {/* Menu */}
          <ul className="flex flex-col gap-4">
            <li className="bg-white/10 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 px-5 py-4 rounded-2xl cursor-pointer transition-all duration-300 shadow-md">
              Home
            </li>

            <li className="bg-white/10 hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 px-5 py-4 rounded-2xl cursor-pointer transition-all duration-300 shadow-md">
              Products
            </li>

            <li className="bg-white/10 hover:bg-gradient-to-r hover:from-orange-500 hover:to-yellow-500 px-5 py-4 rounded-2xl cursor-pointer transition-all duration-300 shadow-md">
              About Us
            </li>

            <li className="bg-white/10 hover:bg-gradient-to-r hover:from-green-500 hover:to-emerald-500 px-5 py-4 rounded-2xl cursor-pointer transition-all duration-300 shadow-md">
              Contact Us
            </li>
          </ul>
        </div>

        {/* Logo */}
        <Link to={"/"} className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-500 text-white flex items-center justify-center font-bold text-lg shadow-lg">
            Z
          </div>

          <h1 className="text-3xl font-extrabold bg-gradient-to-r from-black via-gray-700 to-gray-500 bg-clip-text text-transparent tracking-wide">
            ZubairShop
          </h1>
        </Link>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {/* Wishlist */}
          <button
            onClick={handlewishlist}
            className="relative text-gray-700 hover:text-pink-500 hover:bg-pink-100 p-3 rounded-2xl transition-all duration-300 shadow-sm"
          >
            <IoHeartOutline size={24} />

            <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center shadow-md">
              {wishlistitems || 0}
            </span>
          </button>

          {/* Cart */}
          <button
            onClick={handlecart}
            className="relative text-gray-700 hover:text-blue-500 hover:bg-blue-100 p-3 rounded-2xl transition-all duration-300 shadow-sm"
          >
            <IoCartOutline size={24} />

            <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center shadow-md">
             {cartitems || 0}
            </span>
          </button>

          {/* Login */}
          <button className="bg-gradient-to-r from-black to-gray-800 text-white px-6 py-2.5 rounded-2xl hover:scale-105 hover:shadow-xl transition-all duration-300 font-medium tracking-wide">
            Login
          </button>
        </div>
      </header>
    </div>
  );
}
