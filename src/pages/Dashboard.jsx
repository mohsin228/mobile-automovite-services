
// Dummy data
const dashboardData = {
  stats: [
    { label: "Total Bookings", value: "128" },
    { label: "Completed Services", value: "95" },
    { label: "Pending Bookings", value: "12" },
    { label: "Monthly Revenue", value: "$45,320" },
  ],
  recentBookings: [
    { id: 1, name: "John Doe", service: "Oil Change", date: "2025-03-09", status: "Completed" },
    { id: 2, name: "Jane Smith", service: "Brake Repair", date: "2025-03-10", status: "In Progress" },
    { id: 3, name: "Mike Johnson", service: "Car Wash", date: "2025-03-11", status: "Pending" },
    { id: 4, name: "Sarah Wilson", service: "Engine Diagnostics", date: "2025-03-12", status: "Completed" },
    { id: 5, name: "Tom Brown", service: "Battery Replacement", date: "2025-03-13", status: "Pending" },
  ],
};

export default function Dashboard() {
  return (
    <div className="space-y-8">
      {/* stat cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {dashboardData.stats.map((stat, idx) => (
          <div
            key={idx}
            className="bg-gradient-to-br from-gray-800 to-gray-700 backdrop-blur-md rounded-lg p-6 border border-gray-600"
          >
            <p className="text-gray-400 text-sm">{stat.label}</p>
            <p className="text-3xl font-bold text-white mt-2">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* chart area (placeholder) */}
      <div className="bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-lg p-6 border border-gray-600">
        <h2 className="text-xl font-semibold text-white mb-4">Revenue Chart</h2>
        <div className="h-64 flex items-center justify-center bg-gray-700 rounded">
          <p className="text-gray-500">[Chart visualization goes here]</p>
        </div>
      </div>

      {/* recent bookings table */}
      <div className="bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-lg p-6 border border-gray-600">
        <h2 className="text-xl font-semibold text-white mb-4">Recent Bookings</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-left">
            <thead>
              <tr className="border-b border-gray-600">
                <th className="px-4 py-2 text-gray-300">Name</th>
                <th className="px-4 py-2 text-gray-300">Service</th>
                <th className="px-4 py-2 text-gray-300">Date</th>
                <th className="px-4 py-2 text-gray-300">Status</th>
              </tr>
            </thead>
            <tbody>
              {dashboardData.recentBookings.map((booking) => (
                <tr key={booking.id} className="border-b border-gray-700 hover:bg-gray-700">
                  <td className="px-4 py-3">{booking.name}</td>
                  <td className="px-4 py-3">{booking.service}</td>
                  <td className="px-4 py-3">{booking.date}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        booking.status === "Completed"
                          ? "bg-green-900 text-green-200"
                          : booking.status === "In Progress"
                          ? "bg-blue-900 text-blue-200"
                          : "bg-yellow-900 text-yellow-200"
                      }`}
                    >
                      {booking.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* service management cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-lg p-6 border border-gray-600 hover:scale-105 transition">
          <h3 className="text-lg font-semibold text-white">Manage Services</h3>
          <p className="text-gray-400 text-sm mt-2">Add, edit, or remove services</p>
          <button className="mt-4 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded transition">
            Go to Services
          </button>
        </div>
        <div className="bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-lg p-6 border border-gray-600 hover:scale-105 transition">
          <h3 className="text-lg font-semibold text-white">Manage Bookings</h3>
          <p className="text-gray-400 text-sm mt-2">View and update customer bookings</p>
          <button className="mt-4 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded transition">
            Go to Bookings
          </button>
        </div>
      </div>
    </div>
  );
}
