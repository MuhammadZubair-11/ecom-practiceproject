import React from "react";
import {
  IoAdd,
  IoRemove,
  IoTrashOutline,
  IoArrowForward,
} from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import {
  descreasequantity,
  increasequantity,
  removefromcart,
} from "../../../../store/reducers/CartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartitems = useSelector((state) => state.cart.cartitems);

  const subtotal = cartitems.reduce(
    (state, item) => state + item.price * item.quantity,
    0,
  );

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-16">
      {/* Heading */}
      <div className="max-w-7xl mx-auto mb-12">
        <h1 className="text-5xl font-extrabold text-gray-900">Shopping Cart</h1>

        <p className="text-gray-500 mt-3 text-lg">
          Review your selected products before checkout
        </p>
      </div>

      {/* Main Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-6">
          {cartitems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-5 shadow-md flex flex-col md:flex-row gap-6 items-center"
            >
              {/* Image */}
              <div className="w-full md:w-40 h-40 overflow-hidden rounded-2xl">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex-1 w-full">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm uppercase text-gray-400 tracking-wide">
                      {item.category}
                    </p>

                    <h2 className="text-2xl font-bold text-gray-800 mt-1">
                      {item.title}
                    </h2>
                  </div>

                  <button
                    onClick={() => dispatch(removefromcart(item.id))}
                    className="text-gray-400 hover:text-red-500 transition"
                  >
                    <IoTrashOutline size={24} />
                  </button>
                </div>

                {/* Bottom */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-6 gap-4">
                  {/* Quantity */}
                  <div className="flex items-center gap-4 bg-gray-100 px-4 py-2 rounded-full w-fit">
                    <button
                      onClick={() => dispatch(descreasequantity(item.id))}
                      className="text-xl"
                    >
                      <IoRemove />
                    </button>

                    <span className="font-semibold text-lg">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => dispatch(increasequantity(item.id))}
                      className="text-xl"
                    >
                      <IoAdd />
                    </button>
                  </div>

                  {/* Price */}
                  <h3 className="text-3xl font-extrabold text-black">
                    ${item?.price * item?.quantity}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-3xl shadow-md p-8 h-fit sticky top-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Order Summary
          </h2>

          <div className="space-y-5">
            <div className="flex justify-between text-lg">
              <span className="text-gray-500">Subtotal</span>
              <span className="font-semibold">${subtotal}</span>
            </div>

            <div className="flex justify-between text-lg">
              <span className="text-gray-500">Shipping</span>
              <span className="font-semibold">$20</span>
            </div>

            <div className="flex justify-between text-lg">
              <span className="text-gray-500">Tax</span>
              <span className="font-semibold">$10</span>
            </div>

            <div className="border-t pt-5 flex justify-between text-2xl font-extrabold">
              <span>Total</span>
              <span>${subtotal + 20 + 10}</span>
            </div>
          </div>

          {/* Coupon */}
          <div className="mt-8">
            <input
              type="text"
              placeholder="Enter coupon code"
              className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Checkout Button */}
          <button className="w-full mt-8 bg-black hover:bg-gray-800 transition text-white py-4 rounded-2xl text-lg font-semibold flex items-center justify-center gap-2">
            Proceed to Checkout
            <IoArrowForward size={22} />
          </button>

          {/* Continue Shopping */}
          <button className="w-full mt-4 border border-gray-300 hover:bg-gray-100 transition py-4 rounded-2xl text-lg font-semibold">
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
