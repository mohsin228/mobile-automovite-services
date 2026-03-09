import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FiMenu, FiHome, FiSettings, FiCalendar, FiUsers, FiLogOut } from "react-icons/fi";

export default function DashboardSidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div
      className={`h-full bg-gray-900 text-gray-100 flex flex-col transition-all duration-300 ${
        collapsed ? "w-16" : "w-64"
      }`}
    >
      <div className="flex items-center justify-between px-4 py-3">
        {!collapsed && <h1 className="text-lg font-semibold">Dashboard</h1>}
        <button onClick={() => setCollapsed(!collapsed)}>
          <FiMenu className="h-6 w-6" />
        </button>
      </div>
      <nav className="flex-1 px-2 space-y-1">
        {[
          { to: "/dashboard", icon: <FiHome />, label: "Home" },
          { to: "/dashboard/bookings", icon: <FiCalendar />, label: "Bookings" },
          { to: "/dashboard/services", icon: <FiSettings />, label: "Services" },
          { to: "/dashboard/team", icon: <FiUsers />, label: "Team" },
        ].map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `flex items-center px-2 py-2 rounded-md hover:bg-gray-700 transition ${
                isActive ? "bg-gray-700" : ""
              }`
            }
          >
            <span className="text-xl">{item.icon}</span>
            {!collapsed && <span className="ml-3">{item.label}</span>}
          </NavLink>
        ))}
      </nav>
      <div className="p-4">
        <button className="flex items-center w-full px-2 py-2 rounded-md hover:bg-gray-700">
          <FiLogOut className="text-xl" />
          {!collapsed && <span className="ml-3">Logout</span>}
        </button>
      </div>
    </div>
  );
}
