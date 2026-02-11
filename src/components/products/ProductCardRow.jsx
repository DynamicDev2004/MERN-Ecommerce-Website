import React from "react";
import { FaStar, FaShoppingCart, FaRegHeart } from "react-icons/fa";
import { RiExpandDiagonalLine } from "react-icons/ri";
import IconButton from "@mui/material/IconButton";

const ProductCardRow = () => {
  return (
    <div className="flex gap-4 rounded-2xl bg-white p-4 shadow-md group">
      {/* IMAGE */}
      <div className="relative h-[180px] w-[240px] flex-shrink-0 overflow-hidden rounded-xl">
        <span className="absolute left-3 top-3 z-10 rounded-full bg-primary px-2 py-1 text-xs font-semibold text-white">
          14%
        </span>

        <div className="absolute right-2 top-2 z-10 hidden flex-col gap-1 group-hover:flex">
          <IconButton size="small" className="!bg-white !h-8 !w-8">
            <RiExpandDiagonalLine />
          </IconButton>
          <IconButton size="small" className="!bg-white !h-8 !w-8">
            <FaRegHeart />
          </IconButton>
        </div>

        <img
          src="https://images.unsplash.com/photo-1520975916090-3105956dac38"
          alt="Product"
          className="h-full w-full object-cover"
        />
      </div>

      {/* INFO */}
      <div className="flex flex-1 flex-col">
        <p className="text-xs text-gray">Campus Sutra</p>

        <h3 className="mt-1 text-lg font-semibold line-clamp-2">
          Men Comfort Cuban Collar Men Comfort Cuban Collar
        </h3>

        <div className="mt-2 flex gap-1">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className="text-yellow-400" size={16} />
          ))}
        </div>

        <p className="mt-2 text-sm text-gray-600 line-clamp-2">
          Soft cotton fabric, breathable fit, perfect for daily wear and
          casual outings.
        </p>

        <div className="mt-3 flex items-center gap-3">
          <span className="text-lg font-semibold text-primary">₹1,850.00</span>
          <span className="text-sm text-gray-400 line-through">₹2,200.00</span>
        </div>

        <div className="mt-auto pt-4">
          <button className="flex items-center gap-2 rounded-lg bg-primary px-6 py-2 text-sm text-white hover:opacity-90">
            <FaShoppingCart />
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCardRow;
