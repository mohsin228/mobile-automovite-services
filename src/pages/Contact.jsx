import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact message", form);
    alert("Message sent! (see console)");
  };
  return (
    <div className="max-w-3xl mx-auto px-4 py-16 space-y-12">
      <h1 className="text-4xl font-bold text-white text-center mb-8">
        Contact Us
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
          <label className="block text-sm font-medium mb-1" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded bg-gray-800 text-gray-100 focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={form.message}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded bg-gray-800 text-gray-100 focus:outline-none"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-lg transition"
        >
          Send Message
        </button>
      </form>
      <div className="mt-12">
        <h2 className="text-2xl text-white mb-4">Our Location</h2>
        <div className="w-full h-64 bg-gray-700 rounded">Map placeholder</div>
        <p className="mt-4 text-gray-300">
          123 Auto Service Rd, Car City, State 12345<br />Phone: (123) 456-7890<br />
          Email: info@autoservice.com
        </p>
      </div>
    </div>
  );
}
