export default function ServiceCard({ title, description, icon }) {
  return (
    <div className="bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-lg p-6 hover:scale-105 transition">
      {icon && <div className="text-red-500 mb-4">{icon}</div>}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-300 text-sm">{description}</p>
    </div>
  );
}
