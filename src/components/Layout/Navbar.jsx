// src/components/Layout/Navbar.jsx
import { FiMenu } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
/**
 * Top navigation bar component
 * @param {function} onMenuClick - Function to call when menu button is clicked
 */
const Navbar = ({ onMenuClick }) => {
  return (
    <header className="shadow-sm z-10">
      <div className="flex items-center justify-between px-4 py-3 md:px-6">
        {/* Mobile menu button */}
        <button
          onClick={onMenuClick}
          className="md:hidden p-2 rounded-md transition-colors  hover: text-primary hover:bg-base-200 focus:outline-none"
          aria-label="Toggle menu"
        >
          <FiMenu className="h-6 w-6" />
        </button>

        {/* Logo and title */}
        <div className="flex items-center">
          <h1 className="text-xl font-semibold text-primary">
            School Dashboard
          </h1>
        </div>

        {/* User profile placeholder */}
        <div className="flex items-center space-x-4">
          <div className="h-10 w-10 rounded-full bg-base-200 flex items-center justify-center text-primary">
            {<FiUser />}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
