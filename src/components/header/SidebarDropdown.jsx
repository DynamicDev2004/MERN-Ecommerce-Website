import { useState } from "react";
import { Link } from "react-router";
import { FiChevronDown } from "react-icons/fi";

const SidebarDropdown = ({ name, link, subList = [] }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full">
      {/* Parent Item */}
      <div className="flex items-center justify-between px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md"   onClick={(e) => e.stopPropagation()}>
        <Link to={link} className="flex-1">
          {name}
        </Link>

        {subList.length > 0 && (
          <button
            onClick={() => setOpen(!open)}
            className="ml-2 text-gray-500 hover:text-gray-700"
          >
            <FiChevronDown
              className={`w-4 h-4 transition-transform duration-200 ${
                open ? "rotate-180" : ""
              }`}
            />
          </button>
        )}
      </div>

      {/* Dropdown */}
      {open && subList.length > 0 && (
        <div className="ml-4 mt-1 space-y-1">
          {subList.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className="block px-4 py-2 text-sm text-gray-600 rounded-md hover:bg-gray-100"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default SidebarDropdown;
