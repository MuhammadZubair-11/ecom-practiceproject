import React from "react";
import { IoHeartOutline, IoCartOutline, IoHeartSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { togglewishlist } from "../../store/reducers/wishlistslice";

const CustomProductCard = ({ image, title, price, category }) => {
  const navigate = useNavigate();
  const wishlistitem = useSelector((state) => state.wishlist.items);
  console.log(wishlistitem,'wishlistitemwishlistitem')
  const isInWishlist = wishlistitem.some(
  (item) => item.id === title
);
  console.log(wishlistitem, "wishlistitemwishlistitem");
  const dispatch = useDispatch();

  const handlewishlist = () => {
    dispatch(
      togglewishlist({
        id: title,
        image,
        title,
        price,
        category,
      }),
    );
  };

  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
      {/* Product Image */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-72 object-cover group-hover:scale-110 transition duration-500"
        />

        {/* Wishlist */}
        <button
          onClick={handlewishlist}
          className="absolute top-4 right-4 bg-white p-3 rounded-full shadow-md hover:bg-pink-100 hover:text-pink-500 transition"
        >
            {isInWishlist ?
                <IoHeartSharp size={22} />
                :
                <IoHeartOutline size={22}/>
            }
        </button>
      </div>

      {/* Content */}
      <div className="p-5">
        <p className="text-sm text-gray-500 uppercase tracking-wide">
          {category}
        </p>

        <h2 className="text-2xl font-bold text-gray-800 mt-2">{title}</h2>

        <div className="flex items-center justify-between mt-5">
          <h3 className="text-2xl font-extrabold text-black">${price}</h3>

          <button className="bg-black text-white p-3 rounded-full hover:bg-gray-800 transition">
            <IoCartOutline size={22} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomProductCard;
