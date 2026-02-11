import React from 'react'
import ProductImageMagnifier from '../utils/ProductImageMagnifier'
import { FaBalanceScale, FaRegHeart, FaShoppingCart, FaStar } from 'react-icons/fa'

function ProductQuickLook({id}) {
  return (
     <div className="flex gap-10 py-10 px-8">
        {/* Carousel images */}
        <ProductImageMagnifier />

        {/* Product Details Right Container */}
        <div className=" space-y-4">
          {/* Title */}
          <h1 className="text-2xl font-semibold text-darkGray leading-snug">
            FireBoltt Ninja Call Pro Plus Smart Watch with Bluetooth Calling,
            Black
          </h1>

          {/* Brand + Rating */}
          <div className="flex items-center gap-3 text-sm">
            <span className="text-lightGray">
              Brands:{" "}
              <span className="text-darkGray font-medium">Fire-Boltt</span>
            </span>

            <div className="flex items-center gap-1 text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>

            <span className="text-lightGray">(1 Review)</span>
          </div>

          {/* Price + Stock */}
          <div className="flex items-center gap-4">
            <span className="text-lightGray line-through text-lg">₹3190</span>
            <span className="text-2xl font-semibold text-primary">₹1230</span>
            <span className="text-green-600 font-medium">
              Available In Stock: <strong>1463 Items</strong>
            </span>
          </div>

          {/* Description */}
          <p className="text-lightGray leading-relaxed text-sm font-light">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>

          {/* Shipping */}
          <p className="font-medium text-darkGray">
            Free Shipping{" "}
            <span className="text-lightGray">
              (Est. Delivery Time 2–3 Days)
            </span>
          </p>

          {/* Quantity + Add to Cart */}
          <div className="flex items-center gap-4">
            <input
              type="number"
              min="1"
              defaultValue="1"
              className="w-20 border rounded-lg px-3 py-2 text-center focus:outline-none focus:ring-2 focus:ring-red-400"
            />

            <button className="flex items-center gap-2 bg-primary hover:bg-primary/80 text-white font-semibold px-6 py-3 rounded-lg transition">
              <FaShoppingCart />
              ADD TO CART
            </button>
          </div>

          {/* Wishlist & Compare */}
          <div className="flex items-center gap-6 pt-2 text-lightGray">
            <button className="flex items-center gap-2 hover:text-red-500 transition">
              <FaRegHeart />
              Add to Wishlist
            </button>

            <button className="flex items-center gap-2 hover:text-red-500 transition">
              <FaBalanceScale />
              Add to Compare
            </button>
          </div>
        </div>
      </div>
  )
}

export default ProductQuickLook