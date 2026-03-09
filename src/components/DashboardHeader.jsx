import { FiBell, FiUser } from "react-icons/fi";

export default function DashboardHeader() {
  return (
    <header className="bg-gray-800 text-gray-100 flex items-center justify-between px-6 py-4 shadow">
      <h2 className="text-2xl font-semibold">Admin Panel</h2>
      <div className="flex items-center space-x-4">
        <button className="relative">
          <FiBell className="h-6 w-6" />
          <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white bg-red-500 rounded-full">
            3
          </span>
        </button>
        <div className="flex items-center space-x-2">
          <FiUser className="h-6 w-6" />
          <span>Admin</span>
        </div>
      </div>
    </header>
  );
}
