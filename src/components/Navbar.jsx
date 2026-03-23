import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { FiMenu, FiPhone, FiX } from "react-icons/fi";
import { company } from "../data/siteContent";

const navigation = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/booking", label: "Booking" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navClassName = ({ isActive }) =>
    `rounded-full px-4 py-2 text-sm font-medium transition ${
      isActive
        ? "bg-white/12 text-white"
        : "text-slate-300 hover:bg-white/8 hover:text-white"
    }`;

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 text-slate-100 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-amber-400/30 bg-amber-500/10 text-sm font-semibold tracking-[0.28em] text-amber-300">
              GTA
            </span>
            <span>
              <span className="block text-base font-semibold tracking-[0.24em] text-white">
                {company.name}
              </span>
              <span className="block text-xs uppercase tracking-[0.26em] text-slate-400">
                Mobile automotive care
              </span>
            </span>
          </Link>

          <div className="hidden items-center gap-2 lg:flex">
            {navigation.map((item) => (
              <NavLink key={item.to} to={item.to} className={navClassName}>
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={company.phoneHref}
            className="flex items-center gap-2 text-sm font-medium text-slate-200 transition hover:text-white"
          >
            <FiPhone className="text-amber-300" />
            {company.phoneDisplay}
          </a>
          <Link
            to="/booking"
            className="rounded-full bg-amber-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-300"
          >
            Book Mobile Service
          </Link>
        </div>

        <button
          onClick={() => setOpen((current) => !current)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 lg:hidden"
          type="button"
          aria-label="Toggle navigation"
        >
          {open ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 px-4 py-4 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-3">
            {navigation.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={navClassName}
              >
                {item.label}
              </NavLink>
            ))}
            <a
              href={company.phoneHref}
              className="flex items-center gap-2 rounded-full border border-white/10 px-4 py-3 text-sm font-medium text-slate-200"
            >
              <FiPhone className="text-amber-300" />
              {company.phoneDisplay}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
