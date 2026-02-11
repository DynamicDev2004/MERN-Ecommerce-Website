import { Link } from "react-router";

const HoverDropdown = ({ name, link, subList = [] }) => {
  return (
    <div className="relative group ">
      {/* Main Link */}
      <Link
        to={link}
        className="px-2 py-1 inline-flex items-center text-sm 2xl:text-md lg:text-sm font-medium text-lightGray hover:text-primary"
      >
        {name}
        {subList.length > 0 && (
          <svg
            className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:rotate-180"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M19 9l-7 7-7-7" />
          </svg>
        )}
      </Link>

      {/* Dropdown */}
      {subList.length > 0 && (
        <div className="absolute left-0  z-30  min-w-[180px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-out">
          <div className="rounded-lg bg-white shadow-lg border border-gray-100 py-2">
            {subList.map((item, index) => (
              <Link
                key={index}
                to={item.link}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default HoverDropdown;
