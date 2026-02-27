import React from "react";
import { NavLink } from "react-router-dom";
import { Home, Settings, User, BookOpenText } from "lucide-react";
import Logo from "@/assets/img/Logo.png";

const Navbar = () => {
  const navLinks = [
    { name: "Dashboard", path: "/dashboard", icon: <Home size={18} /> },
    { name: "Appointments", path: "/appointments", icon: <BookOpenText size={18} /> },
    { name: "Patients", path: "/patients", icon: <User size={18} /> },
    { name: "Staff", path: "/staff", icon: <User size={18} /> },
    { name: "Reports", path: "/report", icon: <Settings size={18} /> },
  ];

  return (
    <nav className="fixed top-0 left-0 h-screen w-64 bg-white shadow-md flex flex-col">
      
      {/* Header */}
      <div className="flex items-center gap-3 px-6 py-4 border-b">
        <img src={Logo} alt="Logo" className="w-10 h-10 rounded-md" />
        <p className="text-lg font-semibold">Medica</p>
      </div>

      {/* Links */}
      <ul className="flex flex-col gap-2 p-4">
        {navLinks.map((link) => (
          <li key={link.path}>
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2 rounded-md transition ${
                  isActive
                    ? "bg-blue-500 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`
              }
            >
              {link.icon}
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;