import { Link } from "react-router-dom";
import { company, serviceAreas, services } from "../data/siteContent";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.4fr_0.8fr_0.9fr] lg:px-8">
        <div className="space-y-5">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-amber-300">
              {company.name}
            </p>
            <h3 className="mt-3 max-w-md text-2xl font-semibold text-white">
              Mobile installs and detailing designed for busy MOON drivers.
            </h3>
          </div>
          <p className="max-w-xl text-sm leading-7 text-slate-400">
            {company.intro} We focus on clean workmanship, efficient booking,
            and a more premium customer experience than the average local shop.
          </p>
          <div className="flex flex-wrap gap-3 text-sm text-slate-400">
            {serviceAreas.slice(0, 6).map((area) => (
              <span
                key={area}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-2"
              >
                {area}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.24em] text-white">
            Services
          </h4>
          <div className="mt-4 space-y-3 text-sm text-slate-400">
            {services.map((service) => (
              <p key={service.slug}>{service.title}</p>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.24em] text-white">
            Contact
          </h4>
          <div className="mt-4 space-y-3 text-sm text-slate-400">
            <p>{company.phoneDisplay}</p>
            <p>{company.email}</p>
            <p>{company.hours}</p>
            <p>{company.address}</p>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to="/booking"
              className="rounded-full bg-amber-400 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-300"
            >
              Book now
            </Link>
            <Link
              to="/contact"
              className="rounded-full border border-white/10 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/5"
            >
              Contact us
            </Link>
          </div>
        </div>

      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} {company.name}. Built for Toronto & MOON mobile automotive services.
      </div>
    </footer>
  );
}
