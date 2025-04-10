// src/components/Layout/Sidebar.jsx
import {
  FiHome,
  FiUsers,
  FiFileText,
  FiChevronLeft,
  FiCreditCard,
} from "react-icons/fi";
import { NavLink } from "react-router-dom";

/**
 * Sidebar navigation component
 * @param {boolean} isOpen - Whether the sidebar is open
 * @param {function} onClose - Function to close the sidebar
 */
const Sidebar = ({ isOpen, onClose }) => {
  const navItems = [
    { path: "/", name: "Dashboard", icon: FiHome },
    { path: "/students", name: "List Murid", icon: FiUsers },
    { path: "/payments", name: "Pembayaran", icon: FiCreditCard },
    { path: "/reports", name: "Laporan", icon: FiFileText },
  ];

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-neutral opacity-15 z-20 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar container */}
      <aside
        className={`fixed md:relative z-30 w-64 h-full bg-base-200 shadow-md transform transition-transform duration-300 ease-in-out 
          ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar header */}
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-xl font-semibold text-primary">Menu</h2>
            <button
              onClick={onClose}
              className="md:hidden p-1 rounded-md hover: bg-primary"
            >
              <FiChevronLeft className="h-5 w-5" />
            </button>
          </div>

          {/* Navigation items */}
          <nav className="flex-1 overflow-y-auto">
            <ul className="p-2 space-y-1">
              {navItems.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `flex items-center p-3 rounded-lg transition-colors
                      ${
                        isActive
                          ? "bg-primary text-primary-content"
                          : "hover:bg-secondary text-secondary-content"
                      }`
                    }
                    end
                  >
                    <item.icon className="h-5 w-5 mr-3" />
                    <span>{item.name}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Sidebar footer */}
          <div className="p-4 border-t">
            <div className="text-sm text-base-content">© 2025 Yacika</div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
