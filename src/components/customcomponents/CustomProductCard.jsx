import React from "react";
import { IoHeartOutline, IoCartOutline, IoHeartSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { togglewishlist } from "../../store/reducers/wishlistslice";
import {
  addtoCart,
  descreasequantity,
  increasequantity,
  removefromcart,
} from "../../store/reducers/CartSlice";
import { FiMinus, FiPlus } from "react-icons/fi";

const CustomProductCard = ({ product }) => {
  console.log(product, "cndcnjdcndc");
  const dispatch = useDispatch();
  const wishlistitem = useSelector((state) => state.wishlist.items);
  const isInWishlist = wishlistitem.some((item) => item?.id === product?.id);
  const cartitem = useSelector((state) => state.cart.cartitems);
  const cartProduct = cartitem.find((item) => item.id === product.id);
  console.log(cartitem, "cndcjdncjdcdjncdjncd");
  const isalreadycart =
    product && cartitem?.some((item) => item?.id === product?.id);
  console.log(isalreadycart, "isalreadycartisalreadycart");
  const handlewishlist = () => {
    dispatch(togglewishlist(product));
  };

  const handleaddtocart = () => {
    if (isalreadycart) {
      dispatch(removefromcart(product.id));
    } else {
      dispatch(addtoCart(product));
    }
  };

  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
      <div className="relative overflow-hidden">
        <img
          src={product?.image}
          alt={product?.title}
          className="w-full h-72 object-cover group-hover:scale-110 transition duration-500"
        />

        <button
          onClick={handlewishlist}
          className="absolute top-4 right-4 bg-white p-3 rounded-full shadow-md hover:bg-pink-100 hover:text-pink-500 transition"
        >
          {isInWishlist ? (
            <IoHeartSharp size={22} />
          ) : (
            <IoHeartOutline size={22} />
          )}
        </button>
      </div>

      <div className="p-5">
        <p className="text-sm text-gray-500 uppercase tracking-wide">
          {product?.category}
        </p>

        <h2 className="text-2xl font-bold text-gray-800 mt-2">
          {product?.title}
        </h2>

        <div className="flex items-center justify-between mt-5">
          <h3 className="text-2xl font-extrabold text-black">
            ${product?.price}
          </h3>

          <button className="bg-black text-white p-3 rounded-full hover:bg-gray-800 transition">
            {isalreadycart ? (
              <div className="flex items-center gap-3">
                <button onClick={() => dispatch(descreasequantity(product.id))}>
                  <FiMinus className="cursor-pointer" />
                </button>
                <span className="text-white ">{cartProduct?.quantity}</span>
                <button onClick={() => dispatch(increasequantity(product.id))}>
                  <FiPlus className="cursor-pointer" />
                </button>
              </div>
            ) : (
              <div onClick={handleaddtocart}>
                <IoCartOutline size={22} />
              </div>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomProductCard;
