import React from 'react'
import {
  FiMessageSquare,
  FiFacebook,
  FiYoutube,
  FiInstagram,
} from "react-icons/fi";
import { FaPinterestP } from "react-icons/fa";

function Footer() {
  return (
 <footer className="border-t">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-14 md:grid-cols-4">
        
        {/* Contact */}
        <div>
          <h4 className="mb-4 text-lg font-semibold">Contact us</h4>
          <p className="text-sm text-gray-600">
            Classyshop - Mega Super Store <br />
            507-Union Trade Centre France
          </p>

          <p className="mt-4 text-sm text-gray-600">sales@yourcompany.com</p>

          <p className="mt-2 text-lg font-semibold text-red-500">
            (+91) 9876-543-210
          </p>

          <div className="mt-4 flex items-center gap-2 font-medium">
            <FiMessageSquare className="text-red-500" />
            <span>Online Chat</span>
          </div>
          <p className="text-sm text-gray-500">Get Expert Help</p>
        </div>

        {/* Products */}
        <div>
          <h4 className="mb-4 text-lg font-semibold">Products</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>Prices drop</li>
            <li>New products</li>
            <li>Best sales</li>
            <li>Contact us</li>
            <li>Sitemap</li>
            <li>Stores</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="mb-4 text-lg font-semibold">Our company</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>Delivery</li>
            <li>Legal Notice</li>
            <li>Terms and conditions</li>
            <li>About us</li>
            <li>Secure payment</li>
            <li>Login</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="mb-4 text-lg font-semibold">
            Subscribe to newsletter
          </h4>
          <p className="mb-4 text-sm text-gray-600">
            Subscribe to our latest newsletter to get news about special
            discounts.
          </p>

          <input
            type="email"
            placeholder="Your Email Address"
            className="mb-3 w-full rounded border px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-red-500"
          />

          <button className="mb-3 w-full rounded bg-red-500 py-2 text-sm font-semibold text-white hover:bg-red-600">
            SUBSCRIBE
          </button>

          <label className="flex items-start gap-2 text-xs text-gray-500">
            <input type="checkbox" className="mt-1" />
            I agree to the terms and conditions and the privacy policy
          </label>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 md:flex-row">
          <div className="flex gap-3">
            <FiFacebook />
            <FiYoutube />
            <FaPinterestP />
            <FiInstagram />
          </div>

          <p className="text-sm text-gray-500">
            © 2024 - Ecommerce Template
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer