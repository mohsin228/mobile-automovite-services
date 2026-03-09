import ServiceCard from "../components/ServiceCard";

const services = [
  { title: "Oil Change", description: "Keep your engine running smoothly." },
  { title: "Engine Diagnostics", description: "Comprehensive system check." },
  { title: "Car Wash", description: "Exterior and interior cleaning." },
  { title: "Battery Replacement", description: "Reliable power for your vehicle." },
  { title: "Brake Repair", description: "Safety-first brake services." },
  { title: "Wheel Alignment", description: "Precision alignment for smooth rides." },
];

export default function Services() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-center mb-12 text-white">
        Our Services
      </h1>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((svc) => (
          <ServiceCard key={svc.title} {...svc} />
        ))}
      </div>
    </div>
  );
}
