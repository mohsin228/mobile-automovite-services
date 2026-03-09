import ServiceCard from "../components/ServiceCard";
import { Link } from "react-router-dom";

const services = [
  { title: "Oil Change", description: "Keep your engine running smoothly." },
  { title: "Engine Diagnostics", description: "Comprehensive system check." },
  { title: "Car Wash", description: "Exterior and interior cleaning." },
  { title: "Battery Replacement", description: "Reliable power for your vehicle." },
  { title: "Brake Repair", description: "Safety-first brake services." },
  { title: "Wheel Alignment", description: "Precision alignment for smooth rides." },
];

export default function Home() {
  return (
    <div className="space-y-16">
      {/* hero */}
      <section className="relative bg-cover bg-center h-screen" style={{ backgroundImage: "url('/src/assets/hero.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Premium Automotive Services
          </h1>
          <p className="mt-4 text-xl text-gray-200 max-w-xl">
            Your one-stop shop for all car needs. Fast, reliable and professional.
          </p>
          <Link
            to="/booking"
            className="mt-8 inline-block bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition"
          >
            Book Now
          </Link>
        </div>
      </section>

      {/* services preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-white mb-8">Our Services</h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((svc) => (
            <ServiceCard key={svc.title} {...svc} />
          ))}
        </div>
        <div className="text-center mt-6">
          <Link to="/services" className="text-red-500 hover:underline">
            View all services →
          </Link>
        </div>
      </section>

      {/* why choose us */}
      <section className="py-16 bg-gray-800 bg-opacity-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Why Choose Us?</h2>
          <p className="text-gray-300">
            With years of experience and a team of certified mechanics, we offer
            top-tier automotive care at competitive prices. Your satisfaction is
            our priority.
          </p>
        </div>
      </section>

      {/* testimonials */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-8">What Customers Say</h2>
          <div className="space-y-8">
            <blockquote className="bg-gray-800 bg-opacity-50 backdrop-blur-md p-6 rounded-lg">
              <p className="text-gray-200">
                "These guys are amazing! My car has never driven better."
              </p>
              <cite className="block mt-4 text-red-500">— Jane Doe</cite>
            </blockquote>
            <blockquote className="bg-gray-800 bg-opacity-50 backdrop-blur-md p-6 rounded-lg">
              <p className="text-gray-200">
                "Fast, professional service and fair prices. Highly recommend."
              </p>
              <cite className="block mt-4 text-red-500">— John Smith</cite>
            </blockquote>
          </div>
        </div>
      </section>

      {/* featured vehicles/services placeholder */}
      <section className="py-16 bg-gray-800 bg-opacity-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-white mb-8">
            Featured Services
          </h2>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 3).map((svc) => (
              <ServiceCard key={svc.title} {...svc} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
