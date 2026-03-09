import { useState } from "react";

export default function Booking() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    vehicle: "",
    service: "",
    date: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking submitted", form);
    // you could send to an API here
    alert("Booking submitted! (see console)");
  };

  return (
    <div className="max-w-xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-center text-white mb-8">
        Book a Service
      </h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded bg-gray-800 text-gray-100 focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="phone">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded bg-gray-800 text-gray-100 focus:outline-none"
          />
        </div>
        <div>
          <label
            className="block text-sm font-medium mb-1"
            htmlFor="vehicle"
          >
            Vehicle Model
          </label>
          <input
            type="text"
            id="vehicle"
            name="vehicle"
            value={form.vehicle}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded bg-gray-800 text-gray-100 focus:outline-none"
          />
        </div>
        <div>
          <label
            className="block text-sm font-medium mb-1"
            htmlFor="service"
          >
            Service Type
          </label>
          <select
            id="service"
            name="service"
            value={form.service}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded bg-gray-800 text-gray-100 focus:outline-none"
          >
            <option value="">Select a service</option>
            <option value="Oil Change">Oil Change</option>
            <option value="Engine Diagnostics">Engine Diagnostics</option>
            <option value="Car Wash">Car Wash</option>
            <option value="Battery Replacement">Battery Replacement</option>
            <option value="Brake Repair">Brake Repair</option>
            <option value="Wheel Alignment">Wheel Alignment</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="date">
            Preferred Date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded bg-gray-800 text-gray-100 focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-lg transition"
        >
          Submit Booking
        </button>
      </form>
    </div>
  );
}
